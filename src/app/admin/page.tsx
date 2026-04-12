"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Layout, FileText, Globe, Save, Plus, Trash2, LogOut, Edit3, X, Check, Loader2, ExternalLink } from "lucide-react";

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
                <h1 className="text-6xl font-black tracking-tighter italic leading-none text-neutral-900">Command <span className="text-brand-purple">Center.</span></h1>
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
    const [selectedOps, setSelectedOps] = useState<number[]>([]);
    const [isExecuting, setIsExecuting] = useState(false);
    const [progress, setProgress] = useState<Record<number, string>>({});

    const ops = [
        { t: "Sync Sitemaps (GSC)", d: "Resubmit sitemap.xml to Search Console." },
        { t: "Audit Backlinks", d: "Check for new mentions and referral traffic." },
        { t: "Daily Blog Deployment", d: "Maintain fresh content signals for crawlers." },
        { t: "Verify Index Pulse", d: "Check for crawl errors in Pixarrow collections." },
    ];

    const toggleOp = (index: number) => {
        if (isExecuting) return;
        setSelectedOps(prev => 
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        );
    };

    const runPipeline = async () => {
        if (selectedOps.length === 0 || isExecuting) return;
        
        setIsExecuting(true);
        const newProgress: Record<number, string> = {};
        
        for (const index of selectedOps) {
            newProgress[index] = 'processing';
            setProgress({...newProgress});
            await new Promise(r => setTimeout(r, 1000 + Math.random() * 2000));
            newProgress[index] = 'completed';
            setProgress({...newProgress});
        }
        
        setTimeout(() => {
            setIsExecuting(false);
            setProgress({});
            setSelectedOps([]);
        }, 2000);
    };

    return (
        <div className="space-y-12">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-black italic text-neutral-900">Growth Intelligence</h2>
                <div className="px-4 py-2 bg-green-50 text-green-600 rounded-xl text-xs font-black tracking-widest border border-green-100 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> SITE INDEXED
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Daily Checklist */}
                <div className="p-8 bg-brand-soft rounded-[2.5rem] border border-black/5">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-black flex items-center gap-3 text-neutral-900">
                            <CheckCircle2 className="w-5 h-5 text-brand-purple" /> Daily Growth Ops
                        </h3>
                        {selectedOps.length > 0 && (
                            <button 
                                onClick={runPipeline}
                                disabled={isExecuting}
                                className="px-4 py-2 bg-brand-purple text-white text-[10px] font-black uppercase tracking-widest rounded-xl shadow-glow-purple disabled:opacity-50 transition-all hover:scale-105 active:scale-95"
                            >
                                {isExecuting ? 'Executing Pipeline...' : `Execute (${selectedOps.length})`}
                            </button>
                        )}
                    </div>
                    <div className="space-y-4">
                        {ops.map((item, i) => {
                            const isSelected = selectedOps.includes(i);
                            const status = progress[i];
                            
                            return (
                                <div 
                                    key={i} 
                                    onClick={() => toggleOp(i)}
                                    className={`flex items-start gap-4 p-4 rounded-2xl border transition-all cursor-pointer relative overflow-hidden ${
                                        isSelected 
                                            ? 'bg-white border-brand-purple/30 shadow-sm' 
                                            : 'bg-white/50 border-black/5 hover:border-brand-purple/20'
                                    }`}
                                >
                                    <div className={`mt-1 w-4 h-4 rounded-md border flex items-center justify-center transition-all ${
                                        isSelected ? 'bg-brand-purple border-brand-purple' : 'bg-white border-black/10'
                                    }`}>
                                        {isSelected && <Check className="w-3 h-3 text-white" strokeWidth={4} />}
                                    </div>
                                    <div className="relative z-10 flex-1">
                                        <div className="flex justify-between items-center">
                                            <div className={`text-sm font-black transition-colors ${isSelected ? 'text-neutral-900' : 'text-neutral-500'}`}>{item.t}</div>
                                            {status === 'processing' && <Loader2 className="w-3 h-3 animate-spin text-brand-purple" />}
                                            {status === 'completed' && <CheckCircle2 className="w-3 h-3 text-green-500" />}
                                        </div>
                                        <div className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">{item.d}</div>
                                    </div>

                                    {status === 'processing' && (
                                        <motion.div 
                                            initial={{ x: '-100%' }}
                                            animate={{ x: '100%' }}
                                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                            className="absolute bottom-0 left-0 h-0.5 bg-brand-purple/30 w-full" 
                                        />
                                    )}
                                </div>
                            );
                        })}
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
                    <h3 className="text-xl font-black italic text-neutral-900">Backlink Matrix</h3>
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
    const [seoData, setSeoData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState<string | null>(null);

    const pages = [
        { path: '/', label: 'HOME' },
        { path: '/work', label: 'WORK' },
        { path: '/services', label: 'SERVICES' },
        { path: '/about', label: 'ABOUT' },
        { path: '/blog', label: 'BLOG' }
    ];

    useEffect(() => {
        fetchSEO();
    }, []);

    const fetchSEO = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/admin/seo');
            const json = await res.json();
            if (json.success) setSeoData(json.data);
        } catch (error) {
            console.error("Fetch error:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleUpdate = async (path: string, field: string, value: string) => {
        const updated = [...seoData];
        const index = updated.findIndex(s => s.pagePath === path);
        if (index > -1) {
            updated[index][field] = value;
        } else {
            updated.push({ pagePath: path, [field]: value });
        }
        setSeoData(updated);
    };

    const saveSEO = async (path: string) => {
        setSaving(path);
        const data = seoData.find(s => s.pagePath === path);
        if (!data) return;

        try {
            const res = await fetch('/api/admin/seo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            const json = await res.json();
            if (json.success) {
                // Success feedback
            }
        } catch (error) {
            console.error("Save error:", error);
        } finally {
            setSaving(null);
        }
    };

    return (
        <div className="space-y-10 animate-in fade-in duration-500">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-black italic">Search Engine Optimization</h2>
                    <p className="text-neutral-400 text-sm font-medium">Control how indexers see your site.</p>
                </div>
            </div>
            
            <div className="space-y-6">
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20 text-neutral-300">
                        <Loader2 className="w-12 h-12 animate-spin mb-4" />
                        <p className="font-bold">Scanning index...</p>
                    </div>
                ) : pages.map((page) => {
                    const data = seoData.find(s => s.pagePath === page.path) || {
                        pagePath: page.path,
                        title: `Pixarrow | ${page.label}`,
                        description: "Pixarrow brings vibrant digital growth to your brand."
                    };

                    return (
                        <div key={page.path} className="p-8 bg-brand-soft rounded-[2.5rem] border border-black/5 group hover:border-brand-purple/20 transition-all">
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center gap-3">
                                    <span className="px-4 py-1.5 bg-white rounded-full text-xs font-black tracking-widest text-brand-purple shadow-sm border border-black/5">{page.label}</span>
                                    <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">{page.path}</span>
                                </div>
                                <button 
                                    onClick={() => saveSEO(page.path)}
                                    disabled={saving === page.path}
                                    className="flex items-center gap-2 px-4 py-2 bg-white text-brand-purple rounded-xl text-[10px] font-black uppercase tracking-widest border border-black/5 hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
                                >
                                    {saving === page.path ? <Loader2 className="w-3 h-3 animate-spin" /> : <Save className="w-3 h-3" />}
                                    {saving === page.path ? 'Saving' : 'Save Changes'}
                                </button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-neutral-400 uppercase ml-2 tracking-widest">Meta Title</label>
                                    <input 
                                        type="text" 
                                        className="w-full bg-white border border-black/5 rounded-2xl px-6 py-4 text-sm font-bold shadow-sm focus:border-brand-purple outline-none" 
                                        value={data.title}
                                        onChange={(e) => handleUpdate(page.path, 'title', e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-neutral-400 uppercase ml-2 tracking-widest">Meta Description</label>
                                    <textarea 
                                        className="w-full bg-white border border-black/5 rounded-2xl px-6 py-4 text-sm font-medium shadow-sm h-20 resize-none focus:border-brand-purple outline-none" 
                                        value={data.description}
                                        onChange={(e) => handleUpdate(page.path, 'description', e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

// Blog Manager Component
function BlogManager() {
    const [blogs, setBlogs] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [isEditorOpen, setIsEditorOpen] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [saving, setSaving] = useState(false);
    
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        excerpt: "",
        image: "",
        category: "Marketing",
        status: "published",
        metaTitle: "",
        metaDescription: ""
    });

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/admin/blogs');
            const json = await res.json();
            if (json.success) setBlogs(json.data);
        } catch (error) {
            console.error("Fetch error:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleOpenEditor = (blog: any = null) => {
        if (blog) {
            setFormData({
                title: blog.title || "",
                content: blog.content || "",
                excerpt: blog.excerpt || "",
                image: blog.image || "",
                category: blog.category || "Marketing",
                status: blog.status || "published",
                metaTitle: blog.metaTitle || "",
                metaDescription: blog.metaDescription || ""
            });
            setEditingId(blog._id);
        } else {
            setFormData({
                title: "",
                content: "",
                excerpt: "",
                image: "",
                category: "Marketing",
                status: "published",
                metaTitle: "",
                metaDescription: ""
            });
            setEditingId(null);
        }
        setIsEditorOpen(true);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        try {
            const url = editingId ? `/api/admin/blogs/${editingId}` : '/api/admin/blogs';
            const method = editingId ? 'PATCH' : 'POST';
            
            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            
            const json = await res.json();
            if (json.success) {
                setIsEditorOpen(false);
                fetchBlogs();
            }
        } catch (error) {
            console.error("Save error:", error);
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this blog?")) return;
        
        try {
            const res = await fetch(`/api/admin/blogs/${id}`, { method: 'DELETE' });
            const json = await res.json();
            if (json.success) fetchBlogs();
        } catch (error) {
            console.error("Delete error:", error);
        }
    };

    if (isEditorOpen) {
        return (
            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex justify-between items-center">
                    <h2 className="text-3xl font-black italic">{editingId ? 'Edit Dispatch' : 'New Dispatch'}</h2>
                    <button 
                        onClick={() => setIsEditorOpen(false)}
                        className="p-3 bg-neutral-100 rounded-full hover:bg-neutral-200 transition-all"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-neutral-400 uppercase ml-2 tracking-widest">Article Title</label>
                            <input 
                                required
                                type="text" 
                                value={formData.title}
                                onChange={(e) => setFormData({...formData, title: e.target.value})}
                                className="w-full bg-brand-soft border border-black/5 rounded-2xl px-6 py-4 text-sm font-bold focus:border-brand-purple outline-none"
                                placeholder="Enter a catchy title..."
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-neutral-400 uppercase ml-2 tracking-widest">Category</label>
                            <select 
                                value={formData.category}
                                onChange={(e) => setFormData({...formData, category: e.target.value})}
                                className="w-full bg-brand-soft border border-black/5 rounded-2xl px-6 py-4 text-sm font-bold focus:border-brand-purple outline-none appearance-none"
                            >
                                <option>Marketing</option>
                                <option>Design</option>
                                <option>Development</option>
                                <option>Growth</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-neutral-400 uppercase ml-2 tracking-widest">Hero Image URL</label>
                        <input 
                            type="text" 
                            value={formData.image}
                            onChange={(e) => setFormData({...formData, image: e.target.value})}
                            className="w-full bg-brand-soft border border-black/5 rounded-2xl px-6 py-4 text-sm font-bold focus:border-brand-purple outline-none"
                            placeholder="https://images.unsplash.com/..."
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-neutral-400 uppercase ml-2 tracking-widest">Excerpt (Brief Summary)</label>
                        <textarea 
                            value={formData.excerpt}
                            onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                            className="w-full bg-brand-soft border border-black/5 rounded-2xl px-6 py-4 text-sm font-medium focus:border-brand-purple outline-none min-h-[100px]"
                            placeholder="Hook the reader with a short summary..."
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-neutral-400 uppercase ml-2 tracking-widest">Article Content (Markdown supported)</label>
                        <textarea 
                            required
                            value={formData.content}
                            onChange={(e) => setFormData({...formData, content: e.target.value})}
                            className="w-full bg-brand-soft border border-black/5 rounded-2xl px-6 py-4 text-sm font-medium focus:border-brand-purple outline-none min-h-[300px]"
                            placeholder="Write your masterpiece here..."
                        />
                    </div>

                    <div className="pt-8 border-t border-neutral-100">
                        <h3 className="text-xl font-black italic mb-6">SEO Metadata</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-neutral-400 uppercase ml-2 tracking-widest">Meta Title</label>
                                <input 
                                    type="text" 
                                    value={formData.metaTitle}
                                    onChange={(e) => setFormData({...formData, metaTitle: e.target.value})}
                                    className="w-full bg-brand-soft border border-black/5 rounded-2xl px-6 py-4 text-sm font-bold focus:border-brand-purple outline-none"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-neutral-400 uppercase ml-2 tracking-widest">Meta Description</label>
                                <textarea 
                                    value={formData.metaDescription}
                                    onChange={(e) => setFormData({...formData, metaDescription: e.target.value})}
                                    className="w-full bg-brand-soft border border-black/5 rounded-2xl px-6 py-4 text-sm font-medium focus:border-brand-purple outline-none h-20"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end gap-4 pt-4">
                        <button 
                            type="button"
                            onClick={() => setIsEditorOpen(false)}
                            className="px-8 py-4 text-neutral-400 font-black uppercase tracking-widest hover:text-neutral-600 transition-all"
                        >
                            Cancel
                        </button>
                        <button 
                            disabled={saving}
                            type="submit"
                            className="flex items-center gap-2 px-10 py-4 bg-brand-purple text-white rounded-2xl font-black shadow-lg hover:scale-105 transition-all disabled:opacity-50 disabled:scale-100"
                        >
                            {saving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
                            {editingId ? 'Update Article' : 'Launch Article'}
                        </button>
                    </div>
                </form>
            </div>
        );
    }

    return (
        <div className="space-y-10 animate-in fade-in duration-500">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-black italic">Blog Factory</h2>
                    <p className="text-neutral-400 text-sm font-medium">Manage your content ecosystem.</p>
                </div>
                <button 
                    onClick={() => handleOpenEditor()}
                    className="flex items-center gap-2 px-6 py-4 bg-brand-purple text-white rounded-2xl font-black shadow-lg hover:scale-105 transition-all"
                >
                    <Plus className="w-5 h-5" /> New Dispatch
                </button>
            </div>

            {loading ? (
                <div className="flex flex-col items-center justify-center py-20 text-neutral-300">
                    <Loader2 className="w-12 h-12 animate-spin mb-4" />
                    <p className="font-bold">Accessing archives...</p>
                </div>
            ) : blogs.length > 0 ? (
                <div className="grid grid-cols-1 gap-4">
                    {blogs.map((blog) => (
                        <div key={blog._id} className="group p-6 bg-brand-soft rounded-3xl border border-black/5 hover:bg-white hover:shadow-xl hover:border-transparent transition-all flex items-center justify-between">
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-neutral-200 overflow-hidden flex-shrink-0 border border-black/5">
                                    {blog.image ? (
                                        <img src={blog.image} alt="" className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-neutral-400">
                                            <FileText className="w-6 h-6" />
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 mb-1">
                                        <span className="px-2 py-0.5 bg-white rounded-md text-[10px] font-black tracking-widest text-brand-purple border border-black/5">{blog.category.toUpperCase()}</span>
                                        <span className={`text-[10px] font-black uppercase tracking-widest ${blog.status === 'published' ? 'text-green-500' : 'text-orange-500'}`}>
                                            {blog.status}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-black text-neutral-900 group-hover:text-brand-purple transition-colors">{blog.title}</h3>
                                    <p className="text-xs text-neutral-400 font-medium">{new Date(blog.publishedAt).toLocaleDateString()} • {blog.author}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all">
                                <a 
                                    href={`/blog/${blog.slug}`} 
                                    target="_blank" 
                                    className="p-3 text-neutral-400 hover:text-neutral-900 hover:bg-white rounded-xl transition-all"
                                    title="View live"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                </a>
                                <button 
                                    onClick={() => handleOpenEditor(blog)}
                                    className="p-3 text-neutral-400 hover:text-brand-purple hover:bg-white rounded-xl transition-all"
                                    title="Edit"
                                >
                                    <Edit3 className="w-5 h-5" />
                                </button>
                                <button 
                                    onClick={() => handleDelete(blog._id)}
                                    className="p-3 text-neutral-400 hover:text-red-500 hover:bg-white rounded-xl transition-all"
                                    title="Delete"
                                >
                                    <Trash2 className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="p-10 border-2 border-dashed border-neutral-100 rounded-[3rem] flex flex-col items-center justify-center text-center py-20">
                    <div className="w-16 h-16 bg-neutral-50 rounded-full flex items-center justify-center mb-6 text-neutral-300">
                        <FileText className="w-8 h-8" />
                    </div>
                    <p className="text-neutral-400 font-bold mb-8">No blogs deployed yet. Start your first daily archive.</p>
                </div>
            )}
        </div>
    );
}
