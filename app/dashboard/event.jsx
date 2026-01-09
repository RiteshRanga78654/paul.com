'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';
import { 
  Upload, Save, Edit2, Image as ImageIcon, Loader2, 
  RefreshCcw, Trash2, LayoutList, PenTool, 
  Calendar, CheckCircle, XCircle, Search, Eye, ArrowLeft, 
  Globe, MapPin, Video, Plus, Layers
} from 'lucide-react';

// Dynamic import for Jodit
const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });

// --- CONFIGURATION ---
const API_BASE_URL = "https://uat-service.ireedindia.com/v1"; 
const EVENTS_API = `${API_BASE_URL}/events`;
const UPLOAD_URL = "https://uat-service.ireedindia.com/upload"; // Fixed upload URL base

// AUTH TOKEN (From your curl)
// const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2ODkwNjdiMTU2M2IyOTllNjQyNDdkOTkiLCJlbWFpbElkIjoid29ya2luZ2ZvcjkzQGdtYWlsLmNvbSIsIm1vYmlsZSI6Ijg4MDAxNjg5NzAiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NjUyNjU4OTEsImV4cCI6MTc2NTMyNzA5MX0.duI-7WduyeteittBtffr7ARXaSjYo2hlbmip-fhuHD4";

// Axios Instance with Auth
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

/* 🔐 Inject access token dynamically */
api.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("accessToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

/* 🔁 Auto logout on token expiry */
api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.clear();
      window.location.href = "/login";
    }
    return Promise.reject(err);
  }
);
// --- HELPER: Extract Video ID for Embed ---
  const getYoutubeEmbedUrl = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    const videoId = (match && match[2].length === 11) ? match[2] : null;
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  };

  // --- HELPER: Extract Map URL ---
  const getMapSrc = (input) => {
    if (!input) return null;
    // If user pasted the full <iframe> tag, extract the src
    const srcMatch = input.match(/src="([^"]+)"/);
    if (srcMatch && srcMatch[1]) return srcMatch[1];
    // Otherwise assume it's just the URL
    return input;
  };

const ArticlePage = () => {
  // --- STATE ---
  const [activeTab, setActiveTab] = useState('form'); // 'form', 'list', 'details'
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadingField, setUploadingField] = useState(null); // Tracks which field is uploading
  
  const [mode, setMode] = useState('create');
  const [editId, setEditId] = useState(null);

  const editorContent = useRef(null);

  // Initial Form State
  const initialFormState = {
  userId: JSON.parse(localStorage.getItem("user"))?.userId || "",
    title: "",
    SubTitle: "",
    slug: "",
    description: "", // Short description
    subDescription: "", // Extra short desc
    content: "", // Rich text
    banner: "",
    thumbNail: "",
    gallery: [], // Array of strings
    map: "",
    websites: ["bhaswarpaul"],
    location: [
        {
            city: "",
            state: "",
            country: "India",
            pincode: ""
        }
    ],
    date: new Date().toISOString().split('T')[0],
    published: true,
    Youtube: [], // Array of objects { YoutubeHeading, Youtubelink }
    metaTitle: "",
    metaDesc: "",
    metaKeyword: "",
    altTag: "",
    featured: false,
    university: false,
    eventGrid: true
  };

  const [formData, setFormData] = useState(initialFormState);

  // --- JODIT CONFIG ---
  const config = useMemo(() => ({
    readonly: false, 
    placeholder: 'Event details...',
    height: 400,
    toolbarSticky: false,
    buttons: ['bold', 'italic', 'underline', '|', 'ul', 'ol', '|', 'link', 'image', 'table', '|', 'source', 'fullsize'],
  }), []);

  // --- API CALLS ---
  const fetchEvents = async () => {
    try {
      setLoading(true);
      // Fetch URL based on your requirement
      const response = await api.get(`${EVENTS_API}?page=1&limit=100&website=bhaswarpaul`);
      let validData = [];
      const res = response.data;
      
      if (res && Array.isArray(res.events)) validData = res.events;
      else if (res && Array.isArray(res.data)) validData = res.data;
      else if (Array.isArray(res)) validData = res;
      
      setEvents(validData);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchEvents(); }, []);

  // --- UPLOAD HANDLER (Generic) ---
  const handleFileUpload = async (e, fieldName) => {
    const file = e.target.files[0];
    if (!file) return;

    const uploadData = new FormData();
    uploadData.append('file', file);

    try {
      setUploadingField(fieldName);
      // Direct axios call to upload url as it might not need the same interceptors or base URL logic if different
    const res = await axios.post(UPLOAD_URL, uploadData, {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});


      let fileUrl = '';
      if (res.data?.filename) fileUrl = res.data.filename; // Assuming API returns filename
      else if (typeof res.data === 'string') fileUrl = res.data;
      else fileUrl = res.data?.url;

      if (fieldName === 'gallery') {
          setFormData(prev => ({ ...prev, gallery: [...prev.gallery, fileUrl] }));
      } else {
          setFormData(prev => ({ ...prev, [fieldName]: fileUrl }));
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert("Upload failed.");
    } finally {
      setUploadingField(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = { ...formData };
    
    // Ensure date is ISO
    if (payload.date) {
        const d = new Date(payload.date);
        if (!isNaN(d.getTime())) payload.date = d.toISOString();
    }

    // Clean system fields
    delete payload._id;
    delete payload.createdAt;
    delete payload.updatedAt;
    delete payload.__v;

    try {
      if (mode === 'create') {
        await api.post(EVENTS_API, payload);
        alert("Event Created Successfully!");
      } else {
        await api.patch(`${EVENTS_API}/${editId}`, payload);
        alert("Event Updated Successfully!");
      }
      resetForm();
      fetchEvents();
      setActiveTab('list');
    } catch (error) {
      console.error("Submit Error:", error);
      alert("Operation Failed: " + (error.response?.data?.message || error.message));
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- HELPERS ---
  const handleEditClick = (event) => {
    setMode('edit');
    setEditId(event._id);
    setActiveTab('form');
    
    // Deep merge to ensure arrays exist
    setFormData({
      ...initialFormState,
      ...event,
      date: event.date ? event.date.split('T')[0] : '',
      location: (event.location && event.location.length > 0) ? event.location : initialFormState.location,
      Youtube: event.Youtube || [],
      gallery: event.gallery || [],
      websites: ["bhaswarpaul"]
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewClick = (event) => {
    setSelectedEvent(event);
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

  // Handle Location (Array of Objects)
  const handleLocationChange = (field, value) => {
      const newLoc = [...formData.location];
      if (!newLoc[0]) newLoc[0] = {};
      newLoc[0][field] = value;
      setFormData({ ...formData, location: newLoc });
  };

  // Handle Youtube (Array of Objects)
  const addYoutube = () => setFormData(p => ({...p, Youtube: [...p.Youtube, { YoutubeHeading: "", Youtubelink: "" }]}));
  const removeYoutube = (idx) => setFormData(p => ({...p, Youtube: p.Youtube.filter((_, i) => i !== idx)}));
  const updateYoutube = (idx, field, val) => {
      const newYt = [...formData.Youtube];
      newYt[idx][field] = val;
      setFormData({ ...formData, Youtube: newYt });
  };

  // Handle Gallery Removal
  const removeGalleryImage = (idx) => {
      setFormData(p => ({...p, gallery: p.gallery.filter((_, i) => i !== idx)}));
  };

  const getImageUrl = (img) => {
    if (!img) return '';
    if (img.startsWith('http')) return img;
    return `${API_BASE_URL.replace('/v1','')}/image/${img}`;
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
                    <LayoutList className="w-3.5 h-3.5 inline mr-2" /> Events List
                </button>
            </div>
            <div className="flex items-center gap-3">
               {activeTab === 'details' && (
                 <button onClick={() => handleEditClick(selectedEvent)} className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center shadow hover:bg-blue-700 transition">
                   <Edit2 className="w-4 h-4 mr-2" /> Edit Event
                 </button>
               )}
               {mode === 'edit' && activeTab === 'form' && <button onClick={resetForm} className="text-sm text-red-500 hover:text-red-700 font-medium px-3">Discard</button>}
               {activeTab === 'form' && (
                 <button onClick={handleSubmit} disabled={isSubmitting} className="bg-gray-900 hover:bg-black text-white px-5 py-2 rounded-lg text-sm font-bold flex items-center transition-colors shadow-lg">
                   {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin mr-2"/> : <Save className="w-4 h-4 mr-2" />}
                   {mode === 'create' ? 'Publish Event' : 'Update Event'}
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
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Event Title</label>
                                    <input required type="text" name="title" value={formData.title} onChange={handleInputChange} placeholder="Ex: Education Expo 2025" className="w-full text-xl font-bold border-b border-gray-200 focus:border-blue-500 outline-none py-2"/>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Sub Title</label>
                                    <input type="text" name="SubTitle" value={formData.SubTitle} onChange={handleInputChange} placeholder="Ex: Explore Opportunities" className="w-full text-lg border-b border-gray-200 focus:border-blue-500 outline-none py-2"/>
                                </div>
                            </div>
                            
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">URL Slug</label>
                                <input type="text" name="slug" value={formData.slug} onChange={handleInputChange} placeholder="international-expo-2025" className="w-full text-sm bg-gray-50 border border-gray-200 rounded-md px-3 py-2 outline-none focus:border-blue-500"/>
                            </div>

                            {/* Descriptions */}
                            <div className="grid grid-cols-1 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Short Description</label>
                                    <textarea name="description" value={formData.description} onChange={handleInputChange} rows={2} className="w-full p-2 text-sm border border-gray-200 rounded outline-none"/>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Sub Description</label>
                                    <input type="text" name="subDescription" value={formData.subDescription} onChange={handleInputChange} className="w-full p-2 text-sm border border-gray-200 rounded outline-none"/>
                                </div>
                            </div>

                            {/* MAIN CONTENT EDITOR */}
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Detailed Content</label>
                                <div className="prose-editor border border-gray-200 rounded-lg overflow-hidden">
                                    <JoditEditor
                                        ref={editorContent}
                                        value={formData.content}
                                        config={config}
                                        onBlur={newContent => setFormData(prev => ({ ...prev, content: newContent }))}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* LOCATION & YOUTUBE */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-6">
                        {/* Location */}
                        <div>
                            <h3 className="text-sm font-bold text-gray-900 flex items-center mb-4"><MapPin className="w-4 h-4 mr-2 text-red-500" /> Event Location</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                <input type="text" placeholder="City" value={formData.location[0]?.city || ''} onChange={(e) => handleLocationChange('city', e.target.value)} className="p-2 border rounded text-sm"/>
                                <input type="text" placeholder="State" value={formData.location[0]?.state || ''} onChange={(e) => handleLocationChange('state', e.target.value)} className="p-2 border rounded text-sm"/>
                                <input type="text" placeholder="Country" value={formData.location[0]?.country || ''} onChange={(e) => handleLocationChange('country', e.target.value)} className="p-2 border rounded text-sm"/>
                                <input type="text" placeholder="Pincode" value={formData.location[0]?.pincode || ''} onChange={(e) => handleLocationChange('pincode', e.target.value)} className="p-2 border rounded text-sm"/>
                            </div>
                            <div className="mt-3">
                                <input type="text" name="map" value={formData.map} onChange={handleInputChange} placeholder="Google Maps Embed URL..." className="w-full p-2 border rounded text-sm text-gray-600"/>
                            </div>
                        </div>

                        <hr className="border-gray-100" />

                        {/* Youtube */}
                     {/* UPDATED YOUTUBE INPUT SECTION */}
<div>
  <div className="flex justify-between items-center mb-3">
    <h3 className="text-sm font-bold text-gray-900 flex items-center">
      <Video className="w-4 h-4 mr-2 text-red-600" /> Youtube Videos
    </h3>
    <button type="button" onClick={addYoutube} className="text-xs bg-red-50 hover:bg-red-100 text-red-600 px-3 py-1.5 rounded-md font-bold flex items-center gap-1 transition-colors">
      <Plus size={14}/> Add Video
    </button>
  </div>
  
  <div className="space-y-3">
    {formData.Youtube.length === 0 && (
      <p className="text-xs text-gray-400 italic text-center py-2">No videos added yet.</p>
    )}
    
    {formData.Youtube.map((yt, idx) => (
      <div key={idx} className="p-3 bg-gray-50 rounded-lg border border-gray-100 relative group">
        <div className="grid grid-cols-1 gap-2">
          <input 
            type="text" 
            placeholder="Video Heading (e.g. Event Highlights)" 
            value={yt.YoutubeHeading} 
            onChange={(e) => updateYoutube(idx, 'YoutubeHeading', e.target.value)} 
            className="w-full p-2 border border-gray-200 rounded text-xs focus:border-blue-500 outline-none bg-white"
          />
          <input 
            type="text" 
            placeholder="YouTube Link (e.g. https://youtu.be/...)" 
            value={yt.Youtubelink} 
            onChange={(e) => updateYoutube(idx, 'Youtubelink', e.target.value)} 
            className="w-full p-2 border border-gray-200 rounded text-xs focus:border-blue-500 outline-none bg-white"
          />
        </div>
        <button 
          type="button" 
          onClick={() => removeYoutube(idx)} 
          className="absolute -top-2 -right-2 bg-white text-gray-400 hover:text-red-500 shadow-sm border border-gray-200 rounded-full p-1"
        >
          <XCircle size={16}/>
        </button>
      </div>
    ))}
  </div>
</div>
                    </div>
                </div>

                {/* RIGHT: SIDEBAR */}
                <div className="lg:col-span-4 space-y-6">
                    {/* PUBLISH CARD */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-bold text-gray-700">Settings</span>
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${formData.published ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>{formData.published ? 'Public' : 'Hidden'}</span>
                        </div>
                        <div className="space-y-3">
                            <label className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-50 rounded-lg">
                                <span className="text-sm text-gray-600">Published</span>
                                <input type="checkbox" name="published" checked={formData.published} onChange={handleInputChange} className="w-4 h-4 text-blue-600 rounded"/>
                            </label>
                            <label className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-50 rounded-lg">
                                <span className="text-sm text-gray-600">Featured</span>
                                <input type="checkbox" name="featured" checked={formData.featured} onChange={handleInputChange} className="w-4 h-4 text-blue-600 rounded"/>
                            </label>
                            <label className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-50 rounded-lg">
                                <span className="text-sm text-gray-600">Event Grid</span>
                                <input type="checkbox" name="eventGrid" checked={formData.eventGrid} onChange={handleInputChange} className="w-4 h-4 text-blue-600 rounded"/>
                            </label>
                        </div>
                        
                        <div className="mt-4">
                            <label className="text-xs font-bold text-gray-400 uppercase mb-1 block">Event Date</label>
                            <div className="flex items-center border border-gray-200 rounded px-2 bg-white">
                                <Calendar className="w-3 h-3 text-gray-400 mr-2"/>
                                <input type="date" name="date" value={formData.date} onChange={handleInputChange} className="w-full text-xs py-2 outline-none text-gray-600 bg-transparent" />
                            </div>
                        </div>
                    </div>

                    {/* IMAGES */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 space-y-4">
                        <h4 className="text-xs font-bold text-gray-400 uppercase flex items-center gap-1"><ImageIcon size={12}/> Media Assets</h4>
                        
                        {/* Banner */}
                        <div>
                            <label className="text-xs text-gray-500 mb-1 block">Banner (Main)</label>
                            <div className="relative aspect-video bg-gray-50 rounded border border-dashed hover:border-blue-300 transition overflow-hidden group">
                                {uploadingField === 'banner' && <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-20"><Loader2 className="animate-spin w-6 h-6 text-blue-500"/></div>}
                                {formData.banner ? <img src={getImageUrl(formData.banner)} className="w-full h-full object-cover" /> : <div className="flex items-center justify-center h-full text-gray-300"><Upload size={20}/></div>}
                                <input type="file" onChange={(e) => handleFileUpload(e, 'banner')} className="absolute inset-0 opacity-0 cursor-pointer z-10" />
                            </div>
                        </div>

                        {/* Thumbnail */}
                        <div>
                            <label className="text-xs text-gray-500 mb-1 block">Thumbnail</label>
                            <div className="relative h-24 bg-gray-50 rounded border border-dashed hover:border-blue-300 transition overflow-hidden group">
                                {uploadingField === 'thumbNail' && <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-20"><Loader2 className="animate-spin w-6 h-6 text-blue-500"/></div>}
                                {formData.thumbNail ? <img src={getImageUrl(formData.thumbNail)} className="w-full h-full object-cover" /> : <div className="flex items-center justify-center h-full text-gray-300"><Upload size={20}/></div>}
                                <input type="file" onChange={(e) => handleFileUpload(e, 'thumbNail')} className="absolute inset-0 opacity-0 cursor-pointer z-10" />
                            </div>
                        </div>
                        
                         {/* Alt Tag */}
                         <input type="text" name="altTag" value={formData.altTag} onChange={handleInputChange} placeholder="Image Alt Tag" className="w-full p-2 text-xs border rounded"/>

                        {/* Gallery */}
                        {/* UPDATED GALLERY SECTION */}
<div>
  <label className="text-xs font-bold text-gray-400 uppercase mb-2 block">Event Gallery</label>
  
  <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
    {/* Existing Images */}
    {formData.gallery.map((img, idx) => (
      <div key={idx} className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden group border border-gray-200 shadow-sm">
        <img src={getImageUrl(img)} className="w-full h-full object-cover" alt="Gallery" />
        <button 
          type="button" 
          onClick={() => removeGalleryImage(idx)} 
          className="absolute top-1 right-1 bg-white/90 p-1 rounded-full text-red-500 shadow-sm opacity-0 group-hover:opacity-100 transition-all"
        >
          <Trash2 size={14}/>
        </button>
      </div>
    ))}

    {/* Loading State */}
    {uploadingField === 'gallery' && (
      <div className="aspect-square flex items-center justify-center bg-gray-50 rounded-lg border border-dashed border-blue-300">
        <Loader2 className="animate-spin w-6 h-6 text-blue-500"/>
      </div>
    )}

    {/* BIG ADD BUTTON (Always Visible) */}
    <label className="aspect-square flex flex-col items-center justify-center bg-gray-50 hover:bg-blue-50 border-2 border-dashed border-gray-300 hover:border-blue-400 rounded-lg cursor-pointer transition-colors group">
      <Plus className="w-6 h-6 text-gray-400 group-hover:text-blue-500 mb-1" />
      <span className="text-[10px] font-bold text-gray-400 group-hover:text-blue-500 uppercase">Add Image</span>
      <input type="file" onChange={(e) => handleFileUpload(e, 'gallery')} className="hidden" />
    </label>
  </div>
</div>
                    </div>

                    {/* SEO */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 space-y-4">
                        <h4 className="text-xs font-bold text-gray-400 uppercase flex items-center gap-1"><Search size={12}/> SEO</h4>
                        <div><label className="text-xs text-gray-500 mb-1 block">Meta Title</label><input type="text" name="metaTitle" value={formData.metaTitle} onChange={handleInputChange} className="w-full p-2 text-xs border rounded" /></div>
                        <div><label className="text-xs text-gray-500 mb-1 block">Keywords</label><input type="text" name="metaKeyword" value={formData.metaKeyword} onChange={handleInputChange} className="w-full p-2 text-xs border rounded" /></div>
                        <div><label className="text-xs text-gray-500 mb-1 block">Meta Desc</label><textarea rows={3} name="metaDesc" value={formData.metaDesc} onChange={handleInputChange} className="w-full p-2 text-xs border rounded" /></div>
                    </div>
                </div>
            </div>
        )}

        {/* ======================= TAB 2: LIBRARY (LIST) ======================= */}
        {activeTab === 'list' && (
          <div className="space-y-6">
             <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-900">Events Library ({events.length})</h2>
                <button onClick={fetchEvents} className="flex items-center gap-2 text-xs font-bold text-gray-600 bg-white border border-gray-200 px-3 py-2 rounded-lg hover:bg-gray-50 transition shadow-sm">
                   <RefreshCcw className={`w-3 h-3 ${loading ? 'animate-spin' : ''}`} /> REFRESH
                </button>
             </div>

             {loading ? (
               <div className="flex flex-col justify-center items-center h-64 text-gray-400">
                 <Loader2 className="w-8 h-8 animate-spin mb-2" /><p className="text-sm">Loading Events...</p>
               </div>
             ) : (
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                 {events.map((event) => (
                   <div key={event._id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition group flex flex-col h-full">
                      <div className="h-40 w-full bg-gray-100 relative overflow-hidden cursor-pointer" onClick={() => handleViewClick(event)}>
                         {event.thumbNail || event.banner ? (
                           <img 
                             src={getImageUrl(event.thumbNail || event.banner)}
                             alt={event.altTag || 'Event'}
                             className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                           />
                         ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-300">
                                <ImageIcon size={32}/>
                            </div>
                         )}
                         <div className="absolute top-2 right-2">
                             <span className={`text-[10px] font-bold px-2 py-0.5 rounded shadow-sm ${event.published ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                                {event.published ? 'LIVE' : 'DRAFT'}
                             </span>
                         </div>
                      </div>

                      <div className="p-4 flex-1 flex flex-col">
                         <div className="flex items-center gap-2 mb-2 text-gray-500 text-xs">
                            <Calendar size={12}/> 
                            <span>{new Date(event.date).toLocaleDateString()}</span>
                         </div>
                         
                         <h3 onClick={() => handleViewClick(event)} className="font-bold text-gray-900 leading-snug mb-2 line-clamp-2 text-sm cursor-pointer hover:text-blue-600">
                           {event.title}
                         </h3>
                         
                         <div className="flex items-center text-xs text-gray-500 mb-3">
                             <MapPin size={12} className="mr-1"/>
                             <span className="truncate">{event.location?.[0]?.city || "Location TBD"}</span>
                         </div>

                         <div className="flex justify-between items-center pt-3 border-t border-gray-100 mt-auto">
                            <button onClick={() => handleViewClick(event)} className="text-gray-500 hover:text-blue-600 text-xs font-bold flex items-center gap-1 transition">
                              <Eye className="w-3 h-3" /> View
                            </button>
                            <button onClick={() => handleEditClick(event)} className="text-blue-600 hover:text-blue-800 text-xs font-bold flex items-center gap-1 hover:bg-blue-50 px-2 py-1 rounded transition">
                              Edit <Edit2 className="w-3 h-3" />
                            </button>
                         </div>
                      </div>
                   </div>
                 ))}
                 {events.length === 0 && <div className="col-span-full text-center text-gray-400 py-10">No events found.</div>}
               </div>
             )}
          </div>
        )}

        {/* ======================= TAB 3: DETAILS VIEW ======================= */}
        {activeTab === 'details' && selectedEvent && (
            <div className="space-y-6">
               <div className="flex items-center justify-between">
                  <button onClick={() => setActiveTab('list')} className="text-gray-500 hover:text-gray-900 flex items-center gap-2 font-medium">
                     <ArrowLeft className="w-5 h-5" /> Back to Library
                  </button>
                  <span className="text-xs text-gray-400 font-mono uppercase">ID: {selectedEvent._id}</span>
               </div>

               <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  {/* HERO */}
                  <div className="h-64 md:h-80 w-full bg-gray-100 relative">
                     {selectedEvent.banner ? (
                        <img src={getImageUrl(selectedEvent.banner)} alt="Cover" className="w-full h-full object-cover" />
                     ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-300">No Banner Image</div>
                     )}
                     <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                        <h1 className="text-3xl font-bold text-white mb-2">{selectedEvent.title}</h1>
                        <p className="text-white/80 text-lg mb-2">{selectedEvent.SubTitle}</p>
                        <div className="flex items-center gap-4 text-white/90 text-sm">
                           <span className="flex items-center gap-1"><Calendar className="w-4 h-4"/> {new Date(selectedEvent.date).toLocaleDateString()}</span>
                           <span className="flex items-center gap-1"><MapPin className="w-4 h-4"/> {selectedEvent.location?.[0]?.city}, {selectedEvent.location?.[0]?.country}</span>
                        </div>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12">
                     <div className="lg:col-span-8 p-8">
                        <h3 className="text-sm font-bold text-gray-400 uppercase mb-4 tracking-wider">About Event</h3>
                        <p className="text-gray-700 mb-6 italic">{selectedEvent.description}</p>
                        <div className="prose prose-lg max-w-none text-gray-800" dangerouslySetInnerHTML={{ __html: selectedEvent.content }} />
                        
                        {/* Gallery Preview */}
                        {selectedEvent.gallery && selectedEvent.gallery.length > 0 && (
                            <div className="mt-8">
                                <h4 className="font-bold mb-2">Gallery</h4>
                                <div className="flex gap-2 overflow-x-auto pb-2">
                                    {selectedEvent.gallery.map((img, i) => (
                                        <img key={i} src={getImageUrl(img)} className="h-24 rounded border"/>
                                    ))}
                                </div>
                            </div>
                        )}
                     </div>

                     <div className="lg:col-span-4 p-8 bg-gray-50 border-l border-gray-100">
                        <h3 className="text-sm font-bold text-gray-400 uppercase mb-4 tracking-wider">Details</h3>
                        <div className="space-y-4">
                          {/* UPDATED LOCATION SECTION IN DETAILS */}
<div className="bg-white p-4 rounded border shadow-sm">
    <span className="text-xs text-gray-500 font-bold uppercase block mb-3 border-b pb-2">Location</span>
    
    <div className="mb-3">
        <p className="font-bold text-sm text-gray-900">{selectedEvent.location?.[0]?.city}, {selectedEvent.location?.[0]?.state}</p>
        <p className="text-xs text-gray-500">{selectedEvent.location?.[0]?.country} - {selectedEvent.location?.[0]?.pincode}</p>
    </div>

    {/* MAP EMBED */}
    {selectedEvent.map && (
        <div className="w-full h-48 bg-gray-100 rounded-lg overflow-hidden border border-gray-200 mt-2">
            <iframe 
                src={getMapSrc(selectedEvent.map)} 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Event Location"
            ></iframe>
        </div>
    )}
</div>
                            
                        {/* UPDATED YOUTUBE DISPLAY IN DETAILS VIEW */}
{selectedEvent.Youtube && selectedEvent.Youtube.length > 0 && (
  <div className="bg-white p-4 rounded border shadow-sm mt-4">
    <span className="text-xs text-gray-500 font-bold uppercase block mb-3 border-b pb-2">Event Videos</span>
    <div className="space-y-4">
      {selectedEvent.Youtube.map((yt, i) => {
        const embedUrl = getYoutubeEmbedUrl(yt.Youtubelink);
        return (
          <div key={i} className="space-y-1">
            <p className="font-bold text-xs text-gray-800">{yt.YoutubeHeading}</p>
            {embedUrl ? (
              <div className="relative w-full pt-[56.25%] bg-black rounded overflow-hidden">
                 <iframe 
                   className="absolute top-0 left-0 w-full h-full"
                   src={embedUrl} 
                   title={yt.YoutubeHeading} 
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                   allowFullScreen
                 ></iframe>
              </div>
            ) : (
              <a href={yt.Youtubelink} target="_blank" rel="noreferrer" className="text-blue-500 text-xs truncate block hover:underline">
                Watch Video (Link)
              </a>
            )}
          </div>
        );
      })}
    </div>
  </div>
)}

                             <div className="bg-white p-4 rounded border shadow-sm">
                                <span className="text-xs text-gray-500 block">SEO Title</span>
                                <p className="text-xs font-bold">{selectedEvent.metaTitle}</p>
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

export default ArticlePage;