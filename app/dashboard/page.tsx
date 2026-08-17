'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Torus } from '@react-three/drei';
import {
  ArrowLeft,
  Users,
  Cpu,
  Shield,
  MessageSquare,
  PlusCircle,
  X,
  Send,
  Search,
  Sparkles,
  CheckCircle2,
  Filter,
  User,
  LogOut,
  Bot,
  Activity,
  Layers
} from 'lucide-react';

interface ExchangePost {
  id: number;
  title: string;
  offer: string;
  description: string;
  category: string;
  author: string;
  verified: boolean;
}

interface ChatMessage {
  id: number;
  user: string;
  text: string;
  time: string;
}

export default function Dashboard() {
  // Authentication Mock State
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [activeTab, setActiveTab] = useState<'feed' | 'graph'>('feed');

  // Posts State
  const [posts, setPosts] = useState<ExchangePost[]>([
    {
      id: 1,
      title: 'Looking for 3D Modeling Expert',
      offer: 'React / Next.js',
      description: 'Need help creating Three.js models in exchange for React performance optimization.',
      category: 'Development',
      author: 'Alex Dev',
      verified: true,
    },
    {
      id: 2,
      title: 'AI Prompt Engineer Needed',
      offer: 'UI/UX Design',
      description: 'Offering custom Figma UI designs in exchange for LLM fine-tuning guidance.',
      category: 'AI & Data',
      author: 'Sara Design',
      verified: true,
    },
    {
      id: 3,
      title: 'Smart Contract Auditor Required',
      offer: 'Python Backend',
      description: 'Looking to audit a Solidity contract. Can build fast API endpoints in return.',
      category: 'Blockchain',
      author: 'CryptoCoder',
      verified: false,
    },
  ]);

  // Chat State
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 1, user: 'Alex', text: 'Hey, anyone available for a quick Three.js review?', time: '10:30 AM' },
    { id: 2, user: 'DevGuy', text: 'I can help with React components!', time: '10:32 AM' },
    { id: 3, user: 'AI Ghost Bot', text: 'Match Suggestion: Xyro77 matches Sara Design for UI Swap.', time: '10:35 AM' },
  ]);

  // Form & Filter States
  const [chatInput, setChatInput] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // New Post Form State
  const [title, setTitle] = useState('');
  const [offer, setOffer] = useState('');
  const [category, setCategory] = useState('Development');
  const [description, setDescription] = useState('');

  // Post creation handler
  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !offer || !description) return;

    const newPost: ExchangePost = {
      id: Date.now(),
      title,
      offer,
      description,
      category,
      author: 'Xyro77 (You)',
      verified: true,
    };

    setPosts([newPost, ...posts]);
    
    // Add AI bot confirmation message
    const botMsg: ChatMessage = {
      id: Date.now() + 1,
      user: 'AI Ghost Bot',
      text: `Analyzed "${title}". Broadcasted to 14 active nodes.`,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages((prev) => [...prev, botMsg]);

    setTitle('');
    setOffer('');
    setDescription('');
    setIsModalOpen(false);
  };

  // Chat message submit handler
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const newMsg: ChatMessage = {
      id: Date.now(),
      user: 'You',
      text: chatInput,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, newMsg]);
    setChatInput('');
  };

  // Filter posts
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.offer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-slate-950 text-white p-4 md:p-8 relative overflow-hidden">
      {/* Background 3D Ambient Mesh Canvas */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0">
        <Canvas>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 2, 1]} />
          <Sphere visible args={[1, 64, 64]} scale={2.8}>
            <MeshDistortMaterial color="#6366f1" attach="material" distort={0.4} speed={1.5} />
          </Sphere>
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Navigation Bar */}
        <div className="flex flex-wrap justify-between items-center mb-8 pb-6 border-b border-slate-800/80 backdrop-blur-md gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-pink-500 flex items-center justify-center font-bold text-xl shadow-lg shadow-indigo-500/20">
              X
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500">
                Ecosystem Workspace
              </h1>
              <p className="text-xs text-slate-400">Decentralized Skill Swapping & AI Mesh Network</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-1 flex">
              <button
                onClick={() => setActiveTab('feed')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${
                  activeTab === 'feed' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Layers size={14} /> Swaps
              </button>
              <button
                onClick={() => setActiveTab('graph')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${
                  activeTab === 'graph' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Activity size={14} /> 3D Matrix Graph
              </button>
            </div>

            <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl text-xs">
              <User size={14} className="text-indigo-400" />
              <span>Xyro77</span>
              <button onClick={() => setIsLoggedIn(!isLoggedIn)} title="Toggle Session" className="ml-1 text-slate-500 hover:text-rose-400">
                <LogOut size={12} />
              </button>
            </div>

            <Link
              href="/"
              className="flex items-center gap-2 text-xs text-slate-400 hover:text-white bg-slate-900 border border-slate-800 px-3 py-2 rounded-xl transition"
            >
              <ArrowLeft size={14} /> Home
            </Link>
          </div>
        </div>

        {/* Dynamic Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-indigo-500/50 transition">
            <div className="flex justify-between items-start">
              <Users className="text-indigo-400 mb-4" size={36} />
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
            </div>
            <h2 className="text-xl font-bold mb-1">Live Collaborators</h2>
            <p className="text-slate-400 text-xs">Active peers ready for skill swapping.</p>
            <div className="mt-4 flex items-baseline justify-between">
              <span className="text-3xl font-extrabold text-indigo-400">14 Online</span>
              <span className="text-xs text-slate-500">Mesh Connected</span>
            </div>
          </div>

          <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-pink-500/50 transition">
            <Cpu className="text-pink-400 mb-4" size={36} />
            <h2 className="text-xl font-bold mb-1">AI Ghost Matcher</h2>
            <p className="text-slate-400 text-xs">Scanning background nodes for project synergy.</p>
            <div className="mt-4 flex items-baseline justify-between">
              <span className="text-3xl font-extrabold text-pink-400 flex items-center gap-2">
                Active <Sparkles size={18} className="animate-bounce" />
              </span>
              <span className="text-xs text-pink-500/80 bg-pink-950/50 px-2 py-0.5 rounded-full border border-pink-900">
                1 Match Found
              </span>
            </div>
          </div>

          <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-emerald-500/50 transition">
            <Shield className="text-emerald-400 mb-4" size={36} />
            <h2 className="text-xl font-bold mb-1">Skill Matrix Level</h2>
            <p className="text-slate-400 text-xs">Encrypted reputation & verified badge status.</p>
            <div className="mt-4 flex items-baseline justify-between">
              <span className="text-3xl font-extrabold text-emerald-400">Level 2 Pro</span>
              <span className="text-xs text-emerald-400 flex items-center gap-1">
                <CheckCircle2 size={14} /> Verified Matrix
              </span>
            </div>
          </div>
        </div>

        {/* Tab View switching between Main Feed & 3D Interactive Matrix */}
        {activeTab === 'feed' ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Feed Section */}
            <div className="lg:col-span-2 bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold">Available Skill Swaps</h3>
                    <p className="text-slate-400 text-xs">Explore requests or offer your technical expertise</p>
                  </div>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 transition cursor-pointer shadow-lg shadow-indigo-500/25"
                  >
                    <PlusCircle size={18} /> Post Request
                  </button>
                </div>

                {/* Filter & Search Bar */}
                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3.5 top-3 text-slate-500" size={16} />
                    <input
                      type="text"
                      placeholder="Search skills, titles, technologies..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 transition"
                    />
                  </div>
                  <div className="flex items-center gap-2 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2">
                    <Filter size={16} className="text-slate-500" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="bg-transparent text-xs text-slate-300 focus:outline-none cursor-pointer"
                    >
                      <option value="All" className="bg-slate-900">All Categories</option>
                      <option value="Development" className="bg-slate-900">Development</option>
                      <option value="AI & Data" className="bg-slate-900">AI & Data</option>
                      <option value="Blockchain" className="bg-slate-900">Blockchain</option>
                    </select>
                  </div>
                </div>

                {/* Posts Feed */}
                <div className="space-y-4 max-h-[500px] overflow-y-auto pr-1">
                  {filteredPosts.length > 0 ? (
                    filteredPosts.map((post) => (
                      <div
                        key={post.id}
                        className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 transition relative group"
                      >
                        <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                          <div className="flex items-center gap-2">
                            <h4 className="font-semibold text-indigo-300 text-lg">{post.title}</h4>
                            {post.verified && (
                              <span className="text-emerald-400 text-xs" title="Verified Member">
                                <CheckCircle2 size={16} />
                              </span>
                            )}
                          </div>
                          <span className="text-xs bg-indigo-950 text-indigo-400 px-3 py-1 rounded-full border border-indigo-800 font-medium">
                            Offer: {post.offer}
                          </span>
                        </div>
                        <p className="text-slate-300 text-sm mb-4">{post.description}</p>
                        <div className="flex justify-between items-center text-xs text-slate-500 pt-3 border-t border-slate-900">
                          <span>Posted by: <strong className="text-slate-400">{post.author}</strong></span>
                          <span className="bg-slate-900 px-2.5 py-1 rounded-md text-slate-400 border border-slate-800">
                            {post.category}
                          </span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-12 text-slate-500">
                      No requests found matching your filter criteria.
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Live Chat & AI Log Sidebar */}
            <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl p-6 flex flex-col justify-between h-[620px]">
              <div>
                <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-4">
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    <MessageSquare size={20} className="text-indigo-400" /> Live Mesh Broadcast
                  </h3>
                  <span className="text-[10px] bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-800">
                    Real-time
                  </span>
                </div>

                <div className="space-y-3 overflow-y-auto max-h-[440px] pr-2">
                  {messages.map((msg) => (
                    <div key={msg.id} className="bg-slate-950 p-3 rounded-xl border border-slate-800/80 text-xs">
                      <div className="flex justify-between items-center mb-1">
                        <span
                          className={`font-bold flex items-center gap-1 ${
                            msg.user === 'You'
                              ? 'text-indigo-400'
                              : msg.user === 'AI Ghost Bot'
                              ? 'text-pink-400'
                              : 'text-emerald-400'
                          }`}
                        >
                          {msg.user === 'AI Ghost Bot' && <Bot size={12} />}
                          {msg.user}
                        </span>
                        <span className="text-[10px] text-slate-500">{msg.time}</span>
                      </div>
                      <p className="text-slate-300 leading-relaxed">{msg.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSendMessage} className="flex gap-2 pt-3 border-t border-slate-800">
                <input
                  type="text"
                  placeholder="Broadcast message to mesh..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500 transition"
                />
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-500 p-2.5 rounded-xl text-white transition cursor-pointer shadow-lg shadow-indigo-500/20 flex-shrink-0"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        ) : (
          /* 3D Interactive Skill Matrix Visualizer */
          <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl p-6 h-[620px] flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-1">Interactive 3D Ecosystem Node Graph</h3>
              <p className="text-xs text-slate-400">Visual representation of real-time skill connections across active users.</p>
            </div>
            
            <div className="w-full h-[480px] rounded-xl overflow-hidden bg-slate-950 border border-slate-800 relative">
              <Canvas className="w-full h-full">
                <OrbitControls enableZoom={true} />
                <ambientLight intensity={0.8} />
                <pointLight position={[10, 10, 10]} />
                <Float speed={2} rotationIntensity={1} floatIntensity={2}>
                  <Sphere position={[-2, 0, 0]} args={[0.8, 32, 32]}>
                    <meshStandardMaterial color="#6366f1" wireframe />
                  </Sphere>
                  <Sphere position={[2, 1, -1]} args={[0.6, 32, 32]}>
                    <meshStandardMaterial color="#ec4899" wireframe />
                  </Sphere>
                  <Torus position={[0, -1, 1]} args={[0.7, 0.2, 16, 100]}>
                    <meshStandardMaterial color="#10b981" wireframe />
                  </Torus>
                </Float>
              </Canvas>
              <div className="absolute bottom-4 left-4 bg-slate-900/90 p-3 rounded-xl border border-slate-800 text-xs space-y-1">
                <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500 inline-block"></span> React / Next.js Nodes</div>
                <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-pink-500 inline-block"></span> AI / LLM Nodes</div>
                <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span> Smart Contracts</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Post Creation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-lg w-full shadow-2xl">
            <div className="flex justify-between items-center mb-6 border-b border-slate-800 pb-3">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <PlusCircle className="text-indigo-400" size={20} /> New Skill Swap Request
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white transition">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleCreatePost} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">LOOKING FOR (TITLE)</label>
                <input
                  type="text"
                  placeholder="e.g., Python Backend Dev"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1">SKILL YOU OFFER</label>
                  <input
                    type="text"
                    placeholder="e.g., UI/UX Design"
                    value={offer}
                    onChange={(e) => setOffer(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1">CATEGORY</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-indigo-500"
                  >
                    <option value="Development">Development</option>
                    <option value="AI & Data">AI & Data</option>
                    <option value="Blockchain">Blockchain</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">DESCRIPTION</label>
                <textarea
                  placeholder="Explain your project goals..."
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-indigo-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 text-white font-semibold py-3 rounded-xl flex justify-center items-center gap-2 transition cursor-pointer shadow-lg shadow-indigo-500/25 mt-2"
              >
                <Send size={18} /> Publish Skill Swap Request
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}