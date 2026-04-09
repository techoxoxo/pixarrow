"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Layout, FileText, Globe, Save, Plus, Trash2, LogOut } from "lucide-react";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState("seo");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  // Login Handler
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "Pixarrow@2025") {
      setIsAuthenticated(true);
      localStorage.setItem("pixarrow_admin", "true");
    } else {
      setMessage({ text: "Incorrect access key.", type: "error" });
    }
  };

  useEffect(() => {
    if (localStorage.getItem("pixarrow_admin") === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("pixarrow_admin");
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-brand-bg flex items-center justify-center px-6">
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-md p-10 rounded-[3rem] bg-brand-card border border-white/10 shadow-3xl text-center"
        >
            <div className="w-16 h-16 bg-brand-purple/20 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-brand-purple/30">
                <Lock className="text-brand-purple w-8 h-8" />
            </div>
            <h1 className="text-3xl font-black mb-2 italic">Admin Access</h1>
            <p className="text-white/40 mb-10 font-medium">Please enter your private access key.</p>
            
            <form onSubmit={handleLogin} className="space-y-4">
                <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-brand-purple outline-none transition-all font-mono"
                />
                <button className="w-full py-4 bg-white text-brand-bg font-black rounded-2xl hover:scale-105 transition-transform active:scale-95">
                    Enter Dashboard
                </button>
            </form>
            {message.text && (
                <p className={`mt-6 text-sm font-bold ${message.type === 'error' ? 'text-red-400' : 'text-green-400'}`}>
                    {message.text}
                </p>
            )}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-soft text-neutral-900 pt-32 pb-20 px-6">
       <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
             <div>
                <h1 className="text-6xl font-black tracking-tighter italic leading-none">Command <span className="text-brand-purple">Center.</span></h1>
                <p className="text-neutral-500 font-medium mt-2">Manage your digital properties and growth metrics.</p>
             </div>
             <button 
                onClick={handleLogout}
                className="flex items-center gap-2 px-6 py-3 bg-red-50 text-red-600 rounded-2xl font-bold hover:bg-red-100 transition-colors"
            >
                <LogOut className="w-4 h-4" /> Disconnect
             </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
             {/* Sidebar Navigation */}
             <div className="lg:col-span-3 space-y-4">
                <button 
                    onClick={() => setActiveTab("seo")}
                    className={`w-full flex items-center gap-4 px-8 py-5 rounded-3xl font-black transition-all ${activeTab === 'seo' ? 'bg-white shadow-xl text-brand-purple border border-black/5 ring-1 ring-black/5' : 'text-neutral-400 hover:text-neutral-600'}`}
                >
                    <Globe className="w-5 h-5" /> SEO Control
                </button>
                <button 
                    onClick={() => setActiveTab("blogs")}
                    className={`w-full flex items-center gap-4 px-8 py-5 rounded-3xl font-black transition-all ${activeTab === 'blogs' ? 'bg-white shadow-xl text-brand-purple border border-black/5 ring-1 ring-black/5' : 'text-neutral-400 hover:text-neutral-600'}`}
                >
                    <FileText className="w-5 h-5" /> Blog Forge
                </button>
                <button 
                    onClick={() => setActiveTab("growth")}
                    className={`w-full flex items-center gap-4 px-8 py-5 rounded-3xl font-black transition-all ${activeTab === 'growth' ? 'bg-white shadow-xl text-brand-purple border border-black/5 ring-1 ring-black/5' : 'text-neutral-400 hover:text-neutral-600'}`}
                >
                    <Layout className="w-5 h-5" /> Growth Intel
                </button>
             </div>

             {/* Content Area */}
             <div className="lg:col-span-9 bg-white rounded-[3.5rem] p-10 shadow-2xl border border-black/5 min-h-[600px]">
                {activeTab === 'seo' && <SEOManager />}
                {activeTab === 'blogs' && <BlogManager />}
                {activeTab === 'growth' && <GrowthHub />}
             </div>
          </div>
       </div>
    </div>
  );
}

// Growth Hub Component
function GrowthHub() {
    return (
        <div className="space-y-12">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-black italic">Growth Intelligence</h2>
                <div className="px-4 py-2 bg-green-50 text-green-600 rounded-xl text-xs font-black tracking-widest border border-green-100 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> SITE INDEXED
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Daily Checklist */}
                <div className="p-8 bg-brand-soft rounded-[2.5rem] border border-black/5">
                    <h3 className="text-xl font-black mb-6 flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-purple" /> Daily Growth Ops
                    </h3>
                    <div className="space-y-4">
                        {[
                            { t: "Sync Sitemaps (GSC)", d: "Resubmit sitemap.xml to Search Console." },
                            { t: "Audit Backlinks", d: "Check for new mentions and referral traffic." },
                            { t: "Daily Blog Deployment", d: "Maintain fresh content signals for crawlers." },
                            { t: "Verify Index Pulse", d: "Check for crawl errors in Pixarrow collections." },
                        ].map((item, i) => (
                            <label key={i} className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-black/5 cursor-pointer hover:border-brand-purple/20 transition-all">
                                <input type="checkbox" className="mt-1 w-4 h-4 rounded-md accent-brand-purple" />
                                <div>
                                    <div className="text-sm font-black text-neutral-900">{item.t}</div>
                                    <div className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">{item.d}</div>
                                </div>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Indexing Stats */}
                <div className="p-8 bg-brand-bg rounded-[2.5rem] text-white">
                    <h3 className="text-xl font-black mb-6 flex items-center gap-3">
                        <Globe className="w-5 h-5 text-brand-purple" /> Index Health
                    </h3>
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <span className="text-xs font-bold text-white/40">Sitemap Status</span>
                            <span className="text-xs font-black text-green-400 uppercase tracking-widest">Active & Valid</span>
                        </div>
                        <div className="h-px bg-white/5" />
                        <div className="flex justify-between items-center">
                            <span className="text-xs font-bold text-white/40">Total Collections</span>
                            <span className="text-xs font-black uppercase tracking-widest">3 Indexed</span>
                        </div>
                        <div className="h-px bg-white/5" />
                        <div className="flex justify-between items-center">
                            <span className="text-xs font-bold text-white/40">Crawl Frequency</span>
                            <span className="text-xs font-black uppercase tracking-widest">High (Every 24h)</span>
                        </div>
                        <div className="mt-10 pt-6 border-t border-white/5">
                            <button className="w-full py-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl text-xs font-black tracking-widest uppercase transition-all">
                                Perform Deep Audit
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Backlink Ledger */}
            <div className="p-8 border border-neutral-100 rounded-[3rem]">
                <div className="flex justify-between items-center mb-10">
                    <h3 className="text-xl font-black italic">Backlink Matrix</h3>
                    <button className="text-xs font-black tracking-widest text-brand-purple uppercase hover:underline">Add Entry</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-neutral-100">
                                <th className="pb-4 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">Source Platform</th>
                                <th className="pb-4 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">Target Path</th>
                                <th className="pb-4 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">Status</th>
                                <th className="pb-4 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">Impact</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-50">
                            {[
                                { s: "Twitter/X", p: "/", st: "Live", i: "High" },
                                { s: "LinkedIn", p: "/work", st: "Live", i: "Medium" },
                                { s: "Medium.com", p: "/blog", st: "Pending", i: "Low" },
                            ].map((row, i) => (
                                <tr key={i}>
                                    <td className="py-6 text-sm font-black text-neutral-900">{row.s}</td>
                                    <td className="py-6 text-xs font-bold text-neutral-400">{row.p}</td>
                                    <td className="py-6">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${row.st === 'Live' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'}`}>
                                            {row.st}
                                        </span>
                                    </td>
                                    <td className="py-6 text-xs font-black text-brand-purple">{row.i}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

import { CheckCircle2 } from "lucide-react";

// SEO Manager Component
function SEOManager() {
    return (
        <div className="space-y-10">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-black italic">Search Engine Optimization</h2>
                <button className="flex items-center gap-2 px-6 py-3 bg-brand-soft border border-black/5 rounded-2xl font-bold hover:bg-neutral-100 transition-all">
                    <Save className="w-4 h-4" /> Sync All
                </button>
            </div>
            
            <div className="space-y-6">
                {/* Example Entry */}
                {['/', '/work', '/services', '/about'].map((path) => (
                    <div key={path} className="p-8 bg-brand-soft rounded-[2.5rem] border border-black/5 group">
                        <div className="flex justify-between items-center mb-6">
                            <span className="px-4 py-1.5 bg-white rounded-full text-xs font-black tracking-widest text-brand-purple shadow-sm border border-black/5">{path === '/' ? 'HOME' : path.slice(1).toUpperCase()}</span>
                            <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">{path}</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-neutral-400 uppercase ml-2 tracking-widest">Meta Title</label>
                                <input type="text" className="w-full bg-white border border-black/5 rounded-2xl px-6 py-4 text-sm font-bold shadow-sm" defaultValue={path === '/' ? 'Pixarrow — Let’s add more colors to your digital growth' : `Pixarrow | ${path.slice(1).charAt(0).toUpperCase() + path.slice(2)}`} />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-neutral-400 uppercase ml-2 tracking-widest">Meta Description</label>
                                <textarea className="w-full bg-white border border-black/5 rounded-2xl px-6 py-4 text-sm font-medium shadow-sm h-20 resize-none" defaultValue="Pixarrow brings vibrant digital growth to your brand." />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Blog Manager Component
function BlogManager() {
    return (
        <div className="space-y-10">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-black italic">Blog Factory</h2>
                <button className="flex items-center gap-2 px-6 py-4 bg-brand-purple text-white rounded-2xl font-black shadow-lg hover:scale-105 transition-all">
                    <Plus className="w-5 h-5" /> New Dispatch
                </button>
            </div>

            <div className="grid grid-cols-1 gap-6">
                <div className="p-10 border-2 border-dashed border-neutral-100 rounded-[3rem] flex flex-col items-center justify-center text-center py-20">
                    <div className="w-16 h-16 bg-neutral-50 rounded-full flex items-center justify-center mb-6 text-neutral-300">
                        <FileText className="w-8 h-8" />
                    </div>
                    <p className="text-neutral-400 font-bold mb-8">No blogs deployed yet. Start your first daily archive.</p>
                </div>
            </div>
        </div>
    );
}
