'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic'; // Required for Jodit in Next.js
import { 
  Upload, Save, Edit2, Image as ImageIcon, Loader2, 
  RefreshCcw, Globe, Trash2, HelpCircle, 
  LayoutList, PenTool, Calendar, User, LayoutGrid, Eye, Link as LinkIcon, 
  ArrowLeft, CheckCircle, Clock, Search
} from 'lucide-react';

// --- DYNAMIC JODIT IMPORT ---
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

// --- CONFIGURATION ---
const API_BASE_URL = "https://uat-service.ireedindia.com/v1";
const ARTICLES_API = `${API_BASE_URL}/articles`;
const UPLOAD_URL = `${API_BASE_URL.replace("/v1", "")}/upload`; 

const ArticleManager = () => {
  // --- STATE ---
  const [activeTab, setActiveTab] = useState('form'); // 'form', 'list', 'details'
  const [viewMode, setViewMode] = useState('list'); // 'grid' or 'list'
  
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null); 

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
    userId: '689067b1563b299e64247d99', 
    title: '',
    description: '', 
    badge: 'Trending',
    websites: ['bhaswarpaul'],
    image: '',
    content: '', 
    slug: '',
    researchAssociate: '',
    meta: '',         // Mapped to Meta Description
    expertEdage: false,
    key: '',          // Mapped to Meta Keywords
    likes: 0,
    commentCount: 0,
    saveCount: 0,
    altTag: '',
    author: '',
    publishedDate: new Date().toISOString().split('T')[0],
    date: new Date().toISOString().split('T')[0], 
    faq: [], 
    published: true,
    companyName: 'IREED Academy',
    designation: '',
    location: ''
  };

  const [formData, setFormData] = useState(initialFormState);

  // --- JODIT CONFIGURATION ---
  const placeholder = "Start typing...";
  
  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: placeholder || "Start typing...",
      toolbarAdaptive: false,
      toolbarSticky: false,
      uploader: {
        insertImageAsBase64URI: true,
      },
      disablePlugins: "drag-and-drop-element",
      controls: {
        image: {
          exec: function (editor) {
            const input = document.createElement("input");
            input.type = "file";
            input.accept = "image/*";
            input.onchange = function () {
              const file = input.files[0];
              const reader = new FileReader();
              reader.onload = function (e) {
                editor.selection.insertImage(e.target.result);
              };
              reader.readAsDataURL(file);
            };
            input.click();
          },
          icon: "image",
          tooltip: "Insert Image",
        },
      },
      style: {
        textAlign: "left",
      },
    }),
    [placeholder]
  );

  const smallConfig = useMemo(() => ({
    readonly: false, 
    placeholder: 'Short summary...',
    height: 150,
    toolbarSticky: false,
    buttons: ['bold', 'italic', 'underline', '|', 'ul', 'ol', '|', 'source'],
    removeButtons: ['image', 'table', 'link']
  }), []);

  // --- API CALLS ---
  const fetchArticles = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${ARTICLES_API}?website=bhaswarpaul&pageNumber=0&size=1000`);
      let validData = [];
      const res = response.data;
      if (res && Array.isArray(res.blogs)) validData = res.blogs;
      else if (res && Array.isArray(res.data)) validData = res.data;
      else if (Array.isArray(res)) validData = res;
      setArticles(validData);
    } catch (error) {
      console.error("Error fetching articles:", error);
      alert("Failed to load articles.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { 
    fetchArticles(); 
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
      else finalFileName = res.data?.url || '';
      
      setFormData(prev => ({ ...prev, image: finalFileName }));
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Image upload failed: " + (error.response?.data?.message || error.message));
    } finally {
      setIsUploading(false);
    }
  };

  const formatDateToISO = (dateStr) => {
    if (!dateStr) return undefined;
    const date = new Date(dateStr + 'T12:00:00'); 
    return isNaN(date.getTime()) ? undefined : date.toISOString();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = { ...formData };
    payload.publishedDate = formatDateToISO(payload.publishedDate);
    payload.date = formatDateToISO(payload.date);

    if (payload.image && typeof payload.image === 'object') {
      payload.image = payload.image.filename || payload.image.fileName || payload.image.url || '';
    }

    if (!payload.websites || !Array.isArray(payload.websites) || payload.websites.length === 0) {
      payload.websites = ['bhaswarpaul'];
    }

    delete payload._id;
    delete payload.createdAt;
    delete payload.updatedAt;
    delete payload.__v;
    delete payload.userPostDataInfo;

    try {
      if (mode === 'create') {
        await axios.post(ARTICLES_API, payload);
      } else {
        await axios.patch(`${ARTICLES_API}/${editId}`, payload);
      }
      
      alert(mode === 'create' ? "Article Created Successfully!" : "Article Updated Successfully!");
      resetForm();
      fetchArticles();
      setActiveTab('list');
    } catch (error) {
      console.error("Submission error:", error);
      const errorMsg = error.response?.data?.message || error.response?.data?.error || error.message || "Unknown error occurred";
      alert("Submission Failed: " + errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEditClick = (article) => {
    setMode('edit');
    setEditId(article._id);
    setActiveTab('form');
    
    setFormData({
      ...initialFormState,
      ...article,
      publishedDate: article.publishedDate ? article.publishedDate.split('T')[0] : '',
      date: article.date ? article.date.split('T')[0] : '',
      websites: article.websites && Array.isArray(article.websites) ? article.websites : ['bhaswarpaul'],
      faq: article.faq || [],
      image: (typeof article.image === 'object') 
        ? (article.image.filename || article.image.fileName || article.image.url || '') 
        : (article.image || '')
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewClick = (article) => {
    setSelectedArticle(article);
    setActiveTab('details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetForm = () => {
    setMode('create');
    setEditId(null);
    setFormData(initialFormState);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
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
    if (typeof imgString === 'object') {
        const validStr = imgString.filename || imgString.fileName || imgString.url;
        if(validStr) return getImageUrl(validStr);
        return '';
    }
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
                {activeTab === 'details' && (
                   <button className="px-4 py-1.5 rounded-md text-sm font-medium bg-white text-blue-600 shadow-sm">
                      <Eye className="w-3.5 h-3.5 inline mr-2" /> Preview
                   </button>
                )}
            </div>
            <div className="flex items-center gap-3">
               {mode === 'edit' && activeTab === 'form' && <button onClick={resetForm} className="text-sm text-red-500 hover:text-red-700 font-medium px-3">Discard Edit</button>}
               
               {activeTab === 'form' && (
                 <button onClick={handleSubmit} disabled={isSubmitting} className="bg-gray-900 hover:bg-black text-white px-5 py-2 rounded-lg text-sm font-bold flex items-center transition-colors">
                   {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin mr-2"/> : <Save className="w-4 h-4 mr-2" />}
                   {mode === 'create' ? 'Publish' : 'Update'}
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
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Article Title (Meta Title)</label>
                                <input required type="text" name="title" value={formData.title} onChange={handleInputChange} placeholder="Enter an engaging title..." className="w-full text-3xl font-bold text-gray-900 placeholder-gray-300 border-none focus:ring-0 p-0 leading-tight"/>
                                <p className="text-[10px] text-gray-400 mt-1">This will be used as the H1 and Meta Title.</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-400 text-sm">/</span>
                                <input type="text" name="slug" value={formData.slug} onChange={handleInputChange} placeholder="url-slug-goes-here" className="flex-1 text-sm text-gray-500 bg-gray-50 border-none rounded-md px-2 py-1 focus:ring-1 focus:ring-blue-500"/>
                            </div>

                            {/* MAIN CONTENT EDITOR */}
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Article Content</label>
                                <div className="prose-editor border border-gray-200 rounded-lg overflow-hidden">
                                    <JoditEditor
                                        ref={editorContent}
                                        value={formData.content}
                                        config={config}
                                        onBlur={(newContent) => setFormData(prev => ({ ...prev, content: newContent }))}
                                        className="border rounded-lg"
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
                            <button type="button" onClick={addFaq} className="text-xs font-semibold text-purple-600 bg-purple-50 px-3 py-1.5 rounded-lg">+ Add Item</button>
                        </div>
                        <div className="space-y-4">
                            {formData.faq.map((item, index) => (
                                <div key={index} className="flex gap-3 items-start bg-gray-50 p-4 rounded-lg group">
                                    <span className="text-xs font-bold text-gray-300 mt-2">Q{index+1}</span>
                                    <div className="flex-1 space-y-2">
                                        <input type="text" placeholder="Question?" value={item.question} onChange={(e) => handleFaqChange(index, 'question', e.target.value)} className="w-full p-2 text-sm font-semibold border border-gray-200 rounded bg-white outline-none"/>
                                        <textarea placeholder="Answer..." value={item.answer} onChange={(e) => handleFaqChange(index, 'answer', e.target.value)} rows="2" className="w-full p-2 text-sm border border-gray-200 rounded bg-white outline-none"/>
                                    </div>
                                    <button type="button" onClick={() => removeFaq(index)} className="text-gray-400 hover:text-red-500 p-1 opacity-0 group-hover:opacity-100"><Trash2 className="w-4 h-4" /></button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT: SIDEBAR */}
                <div className="lg:col-span-4 space-y-6">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-bold text-gray-700">Visibility</span>
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${formData.published ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>{formData.published ? 'Public' : 'Hidden'}</span>
                        </div>
                        <div className="space-y-3">
                            <label className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-50 rounded-lg">
                                <span className="text-sm text-gray-600">Published</span>
                                <input type="checkbox" name="published" checked={formData.published} onChange={handleInputChange} className="w-4 h-4 text-blue-600 rounded"/>
                            </label>
                        </div>
                        <hr className="my-4 border-gray-100"/>
                        <label className="text-xs font-semibold text-gray-500 uppercase mb-1 block">Distribution</label>
                        <div className="flex gap-2">
                            <button type="button" onClick={() => handleWebsiteChange('bhaswarpaul')} className={`flex-1 text-xs font-bold py-1.5 px-2 rounded border ${ (formData.websites || []).includes('bhaswarpaul') ? 'bg-purple-50 border-purple-200 text-purple-700' : 'bg-white border-gray-200 text-gray-400' }`}>BHASWARPAUL</button>
                        </div>
                    </div>

                    {/* SEO CONFIGURATION */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 space-y-4">
                        <div className="flex items-center gap-2 mb-2 pb-2 border-b border-gray-100">
                           <Search className="w-4 h-4 text-gray-400"/>
                           <span className="text-xs font-bold text-gray-900 uppercase">SEO Configuration</span>
                        </div>
                        
                        {/* Meta Keywords (mapped to key) */}
                        <div>
                           <label className="text-xs font-bold text-gray-500 uppercase mb-1 block">Meta Keywords</label>
                           <input 
                              type="text" 
                              name="key" 
                              value={formData.key} 
                              onChange={handleInputChange} 
                              className="w-full text-sm p-2 bg-gray-50 rounded border border-gray-200 outline-none focus:border-blue-300 transition-colors"
                              placeholder="comma, separated, keywords" 
                           />
                           <p className="text-[10px] text-gray-400 mt-1">Variable: key</p>
                        </div>

                        {/* Meta Description (mapped to meta) */}
                        <div>
                           <label className="text-xs font-bold text-gray-500 uppercase mb-1 block">Meta Description</label>
                           <textarea 
                              name="meta" 
                              value={formData.meta} 
                              onChange={handleInputChange} 
                              rows="3"
                              className="w-full text-sm p-2 bg-gray-50 rounded border border-gray-200 outline-none focus:border-blue-300 transition-colors"
                              placeholder="Brief summary for search engines..." 
                           />
                           <p className="text-[10px] text-gray-400 mt-1">Variable: meta</p>
                        </div>
                    </div>

                    {/* IMAGE UPLOAD */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-1 overflow-hidden">
                        <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden group">
                            {isUploading && <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-20"><Loader2 className="animate-spin text-blue-600 w-8 h-8"/></div>}
                            {formData.image ? (
                                <>
                                    <img src={getImageUrl(formData.image)} alt="Preview" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center z-10 text-white font-bold text-xs"><ImageIcon className="w-8 h-8 mb-2"/>Click to Replace</div>
                                </>
                            ) : (
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400"><Upload className="w-10 h-10 mb-2 text-gray-300"/><span className="text-xs font-semibold">Upload Image</span></div>
                            )}
                            <input type="file" onChange={handleImageUpload} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" accept="image/*" />
                        </div>
                    </div>

                    {/* METADATA */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 space-y-4">
                        <div>
                            <label className="text-xs font-bold text-gray-400 uppercase mb-1 block">Badge</label>
                            <input type="text" name="badge" value={formData.badge} onChange={handleInputChange} className="w-full text-sm p-2 bg-gray-50 rounded border border-gray-200 outline-none" />
                        </div>
                        <div>
                            <label className="text-xs font-bold text-gray-400 uppercase mb-1 block">Author</label>
                            <input type="text" name="author" value={formData.author} onChange={handleInputChange} className="w-full p-2 text-sm border border-gray-200 rounded outline-none" placeholder="Name" />
                            <input type="text" name="designation" value={formData.designation} onChange={handleInputChange} className="w-full mt-2 p-2 text-xs border border-gray-200 rounded text-gray-500" placeholder="Role" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center border border-gray-200 rounded px-2"><Calendar className="w-3 h-3 text-gray-400 mr-2"/><input type="date" name="publishedDate" value={formData.publishedDate} onChange={handleInputChange} className="w-full text-xs py-2 outline-none text-gray-600" /></div>
                        </div>
                    </div>
                </div>
            </div>
        )}

        {/* ======================= TAB 2: LIBRARY (TOGGLE BETWEEN LIST/GRID) ======================= */}
        {activeTab === 'list' && (
          <div className="space-y-6">
             {/* Header Controls */}
             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                    Article Library <span className="text-gray-400 font-medium ml-2 text-lg">({articles.length})</span>
                </h2>
                
                <div className="flex items-center gap-3">
                    {/* View Toggles */}
                    <div className="flex bg-white rounded-lg border border-gray-200 p-1">
                        <button onClick={() => setViewMode('grid')} className={`p-2 rounded-md transition ${viewMode === 'grid' ? 'bg-gray-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`} title="Grid View">
                            <LayoutGrid className="w-4 h-4" />
                        </button>
                        <button onClick={() => setViewMode('list')} className={`p-2 rounded-md transition ${viewMode === 'list' ? 'bg-gray-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`} title="List View">
                            <LayoutList className="w-4 h-4" />
                        </button>
                    </div>

                    <button onClick={fetchArticles} className="flex items-center gap-2 text-sm font-bold text-gray-700 bg-white border border-gray-300 px-4 py-2.5 rounded-lg hover:bg-gray-50 transition shadow-sm">
                        <RefreshCcw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} /> Refresh
                    </button>
                </div>
             </div>

             {loading && (!articles || articles.length === 0) ? (
               <div className="flex flex-col justify-center items-center h-96 text-gray-400 bg-white rounded-2xl border border-gray-200">
                 <Loader2 className="w-10 h-10 animate-spin mb-3 text-blue-500" /><p className="font-medium">Loading your library...</p>
               </div>
             ) : (
               <>
                 {/* ================= VIEW: GRID (CARD VIEW) ================= */}
                 {viewMode === 'grid' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {Array.isArray(articles) && articles.map((article) => (
                      <div key={article._id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition group flex flex-col h-full">
                         <div className="h-40 w-full bg-gray-100 relative overflow-hidden">
                            {article.image && (
                              <img 
                                src={getImageUrl(article.image)}
                                alt={article.altTag || 'Article'}
                                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                onError={(e) => e.target.src = 'https://placehold.co/600x400?text=No+Image'}
                              />
                            )}
                            <span className="absolute top-2 right-2 bg-white/90 backdrop-blur text-[10px] font-bold px-2 py-0.5 rounded text-gray-800 shadow-sm uppercase tracking-wide">
                              {article.badge || 'NO BADGE'}
                            </span>
                         </div>
                         <div className="p-4 flex-1 flex flex-col">
                            <div className="flex items-center gap-2 mb-2">
                               <span className="text-[10px] text-gray-400 uppercase">{new Date(article.publishedDate || article.date).toLocaleDateString()}</span>
                            </div>
                            <h3 className="font-bold text-gray-900 leading-snug mb-2 line-clamp-2 text-sm">{article.title}</h3>
                            <p className="text-xs text-gray-500 line-clamp-3 mb-4">{stripHtml(article.description || article.content)}</p>
                            <div className="flex justify-between items-center pt-3 border-t border-gray-100 mt-auto">
                               <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${article.published ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-500'}`}>
                                  {article.published ? 'LIVE' : 'DRAFT'}
                               </span>
                               <div className="flex gap-1">
                                   <button onClick={() => handleViewClick(article)} className="text-blue-500 hover:text-blue-700 p-1.5 hover:bg-blue-50 rounded transition-colors" title="View Full Details">
                                      <Eye className="w-4 h-4" />
                                   </button>
                                   <button onClick={() => handleEditClick(article)} className="text-gray-600 hover:text-blue-600 p-1.5 hover:bg-gray-100 rounded transition-colors" title="Edit Article">
                                      <Edit2 className="w-4 h-4" />
                                   </button>
                               </div>
                            </div>
                         </div>
                      </div>
                    ))}
                  </div>
                 )}

                 {/* ================= VIEW: LIST (FULL DETAIL VIEW) ================= */}
                 {viewMode === 'list' && (
                    <div className="flex flex-col space-y-6">
                    {Array.isArray(articles) && articles.map((article) => (
                      <div key={article._id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col md:flex-row">
                         {/* Left: Large Image */}
                         <div className="w-full md:w-72 h-48 md:h-auto shrink-0 relative bg-gray-100">
                            {article.image ? (
                              <img 
                                src={getImageUrl(article.image)}
                                alt={article.altTag || 'Article'}
                                className="w-full h-full object-cover"
                                onError={(e) => e.target.src = 'https://placehold.co/600x400?text=No+Image'}
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-50">
                                <ImageIcon className="w-10 h-10 opacity-20"/>
                              </div>
                            )}
                            <div className="absolute top-3 left-3 flex gap-2">
                                <span className={`text-[10px] font-bold px-2.5 py-1 rounded shadow-sm uppercase tracking-wide ${article.published ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'}`}>
                                  {article.published ? 'Published' : 'Draft'}
                                </span>
                                {article.badge && (
                                  <span className="bg-white/95 backdrop-blur text-[10px] font-bold px-2.5 py-1 rounded text-gray-800 shadow-sm uppercase tracking-wide">
                                    {article.badge}
                                  </span>
                                )}
                            </div>
                         </div>
                         {/* Right: Detailed Content */}
                         <div className="p-6 flex-1 flex flex-col justify-between">
                            <div>
                               <div className="flex items-start justify-between gap-4 mb-2">
                                  <div>
                                     <h3 className="text-xl font-bold text-gray-900 leading-tight mb-1 group-hover:text-blue-600 transition-colors">
                                       {article.title || "Untitled Article"}
                                     </h3>
                                     <div className="flex items-center gap-2 text-xs text-gray-500 font-mono bg-gray-50 w-fit px-2 py-0.5 rounded border border-gray-100">
                                        <LinkIcon className="w-3 h-3"/> /{article.slug || 'no-slug-defined'}
                                     </div>
                                  </div>
                                  <div className="flex gap-2">
                                     <button onClick={() => handleViewClick(article)} className="shrink-0 bg-white hover:bg-blue-50 text-blue-600 border border-blue-200 hover:border-blue-300 px-4 py-2 rounded-lg text-sm font-bold flex items-center transition-all shadow-sm">
                                        <Eye className="w-4 h-4 mr-2" /> View Details
                                     </button>
                                     <button onClick={() => handleEditClick(article)} className="shrink-0 bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-gray-300 px-4 py-2 rounded-lg text-sm font-bold flex items-center transition-all">
                                        <Edit2 className="w-4 h-4" />
                                     </button>
                                  </div>
                               </div>
                               <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                                  {article.description ? stripHtml(article.description) : stripHtml(article.content).substring(0, 200) + '...'}
                               </p>
                            </div>
                            {/* Footer Metadata */}
                            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-4 border-t border-gray-100 text-xs text-gray-500 mt-2">
                               <div className="flex items-center gap-2">
                                  <User className="w-3.5 h-3.5 text-gray-400"/>
                                  <span className="font-medium text-gray-700">{article.author || 'Unknown Author'}</span>
                               </div>
                               <div className="flex items-center gap-2">
                                  <Calendar className="w-3.5 h-3.5 text-gray-400"/>
                                  <span>{new Date(article.publishedDate || article.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                               </div>
                            </div>
                         </div>
                      </div>
                    ))}
                    </div>
                 )}
               </>
             )}
          </div>
        )}

        {/* ======================= TAB 3: FULL DETAIL VIEW ======================= */}
        {activeTab === 'details' && selectedArticle && (
           <div className="animate-fade-in-up">
              {/* Back & Actions */}
              <div className="flex items-center justify-between mb-6">
                 <button onClick={() => setActiveTab('list')} className="group flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors">
                    <div className="bg-white border border-gray-200 p-2 rounded-full group-hover:border-gray-400 transition-colors"><ArrowLeft className="w-4 h-4"/></div>
                    Back to Library
                 </button>
                 <div className="flex gap-3">
                     <button onClick={() => handleEditClick(selectedArticle)} className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-bold flex items-center shadow-lg hover:shadow-xl transition-all">
                        <Edit2 className="w-4 h-4 mr-2" /> Edit Article
                     </button>
                 </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Left: Main Content */}
                  <div className="lg:col-span-8 space-y-8">
                      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                          {/* Article Header Image */}
                          <div className="w-full h-80 relative bg-gray-100">
                             {selectedArticle.image ? (
                                <img src={getImageUrl(selectedArticle.image)} className="w-full h-full object-cover" alt="Cover"/>
                             ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-300"><ImageIcon className="w-16 h-16"/></div>
                             )}
                             <div className="absolute top-4 left-4">
                                <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wide">
                                   {selectedArticle.badge || 'Article'}
                                </span>
                             </div>
                          </div>

                          <div className="p-8">
                             {/* Article Title & Meta */}
                             <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">{selectedArticle.title}</h1>
                             
                             <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 border-b border-gray-100 pb-6 mb-6">
                                <div className="flex items-center gap-2">
                                   <User className="w-4 h-4 text-blue-500"/> 
                                   <span className="font-semibold text-gray-900">{selectedArticle.author || 'Unknown'}</span>
                                   <span className="text-xs text-gray-400">({selectedArticle.designation || 'Author'})</span>
                                </div>
                                <div className="flex items-center gap-2">
                                   <Clock className="w-4 h-4 text-blue-500"/>
                                   <span>{new Date(selectedArticle.publishedDate || selectedArticle.date).toLocaleDateString()}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                   <CheckCircle className={`w-4 h-4 ${selectedArticle.published ? 'text-green-500' : 'text-gray-300'}`}/>
                                   <span className={selectedArticle.published ? 'text-green-600 font-bold' : 'text-gray-500'}>{selectedArticle.published ? 'Published' : 'Draft'}</span>
                                </div>
                             </div>

                             {/* Full Content Rendering */}
                             <div className="prose prose-lg max-w-none text-gray-700">
                                <div dangerouslySetInnerHTML={{ __html: selectedArticle.content }} />
                             </div>
                          </div>
                      </div>

                      {/* FAQs Display */}
                      {selectedArticle.faq && selectedArticle.faq.length > 0 && (
                          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                             <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center"><HelpCircle className="w-5 h-5 mr-2 text-purple-500"/> Frequently Asked Questions</h3>
                             <div className="space-y-4">
                                {selectedArticle.faq.map((fq, idx) => (
                                   <div key={idx} className="bg-gray-50 rounded-lg p-5">
                                      <h4 className="font-bold text-gray-900 mb-2">{fq.question}</h4>
                                      <p className="text-gray-600 text-sm">{fq.answer}</p>
                                   </div>
                                ))}
                             </div>
                          </div>
                      )}
                  </div>

                  {/* Right: Sidebar Details */}
                  <div className="lg:col-span-4 space-y-6">
                      {/* Short Description */}
                      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                         <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Short Description</h3>
                         <div className="text-sm text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-lg border border-gray-100">
                            <div dangerouslySetInnerHTML={{ __html: selectedArticle.description || "No description provided." }} />
                         </div>
                      </div>

                      {/* SEO & Tech Details */}
                      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4">
                         <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">SEO & Metadata</h3>
                         
                         <div>
                            <label className="text-xs font-bold text-gray-500">Meta Title</label>
                            <p className="text-sm text-gray-900 font-medium mt-1">{selectedArticle.title}</p>
                         </div>

                         <div>
                            <label className="text-xs font-bold text-gray-500">Meta Keywords</label>
                            <div className="flex flex-wrap gap-1 mt-1">
                               {selectedArticle.key ? selectedArticle.key.split(',').map((k, i) => (
                                 <span key={i} className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs border border-gray-200">{k.trim()}</span>
                               )) : <span className="text-gray-400 text-xs italic">No keywords</span>}
                            </div>
                         </div>

                         <div>
                            <label className="text-xs font-bold text-gray-500">Meta Description</label>
                            <p className="text-xs text-gray-600 mt-1 italic leading-relaxed border-l-2 border-gray-200 pl-2">
                               {selectedArticle.meta || "No meta description set."}
                            </p>
                         </div>

                         <div className="pt-4 border-t border-gray-100">
                             <label className="text-xs font-bold text-gray-500">Slug</label>
                             <div className="flex items-center gap-2 mt-1 text-sm text-blue-600 font-mono bg-blue-50 p-2 rounded border border-blue-100 break-all">
                                <Globe className="w-3 h-3 flex-shrink-0"/> {selectedArticle.slug}
                             </div>
                         </div>
                         
                         <div className="pt-2">
                            <label className="text-xs font-bold text-gray-500 mb-2 block">Distributed On</label>
                            <div className="flex flex-wrap gap-2">
                               {selectedArticle.websites && selectedArticle.websites.map(site => (
                                  <span key={site} className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-bold uppercase">{site}</span>
                               ))}
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

export default ArticleManager;