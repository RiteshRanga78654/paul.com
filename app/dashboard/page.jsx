'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import { 
  Home, Users, Settings, BarChart2, Menu, X, Bell, Search, 
  ShoppingBag, DollarSign, TrendingUp, User, Lock, BellRing, Loader2 
} from 'lucide-react';

// --- TUTORIAL: STEP 1 - Import your new pages here ---
import AddBlogPost from './blog';
// import ArticlePage from './event'; // (Uncomment if needed)
import ArticleManager from './article';
import ArticlePage from './event';

// --- Helper: Auth Check ---
// We keep this helper, but we only call it inside useEffect to avoid SSR errors
const checkLoginStatus = () => {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("isLoggedIn") === "true";
};

// --- Components (Sidebar, Header, StatCard) ---

const Sidebar = ({ isOpen, toggleSidebar, activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: Home },
    { id: 'blog', name: 'Blog', icon: BarChart2 }, 
    { id: 'articles', name: 'Articles', icon: BarChart2 },
    { id: 'events', name: 'Events', icon: Users },
    // { id: 'settings', name: 'Settings', icon: Settings },
  ];

  return (
    <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-black text-[#bea172] transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 shadow-xl`}>
      <div className="flex items-center justify-between h-16 px-6 border-b border-[#bea172]/20">
        <div className="flex flex-1 items-center justify-center gap-2">
          <img src="/assets/images/logo.png" alt="Logo" className="h-10 w-auto mx-auto" onError={e => {e.target.style.display='none'; e.target.nextSibling.style.display='block';}} />
          <span style={{color: '#bea172', fontWeight: 'bold', fontSize: '1.25rem', display: 'none'}} className="logo-fallback">LUXE ADMIN</span>
        </div>
        <button onClick={toggleSidebar} className="lg:hidden text-[#bea172] hover:text-[#bea172]/80">
          <X size={24} />
        </button>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setActiveTab(item.id);
              if (window.innerWidth < 1024) toggleSidebar(); 
            }}
            className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
              activeTab === item.id
                ? 'bg-white text-[#bea172] shadow-md' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            <item.icon size={20} className="mr-3" />
            <span>{item.name}</span>
          </button>
        ))}
      </nav>
      {/* User Footer */}
      <div className="p-4 border-t border-white/20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white text-[#bea172] flex items-center justify-center text-sm font-bold shadow-sm">
            BP
          </div>
          <div>
            <p className="text-sm font-bold text-white">Bhaswar Paul</p>
            <p className="text-xs text-white/80">Administrator</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = ({ toggleSidebar, handleLogout }) => (
  <header className="bg-white border-b border-gray-100 h-16 flex items-center justify-between px-4 lg:px-8 shadow-sm z-10 relative">
    <button onClick={toggleSidebar} className="lg:hidden text-[#bea172]">
      <Menu size={24} />
    </button>
    <div className="flex-1 max-w-xl mx-4 hidden md:block">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input 
          type="text" 
          placeholder="Search..." 
          className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bea172] focus:border-transparent transition-all"
        />
      </div>
    </div>
    <div className="flex items-center gap-4">
      <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
        <Bell size={20} />
        <span className="absolute top-1 right-1 w-2 h-2 bg-[#bea172] rounded-full ring-2 ring-white"></span>
      </button>
      {/* Added Logout Button for convenience */}
      <button 
        onClick={handleLogout}
        className="text-xs font-bold text-red-500 hover:text-red-700 border border-red-200 px-3 py-1.5 rounded-lg"
      >
        LOGOUT
      </button>
    </div>
  </header>
);

const StatCard = ({ title, value, icon: Icon, trend }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
        <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
      </div>
      <div className="p-3 rounded-lg bg-[#bea172]/10 text-[#bea172]">
        <Icon size={24} />
      </div>
    </div>
    <div className="mt-4 flex items-center text-sm">
      <span className="text-[#bea172] font-bold flex items-center">
        <TrendingUp size={16} className="mr-1" />{trend}
      </span>
      <span className="text-gray-400 ml-2">vs last month</span>
    </div>
  </div>
);

// --- View Components ---

const DashboardView = () => (
  <div className="animate-in fade-in zoom-in duration-500">
    {/* Attractive Welcome Banner */}
    <div className="mb-8 relative overflow-hidden rounded-2xl bg-white shadow-lg border-l-8 border-[#bea172]">
      {/* Subtle decorative background element */}
      <div className="absolute top-0 right-0 -mt-4 -mr-4 text-[#bea172]/10">
        <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      </div>
      
      <div className="relative z-10 p-8 sm:p-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
          Welcome Back, <span className="text-[#bea172]">Admin!</span> 👋
        </h1>
        <p className="text-xl text-gray-600 font-medium max-w-2xl">
          Your command center is ready. Here's your daily summary.
        </p>
      </div>
    </div>
  </div>
);

const SettingsView = () => {
  const [activeSettingTab, setActiveSettingTab] = useState('profile');
  const tabs = [
    { id: 'profile', label: 'My Profile', icon: User },
    { id: 'security', label: 'Security', icon: Lock },
    { id: 'notifications', label: 'Notifications', icon: BellRing },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="mb-8"><h1 className="text-2xl font-bold text-gray-800">Settings</h1></div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="border-b border-gray-200">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button key={tab.id} onClick={() => setActiveSettingTab(tab.id)} className={`flex items-center px-6 py-4 text-sm font-medium border-b-2 transition-all whitespace-nowrap ${activeSettingTab === tab.id ? 'border-[#bea172] text-[#bea172]' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>
                <tab.icon size={16} className="mr-2" />{tab.label}
              </button>
            ))}
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-500">Settings Content for {activeSettingTab}...</p>
        </div>
      </div>
    </div>
  );
};

// --- Main Layout with PROTECTION ---

export default function AdminDashboard() {
  const router = useRouter();
  
  // 1. Add Loading and Auth states
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  // 2. PROTECTED ROUTE LOGIC
  useEffect(() => {
    // Check if user is logged in
    const loggedIn = checkLoginStatus();

    if (!loggedIn) {
      // If not logged in, redirect to login page immediately
      router.push("/login"); // Make sure you have a page at /app/login/page.js
    } else {
      // If logged in, allow rendering
      setIsAuthorized(true);
    }
  }, [router]);

  // 3. Handle Logout functionality
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/login");
  };

  // 4. Content Switcher
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <DashboardView />;
      case 'blog': return <AddBlogPost />; 
      case 'articles': return <ArticleManager />; 
      // case 'events': return <div className="text-center py-20 text-gray-400">Customer Module Coming Soon</div>;
      case 'events': return <ArticlePage/>;


      // case 'settings': return <SettingsView />;
      default: return <DashboardView />;
    }
  };

  // 5. If not authorized yet, show a Loader (prevents flashing the dashboard)
  if (!isAuthorized) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-50">
        <Loader2 className="w-10 h-10 text-[#bea172] animate-spin mb-4" />
        <p className="text-gray-500 font-medium">Verifying Access...</p>
      </div>
    );
  }

  // 6. Render Dashboard (Only if Authorized)
  return (
    <div className="flex h-screen bg-gray-50 font-sans text-gray-900">
      {isSidebarOpen && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsSidebarOpen(false)} />}
      
      <Sidebar 
        isOpen={isSidebarOpen} 
        toggleSidebar={() => setIsSidebarOpen(false)} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
            toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
            handleLogout={handleLogout} 
        />
        <main className="flex-1 overflow-y-auto p-4 lg:p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}