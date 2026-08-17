'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Rocket, ShieldCheck, Zap } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col justify-between p-8 relative overflow-hidden">
      {/* Background 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={1} />
          <directionalLight position={[2, 1, 1]} />
          <Sphere visible args={[1, 100, 200]} scale={2.4}>
            <MeshDistortMaterial
              color="#4f46e5"
              attach="material"
              distort={0.5}
              speed={2}
            />
          </Sphere>
        </Canvas>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mt-20">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-500 mb-6">
          The Next-Gen Interactive Ecosystem
        </h1>
        <p className="text-slate-300 text-lg md:text-xl mb-8">
          A unique platform built in a 3D space to exchange skills, collaborate live, and build teams effortlessly.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl font-semibold transition flex items-center gap-2 cursor-pointer">
            <Rocket size={20} /> Get Started
          </button>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto my-12">
        <div className="bg-slate-900/60 backdrop-blur-md p-6 rounded-2xl border border-slate-800">
          <Zap className="text-indigo-400 mb-3" size={32} />
          <h3 className="text-xl font-bold mb-2">Real-time Collaboration</h3>
          <p className="text-slate-400 text-sm">Interactive workspace allowing multiple users to connect and work simultaneously.</p>
        </div>
        <div className="bg-slate-900/60 backdrop-blur-md p-6 rounded-2xl border border-slate-800">
          <ShieldCheck className="text-indigo-400 mb-3" size={32} />
          <h3 className="text-xl font-bold mb-2">Decentralized Trust</h3>
          <p className="text-slate-400 text-sm">Encrypted skill verification badges and automated user reputation metrics.</p>
        </div>
        <div className="bg-slate-900/60 backdrop-blur-md p-6 rounded-2xl border border-slate-800">
          <Rocket className="text-indigo-400 mb-3" size={32} />
          <h3 className="text-xl font-bold mb-2">AI Ghost Partner</h3>
          <p className="text-slate-400 text-sm">Intelligent companion matching your skill profile with relevant global project teams.</p>
        </div>
      </div>
    </main>
  );
}