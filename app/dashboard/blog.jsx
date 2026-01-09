'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';
import { 
  Upload, Save, Edit2, Image as ImageIcon, Loader2, 
  RefreshCcw, Trash2, HelpCircle, LayoutList, PenTool, 
  Calendar, CheckCircle, XCircle, Search, Eye, ArrowLeft, Globe, Tag
} from 'lucide-react';

// Dynamic import for Jodit
const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });

// --- CONFIGURATION ---
const API_BASE_URL = "https://uat-service.ireedindia.com/v1"; 
const BLOG_API = `${API_BASE_URL}/blog`; 
const UPLOAD_URL = `${API_BASE_URL.replace("/v1", "")}/upload`; 

const BlogManager = () => {
  // --- STATE ---
  const [activeTab, setActiveTab] = useState('form'); // 'form', 'list', or 'details'
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null); // Store the blog to view
  const [loading, setLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  
  const [mode, setMode] = useState('create');
  const [editId, setEditId] = useState(null);

  // Refs for Jodit
  const editorContent = useRef(null);
  const editorDesc = useRef(null);

  // Initial Form State
  const initialFormState = {
    userId: '690f339ef31fa7dab0e9d4a6',
    title: '',
    fullTitle: '', 
    description: '', 
    websites: ['bhaswarpaul'],
    image: '',
    content: '', 
    slug: '',
    author: '', 
    meta: '',
    key: '', 
    altTag: '',
    date: new Date().toISOString().split('T')[0], 
    faq: [], 
    published: true, // Default to true
  };

  const [formData, setFormData] = useState(initialFormState);

  // --- JODIT CONFIGURATION ---
  const config = useMemo(() => ({
    readonly: false, 
    placeholder: 'Write your blog post...',
    height: 500,
    toolbarSticky: false,
    buttons: [
      'bold', 'italic', 'underline', 'strikethrough', '|',
      'font', 'fontsize', 'brush', 'paragraph', '|',
      'ul', 'ol', '|',
      'align', 'link', 'image', 'video', 'table', '|',
      'hr', 'eraser', 'source', 'fullsize'
    ],
    uploader: {
      insertImageAsBase64URI: true
    },
    style: { background: '#ffffff', color: '#1f2937', fontSize: '16px', lineHeight: '1.6' }
  }), []);

  const smallConfig = useMemo(() => ({
    readonly: false, 
    placeholder: 'Short summary for card view...',
    height: 150,
    toolbarSticky: false,
    buttons: ['bold', 'italic', 'underline', '|', 'ul', 'ol', '|', 'source'],
    removeButtons: ['image', 'table', 'link']
  }), []);

  // --- API CALLS ---
  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${BLOG_API}?website=bhaswarpaul&pageNumber=0&size=1000`);
      let validData = [];
      const res = response.data;
      if (res && Array.isArray(res.blogs)) validData = res.blogs;
      else if (res && Array.isArray(res.data)) validData = res.data;
      else if (Array.isArray(res)) validData = res;
      setBlogs(validData);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { 
    fetchBlogs(); 
  }, []);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const uploadData = new FormData();
    uploadData.append('file', file); 
    try {
      setIsUploading(true);
      const res = await axios.post(UPLOAD_URL, uploadData);
      let finalFileName = '';
      if (res.data?.filename) finalFileName = res.data.filename;
      else if (res.data?.fileName) finalFileName = res.data.fileName;
      else if (typeof res.data === 'string') finalFileName = res.data;
      setFormData(prev => ({ ...prev, image: finalFileName }));
    } catch (error) {
      console.error("Upload error:", error);
      alert("Image upload failed");
    } finally {
      setIsUploading(false);
    }
  };

  // Safe Date Formatter
  const formatDateToISO = (dateStr) => {
    if (!dateStr) return new Date().toISOString();
    const date = new Date(dateStr + 'T12:00:00');
    return isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString();
  };

  // --- HANDLE INPUT CHANGE (FIXED FOR CHECKBOX) ---
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      // Correctly handle checkbox vs text input
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const payload = { ...formData };
    
    // 1. Force Published to Boolean
    payload.published = !!formData.published; 

    // 2. Format Date
    payload.date = formatDateToISO(payload.date);
    
    // 3. Fallbacks
    payload.researchAssociate = payload.author;
    if (!payload.fullTitle) payload.fullTitle = payload.title;
    if (payload.image && typeof payload.image === 'object') {
      payload.image = payload.image.filename || payload.image.fileName || payload.image.url || '';
    }
    if (!payload.websites || !Array.isArray(payload.websites) || payload.websites.length === 0) {
      payload.websites = ['bhaswarpaul'];
    }

    // 4. Cleanup system fields
    delete payload._id;
    delete payload.createdAt;
    delete payload.updatedAt;
    delete payload.__v;

    try {
      if (mode === 'create') {
        await axios.post(BLOG_API, payload);
        alert("Blog Published Successfully!");
      } else {
        await axios.patch(`${BLOG_API}/${editId}`, payload);
        alert("Blog Updated Successfully!");
      }
      resetForm();
      fetchBlogs();
      setActiveTab('list');
    } catch (error) {
      console.error("Submission error:", error);
      const errorMsg = error.response?.data?.message || "Unknown error occurred";
      alert("Submission Failed: " + errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- HELPERS ---
  const handleEditClick = (blog) => {
    setMode('edit');
    setEditId(blog._id);
    setActiveTab('form');
    
    // Deep copy and Ensure Boolean for published
    setFormData({
      ...initialFormState,
      ...blog,
      published: !!blog.published, // FORCE BOOLEAN
      date: blog.date ? blog.date.split('T')[0] : new Date().toISOString().split('T')[0],
      websites: blog.websites && Array.isArray(blog.websites) ? blog.websites : ['bhaswarpaul'],
      faq: blog.faq || [],
      author: blog.researchAssociate || blog.author || '',
      fullTitle: blog.fullTitle || blog.title,
      image: (typeof blog.image === 'object') ? (blog.image.filename || blog.image.url || '') : (blog.image || '')
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewClick = (blog) => {
    setSelectedBlog(blog);
    setActiveTab('details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetForm = () => {
    setMode('create');
    setEditId(null);
    setFormData(initialFormState);
  };

  const handleWebsiteChange = (site) => {
    setFormData(prev => {
      const currentSites = prev.websites || [];
      return currentSites.includes(site) 
        ? { ...prev, websites: currentSites.filter(s => s !== site) }
        : { ...prev, websites: [...currentSites, site] };
    });
  };

  const handleFaqChange = (index, field, value) => {
    const newFaqs = [...formData.faq];
    newFaqs[index][field] = value;
    setFormData({ ...formData, faq: newFaqs });
  };

  const addFaq = () => setFormData({ ...formData, faq: [...formData.faq, { question: '', answer: '' }] });
  const removeFaq = (index) => setFormData({ ...formData, faq: formData.faq.filter((_, i) => i !== index) });

  const getImageUrl = (imgString) => {
    if (!imgString) return '';
    if (imgString.startsWith('http')) return imgString;
    return `${API_BASE_URL.replace('/v1','')}/image/${imgString}`;
  };

  const stripHtml = (html) => {
     if (!html) return '';
     const tmp = document.createElement("DIV");
     tmp.innerHTML = html;
     return tmp.textContent || tmp.innerText || "";
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans pb-20">
      
      {/* HEADER */}
      <div className="bg-white border-b border-gray-200  top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
                <button onClick={() => setActiveTab('form')} className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${activeTab === 'form' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>
                    <PenTool className="w-3.5 h-3.5 inline mr-2" /> Editor
                </button>
                <button onClick={() => setActiveTab('list')} className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${activeTab === 'list' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>
                    <LayoutList className="w-3.5 h-3.5 inline mr-2" /> Library
                </button>
            </div>
            <div className="flex items-center gap-3">
               {activeTab === 'details' && (
                 <button onClick={() => handleEditClick(selectedBlog)} className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center shadow hover:bg-blue-700 transition">
                   <Edit2 className="w-4 h-4 mr-2" /> Edit This Blog
                 </button>
               )}
               {mode === 'edit' && activeTab === 'form' && <button onClick={resetForm} className="text-sm text-red-500 hover:text-red-700 font-medium px-3">Discard Changes</button>}
               {activeTab === 'form' && (
                 <button onClick={handleSubmit} disabled={isSubmitting} className="bg-gray-900 hover:bg-black text-white px-5 py-2 rounded-lg text-sm font-bold flex items-center transition-colors shadow-lg">
                   {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin mr-2"/> : <Save className="w-4 h-4 mr-2" />}
                   {mode === 'create' ? 'Publish Blog' : 'Update Blog'}
                 </button>
               )}
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        
        {/* ======================= TAB 1: FORM ======================= */}
        {activeTab === 'form' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* LEFT: CONTENT */}
                <div className="lg:col-span-8 space-y-6">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
                        <div className="space-y-6">
                            <div className="group">
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Blog Title</label>
                                <input required type="text" name="title" value={formData.title} onChange={handleInputChange} placeholder="Enter an engaging title..." className="w-full text-3xl font-bold text-gray-900 placeholder-gray-300 border-none focus:ring-0 p-0 leading-tight outline-none"/>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">SEO Full Title</label>
                                    <input type="text" name="fullTitle" value={formData.fullTitle} onChange={handleInputChange} placeholder="Full Title for Google..." className="w-full text-sm bg-gray-50 border border-gray-200 rounded-md px-3 py-2 outline-none focus:border-blue-500"/>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">URL Slug</label>
                                    <input type="text" name="slug" value={formData.slug} onChange={handleInputChange} placeholder="url-slug-goes-here" className="w-full text-sm bg-gray-50 border border-gray-200 rounded-md px-3 py-2 outline-none focus:border-blue-500"/>
                                </div>
                            </div>

                            {/* MAIN CONTENT EDITOR */}
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Blog Content</label>
                                <div className="prose-editor border border-gray-200 rounded-lg overflow-hidden">
                                    <JoditEditor
                                        ref={editorContent}
                                        value={formData.content}
                                        config={config}
                                        tabIndex={1} 
                                        onBlur={newContent => setFormData(prev => ({ ...prev, content: newContent }))}
                                    />
                                </div>
                            </div>
                            
                            {/* SHORT DESCRIPTION */}
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Short Description</label>
                                <div className="prose-editor border border-gray-200 rounded-lg overflow-hidden">
                                    <JoditEditor
                                        ref={editorDesc}
                                        value={formData.description}
                                        config={smallConfig}
                                        tabIndex={2} 
                                        onBlur={newDesc => setFormData(prev => ({ ...prev, description: newDesc }))}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FAQ SECTION */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-sm font-bold text-gray-900 flex items-center"><HelpCircle className="w-4 h-4 mr-2 text-purple-500" /> FAQs</h3>
                            <button type="button" onClick={addFaq} className="text-xs font-semibold text-purple-600 bg-purple-50 px-3 py-1.5 rounded-lg border border-purple-100 hover:bg-purple-100 transition">+ Add Item</button>
                        </div>
                        <div className="space-y-4">
                            {formData.faq.map((item, index) => (
                                <div key={index} className="flex gap-3 items-start bg-gray-50 p-4 rounded-lg group border border-transparent hover:border-gray-200 transition">
                                    <span className="text-xs font-bold text-gray-300 mt-2">Q{index+1}</span>
                                    <div className="flex-1 space-y-2">
                                        <input type="text" placeholder="Question?" value={item.question} onChange={(e) => handleFaqChange(index, 'question', e.target.value)} className="w-full p-2 text-sm font-semibold border border-gray-200 rounded bg-white outline-none focus:ring-1 focus:ring-purple-200"/>
                                        <textarea placeholder="Answer..." value={item.answer} onChange={(e) => handleFaqChange(index, 'answer', e.target.value)} rows="2" className="w-full p-2 text-sm border border-gray-200 rounded bg-white outline-none focus:ring-1 focus:ring-purple-200"/>
                                    </div>
                                    <button type="button" onClick={() => removeFaq(index)} className="text-gray-400 hover:text-red-500 p-1 opacity-50 hover:opacity-100 transition"><Trash2 className="w-4 h-4" /></button>
                                </div>
                            ))}
                            {formData.faq.length === 0 && <p className="text-center text-gray-400 text-xs italic">No FAQs added yet.</p>}
                        </div>
                    </div>
                </div>

                {/* RIGHT: SIDEBAR */}
                <div className="lg:col-span-4 space-y-6">
                    {/* PUBLISH CARD */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-bold text-gray-700">Visibility</span>
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase flex items-center gap-1 ${formData.published ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                                {formData.published ? <CheckCircle size={10}/> : <XCircle size={10}/>} {formData.published ? 'Public' : 'Hidden'}
                            </span>
                        </div>
                        <div className="space-y-3">
                            <label className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-50 rounded-lg transition">
                                <span className="text-sm text-gray-600">Published</span>
                                <input type="checkbox" name="published" checked={!!formData.published} onChange={handleInputChange} className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"/>
                            </label>
                        </div>
                        <hr className="my-4 border-gray-100"/>
                        <label className="text-xs font-semibold text-gray-500 uppercase mb-2 block">Post Destination</label>
                        <div className="flex gap-2">
                            <button type="button" onClick={() => handleWebsiteChange('bhaswarpaul')} className={`flex-1 text-xs font-bold py-2 px-2 rounded border transition-colors ${ (formData.websites || []).includes('bhaswarpaul') ? 'bg-purple-50 border-purple-200 text-purple-700' : 'bg-white border-gray-200 text-gray-400' }`}>BHASWARPAUL</button>
                            <button type="button" onClick={() => handleWebsiteChange('ireed')} className={`flex-1 text-xs font-bold py-2 px-2 rounded border transition-colors ${ (formData.websites || []).includes('ireed') ? 'bg-blue-50 border-blue-200 text-blue-700' : 'bg-white border-gray-200 text-gray-400' }`}>IREED</button>
                        </div>
                    </div>

                    {/* IMAGE UPLOAD */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-1 overflow-hidden">
                        <div className="relative aspect-video bg-gray-50 rounded-lg overflow-hidden group border-2 border-dashed border-gray-100 hover:border-blue-200 transition">
                            {isUploading && <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-20"><Loader2 className="animate-spin text-blue-600 w-8 h-8"/></div>}
                            {formData.image ? (
                                <>
                                    <img src={getImageUrl(formData.image)} alt="Preview" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center z-10 text-white font-bold text-xs cursor-pointer"><ImageIcon className="w-8 h-8 mb-2"/>Click to Replace</div>
                                </>
                            ) : (
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 cursor-pointer">
                                    <Upload className="w-10 h-10 mb-2 text-gray-300"/>
                                    <span className="text-xs font-semibold">Upload Cover Image</span>
                                </div>
                            )}
                            <input type="file" onChange={handleImageUpload} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" accept="image/*" />
                        </div>
                        <input type="text" name="altTag" value={formData.altTag} onChange={handleInputChange} placeholder="Image Alt Text (SEO)" className="w-full text-xs p-2 mt-1 border-t border-gray-100 outline-none text-gray-600" />
                    </div>

                    {/* METADATA */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 space-y-4">
                        <h4 className="text-xs font-bold text-gray-400 uppercase flex items-center gap-1"><Search size={12}/> SEO & Author</h4>
                        <div><label className="text-xs text-gray-500 mb-1 block">Author / Research Associate</label><input type="text" name="author" value={formData.author} onChange={handleInputChange} className="w-full p-2 text-sm border border-gray-200 rounded outline-none focus:border-blue-400" placeholder="e.g. Aman Kumar" /></div>
                        <div><label className="text-xs text-gray-500 mb-1 block">Publish Date</label><div className="flex items-center border border-gray-200 rounded px-2 bg-white"><Calendar className="w-3 h-3 text-gray-400 mr-2"/><input type="date" name="date" value={formData.date} onChange={handleInputChange} className="w-full text-xs py-2 outline-none text-gray-600 bg-transparent" /></div></div>
                        <div><label className="text-xs text-gray-500 mb-1 block">Keywords</label><input type="text" name="key" value={formData.key} onChange={handleInputChange} className="w-full p-2 text-sm border border-gray-200 rounded outline-none focus:border-blue-400" placeholder="real estate, trends, etc." /></div>
                        <div><label className="text-xs text-gray-500 mb-1 block">Meta Description</label><textarea rows="3" name="meta" value={formData.meta} onChange={handleInputChange} className="w-full p-2 text-sm border border-gray-200 rounded outline-none focus:border-blue-400" placeholder="Meta description for search results..." /></div>
                    </div>
                </div>
            </div>
        )}

        {/* ======================= TAB 2: LIBRARY (LIST) ======================= */}
        {activeTab === 'list' && (
          <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-900">Blog Library ({blogs.length})</h2>
                <button onClick={fetchBlogs} className="flex items-center gap-2 text-xs font-bold text-gray-600 bg-white border border-gray-200 px-3 py-2 rounded-lg hover:bg-gray-50 transition shadow-sm">
                   <RefreshCcw className={`w-3 h-3 ${loading ? 'animate-spin' : ''}`} /> REFRESH
                </button>
              </div>

              {loading ? (
                <div className="flex flex-col justify-center items-center h-64 text-gray-400">
                  <Loader2 className="w-8 h-8 animate-spin mb-2" /><p className="text-sm">Loading Blogs...</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {blogs.map((blog) => (
                    <div key={blog._id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition group flex flex-col h-full">
                      <div className="h-40 w-full bg-gray-100 relative overflow-hidden cursor-pointer" onClick={() => handleViewClick(blog)}>
                          {blog.image ? (
                            <img 
                              src={getImageUrl(blog.image)}
                              alt={blog.altTag || 'Blog'}
                              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-300">
                                <ImageIcon size={32}/>
                            </div>
                          )}
                          <div className="absolute top-2 right-2">
                             {blog.published ? 
                                <span className="bg-green-100/90 backdrop-blur text-green-700 text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">LIVE</span> : 
                                <span className="bg-gray-100/90 backdrop-blur text-gray-600 text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">DRAFT</span>
                             }
                          </div>
                      </div>

                      <div className="p-4 flex-1 flex flex-col">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-[10px] text-gray-400 uppercase font-medium">{new Date(blog.date).toLocaleDateString()}</span>
                          </div>
                          
                          <h3 onClick={() => handleViewClick(blog)} className="font-bold text-gray-900 leading-snug mb-2 line-clamp-2 text-sm cursor-pointer hover:text-blue-600">
                            {blog.title || "Untitled Blog"}
                          </h3>
                          
                          <p className="text-xs text-gray-500 line-clamp-3 mb-4">
                             {stripHtml(blog.description || blog.content)}
                          </p>

                          <div className="flex justify-between items-center pt-3 border-t border-gray-100 mt-auto">
                            <button onClick={() => handleViewClick(blog)} className="text-gray-500 hover:text-blue-600 text-xs font-bold flex items-center gap-1 transition">
                              <Eye className="w-3 h-3" /> View
                            </button>
                            <button onClick={() => handleEditClick(blog)} className="text-blue-600 hover:text-blue-800 text-xs font-bold flex items-center gap-1 hover:bg-blue-50 px-2 py-1 rounded transition">
                              Edit <Edit2 className="w-3 h-3" />
                            </button>
                          </div>
                      </div>
                    </div>
                  ))}
                  {blogs.length === 0 && <div className="col-span-full text-center text-gray-400 py-10">No blogs found.</div>}
                </div>
              )}
          </div>
        )}

        {/* ======================= TAB 3: FULL DETAILS VIEW ======================= */}
        {activeTab === 'details' && selectedBlog && (
            <div className="space-y-6">
               {/* NAV */}
               <div className="flex items-center justify-between">
                  <button onClick={() => setActiveTab('list')} className="text-gray-500 hover:text-gray-900 flex items-center gap-2 font-medium">
                     <ArrowLeft className="w-5 h-5" /> Back to Library
                  </button>
                  <span className="text-xs text-gray-400 font-mono uppercase">ID: {selectedBlog._id}</span>
               </div>

               {/* MAIN CARD */}
               <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  
                  {/* HERO IMAGE */}
                  <div className="h-64 md:h-80 w-full bg-gray-100 relative">
                      {selectedBlog.image ? (
                        <img src={getImageUrl(selectedBlog.image)} alt="Cover" className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-300">No Cover Image</div>
                      )}
                      <div className="absolute top-6 right-6">
                        {selectedBlog.published ? 
                           <span className="bg-green-500 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-sm uppercase tracking-wide">Published</span> : 
                           <span className="bg-gray-500 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-sm uppercase tracking-wide">Draft</span>
                        }
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{selectedBlog.title}</h1>
                        <div className="flex items-center gap-4 text-white/80 text-sm">
                           <span className="flex items-center gap-1"><Calendar className="w-4 h-4"/> {new Date(selectedBlog.date).toLocaleDateString()}</span>
                           <span className="flex items-center gap-1 text-white"><PenTool className="w-4 h-4"/> {selectedBlog.researchAssociate || selectedBlog.author || "Unknown Author"}</span>
                        </div>
                      </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-8">
                      {/* LEFT COLUMN - CONTENT */}
                      <div className="lg:col-span-8 p-8 border-b lg:border-b-0 lg:border-r border-gray-100">
                        <h3 className="text-sm font-bold text-gray-400 uppercase mb-4 tracking-wider">Main Content</h3>
                        <div 
                           className="prose prose-lg max-w-none text-gray-800"
                           dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
                        />
                        
                        {/* FAQ SECTION IN DETAILS */}
                        {selectedBlog.faq && selectedBlog.faq.length > 0 && (
                           <div className="mt-12 pt-8 border-t border-gray-100">
                              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2"><HelpCircle className="text-purple-600"/> Frequently Asked Questions</h3>
                              <div className="space-y-4">
                                 {selectedBlog.faq.map((item, idx) => (
                                    <div key={idx} className="bg-gray-50 rounded-xl p-5">
                                       <h5 className="font-bold text-gray-900 mb-2">{item.question}</h5>
                                       <p className="text-gray-600 text-sm leading-relaxed">{item.answer}</p>
                                    </div>
                                 ))}
                              </div>
                           </div>
                        )}
                      </div>

                      {/* RIGHT COLUMN - META */}
                      <div className="lg:col-span-4 p-8 bg-gray-50/50 h-full">
                        <h3 className="text-sm font-bold text-gray-400 uppercase mb-6 tracking-wider">Meta & SEO</h3>
                        
                        <div className="space-y-6">
                           <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                              <span className="text-xs font-bold text-gray-400 uppercase block mb-1">Full SEO Title</span>
                              <p className="font-semibold text-gray-800 text-sm">{selectedBlog.fullTitle || selectedBlog.title}</p>
                           </div>

                           <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                              <span className="text-xs font-bold text-gray-400 uppercase block mb-1">URL Slug</span>
                              <p className="font-mono text-blue-600 text-xs bg-blue-50 p-1 rounded inline-block">{selectedBlog.slug}</p>
                           </div>

                           <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                              <span className="text-xs font-bold text-gray-400 uppercase block mb-1">Meta Description</span>
                              <p className="text-gray-600 text-xs leading-relaxed">{selectedBlog.meta || "No meta description provided."}</p>
                           </div>

                           <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                              <span className="text-xs font-bold text-gray-400 uppercase block mb-1">Keywords</span>
                              <div className="flex flex-wrap gap-2 mt-2">
                                 {selectedBlog.key ? selectedBlog.key.split(',').map((k, i) => (
                                    <span key={i} className="text-[10px] font-bold bg-gray-100 text-gray-600 px-2 py-1 rounded-md border border-gray-200">{k.trim()}</span>
                                 )) : <span className="text-xs text-gray-400 italic">No keywords</span>}
                              </div>
                           </div>

                           <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                              <span className="text-xs font-bold text-gray-400 uppercase block mb-1">Websites</span>
                              <div className="flex gap-2 mt-1">
                                 {selectedBlog.websites?.map(site => (
                                    <span key={site} className="flex items-center gap-1 text-[10px] uppercase font-bold bg-indigo-50 text-indigo-700 px-2 py-1 rounded border border-indigo-100">
                                       <Globe size={10} /> {site}
                                    </span>
                                 ))}
                              </div>
                           </div>
                        </div>
                      </div>
                  </div>
               </div>
            </div>
        )}

      </div>
    </div>
  );
};

export default BlogManager;