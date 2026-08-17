'use client';

import Link from 'next/link';
import { ArrowLeft, Users, Cpu, Shield, MessageSquare, PlusCircle } from 'lucide-react';

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Navigation Bar */}
        <div className="flex justify-between items-center mb-10 pb-6 border-b border-slate-800">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-500">
            Ecosystem Workspace
          </h1>
          <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition">
            <ArrowLeft size={18} /> Back to Home
          </Link>
        </div>

        {/* Dynamic Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <Users className="text-indigo-400 mb-4" size={36} />
            <h2 className="text-xl font-bold mb-2">Live Collaborators</h2>
            <p className="text-slate-400 text-sm">Active users in your skill ecosystem right now.</p>
            <p className="mt-4 text-2xl font-semibold text-indigo-400">12 Online</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <Cpu className="text-pink-400 mb-4" size={36} />
            <h2 className="text-xl font-bold mb-2">AI Ghost Partner</h2>
            <p className="text-slate-400 text-sm">Status: Scanning for matching projects...</p>
            <p className="mt-4 text-2xl font-semibold text-pink-400">Active</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <Shield className="text-emerald-400 mb-4" size={36} />
            <h2 className="text-xl font-bold mb-2">Skill Matrix</h2>
            <p className="text-slate-400 text-sm">Encrypted reputation score & verified badges.</p>
            <p className="mt-4 text-2xl font-semibold text-emerald-400">Level 1</p>
          </div>
        </div>

        {/* Interactive Workspace Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Feed */}
          <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Available Skill Exchanges</h3>
              <button className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 transition">
                <PlusCircle size={16} /> Post Request
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-indigo-300">Looking for 3D Modeling Expert</h4>
                  <span className="text-xs bg-indigo-950 text-indigo-400 px-2.5 py-1 rounded-full border border-indigo-800">Exchange: React</span>
                </div>
                <p className="text-slate-400 text-sm">Need help creating Three.js models in exchange for React performance optimization.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-pink-300">AI Prompt Engineer Needed</h4>
                  <span className="text-xs bg-pink-950 text-pink-400 px-2.5 py-1 rounded-full border border-pink-800">Exchange: UI Design</span>
                </div>
                <p className="text-slate-400 text-sm">Offering custom Figma UI designs in exchange for LLM fine-tuning guidance.</p>
              </div>
            </div>
          </div>

          {/* Quick Chat Sidebar */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <MessageSquare size={20} className="text-indigo-400" /> System Log
            </h3>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs font-mono text-slate-400 space-y-2">
              <p className="text-emerald-400">&gt; Connected to Live Mesh Engine</p>
              <p>&gt; AI Ghost Partner initialized...</p>
              <p>&gt; Real-time Socket sync: Active</p>
              <p className="text-indigo-400">&gt; Waiting for next exchange event...</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}