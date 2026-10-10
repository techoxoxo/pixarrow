"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Lock, Layout, FileText, Globe, Save, Plus, Trash2, LogOut, 
  Edit3, X, Check, Loader2, ExternalLink, Mail, Phone, Calendar, 
  UploadCloud, Image as ImageIcon, Sparkles, Filter, Search, 
  RefreshCw, CheckCircle2, AlertCircle, Database, Copy, CheckCheck,
  TrendingUp, Layers, Cloud, ShieldCheck, ArrowUpRight, Award
} from "lucide-react";
import Image from "next/image";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState<"projects" | "partners" | "blogs" | "seo" | "queries" | "r2">("projects");
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState("");

  // Check initial authentication
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const res = await fetch("/api/admin/auth");
      const json = await res.json();
      if (json.authenticated || localStorage.getItem("pixarrow_admin_session") === "true") {
        setIsAuthenticated(true);
      }
    } catch {
      if (localStorage.getItem("pixarrow_admin_session") === "true") {
        setIsAuthenticated(true);
      }
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    setAuthError("");

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();

      if (data.success) {
        setIsAuthenticated(true);
        localStorage.setItem("pixarrow_admin_session", "true");
      } else {
        setAuthError(data.error || "Incorrect access key. Please check MASTER_PASSWORD.");
      }
    } catch (err) {
      setAuthError("Network error. Please try again.");
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/auth", { method: "DELETE" });
    } catch {}
    localStorage.removeItem("pixarrow_admin_session");
    setIsAuthenticated(false);
    setPassword("");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#070114] text-white flex items-center justify-center px-6 relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-[#7C3AED]/20 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-[#FF007A]/15 blur-[160px] rounded-full pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md p-10 rounded-[3rem] bg-[#0c051a]/90 border border-white/10 shadow-[0_25px_80px_rgba(124,58,237,0.25)] text-center backdrop-blur-2xl relative z-10"
        >
          <div className="flex justify-center mb-6">
            <Image 
              src="/logo.png" 
              alt="Pixarrow" 
              width={180} 
              height={36} 
              className="h-10 w-auto object-contain"
            />
          </div>

          <div className="w-14 h-14 bg-gradient-to-tr from-[#7C3AED]/30 to-[#FF007A]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-[#7C3AED]/40 shadow-glow-purple">
            <Lock className="text-purple-300 w-7 h-7" />
          </div>

          <h1 className="text-3xl font-black mb-2 text-white">Admin Command</h1>
          <p className="text-white/40 mb-8 font-medium text-sm">Protected by MASTER_PASSWORD environment key.</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter master password..."
                className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] outline-none transition-all font-mono placeholder:text-white/20"
                autoFocus
              />
            </div>

            <button 
              disabled={authLoading}
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-[#7C3AED] to-[#FF007A] text-white font-bold rounded-2xl shadow-glow-purple hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {authLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Verifying Key...</span>
                </>
              ) : (
                <span>Access Command Center</span>
              )}
            </button>
          </form>

          {authError && (
            <motion.p 
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 text-xs font-bold text-red-400 bg-red-500/10 border border-red-500/20 py-2.5 px-4 rounded-xl"
            >
              {authError}
            </motion.p>
          )}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070114] text-white pt-28 pb-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-20 right-[-10%] w-[600px] h-[600px] bg-[#7C3AED]/10 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 left-[-10%] w-[600px] h-[600px] bg-[#00DFD8]/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6 bg-white/[0.02] border border-white/10 p-6 sm:p-8 rounded-[2.5rem] backdrop-blur-xl shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#7C3AED] to-[#FF007A] flex items-center justify-center shadow-glow-purple">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-black text-white">Pixarrow Control Engine</h1>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-[10px] font-black uppercase tracking-wider">
                  Live Master
                </span>
              </div>
              <p className="text-white/40 text-xs sm:text-sm font-medium mt-0.5">
                Dynamic Project, Blog, SEO, Inquiries &amp; Cloudflare R2 Media Management.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="/" 
              target="_blank"
              className="flex items-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs font-bold text-white/80 hover:text-white transition-all"
            >
              <span>View Live Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2.5 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-xs font-bold hover:bg-red-500/20 transition-all cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Lock Admin</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation Navigation Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 mb-8">
          <TabButton 
            active={activeTab === 'projects'} 
            onClick={() => setActiveTab('projects')}
            icon={<Layers className="w-4 h-4" />}
            label="Case Studies"
          />
          <TabButton 
            active={activeTab === 'partners'} 
            onClick={() => setActiveTab('partners')}
            icon={<Award className="w-4 h-4" />}
            label="Brand Logos"
          />
          <TabButton 
            active={activeTab === 'blogs'} 
            onClick={() => setActiveTab('blogs')}
            icon={<FileText className="w-4 h-4" />}
            label="Blog Forge"
          />
          <TabButton 
            active={activeTab === 'seo'} 
            onClick={() => setActiveTab('seo')}
            icon={<Globe className="w-4 h-4" />}
            label="SEO"
          />
          <TabButton 
            active={activeTab === 'queries'} 
            onClick={() => setActiveTab('queries')}
            icon={<Mail className="w-4 h-4" />}
            label="Inquiries"
          />
          <TabButton 
            active={activeTab === 'r2'} 
            onClick={() => setActiveTab('r2')}
            icon={<Cloud className="w-4 h-4" />}
            label="Cloudflare R2"
          />
        </div>

        {/* Tab Content Container */}
        <div className="bg-[#0c051a]/85 rounded-[3rem] p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-white/10 min-h-[600px] backdrop-blur-2xl text-white">
          {activeTab === 'projects' && <ProjectsManager />}
          {activeTab === 'partners' && <PartnersManager />}
          {activeTab === 'blogs' && <BlogsManager />}
          {activeTab === 'seo' && <SEOManager />}
          {activeTab === 'queries' && <QueriesManager />}
          {activeTab === 'r2' && <R2StorageManager />}
        </div>

      </div>
    </div>
  );
}

function TabButton({ active, onClick, icon, label }: { active: boolean; onClick: () => void; icon: React.ReactNode; label: string }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2.5 px-4 py-3.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
        active 
          ? "bg-gradient-to-r from-[#7C3AED] to-[#FF007A] text-white shadow-glow-purple border border-transparent" 
          : "bg-white/[0.03] hover:bg-white/[0.06] text-white/50 hover:text-white border border-white/10"
      }`}
    >
      {icon}
      <span className="truncate">{label}</span>
    </button>
  );
}

/* =========================================================================
   1. PROJECTS & CASE STUDIES MANAGER
   ========================================================================= */
function ProjectsManager() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [seeding, setSeeding] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    subtitle: "",
    description: "",
    fullDescription: "",
    category: "Mobile App / Service",
    filterCategory: "Mobile",
    year: "2026",
    image: "",
    metricHighlight: "+150% Growth",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    stats: [
      { label: "Conversion Lift", value: "+150%" },
      { label: "Active Users", value: "85K+ MAU" },
      { label: "App Store Rating", value: "4.9 ★" },
    ],
    clientName: "",
    liveUrl: "",
    metaTitle: "",
    metaDescription: "",
    keywords: [] as string[],
    status: "published",
  });

  const [techInput, setTechInput] = useState("");
  const [keywordInput, setKeywordInput] = useState("");

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/projects");
      const json = await res.json();
      if (json.success) setProjects(json.data);
    } catch (e) {
      console.error("Fetch projects error:", e);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenEditor = (proj: any = null) => {
    if (proj) {
      setFormData({
        title: proj.title || "",
        slug: proj.slug || "",
        subtitle: proj.subtitle || "",
        description: proj.description || "",
        fullDescription: proj.fullDescription || "",
        category: proj.category || "Mobile App / Service",
        filterCategory: proj.filterCategory || "Mobile",
        year: proj.year || "2026",
        image: proj.image || "",
        metricHighlight: proj.metricHighlight || "+100% Growth",
        techStack: proj.techStack || ["Next.js", "TypeScript"],
        stats: proj.stats && proj.stats.length > 0 ? proj.stats : [
          { label: "Conversion Lift", value: "+120%" },
          { label: "Global LCP", value: "0.6s" },
          { label: "Client Rating", value: "5.0 ★" },
        ],
        clientName: proj.clientName || proj.title || "",
        liveUrl: proj.liveUrl || "",
        metaTitle: proj.metaTitle || "",
        metaDescription: proj.metaDescription || "",
        keywords: proj.keywords || [],
        status: proj.status || "published",
      });
      setEditingId(proj._id);
    } else {
      setFormData({
        title: "",
        slug: "",
        subtitle: "",
        description: "",
        fullDescription: "",
        category: "Mobile App / Service",
        filterCategory: "Mobile",
        year: "2026",
        image: "",
        metricHighlight: "+150% Booking Jump",
        techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
        stats: [
          { label: "Conversion Lift", value: "+150%" },
          { label: "Active Users", value: "85K+ MAU" },
          { label: "App Store Rating", value: "4.9 ★" },
        ],
        clientName: "",
        liveUrl: "",
        metaTitle: "",
        metaDescription: "",
        keywords: [],
        status: "published",
      });
      setEditingId(null);
    }
    setKeywordInput("");
    setIsEditorOpen(true);
  };

  const handleAddKeyword = () => {
    if (keywordInput.trim()) {
      const kw = keywordInput.trim();
      if (!formData.keywords.includes(kw)) {
        setFormData(prev => ({
          ...prev,
          keywords: [...prev.keywords, kw]
        }));
      }
      setKeywordInput("");
    }
  };

  const handleRemoveKeyword = (index: number) => {
    setFormData(prev => ({
      ...prev,
      keywords: prev.keywords.filter((_, i) => i !== index)
    }));
  };

  const handleAutoGenerateSEO = () => {
    const brand = formData.clientName || formData.title || "Brand";
    const category = formData.category || "Engineering & Software";
    const tech = formData.techStack && formData.techStack.length > 0 ? formData.techStack.slice(0, 3).join(", ") : "Next.js & Cloud Edge";
    const highlight = formData.metricHighlight || "+120% Performance";

    const generatedTitle = `${brand} Case Study | ${category} Architecture & Development — Pixarrow`;
    const generatedDesc = `Explore how Pixarrow architected and engineered ${brand} (${category}). Built with ${tech}, sub-second latency, and achieving ${highlight}.`;
    
    const brandLower = brand.toLowerCase();
    const autoKeywords = Array.from(new Set([
      brandLower,
      `${brandLower} website`,
      `${brandLower} app`,
      `${brandLower} case study`,
      `${brandLower} software development`,
      `${brandLower} tech stack`,
      category.toLowerCase(),
      ...formData.techStack.map(t => t.toLowerCase()),
      "pixarrow case study",
      "custom web engineering"
    ]));

    setFormData(prev => ({
      ...prev,
      clientName: prev.clientName || brand,
      metaTitle: generatedTitle,
      metaDescription: generatedDesc,
      keywords: autoKeywords,
    }));
  };

  const handleImageUpload = async (file: File) => {
    setUploadingImage(true);
    setStatusMessage("");
    try {
      const data = new FormData();
      data.append("file", file);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: data,
      });
      const json = await res.json();

      if (json.success && json.url) {
        setFormData(prev => ({ ...prev, image: json.url }));
        if (json.storage === "r2") {
          setStatusMessage("Uploaded to Cloudflare R2 bucket!");
        } else if (json.warning) {
          setStatusMessage(json.warning);
          alert(`Image saved locally. Note: ${json.warning}`);
        } else {
          setStatusMessage("Image saved to local storage.");
        }
      } else {
        alert(json.error || "Image upload failed");
      }
    } catch (e: any) {
      alert("Upload failed: " + e.message);
    } finally {
      setUploadingImage(false);
    }
  };

  const handleAddTech = () => {
    if (techInput.trim()) {
      setFormData(prev => ({
        ...prev,
        techStack: [...prev.techStack, techInput.trim()]
      }));
      setTechInput("");
    }
  };

  const handleRemoveTech = (index: number) => {
    setFormData(prev => ({
      ...prev,
      techStack: prev.techStack.filter((_, i) => i !== index)
    }));
  };

  const handleStatChange = (index: number, field: "label" | "value", val: string) => {
    const updatedStats = [...formData.stats];
    updatedStats[index][field] = val;
    setFormData(prev => ({ ...prev, stats: updatedStats }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const url = editingId ? `/api/admin/projects/${editingId}` : "/api/admin/projects";
      const method = editingId ? "PATCH" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const json = await res.json();
      if (json.success) {
        setIsEditorOpen(false);
        fetchProjects();
      } else {
        alert(json.error || "Failed to save project");
      }
    } catch (e: any) {
      alert("Save failed: " + e.message);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this project?")) return;
    try {
      const res = await fetch(`/api/admin/projects/${id}`, { method: "DELETE" });
      const json = await res.json();
      if (json.success) fetchProjects();
    } catch (e) {
      console.error(e);
    }
  };

  const handleSeedDefaults = async () => {
    setSeeding(true);
    try {
      const res = await fetch("/api/admin/projects/seed", { method: "POST" });
      const json = await res.json();
      if (json.success) {
        alert(json.message);
        fetchProjects();
      }
    } catch (e: any) {
      alert("Seed failed: " + e.message);
    } finally {
      setSeeding(false);
    }
  };

  if (isEditorOpen) {
    return (
      <div className="space-y-8 animate-in fade-in duration-300">
        <div className="flex justify-between items-center border-b border-white/10 pb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              {editingId ? "Edit Case Study" : "Add New Project"}
            </h2>
            <p className="text-white/40 text-xs sm:text-sm">Manage showcase presentation and technical architecture details.</p>
          </div>
          <button 
            onClick={() => setIsEditorOpen(false)}
            className="p-3 bg-white/5 hover:bg-white/10 rounded-2xl text-white/70 hover:text-white transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-white/60 uppercase tracking-wider">Project Title *</label>
              <input 
                required
                type="text" 
                value={formData.title}
                onChange={(e) => setFormData({
                  ...formData, 
                  title: e.target.value,
                  slug: editingId ? formData.slug : e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
                })}
                placeholder="e.g. Cahrz"
                className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-3.5 text-sm font-bold text-white focus:border-[#7C3AED] outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-white/60 uppercase tracking-wider">Slug (URL Path) *</label>
              <input 
                required
                type="text" 
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                placeholder="e.g. cahrz"
                className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-3.5 text-sm font-mono text-purple-300 focus:border-[#7C3AED] outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-white/60 uppercase tracking-wider">Display Category *</label>
              <select 
                value={[
                  "Mobile App / Service",
                  "MOBILE APP",
                  "Next.js Web Application",
                  "SaaS & Cloud Platform",
                  "eCommerce",
                  "E-COMMERCE",
                  "Shopify Plus & Headless",
                  "Fintech / Finance",
                  "FINTECH",
                  "Accounting & Financial Advisory",
                  "Agentic AI & Automations",
                  "AI & Machine Learning",
                  "Media & Newsline",
                  "MEDIA PORTAL",
                  "Entertainment & Media",
                  "VIDEO PRODUCTION",
                  "E-GOVERNMENT",
                  "Healthcare & HealthTech",
                  "Enterprise Software Suite",
                  "Custom Web Engineering",
                ].includes(formData.category) ? formData.category : "__custom__"}
                onChange={(e) => {
                  if (e.target.value !== "__custom__") {
                    setFormData({ ...formData, category: e.target.value });
                  } else {
                    setFormData({ ...formData, category: "" });
                  }
                }}
                className="w-full bg-[#080214] border border-white/10 rounded-2xl px-5 py-3.5 text-sm font-bold text-white focus:border-[#7C3AED] outline-none"
              >
                <option value="Mobile App / Service">Mobile App / Service</option>
                <option value="MOBILE APP">MOBILE APP</option>
                <option value="Next.js Web Application">Next.js Web Application</option>
                <option value="SaaS & Cloud Platform">SaaS & Cloud Platform</option>
                <option value="eCommerce">eCommerce</option>
                <option value="E-COMMERCE">E-COMMERCE</option>
                <option value="Shopify Plus & Headless">Shopify Plus & Headless</option>
                <option value="Fintech / Finance">Fintech / Finance</option>
                <option value="FINTECH">FINTECH</option>
                <option value="Accounting & Financial Advisory">Accounting & Financial Advisory</option>
                <option value="Agentic AI & Automations">Agentic AI & Automations</option>
                <option value="AI & Machine Learning">AI & Machine Learning</option>
                <option value="Media & Newsline">Media & Newsline</option>
                <option value="MEDIA PORTAL">MEDIA PORTAL</option>
                <option value="Entertainment & Media">Entertainment & Media</option>
                <option value="VIDEO PRODUCTION">VIDEO PRODUCTION</option>
                <option value="E-GOVERNMENT">E-GOVERNMENT</option>
                <option value="Healthcare & HealthTech">Healthcare & HealthTech</option>
                <option value="Enterprise Software Suite">Enterprise Software Suite</option>
                <option value="Custom Web Engineering">Custom Web Engineering</option>
                <option value="__custom__">Custom / Other Category...</option>
              </select>

              {(![
                "Mobile App / Service",
                "MOBILE APP",
                "Next.js Web Application",
                "SaaS & Cloud Platform",
                "eCommerce",
                "E-COMMERCE",
                "Shopify Plus & Headless",
                "Fintech / Finance",
                "FINTECH",
                "Accounting & Financial Advisory",
                "Agentic AI & Automations",
                "AI & Machine Learning",
                "Media & Newsline",
                "MEDIA PORTAL",
                "Entertainment & Media",
                "VIDEO PRODUCTION",
                "E-GOVERNMENT",
                "Healthcare & HealthTech",
                "Enterprise Software Suite",
                "Custom Web Engineering",
              ].includes(formData.category)) && (
                <input 
                  required
                  type="text" 
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  placeholder="Type custom display category..."
                  className="w-full mt-2 bg-white/[0.04] border border-[#7C3AED]/50 rounded-2xl px-5 py-2.5 text-sm font-bold text-cyan-300 focus:border-[#7C3AED] outline-none"
                />
              )}
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-white/60 uppercase tracking-wider">Filter Category *</label>
              <select 
                value={formData.filterCategory}
                onChange={(e) => setFormData({ ...formData, filterCategory: e.target.value })}
                className="w-full bg-[#080214] border border-white/10 rounded-2xl px-5 py-3.5 text-sm font-bold text-white focus:border-[#7C3AED] outline-none"
              >
                <option value="Mobile">Mobile Apps</option>
                <option value="FinTech">FinTech & Portals</option>
                <option value="eCommerce">eCommerce & D2C</option>
                <option value="Media">Media & OTT</option>
                <option value="AI / Web3">AI & Advanced</option>
                <option value="Custom">Custom Web Engineering</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-white/60 uppercase tracking-wider">Year of Release</label>
              <input 
                type="text" 
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                placeholder="2026"
                className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-3.5 text-sm font-bold text-white focus:border-[#7C3AED] outline-none"
              />
            </div>
          </div>

          {/* Image Upload Box with Cloudflare R2 */}
          <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 space-y-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <label className="text-xs font-bold text-white/80 uppercase tracking-wider flex items-center gap-2">
                  <UploadCloud className="w-4 h-4 text-purple-400" />
                  Hero Showcase Image (Cloudflare R2 Bucket) *
                </label>
                <p className="text-[11px] text-white/40">Upload image directly to R2 bucket or paste a public URL.</p>
              </div>

              <label className="px-5 py-2.5 bg-gradient-to-r from-[#7C3AED] to-[#FF007A] text-white rounded-xl text-xs font-bold cursor-pointer hover:scale-105 transition-all shadow-glow-purple flex items-center gap-2">
                {uploadingImage ? <Loader2 className="w-4 h-4 animate-spin" /> : <UploadCloud className="w-4 h-4" />}
                <span>{uploadingImage ? "Uploading to R2..." : "Upload Image to R2"}</span>
                <input 
                  type="file" 
                  accept="image/*" 
                  className="hidden" 
                  disabled={uploadingImage}
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleImageUpload(file);
                  }}
                />
              </label>
            </div>

            <input 
              required
              type="text" 
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              placeholder="https://... or /cahrz.png"
              className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-3 text-sm font-mono text-cyan-300 focus:border-[#7C3AED] outline-none"
            />

            {formData.image && (
              <div className="relative w-48 aspect-video rounded-xl overflow-hidden border border-white/20 bg-black/40">
                <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-white/60 uppercase tracking-wider">Subtitle / Tagline</label>
              <input 
                type="text" 
                value={formData.subtitle}
                onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                placeholder="e.g. On-Demand Vehicle Care & Detailing Ecosystem"
                className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-3.5 text-sm font-bold text-white focus:border-[#7C3AED] outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-white/60 uppercase tracking-wider">Metric Highlight Badge</label>
              <input 
                type="text" 
                value={formData.metricHighlight}
                onChange={(e) => setFormData({ ...formData, metricHighlight: e.target.value })}
                placeholder="e.g. +150% Booking Jump"
                className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-3.5 text-sm font-bold text-emerald-400 focus:border-[#7C3AED] outline-none"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-white/60 uppercase tracking-wider">Short Description (Card Summary) *</label>
            <textarea 
              required
              rows={2}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Brief 1-2 sentence overview shown on the portfolio grid..."
              className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-3 text-sm text-white focus:border-[#7C3AED] outline-none resize-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-white/60 uppercase tracking-wider">Full Case Study Content / Architecture</label>
            <textarea 
              rows={4}
              value={formData.fullDescription}
              onChange={(e) => setFormData({ ...formData, fullDescription: e.target.value })}
              placeholder="Comprehensive architectural breakdown, business impact, challenge & solution..."
              className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-3 text-sm text-white focus:border-[#7C3AED] outline-none"
            />
          </div>

          {/* 3 KPI Stats */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-white/60 uppercase tracking-wider">3 Key Performance Indicators</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {formData.stats.map((stat, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                  <input 
                    type="text"
                    value={stat.value}
                    onChange={(e) => handleStatChange(i, "value", e.target.value)}
                    placeholder="Value (e.g. +150%)"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm font-bold text-white text-center"
                  />
                  <input 
                    type="text"
                    value={stat.label}
                    onChange={(e) => handleStatChange(i, "label", e.target.value)}
                    placeholder="Label (e.g. Conversion Lift)"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-1.5 text-xs text-white/60 text-center"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-white/60 uppercase tracking-wider">Technologies & Frameworks</label>
            <div className="flex gap-2">
              <input 
                type="text"
                value={techInput}
                onChange={(e) => setTechInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); handleAddTech(); } }}
                placeholder="Type tech (e.g. Next.js 16, Redis, Stripe) and click Add"
                className="flex-1 bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-3 text-sm text-white focus:border-[#7C3AED] outline-none"
              />
              <button 
                type="button"
                onClick={handleAddTech}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-2xl text-xs font-bold cursor-pointer"
              >
                Add Tech
              </button>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {formData.techStack.map((tech, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-brand-purple/20 border border-brand-purple/30 text-purple-300 text-xs font-semibold">
                  {tech}
                  <button type="button" onClick={() => handleRemoveTech(i)} className="hover:text-red-400">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* =========================================================================
             GOOGLE SEARCH ENGINE OPTIMIZATION & BRAND ENTITY INDEXING
             ========================================================================= */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-purple-950/20 via-[#0a0518] to-cyan-950/20 border border-purple-500/30 space-y-6 shadow-2xl relative overflow-hidden">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/10 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-cyan-400" />
                  <h4 className="text-base font-black text-white">Google Search Visibility & Entity SEO</h4>
                </div>
                <p className="text-xs text-white/50 mt-1">
                  Rank Pixarrow on Google when potential clients search for this brand, product, or live website.
                </p>
              </div>

              <button
                type="button"
                onClick={handleAutoGenerateSEO}
                className="px-4 py-2.5 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white rounded-xl text-xs font-bold flex items-center gap-2 transition-all shadow-glow-purple cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span>Auto-Generate SEO</span>
              </button>
            </div>

            {/* Live Google Search Result Preview */}
            <div className="space-y-2">
              <label className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                <Search className="w-3.5 h-3.5" />
                Google SERP Snippet Preview
              </label>
              <div className="p-5 rounded-2xl bg-[#131314] border border-white/10 space-y-1.5 font-sans">
                <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono truncate">
                  <span className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center text-[10px] text-white">P</span>
                  <span className="text-zinc-300">pixarrow.com</span>
                  <span className="text-zinc-500">› case-study › {formData.slug || "brand-slug"}</span>
                </div>
                <h5 className="text-base text-[#8ab4f8] font-medium leading-snug hover:underline cursor-pointer">
                  {formData.metaTitle || (formData.title ? `${formData.title} Case Study | ${formData.category} Architecture & Development — Pixarrow` : "Project Case Study — Pixarrow")}
                </h5>
                <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
                  {formData.metaDescription || formData.description || "Comprehensive engineering breakdown, metrics, and architecture case study by Pixarrow."}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-white/70 uppercase tracking-wider">Client Live Website URL</label>
                  <span className="text-[10px] text-cyan-400 font-mono">Entity Link</span>
                </div>
                <input 
                  type="url" 
                  value={formData.liveUrl}
                  onChange={(e) => setFormData({ ...formData, liveUrl: e.target.value })}
                  placeholder="https://cahrz.com (or client domain)"
                  className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-3 text-sm font-mono text-cyan-300 focus:border-[#7C3AED] outline-none"
                />
                <p className="text-[10px] text-white/40">Creates Schema.org entity linking and a direct visit CTA on the case study.</p>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-white/70 uppercase tracking-wider">Client / Brand Name</label>
                <input 
                  type="text" 
                  value={formData.clientName}
                  onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                  placeholder="e.g. Cahrz"
                  className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-3 text-sm text-white focus:border-[#7C3AED] outline-none"
                />
                <p className="text-[10px] text-white/40">Client organization entity name indexed in Google Knowledge Graph.</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-white/70 uppercase tracking-wider">SEO Meta Title (Google Search Title)</label>
                <span className={`text-[10px] font-mono ${(formData.metaTitle?.length || 0) > 65 ? "text-amber-400" : "text-white/40"}`}>
                  {formData.metaTitle?.length || 0} / 60-65 chars
                </span>
              </div>
              <input 
                type="text" 
                value={formData.metaTitle}
                onChange={(e) => setFormData({ ...formData, metaTitle: e.target.value })}
                placeholder="e.g. Cahrz Case Study | On-Demand Vehicle Care App & Web Architecture — Pixarrow"
                className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-3 text-sm text-white focus:border-[#7C3AED] outline-none"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-white/70 uppercase tracking-wider">SEO Meta Description (Google Search Snippet)</label>
                <span className={`text-[10px] font-mono ${(formData.metaDescription?.length || 0) > 165 ? "text-amber-400" : "text-white/40"}`}>
                  {formData.metaDescription?.length || 0} / 150-160 chars
                </span>
              </div>
              <textarea 
                rows={2}
                value={formData.metaDescription}
                onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })}
                placeholder="e.g. Explore how Pixarrow engineered and scaled Cahrz with Next.js, sub-second latency, and +150% conversion lift..."
                className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-3 text-sm text-white focus:border-[#7C3AED] outline-none resize-none"
              />
            </div>

            {/* Target Keywords */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-white/70 uppercase tracking-wider">Target Search Keywords for Indexing</label>
                <span className="text-[10px] text-white/40">{formData.keywords.length} keywords configured</span>
              </div>
              <div className="flex gap-2">
                <input 
                  type="text"
                  value={keywordInput}
                  onChange={(e) => setKeywordInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); handleAddKeyword(); } }}
                  placeholder="Type target search term (e.g. 'cahrz website', 'cahrz app') and click Add"
                  className="flex-1 bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-3 text-sm text-white focus:border-[#7C3AED] outline-none"
                />
                <button 
                  type="button"
                  onClick={handleAddKeyword}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-2xl text-xs font-bold cursor-pointer"
                >
                  Add Keyword
                </button>
              </div>

              {formData.keywords.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {formData.keywords.map((kw, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-medium">
                      <span>{kw}</span>
                      <button type="button" onClick={() => handleRemoveKeyword(i)} className="hover:text-red-400">
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-end gap-4 pt-6 border-t border-white/10">
            <button 
              type="button"
              onClick={() => setIsEditorOpen(false)}
              className="px-6 py-3.5 text-white/50 hover:text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              Cancel
            </button>
            <button 
              disabled={saving}
              type="submit"
              className="px-8 py-3.5 bg-gradient-to-r from-[#7C3AED] to-[#FF007A] text-white rounded-2xl text-xs font-bold uppercase tracking-wider shadow-glow-purple hover:scale-105 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
              <span>{editingId ? "Save Changes" : "Publish Project"}</span>
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/10 pb-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">Dynamic Case Studies</h2>
          <p className="text-white/40 text-xs sm:text-sm">Manage projects showcased on /work and /case-study/[slug].</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={handleSeedDefaults}
            disabled={seeding}
            className="flex items-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-xs font-bold text-white transition-all cursor-pointer disabled:opacity-50"
            title="Seed initial 6 case studies into MongoDB"
          >
            {seeding ? <Loader2 className="w-4 h-4 animate-spin" /> : <Database className="w-4 h-4 text-cyan-400" />}
            <span>Seed 6 Core Studies</span>
          </button>

          <button 
            onClick={() => handleOpenEditor()}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#7C3AED] to-[#FF007A] text-white rounded-2xl text-xs font-bold uppercase tracking-wider shadow-glow-purple hover:scale-105 transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add Project</span>
          </button>
        </div>
      </div>

      {loading ? (
        <div className="py-24 text-center text-white/40 flex flex-col items-center justify-center">
          <Loader2 className="w-10 h-10 animate-spin text-purple-400 mb-4" />
          <p className="font-bold text-sm">Fetching projects from MongoDB...</p>
        </div>
      ) : projects.length === 0 ? (
        <div className="p-12 text-center border border-dashed border-white/10 rounded-3xl bg-white/[0.01]">
          <Layers className="w-12 h-12 text-white/20 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-white mb-2">No Dynamic Projects in Database Yet</h3>
          <p className="text-white/40 text-xs max-w-md mx-auto mb-6">
            Click &quot;Seed 6 Core Studies&quot; to populate your database with existing projects or click &quot;Add Project&quot; to create a new one.
          </p>
          <button 
            onClick={handleSeedDefaults}
            className="px-6 py-3 bg-brand-purple text-white rounded-xl text-xs font-bold"
          >
            Seed Initial 6 Projects
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj) => (
            <div 
              key={proj._id || proj.slug}
              className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-brand-purple/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-4 border border-white/10 bg-black/40">
                  {proj.image ? (
                    <img src={proj.image} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white/30 text-xs">No image</div>
                  )}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-bold text-purple-300 border border-white/10">
                      {proj.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 backdrop-blur-md text-[10px] font-bold text-emerald-300 border border-emerald-500/30">
                      {proj.metricHighlight}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-black text-white">{proj.title}</h3>
                    <p className="text-xs text-white/40 font-mono mt-0.5">/case-study/{proj.slug}</p>
                  </div>
                </div>

                <p className="text-xs text-white/70 line-clamp-2 mt-2 leading-relaxed">
                  {proj.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/5">
                <a 
                  href={`/case-study/${proj.slug}`} 
                  target="_blank"
                  className="text-xs text-cyan-400 hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>Preview Page</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => handleOpenEditor(proj)}
                    className="p-2.5 bg-white/5 hover:bg-white/15 text-white/80 hover:text-white rounded-xl transition-all cursor-pointer"
                    title="Edit Case Study"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => handleDelete(proj._id)}
                    className="p-2.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-xl transition-all cursor-pointer"
                    title="Delete Case Study"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* =========================================================================
   2. BRAND LOGOS & TRUSTED PARTNERS MANAGER (FULL SEO ENTITY ENGINE)
   ========================================================================= */
function PartnersManager() {
  const [partners, setPartners] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [uploadingLogo, setUploadingLogo] = useState(false);
  const [seeding, setSeeding] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    logo: "",
    isImage: false,
    style: "font-sans font-bold text-white/70 text-xl md:text-2xl",
    websiteUrl: "",
    caseStudySlug: "",
    industry: "Technology & Digital",
    description: "",
    order: 0,
    status: "published",
    seoKeywords: [] as string[],
  });

  const [keywordInput, setKeywordInput] = useState("");

  useEffect(() => {
    fetchPartners();
  }, []);

  const fetchPartners = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/partners");
      const json = await res.json();
      if (json.success) setPartners(json.data);
    } catch (e) {
      console.error("Fetch partners error:", e);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenEditor = (partner: any = null) => {
    if (partner) {
      setFormData({
        name: partner.name || "",
        logo: partner.logo || "",
        isImage: partner.isImage || false,
        style: partner.style || "font-sans font-bold text-white/70 text-xl md:text-2xl",
        websiteUrl: partner.websiteUrl || "",
        caseStudySlug: partner.caseStudySlug || "",
        industry: partner.industry || "Technology & Digital",
        description: partner.description || "",
        order: partner.order || 0,
        status: partner.status || "published",
        seoKeywords: partner.seoKeywords || [],
      });
      setEditingId(partner._id);
    } else {
      setFormData({
        name: "",
        logo: "",
        isImage: false,
        style: "font-sans font-bold text-white/70 text-xl md:text-2xl",
        websiteUrl: "",
        caseStudySlug: "",
        industry: "Technology & Digital",
        description: "",
        order: partners.length,
        status: "published",
        seoKeywords: [],
      });
      setEditingId(null);
    }
    setKeywordInput("");
    setIsEditorOpen(true);
  };

  const handleLogoUpload = async (file: File) => {
    setUploadingLogo(true);
    setStatusMessage("");
    try {
      const data = new FormData();
      data.append("file", file);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: data,
      });
      const json = await res.json();

      if (json.success && json.url) {
        setFormData(prev => ({ ...prev, logo: json.url, isImage: true }));
        if (json.storage === "r2") {
          setStatusMessage("Logo uploaded to Cloudflare R2 bucket!");
        } else {
          setStatusMessage("Logo saved.");
        }
      } else {
        alert(json.error || "Logo upload failed");
      }
    } catch (e: any) {
      alert("Upload failed: " + e.message);
    } finally {
      setUploadingLogo(false);
    }
  };

  const handleAddKeyword = () => {
    if (keywordInput.trim()) {
      const kw = keywordInput.trim();
      if (!formData.seoKeywords.includes(kw)) {
        setFormData(prev => ({
          ...prev,
          seoKeywords: [...prev.seoKeywords, kw]
        }));
      }
      setKeywordInput("");
    }
  };

  const handleRemoveKeyword = (index: number) => {
    setFormData(prev => ({
      ...prev,
      seoKeywords: prev.seoKeywords.filter((_, i) => i !== index)
    }));
  };

  const handleAutoGenerateSEO = () => {
    const brand = formData.name.trim() || "Brand";
    const ind = formData.industry || "Software & Technology";
    const brandLower = brand.toLowerCase();
    
    const autoKeywords = Array.from(new Set([
      brandLower,
      `${brandLower} website`,
      `${brandLower} app`,
      `${brandLower} case study`,
      `${brandLower} pixarrow client`,
      `${ind.toLowerCase()}`,
      "trusted brand partner"
    ]));

    setFormData(prev => ({
      ...prev,
      description: prev.description || `${brand} — Innovative ${ind} client engineered and accelerated by Pixarrow.`,
      seoKeywords: autoKeywords,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const url = editingId ? `/api/admin/partners/${editingId}` : "/api/admin/partners";
      const method = editingId ? "PATCH" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const json = await res.json();
      if (json.success) {
        setIsEditorOpen(false);
        fetchPartners();
      } else {
        alert(json.error || "Failed to save partner");
      }
    } catch (e: any) {
      alert("Save failed: " + e.message);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this brand partner?")) return;
    try {
      const res = await fetch(`/api/admin/partners/${id}`, { method: "DELETE" });
      const json = await res.json();
      if (json.success) fetchPartners();
    } catch (e) {
      console.error(e);
    }
  };

  const handleSeedDefaults = async () => {
    setSeeding(true);
    try {
      const res = await fetch("/api/admin/partners/seed", { method: "POST" });
      const json = await res.json();
      if (json.success) {
        alert(json.message);
        fetchPartners();
      }
    } catch (e: any) {
      alert("Seed failed: " + e.message);
    } finally {
      setSeeding(false);
    }
  };

  const typographyStylePresets = [
    { label: "Modern Sans Bold (e.g. Cahrz)", value: "font-sans font-bold text-white/70 text-xl md:text-2xl" },
    { label: "Technical Mono Spaced (e.g. AUST GOV)", value: "font-mono font-bold tracking-wide text-white/50 text-sm md:text-base" },
    { label: "High-End Serif Italic (e.g. LAY.)", value: "font-serif font-black tracking-tighter text-white/70 text-2xl md:text-3xl italic" },
    { label: "Extrabold Wide Sans (e.g. KIT.)", value: "font-sans font-extrabold tracking-widest text-white/60 text-lg md:text-xl" },
    { label: "Uppercase Heavy (e.g. TORQUE)", value: "font-sans font-bold tracking-tight text-white/70 text-lg md:text-xl uppercase" },
    { label: "Medium Wide Caps (e.g. CORQUE)", value: "font-sans font-medium tracking-widest text-white/60 text-lg md:text-xl uppercase" },
    { label: "Ultra Black Spaced (e.g. END.)", value: "font-sans font-black tracking-[0.2em] text-white/75 text-base md:text-lg" },
  ];

  if (isEditorOpen) {
    return (
      <div className="space-y-8 animate-in fade-in duration-300">
        <div className="flex justify-between items-center border-b border-white/10 pb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              {editingId ? "Edit Brand Partner" : "Add Brand Partner"}
            </h2>
            <p className="text-white/40 text-xs sm:text-sm">
              Manage trusted brand showcase, entity linkings, and Google Knowledge Graph association.
            </p>
          </div>
          <button 
            onClick={() => setIsEditorOpen(false)}
            className="p-3 bg-white/5 hover:bg-white/10 rounded-2xl text-white/70 hover:text-white transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-white/60 uppercase tracking-wider">Brand / Client Name *</label>
              <input 
                required
                type="text" 
                value={formData.name}
                onChange={(e) => {
                  const val = e.target.value;
                  setFormData(prev => ({
                    ...prev, 
                    name: val,
                    logo: prev.isImage ? prev.logo : (prev.logo || val)
                  }));
                }}
                placeholder="e.g. Cahrz, Lay, Australian Government"
                className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-3.5 text-sm font-bold text-white focus:border-[#7C3AED] outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-white/60 uppercase tracking-wider">Industry / Sector</label>
              <input 
                type="text" 
                value={formData.industry}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                placeholder="e.g. Automotive & Mobility, FinTech, eCommerce"
                className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-3.5 text-sm font-bold text-cyan-300 focus:border-[#7C3AED] outline-none"
              />
            </div>
          </div>

          {/* Logo Format Toggle: Image (R2) vs Stylized Typography */}
          <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 space-y-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <label className="text-xs font-bold text-white/80 uppercase tracking-wider flex items-center gap-2">
                  <ImageIcon className="w-4 h-4 text-purple-400" />
                  Logo Type & Visual Rendering *
                </label>
                <p className="text-[11px] text-white/40">Choose between an uploaded image or clean stylized typography logo.</p>
              </div>

              <div className="flex items-center gap-2 bg-white/5 p-1 rounded-2xl border border-white/10">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, isImage: false, logo: formData.logo && formData.logo.startsWith("http") ? formData.name : (formData.logo || formData.name) })}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    !formData.isImage ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white" : "text-white/50 hover:text-white"
                  }`}
                >
                  Stylized Typography
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, isImage: true })}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    formData.isImage ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white" : "text-white/50 hover:text-white"
                  }`}
                >
                  Image Logo (R2)
                </button>
              </div>
            </div>

            {formData.isImage ? (
              <div className="space-y-4 pt-2">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <span className="text-xs text-white/60 font-mono">Upload to Cloudflare R2 bucket:</span>
                  <label className="px-5 py-2.5 bg-gradient-to-r from-[#7C3AED] to-[#FF007A] text-white rounded-xl text-xs font-bold cursor-pointer hover:scale-105 transition-all shadow-glow-purple flex items-center gap-2">
                    {uploadingLogo ? <Loader2 className="w-4 h-4 animate-spin" /> : <UploadCloud className="w-4 h-4" />}
                    <span>{uploadingLogo ? "Uploading..." : "Upload Logo to R2"}</span>
                    <input 
                      type="file" 
                      accept="image/*" 
                      className="hidden" 
                      disabled={uploadingLogo}
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleLogoUpload(file);
                      }}
                    />
                  </label>
                </div>

                <input 
                  required
                  type="text" 
                  value={formData.logo}
                  onChange={(e) => setFormData({ ...formData, logo: e.target.value })}
                  placeholder="https://... image URL from R2 or CDN"
                  className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-3 text-sm font-mono text-cyan-300 focus:border-[#7C3AED] outline-none"
                />

                {formData.logo && (
                  <div className="p-4 rounded-2xl bg-black/60 border border-white/10 inline-flex items-center justify-center">
                    <img src={formData.logo} alt="Preview" className="h-10 max-w-[200px] object-contain" />
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-4 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-white/60 uppercase tracking-wider">Logo Text Display *</label>
                    <input 
                      required
                      type="text" 
                      value={formData.logo}
                      onChange={(e) => setFormData({ ...formData, logo: e.target.value })}
                      placeholder="e.g. CAHRZ, LAY., AUST GOV"
                      className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-3 text-sm font-bold text-white focus:border-[#7C3AED] outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-white/60 uppercase tracking-wider">Preset Typography Style</label>
                    <select
                      value={formData.style}
                      onChange={(e) => setFormData({ ...formData, style: e.target.value })}
                      className="w-full bg-[#080214] border border-white/10 rounded-2xl px-5 py-3 text-xs font-bold text-purple-300 focus:border-[#7C3AED] outline-none"
                    >
                      {typographyStylePresets.map((preset, idx) => (
                        <option key={idx} value={preset.value}>{preset.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Live Logo Visual Preview */}
                <div className="p-6 rounded-2xl bg-[#080214] border border-white/10 flex flex-col items-center justify-center gap-2">
                  <span className="text-[10px] uppercase font-bold text-white/40 tracking-widest">Live Logo Preview:</span>
                  <div className={`${formData.style || "text-xl font-bold text-white/70"} select-none filter drop-shadow-[0_0_10px_rgba(255,255,255,0.05)]`}>
                    {formData.logo || "LOGO PREVIEW"}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* =========================================================================
             GOOGLE SEO ENTITY & KNOWLEDGE GRAPH ENGINE
             ========================================================================= */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-purple-950/20 via-[#0a0518] to-cyan-950/20 border border-purple-500/30 space-y-6 shadow-2xl">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/10 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-cyan-400" />
                  <h4 className="text-base font-black text-white">Google Knowledge Graph Entity SEO</h4>
                </div>
                <p className="text-xs text-white/50 mt-1">
                  Connect this partner brand with Google Knowledge Graph entity links and case studies.
                </p>
              </div>

              <button
                type="button"
                onClick={handleAutoGenerateSEO}
                className="px-4 py-2.5 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white rounded-xl text-xs font-bold flex items-center gap-2 transition-all shadow-glow-purple cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span>Auto-Generate SEO</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/70 uppercase tracking-wider">Client Official Live URL (Entity Link)</label>
                <input 
                  type="url" 
                  value={formData.websiteUrl}
                  onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                  placeholder="https://cahrz.com (or client domain)"
                  className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-3 text-sm font-mono text-cyan-300 focus:border-[#7C3AED] outline-none"
                />
                <p className="text-[10px] text-white/40">Creates Schema.org entity linking back to client's live web presence.</p>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-white/70 uppercase tracking-wider">Case Study Slug (Optional)</label>
                <input 
                  type="text" 
                  value={formData.caseStudySlug}
                  onChange={(e) => setFormData({ ...formData, caseStudySlug: e.target.value })}
                  placeholder="e.g. cahrz, scissor-wala, ausloan"
                  className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-3 text-sm font-mono text-purple-300 focus:border-[#7C3AED] outline-none"
                />
                <p className="text-[10px] text-white/40">If provided, clicking the brand logo navigates to its full case study.</p>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-white/70 uppercase tracking-wider">Brand SEO Description / Knowledge Graph Summary</label>
              <textarea 
                rows={2}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Brief 1-liner summary indexed by Google Knowledge Graph..."
                className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-3 text-sm text-white focus:border-[#7C3AED] outline-none resize-none"
              />
            </div>

            {/* Target Keywords */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-white/70 uppercase tracking-wider">Brand Target SEO Keywords</label>
                <span className="text-[10px] text-white/40">{formData.seoKeywords.length} keywords configured</span>
              </div>
              <div className="flex gap-2">
                <input 
                  type="text"
                  value={keywordInput}
                  onChange={(e) => setKeywordInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); handleAddKeyword(); } }}
                  placeholder="Type target term (e.g. 'cahrz app', 'lay fashion') and click Add"
                  className="flex-1 bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-3 text-sm text-white focus:border-[#7C3AED] outline-none"
                />
                <button 
                  type="button"
                  onClick={handleAddKeyword}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-2xl text-xs font-bold cursor-pointer"
                >
                  Add Keyword
                </button>
              </div>

              {formData.seoKeywords.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {formData.seoKeywords.map((kw, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-medium">
                      <span>{kw}</span>
                      <button type="button" onClick={() => handleRemoveKeyword(i)} className="hover:text-red-400">
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-end gap-4 pt-6 border-t border-white/10">
            <button 
              type="button"
              onClick={() => setIsEditorOpen(false)}
              className="px-6 py-3.5 text-white/50 hover:text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              Cancel
            </button>
            <button 
              disabled={saving}
              type="submit"
              className="px-8 py-3.5 bg-gradient-to-r from-[#7C3AED] to-[#FF007A] text-white rounded-2xl text-xs font-bold uppercase tracking-wider shadow-glow-purple hover:scale-105 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
              <span>{editingId ? "Save Changes" : "Publish Brand Logo"}</span>
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/10 pb-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">Trusted Brand Logos &amp; Partners</h2>
          <p className="text-white/40 text-xs sm:text-sm">
            Manage partner logos showcased on the homepage with full Google Knowledge Graph SEO entity schemas.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={handleSeedDefaults}
            disabled={seeding}
            className="flex items-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-xs font-bold text-white transition-all cursor-pointer disabled:opacity-50"
            title="Seed initial 9 partner brands into MongoDB"
          >
            {seeding ? <Loader2 className="w-4 h-4 animate-spin" /> : <Database className="w-4 h-4 text-cyan-400" />}
            <span>Seed 9 Core Brands</span>
          </button>

          <button 
            onClick={() => handleOpenEditor()}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#7C3AED] to-[#FF007A] text-white rounded-2xl text-xs font-bold uppercase tracking-wider shadow-glow-purple hover:scale-105 transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add Brand Logo</span>
          </button>
        </div>
      </div>

      {loading ? (
        <div className="py-24 text-center text-white/40 flex flex-col items-center justify-center">
          <Loader2 className="w-10 h-10 animate-spin text-purple-400 mb-4" />
          <p className="font-bold text-sm">Fetching brand partners from MongoDB...</p>
        </div>
      ) : partners.length === 0 ? (
        <div className="p-12 text-center border border-dashed border-white/10 rounded-3xl bg-white/[0.01]">
          <Award className="w-12 h-12 text-white/20 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-white mb-2">No Dynamic Brand Partners in Database Yet</h3>
          <p className="text-white/40 text-xs max-w-md mx-auto mb-6">
            Click &quot;Seed 9 Core Brands&quot; to populate your database with existing logos or click &quot;Add Brand Logo&quot; to create a new one.
          </p>
          <button 
            onClick={handleSeedDefaults}
            className="px-6 py-3 bg-brand-purple text-white rounded-xl text-xs font-bold"
          >
            Seed Initial 9 Brand Partners
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner) => (
            <div 
              key={partner._id || partner.name}
              className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-brand-purple/40 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Visual Brand Preview Box */}
                <div className="h-24 w-full rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center p-4 mb-4">
                  {partner.isImage ? (
                    <img src={partner.logo} alt={partner.name} className="max-h-12 max-w-[180px] object-contain group-hover:scale-105 transition-transform" />
                  ) : (
                    <div className={`${partner.style || "text-lg font-bold text-white/70"} select-none group-hover:scale-105 transition-transform`}>
                      {partner.logo}
                    </div>
                  )}
                </div>

                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-black text-white">{partner.name}</h3>
                    <p className="text-xs text-cyan-400 font-medium">{partner.industry || "General Technology"}</p>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-[10px] font-bold text-emerald-400 border border-emerald-500/20">
                    {partner.status || "published"}
                  </span>
                </div>

                {partner.description && (
                  <p className="text-xs text-white/60 line-clamp-2 mt-1 leading-relaxed">
                    {partner.description}
                  </p>
                )}

                {/* Entity Links Chips */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {partner.websiteUrl && (
                    <a 
                      href={partner.websiteUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[10px] font-mono text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 px-2 py-0.5 rounded-lg flex items-center gap-1 hover:underline truncate max-w-[180px]"
                    >
                      <ExternalLink className="w-2.5 h-2.5 shrink-0" />
                      <span className="truncate">{partner.websiteUrl.replace(/^https?:\/\//, '')}</span>
                    </a>
                  )}

                  {partner.caseStudySlug && (
                    <a 
                      href={`/case-study/${partner.caseStudySlug}`} 
                      target="_blank" 
                      className="text-[10px] font-mono text-purple-300 bg-purple-950/40 border border-purple-500/30 px-2 py-0.5 rounded-lg flex items-center gap-1 hover:underline"
                    >
                      <Sparkles className="w-2.5 h-2.5 shrink-0 text-yellow-300" />
                      <span>/case-study/{partner.caseStudySlug}</span>
                    </a>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/5">
                <span className="text-[11px] text-white/40 font-mono">
                  {partner.seoKeywords?.length || 0} SEO Keywords
                </span>

                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => handleOpenEditor(partner)}
                    className="p-2.5 bg-white/5 hover:bg-white/15 text-white/80 hover:text-white rounded-xl transition-all cursor-pointer"
                    title="Edit Partner"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => handleDelete(partner._id)}
                    className="p-2.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-xl transition-all cursor-pointer"
                    title="Delete Partner"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* =========================================================================
   3. BLOGS & EDITORIAL FORGE
   ========================================================================= */
function BlogsManager() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [seeding, setSeeding] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    content: "",
    excerpt: "",
    image: "",
    category: "Engineering",
    author: "Anuj Sharma",
    status: "published",
    metaTitle: "",
    metaDescription: "",
  });

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/blogs");
      const json = await res.json();
      if (json.success) setBlogs(json.data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenEditor = (blog: any = null) => {
    if (blog) {
      setFormData({
        title: blog.title || "",
        slug: blog.slug || "",
        content: blog.content || "",
        excerpt: blog.excerpt || "",
        image: blog.image || "",
        category: blog.category || "Engineering",
        author: blog.author || "Anuj Sharma",
        status: blog.status || "published",
        metaTitle: blog.metaTitle || "",
        metaDescription: blog.metaDescription || "",
      });
      setEditingId(blog._id);
    } else {
      setFormData({
        title: "",
        slug: "",
        content: "",
        excerpt: "",
        image: "",
        category: "Engineering",
        author: "Anuj Sharma",
        status: "published",
        metaTitle: "",
        metaDescription: "",
      });
      setEditingId(null);
    }
    setIsEditorOpen(true);
  };

  const handleImageUpload = async (file: File) => {
    setUploadingImage(true);
    try {
      const data = new FormData();
      data.append("file", file);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: data,
      });
      const json = await res.json();

      if (json.success && json.url) {
        setFormData(prev => ({ ...prev, image: json.url }));
        if (json.warning) {
          alert(`Image saved locally. Note: ${json.warning}`);
        }
      } else {
        alert(json.error || "Upload failed");
      }
    } catch (e: any) {
      alert("Upload failed: " + e.message);
    } finally {
      setUploadingImage(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const url = editingId ? `/api/admin/blogs/${editingId}` : "/api/admin/blogs";
      const method = editingId ? "PATCH" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const json = await res.json();
      if (json.success) {
        setIsEditorOpen(false);
        fetchBlogs();
      } else {
        alert(json.error || "Failed to save blog");
      }
    } catch (e: any) {
      alert("Save failed: " + e.message);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this article?")) return;
    try {
      const res = await fetch(`/api/admin/blogs/${id}`, { method: "DELETE" });
      const json = await res.json();
      if (json.success) fetchBlogs();
    } catch (e) {
      console.error(e);
    }
  };

  const handleSeedDefaults = async () => {
    setSeeding(true);
    try {
      const res = await fetch("/api/admin/blogs/seed", { method: "POST" });
      const json = await res.json();
      if (json.success) {
        alert(json.message);
        fetchBlogs();
      }
    } catch (e: any) {
      alert("Seed failed: " + e.message);
    } finally {
      setSeeding(false);
    }
  };

  if (isEditorOpen) {
    return (
      <div className="space-y-8 animate-in fade-in duration-300">
        <div className="flex justify-between items-center border-b border-white/10 pb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              {editingId ? "Edit Article" : "Compose New Dispatch"}
            </h2>
            <p className="text-white/40 text-xs sm:text-sm">Articles appear automatically on /blog and /blog/[slug].</p>
          </div>
          <button 
            onClick={() => setIsEditorOpen(false)}
            className="p-3 bg-white/5 hover:bg-white/10 rounded-2xl text-white/70 hover:text-white transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-white/60 uppercase tracking-wider">Article Title *</label>
              <input 
                required
                type="text" 
                value={formData.title}
                onChange={(e) => setFormData({
                  ...formData, 
                  title: e.target.value,
                  slug: editingId ? formData.slug : e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
                })}
                placeholder="e.g. Next.js 16 Edge Architecture for eCommerce"
                className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-3.5 text-sm font-bold text-white focus:border-[#7C3AED] outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-white/60 uppercase tracking-wider">Slug (URL Path) *</label>
              <input 
                required
                type="text" 
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                placeholder="e.g. nextjs-16-edge-architecture"
                className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-3.5 text-sm font-mono text-purple-300 focus:border-[#7C3AED] outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-white/60 uppercase tracking-wider">Category</label>
              <select 
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full bg-[#080214] border border-white/10 rounded-2xl px-5 py-3.5 text-sm font-bold text-white focus:border-[#7C3AED] outline-none"
              >
                <option value="Engineering">Engineering</option>
                <option value="eCommerce">eCommerce</option>
                <option value="Growth & SEO">Growth &amp; SEO</option>
                <option value="AI & Agents">AI &amp; Agents</option>
                <option value="Design">Design Systems</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-white/60 uppercase tracking-wider">Author</label>
              <input 
                type="text" 
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                placeholder="Anuj Sharma (CTO)"
                className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-3.5 text-sm font-bold text-white focus:border-[#7C3AED] outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-white/60 uppercase tracking-wider">Publish Status</label>
              <select 
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full bg-[#080214] border border-white/10 rounded-2xl px-5 py-3.5 text-sm font-bold text-white focus:border-[#7C3AED] outline-none"
              >
                <option value="published">Published (Live)</option>
                <option value="draft">Draft (Hidden)</option>
              </select>
            </div>
          </div>

          {/* Image Upload Box with Cloudflare R2 */}
          <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 space-y-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <label className="text-xs font-bold text-white/80 uppercase tracking-wider flex items-center gap-2">
                  <UploadCloud className="w-4 h-4 text-purple-400" />
                  Hero Banner Image (Cloudflare R2 Bucket)
                </label>
                <p className="text-[11px] text-white/40">Upload banner directly to Cloudflare R2 bucket.</p>
              </div>

              <label className="px-5 py-2.5 bg-gradient-to-r from-[#7C3AED] to-[#FF007A] text-white rounded-xl text-xs font-bold cursor-pointer hover:scale-105 transition-all shadow-glow-purple flex items-center gap-2">
                {uploadingImage ? <Loader2 className="w-4 h-4 animate-spin" /> : <UploadCloud className="w-4 h-4" />}
                <span>{uploadingImage ? "Uploading to R2..." : "Upload Image to R2"}</span>
                <input 
                  type="file" 
                  accept="image/*" 
                  className="hidden" 
                  disabled={uploadingImage}
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleImageUpload(file);
                  }}
                />
              </label>
            </div>

            <input 
              type="text" 
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              placeholder="https://..."
              className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-3 text-sm font-mono text-cyan-300 focus:border-[#7C3AED] outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-white/60 uppercase tracking-wider">Excerpt (Article Hook) *</label>
            <textarea 
              required
              rows={2}
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              placeholder="A compelling summary that pulls readers in..."
              className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-3 text-sm text-white focus:border-[#7C3AED] outline-none resize-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-white/60 uppercase tracking-wider">Article Content (Markdown Supported) *</label>
            <textarea 
              required
              rows={12}
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              placeholder="Write full article in Markdown format (# Heading, ## Subheading, lists, code snippets, etc.)..."
              className="w-full bg-white/[0.04] border border-white/10 rounded-2xl p-5 text-sm font-mono text-white/90 focus:border-[#7C3AED] outline-none"
            />
          </div>

          <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Globe className="w-4 h-4 text-cyan-400" />
              SEO &amp; OpenGraph Snippet
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-white/40 uppercase">Meta Title</label>
                <input 
                  type="text" 
                  value={formData.metaTitle}
                  onChange={(e) => setFormData({ ...formData, metaTitle: e.target.value })}
                  placeholder="Custom title tag..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-white/40 uppercase">Meta Description</label>
                <input 
                  type="text" 
                  value={formData.metaDescription}
                  onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })}
                  placeholder="Custom meta description..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4 pt-4 border-t border-white/10">
            <button 
              type="button"
              onClick={() => setIsEditorOpen(false)}
              className="px-6 py-3.5 text-white/50 hover:text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              Cancel
            </button>
            <button 
              disabled={saving}
              type="submit"
              className="px-8 py-3.5 bg-gradient-to-r from-[#7C3AED] to-[#FF007A] text-white rounded-2xl text-xs font-bold uppercase tracking-wider shadow-glow-purple hover:scale-105 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
              <span>{editingId ? "Update Article" : "Launch Article"}</span>
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/10 pb-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">Editorial Forge &amp; Articles</h2>
          <p className="text-white/40 text-xs sm:text-sm">Manage publications indexed across /blog and /rss.xml.</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={handleSeedDefaults}
            disabled={seeding}
            className="flex items-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-xs font-bold text-white transition-all cursor-pointer disabled:opacity-50"
            title="Seed editorial blogs into MongoDB"
          >
            {seeding ? <Loader2 className="w-4 h-4 animate-spin" /> : <Database className="w-4 h-4 text-cyan-400" />}
            <span>Seed 5 Editorial Blueprints</span>
          </button>

          <button 
            onClick={() => handleOpenEditor()}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#7C3AED] to-[#FF007A] text-white rounded-2xl text-xs font-bold uppercase tracking-wider shadow-glow-purple hover:scale-105 transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>New Dispatch</span>
          </button>
        </div>
      </div>

      {loading ? (
        <div className="py-24 text-center text-white/40 flex flex-col items-center justify-center">
          <Loader2 className="w-10 h-10 animate-spin text-purple-400 mb-4" />
          <p className="font-bold text-sm">Loading articles from MongoDB...</p>
        </div>
      ) : blogs.length === 0 ? (
        <div className="p-12 text-center border border-dashed border-white/10 rounded-3xl bg-white/[0.01]">
          <FileText className="w-12 h-12 text-white/20 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-white mb-2">No Articles in Database</h3>
          <p className="text-white/40 text-xs max-w-md mx-auto mb-6">
            Click &quot;Seed 5 Editorial Blueprints&quot; to restore default articles or create a new one.
          </p>
          <button 
            onClick={handleSeedDefaults}
            className="px-6 py-3 bg-brand-purple text-white rounded-xl text-xs font-bold"
          >
            Seed 5 Editorial Blueprints
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {blogs.map((b) => (
            <div 
              key={b._id}
              className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-brand-purple/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 group"
            >
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-white/5 overflow-hidden flex-shrink-0 border border-white/10">
                  {b.image ? (
                    <img src={b.image} alt="" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white/20">
                      <FileText className="w-6 h-6" />
                    </div>
                  )}
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-brand-purple/20 text-purple-300 text-[10px] font-bold border border-brand-purple/30">
                      {b.category}
                    </span>
                    <span className={`text-[10px] font-bold uppercase ${b.status === 'published' ? 'text-emerald-400' : 'text-amber-400'}`}>
                      • {b.status}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                    {b.title}
                  </h3>
                  <p className="text-xs text-white/40 font-mono mt-0.5">
                    /blog/{b.slug} • {b.author}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end md:self-center">
                <a 
                  href={`/blog/${b.slug}`} 
                  target="_blank"
                  className="p-2.5 bg-white/5 hover:bg-white/15 text-white/80 hover:text-white rounded-xl transition-all"
                  title="View live post"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button 
                  onClick={() => handleOpenEditor(b)}
                  className="p-2.5 bg-white/5 hover:bg-white/15 text-white/80 hover:text-white rounded-xl transition-all cursor-pointer"
                  title="Edit post"
                >
                  <Edit3 className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => handleDelete(b._id)}
                  className="p-2.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-xl transition-all cursor-pointer"
                  title="Delete post"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* =========================================================================
   3. SEO & OPENGRAPH CONTROLLER
   ========================================================================= */
function SEOManager() {
  const [seoList, setSeoList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedRoute, setSelectedRoute] = useState("/");
  const [customRouteInput, setCustomRouteInput] = useState("");
  const [showAddCustom, setShowAddCustom] = useState(false);
  const [saving, setSaving] = useState(false);
  const [uploadingOG, setUploadingOG] = useState(false);
  const [saveStatus, setSaveStatus] = useState("");
  const [pingingIndexNow, setPingingIndexNow] = useState(false);
  const [indexNowStatus, setIndexNowStatus] = useState<string | null>(null);

  const handlePingAllEngines = async () => {
    setPingingIndexNow(true);
    setIndexNowStatus(null);
    try {
      const res = await fetch("/api/admin/indexnow", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      const json = await res.json();
      if (json.success) {
        setIndexNowStatus(`Success! Broadcasted ${json.submittedUrlsCount} URLs to Bing, Yahoo, Yandex & IndexNow Network.`);
      } else {
        setIndexNowStatus(`Failed: ${json.error || 'Check network'}`);
      }
    } catch (e: any) {
      setIndexNowStatus(`Error: ${e.message}`);
    } finally {
      setPingingIndexNow(false);
    }
  };

  const defaultRoutes = [
    { path: "/", label: "Home Page" },
    { path: "/work", label: "Selected Work" },
    { path: "/services", label: "Core Services" },
    { path: "/about", label: "About Pixarrow" },
    { path: "/blog", label: "Insights & Blog" },
    { path: "/calculator", label: "Cost Estimator" },
    { path: "/book", label: "Discovery Call" },
    { path: "/process", label: "Engineering Process" },
    { path: "/industries", label: "Industries & Verticals" },
  ];

  const [currentSEO, setCurrentSEO] = useState({
    pagePath: "/",
    title: "Pixarrow — Premium Digital Growth & Web Engineering Agency",
    description: "Pixarrow engineers mission-critical web applications, high-converting eCommerce platforms, and custom software systems with measurable ROI.",
    keywords: "Next.js 16, Web Development, Mobile Apps, High-AOV eCommerce, Performance Marketing",
    ogImage: "/logo.png",
  });

  useEffect(() => {
    fetchSEO();
  }, []);

  const fetchSEO = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/seo");
      const json = await res.json();
      if (json.success && json.data) {
        setSeoList(json.data);
        const homeSEO = json.data.find((s: any) => s.pagePath === selectedRoute);
        if (homeSEO) {
          setCurrentSEO(homeSEO);
        }
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectRoute = (path: string) => {
    setSelectedRoute(path);
    setSaveStatus("");
    const existing = seoList.find((s: any) => s.pagePath === path);
    if (existing) {
      setCurrentSEO({
        pagePath: existing.pagePath,
        title: existing.title || "",
        description: existing.description || "",
        keywords: existing.keywords || "",
        ogImage: existing.ogImage || "",
      });
    } else {
      const matchingDefault = defaultRoutes.find(r => r.path === path);
      setCurrentSEO({
        pagePath: path,
        title: matchingDefault ? `Pixarrow — ${matchingDefault.label}` : `Pixarrow — ${path}`,
        description: `Explore Pixarrow's ${path} for high-growth digital engineering.`,
        keywords: "Pixarrow, Next.js, Engineering",
        ogImage: "/logo.png",
      });
    }
  };

  const handleAddCustomRoute = () => {
    let clean = customRouteInput.trim();
    if (!clean.startsWith("/")) clean = "/" + clean;
    if (clean) {
      handleSelectRoute(clean);
      setShowAddCustom(false);
      setCustomRouteInput("");
    }
  };

  const handleOGUpload = async (file: File) => {
    setUploadingOG(true);
    try {
      const data = new FormData();
      data.append("file", file);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: data,
      });
      const json = await res.json();

      if (json.success && json.url) {
        setCurrentSEO(prev => ({ ...prev, ogImage: json.url }));
      } else {
        alert(json.error || "Upload failed");
      }
    } catch (e: any) {
      alert("Upload error: " + e.message);
    } finally {
      setUploadingOG(false);
    }
  };

  const handleSaveSEO = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSaveStatus("");
    try {
      const res = await fetch("/api/admin/seo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(currentSEO),
      });
      const json = await res.json();

      if (json.success) {
        setSaveStatus("Saved successfully to MongoDB!");
        fetchSEO();
      } else {
        alert(json.error || "Failed to update SEO");
      }
    } catch (e: any) {
      alert("Save failed: " + e.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Top Banner with 1-Click Multi-Engine Indexing */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 p-6 sm:p-8 rounded-[2.5rem] bg-gradient-to-r from-[#170535] via-[#100326] to-[#080214] border border-[#7C3AED]/30 shadow-2xl">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-black uppercase tracking-wider border border-emerald-500/30 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-300" />
              Active Autonomous SEO &amp; GEO Engine
            </span>
            <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-black uppercase tracking-wider border border-cyan-500/30">
              IndexNow + LLM Standard Ready
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">Global Search &amp; AI Discovery Controller</h2>
          <p className="text-white/60 text-xs sm:text-sm max-w-2xl">
            Real-time multi-engine synchronization for Google, Bing, Yahoo, Yandex, ChatGPT Search, Claude, Gemini &amp; Perplexity AI.
          </p>

          {/* AI Search Endpoints */}
          <div className="flex flex-wrap gap-2 pt-2">
            <a href="/llms.txt" target="_blank" className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white text-[11px] font-mono font-bold flex items-center gap-1 border border-white/10">
              <span>/llms.txt</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a href="/llms-full.txt" target="_blank" className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white text-[11px] font-mono font-bold flex items-center gap-1 border border-white/10">
              <span>/llms-full.txt</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a href="/sitemap.xml" target="_blank" className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white text-[11px] font-mono font-bold flex items-center gap-1 border border-white/10">
              <span>/sitemap.xml</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a href="/rss.xml" target="_blank" className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white text-[11px] font-mono font-bold flex items-center gap-1 border border-white/10">
              <span>/rss.xml</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a href="/robots.txt" target="_blank" className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white text-[11px] font-mono font-bold flex items-center gap-1 border border-white/10">
              <span>/robots.txt</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
          <button
            onClick={handlePingAllEngines}
            disabled={pingingIndexNow}
            className="px-6 py-4 rounded-2xl bg-gradient-to-r from-[#7C3AED] via-[#FF007A] to-[#00DFD8] text-white font-extrabold text-xs uppercase tracking-wider shadow-glow-purple hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {pingingIndexNow ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Broadcasting to Engines...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>⚡ Instant Index All URLs (IndexNow)</span>
              </>
            )}
          </button>
        </div>
      </div>

      {indexNowStatus && (
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-bold flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
          <span>{indexNowStatus}</span>
        </div>
      )}

      {/* Route Selector Strip */}
      <div className="flex flex-wrap items-center gap-2 p-4 rounded-2xl bg-white/[0.02] border border-white/10">
        {defaultRoutes.map((r) => (
          <button
            key={r.path}
            onClick={() => handleSelectRoute(r.path)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              selectedRoute === r.path
                ? "bg-brand-purple text-white shadow-glow-purple border border-transparent"
                : "bg-white/5 hover:bg-white/10 text-white/60 hover:text-white border border-white/5"
            }`}
          >
            {r.label} ({r.path})
          </button>
        ))}

        {seoList.filter(s => !defaultRoutes.some(d => d.path === s.pagePath)).map((custom) => (
          <button
            key={custom.pagePath}
            onClick={() => handleSelectRoute(custom.pagePath)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              selectedRoute === custom.pagePath
                ? "bg-brand-purple text-white shadow-glow-purple"
                : "bg-white/5 text-white/60 hover:text-white"
            }`}
          >
            {custom.pagePath}
          </button>
        ))}

        <button 
          onClick={() => setShowAddCustom(!showAddCustom)}
          className="px-3 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-xs font-bold text-white flex items-center gap-1 cursor-pointer"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add Custom Route</span>
        </button>
      </div>

      {showAddCustom && (
        <div className="flex gap-2 p-4 bg-white/[0.03] border border-white/10 rounded-2xl animate-in fade-in">
          <input 
            type="text" 
            value={customRouteInput}
            onChange={(e) => setCustomRouteInput(e.target.value)}
            placeholder="e.g. /landing/fintech or /hire-developers"
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs text-white"
          />
          <button 
            onClick={handleAddCustomRoute}
            className="px-5 py-2 bg-brand-purple text-white rounded-xl text-xs font-bold cursor-pointer"
          >
            Set Route
          </button>
        </div>
      )}

      {/* Editor & Live Previews Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Form Inputs (7 cols) */}
        <form onSubmit={handleSaveSEO} className="lg:col-span-7 space-y-6">
          <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 space-y-5">
            <div className="flex justify-between items-center">
              <span className="px-3 py-1 rounded-full bg-brand-purple/20 text-purple-300 text-xs font-bold border border-brand-purple/30">
                Route: {selectedRoute}
              </span>
              {saveStatus && (
                <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {saveStatus}
                </span>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-white/60 uppercase tracking-wider">Meta Title *</label>
              <input 
                required
                type="text" 
                value={currentSEO.title}
                onChange={(e) => setCurrentSEO({ ...currentSEO, title: e.target.value })}
                placeholder="Google SERP Title (50-60 chars optimal)"
                className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-3 text-sm font-bold text-white focus:border-[#7C3AED] outline-none"
              />
              <span className="text-[10px] text-white/30 block text-right">{currentSEO.title.length} / 60 characters</span>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-white/60 uppercase tracking-wider">Meta Description *</label>
              <textarea 
                required
                rows={3}
                value={currentSEO.description}
                onChange={(e) => setCurrentSEO({ ...currentSEO, description: e.target.value })}
                placeholder="Search snippet summary (140-160 chars optimal)"
                className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-3 text-sm text-white focus:border-[#7C3AED] outline-none resize-none"
              />
              <span className="text-[10px] text-white/30 block text-right">{currentSEO.description.length} / 160 characters</span>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-white/60 uppercase tracking-wider">Target Keywords (Comma Separated)</label>
              <input 
                type="text" 
                value={currentSEO.keywords}
                onChange={(e) => setCurrentSEO({ ...currentSEO, keywords: e.target.value })}
                placeholder="Next.js agency, web development, cloud software"
                className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-3 text-sm text-white focus:border-[#7C3AED] outline-none"
              />
            </div>

            {/* OG Image Uploader */}
            <div className="space-y-3 pt-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-white/60 uppercase tracking-wider">OpenGraph Social Share Image</label>
                <label className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-[10px] font-bold cursor-pointer flex items-center gap-1">
                  {uploadingOG ? <Loader2 className="w-3 h-3 animate-spin" /> : <UploadCloud className="w-3 h-3" />}
                  <span>Upload to R2</span>
                  <input 
                    type="file" 
                    accept="image/*" 
                    className="hidden" 
                    disabled={uploadingOG}
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleOGUpload(file);
                    }}
                  />
                </label>
              </div>
              <input 
                type="text" 
                value={currentSEO.ogImage}
                onChange={(e) => setCurrentSEO({ ...currentSEO, ogImage: e.target.value })}
                placeholder="/logo.png or https://..."
                className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-2.5 text-xs font-mono text-cyan-300 focus:border-[#7C3AED] outline-none"
              />
            </div>

            <button 
              disabled={saving}
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-[#7C3AED] to-[#FF007A] text-white rounded-2xl font-bold text-xs uppercase tracking-wider shadow-glow-purple hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
              <span>Save Route SEO Configuration</span>
            </button>
          </div>
        </form>

        {/* Live SERP & Social Previews (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Google Search Result Preview */}
          <div className="p-6 rounded-3xl bg-[#202124] border border-white/10 space-y-3">
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-wider">Live Google SERP Preview</span>
            
            <div className="bg-[#1f1f1f] p-4 rounded-xl space-y-1">
              <div className="flex items-center gap-2 text-[11px] text-[#bdc1c6]">
                <div className="w-4 h-4 rounded-full bg-purple-500/30 flex items-center justify-center text-[9px] font-bold text-white">P</div>
                <span className="truncate">https://pixarrow.com{selectedRoute === '/' ? '' : selectedRoute}</span>
              </div>
              <h4 className="text-base text-[#8ab4f8] font-medium hover:underline cursor-pointer line-clamp-1">
                {currentSEO.title || "Pixarrow Title"}
              </h4>
              <p className="text-xs text-[#bdc1c6] line-clamp-2 leading-relaxed">
                {currentSEO.description || "Pixarrow meta description..."}
              </p>
            </div>
          </div>

          {/* Social Share Card Preview */}
          <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 space-y-3">
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-wider">Twitter / LinkedIn / OG Card Preview</span>
            
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0c051a]">
              <div className="aspect-[1.91/1] w-full bg-black/60 relative overflow-hidden">
                {currentSEO.ogImage ? (
                  <img src={currentSEO.ogImage} alt="OG" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white/20 text-xs">No OG Image</div>
                )}
              </div>
              <div className="p-4 space-y-1">
                <span className="text-[10px] text-white/40 uppercase font-mono">pixarrow.com</span>
                <h5 className="text-sm font-bold text-white line-clamp-1">{currentSEO.title}</h5>
                <p className="text-xs text-white/60 line-clamp-2">{currentSEO.description}</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

/* =========================================================================
   4. INQUIRIES & LEADS INBOX (CRM)
   ========================================================================= */
function QueriesManager() {
  const [queries, setQueries] = useState<any[]>([]);
  const [stats, setStats] = useState({ total: 0, new: 0, contacted: 0, resolved: 0 });
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchQueries();
  }, [statusFilter]);

  const fetchQueries = async () => {
    setLoading(true);
    try {
      const url = `/api/admin/queries?status=${statusFilter}${searchQuery ? `&search=${encodeURIComponent(searchQuery)}` : ''}`;
      const res = await fetch(url);
      const json = await res.json();
      if (json.success) {
        setQueries(json.data);
        if (json.stats) setStats(json.stats);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      const res = await fetch(`/api/admin/queries/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      const json = await res.json();
      if (json.success) fetchQueries();
    } catch (e) {
      console.error(e);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this lead record?")) return;
    try {
      const res = await fetch(`/api/admin/queries/${id}`, { method: "DELETE" });
      const json = await res.json();
      if (json.success) fetchQueries();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/10 pb-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">Client Inquiries &amp; Pipeline</h2>
          <p className="text-white/40 text-xs sm:text-sm">Real-time leads from Discovery calls, Quick Quote drawer, and Calculator.</p>
        </div>
        <button 
          onClick={fetchQueries}
          className="flex items-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-xs font-bold text-white transition-all cursor-pointer"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Refresh Pipeline</span>
        </button>
      </div>

      {/* KPI Counters Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
          <span className="text-xs text-white/40 font-bold uppercase">Total Leads</span>
          <div className="text-2xl sm:text-3xl font-black text-white mt-1">{stats.total}</div>
        </div>
        <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
          <span className="text-xs text-emerald-400 font-bold uppercase flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            New / Uncontacted
          </span>
          <div className="text-2xl sm:text-3xl font-black text-emerald-300 mt-1">{stats.new}</div>
        </div>
        <div className="p-5 rounded-2xl bg-purple-500/10 border border-purple-500/20">
          <span className="text-xs text-purple-400 font-bold uppercase">In Discussion</span>
          <div className="text-2xl sm:text-3xl font-black text-purple-300 mt-1">{stats.contacted}</div>
        </div>
        <div className="p-5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20">
          <span className="text-xs text-cyan-400 font-bold uppercase">Converted / Closed</span>
          <div className="text-2xl sm:text-3xl font-black text-cyan-300 mt-1">{stats.resolved}</div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {["all", "new", "contacted", "resolved"].map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                statusFilter === st
                  ? "bg-brand-purple text-white shadow-glow-purple"
                  : "bg-white/5 text-white/60 hover:text-white"
              }`}
            >
              {st === "all" ? "All Inquiries" : st}
            </button>
          ))}
        </div>

        <div className="relative flex-1 max-w-xs">
          <Search className="w-4 h-4 text-white/30 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') fetchQueries(); }}
            placeholder="Search lead or notes..."
            className="w-full bg-white/[0.04] border border-white/10 rounded-xl pl-10 pr-4 py-2 text-xs text-white focus:border-[#7C3AED] outline-none"
          />
        </div>
      </div>

      {/* Leads List */}
      {loading ? (
        <div className="py-24 text-center text-white/40 flex flex-col items-center justify-center">
          <Loader2 className="w-10 h-10 animate-spin text-purple-400 mb-4" />
          <p className="font-bold text-sm">Scanning leads database...</p>
        </div>
      ) : queries.length === 0 ? (
        <div className="p-12 text-center border border-dashed border-white/10 rounded-3xl bg-white/[0.01]">
          <Mail className="w-12 h-12 text-white/20 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-white mb-1">No Inquiries Found</h3>
          <p className="text-white/40 text-xs">No client inquiries matching filter &quot;{statusFilter}&quot;.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {queries.map((q) => (
            <div 
              key={q._id}
              className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-brand-purple/40 transition-all flex flex-col lg:flex-row lg:items-start justify-between gap-6"
            >
              <div className="space-y-3 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-black text-white">{q.name}</h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[10px] font-bold border border-purple-500/30">
                    {q.type || "Discovery Call"}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    q.status === 'new' 
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                      : q.status === 'contacted'
                      ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                      : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                  }`}>
                    {q.status}
                  </span>
                </div>

                <div className="flex flex-wrap gap-4 text-xs text-white/70">
                  <a href={`mailto:${q.email}`} className="flex items-center gap-1.5 hover:text-purple-300 text-cyan-400 font-semibold">
                    <Mail className="w-3.5 h-3.5" />
                    <span>{q.email}</span>
                  </a>
                  {q.phone && (
                    <a href={`tel:${q.phone}`} className="flex items-center gap-1.5 hover:text-purple-300 text-white/80">
                      <Phone className="w-3.5 h-3.5" />
                      <span>{q.phone}</span>
                    </a>
                  )}
                  {q.date && (
                    <span className="flex items-center gap-1.5 text-white/50">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{q.date} at {q.time || "TBD"}</span>
                    </span>
                  )}
                  <span className="text-white/40">
                    Received: {new Date(q.createdAt).toLocaleDateString()}
                  </span>
                </div>

                {q.notes && (
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-xs text-white/80 whitespace-pre-line font-mono leading-relaxed">
                    {q.notes}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-row lg:flex-col gap-2 shrink-0">
                <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10">
                  <button 
                    onClick={() => handleStatusChange(q._id, "new")}
                    className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase transition-all ${
                      q.status === 'new' ? 'bg-emerald-500 text-black' : 'text-white/40 hover:text-white'
                    }`}
                  >
                    New
                  </button>
                  <button 
                    onClick={() => handleStatusChange(q._id, "contacted")}
                    className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase transition-all ${
                      q.status === 'contacted' ? 'bg-purple-500 text-white' : 'text-white/40 hover:text-white'
                    }`}
                  >
                    Contacted
                  </button>
                  <button 
                    onClick={() => handleStatusChange(q._id, "resolved")}
                    className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase transition-all ${
                      q.status === 'resolved' ? 'bg-cyan-500 text-black' : 'text-white/40 hover:text-white'
                    }`}
                  >
                    Resolved
                  </button>
                </div>

                <div className="flex gap-2">
                  <a 
                    href={`mailto:${q.email}?subject=Pixarrow%20Discovery%20Session`}
                    className="flex-1 text-center py-2 px-3 bg-brand-purple hover:bg-brand-purple/90 text-white rounded-xl text-[10px] font-bold uppercase tracking-wider"
                  >
                    Email Client
                  </a>
                  <button 
                    onClick={() => handleDelete(q._id)}
                    className="p-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-xl transition-all"
                    title="Delete Inquiry"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* =========================================================================
   5. CLOUDFLARE R2 MEDIA VAULT & SETTINGS
   ========================================================================= */
function R2StorageManager() {
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [recentUploads, setRecentUploads] = useState<string[]>([]);
  const [message, setMessage] = useState("");

  const handleFileUpload = async (file: File) => {
    setUploading(true);
    setMessage("");
    try {
      const data = new FormData();
      data.append("file", file);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: data,
      });
      const json = await res.json();

      if (json.success && json.url) {
        setUploadedUrl(json.url);
        if (json.storage === "r2") {
          setMessage("Uploaded to Cloudflare R2 bucket!");
        } else if (json.warning) {
          setMessage(json.warning);
          alert(`File saved locally. Note: ${json.warning}`);
        } else {
          setMessage(json.message || "File uploaded locally.");
        }
        setRecentUploads(prev => [json.url, ...prev.filter(u => u !== json.url)]);
      } else {
        alert(json.error || "Upload failed");
      }
    } catch (e: any) {
      alert("Upload failed: " + e.message);
    } finally {
      setUploading(false);
    }
  };

  const handleCopy = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/10 pb-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">Cloudflare R2 Media Vault</h2>
          <p className="text-white/40 text-xs sm:text-sm">High-speed global object storage for project screenshots, banners, and digital assets.</p>
        </div>
        <div className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center gap-2">
          <Cloud className="w-3.5 h-3.5" />
          <span>S3-Compatible CDN Engine</span>
        </div>
      </div>

      {/* Upload Zone */}
      <div className="p-8 sm:p-12 rounded-[2.5rem] bg-white/[0.02] border-2 border-dashed border-white/15 hover:border-brand-purple/60 text-center transition-all flex flex-col items-center justify-center">
        <div className="w-16 h-16 rounded-3xl bg-brand-purple/20 flex items-center justify-center text-purple-300 mb-4 border border-brand-purple/30 shadow-glow-purple">
          {uploading ? <Loader2 className="w-8 h-8 animate-spin" /> : <UploadCloud className="w-8 h-8" />}
        </div>
        <h3 className="text-xl font-black text-white mb-1">
          {uploading ? "Uploading to Cloudflare R2..." : "Drag & Drop Image or Select File"}
        </h3>
        <p className="text-white/40 text-xs max-w-sm mb-6">
          Supports PNG, JPG, WebP, SVG. Uploaded files receive permanent CDN endpoints.
        </p>

        <label className="px-8 py-3.5 bg-gradient-to-r from-[#7C3AED] to-[#FF007A] text-white rounded-2xl text-xs font-bold uppercase tracking-wider shadow-glow-purple hover:scale-105 transition-all cursor-pointer">
          <span>Choose Image File</span>
          <input 
            type="file" 
            accept="image/*" 
            className="hidden" 
            disabled={uploading}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleFileUpload(file);
            }}
          />
        </label>
      </div>

      {/* Upload Success Banner */}
      {uploadedUrl && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 rounded-3xl bg-emerald-500/10 border border-emerald-500/30 space-y-3"
        >
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-emerald-300 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              {message || "Upload Complete!"}
            </span>
            <button 
              onClick={() => handleCopy(uploadedUrl)}
              className="flex items-center gap-1.5 px-4 py-2 bg-emerald-500 text-black font-bold rounded-xl text-xs cursor-pointer hover:scale-105 transition-all"
            >
              {copied ? <CheckCheck className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "Copied URL!" : "Copy Asset URL"}</span>
            </button>
          </div>

          <div className="flex items-center gap-4 bg-black/40 p-3 rounded-2xl border border-white/10">
            <div className="w-16 h-12 rounded-lg overflow-hidden bg-black/60 shrink-0">
              <img src={uploadedUrl} alt="Upload" className="w-full h-full object-cover" />
            </div>
            <input 
              readOnly
              type="text" 
              value={uploadedUrl}
              className="flex-1 bg-transparent text-xs font-mono text-cyan-300 outline-none"
            />
          </div>
        </motion.div>
      )}

      {/* R2 Environment Variable Documentation Strip */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-purple-400" />
          Cloudflare R2 Bucket Setup in .env
        </h3>
        <p className="text-xs text-white/60 leading-relaxed">
          Pixarrow supports direct Cloudflare R2 bucket integration. When credentials are set in your <code className="text-purple-300 bg-white/5 px-2 py-0.5 rounded">.env</code>, all media uploads stream directly to your R2 bucket.
        </p>

        <div className="p-4 rounded-2xl bg-black/50 border border-white/10 font-mono text-xs text-purple-200 space-y-1">
          <div>R2_ACCOUNT_ID=your_cloudflare_account_id</div>
          <div>R2_ACCESS_KEY_ID=your_r2_access_key_id</div>
          <div>R2_SECRET_ACCESS_KEY=your_r2_secret_access_key</div>
          <div>R2_BUCKET_NAME=pixarrow</div>
          <div>R2_PUBLIC_URL=https://your-custom-domain.com</div>
        </div>
      </div>
    </div>
  );
}
