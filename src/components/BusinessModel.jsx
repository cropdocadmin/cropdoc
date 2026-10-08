import React, { useState } from 'react';
import { BUSINESS_MINDMAP } from '../data/diseasesData';
import { Network, CheckCircle2, AlertCircle, Lightbulb, Smartphone, Cpu, HeartPulse, ArrowRight, ShieldCheck } from 'lucide-react';

export default function BusinessModel() {
  const [activeBranch, setActiveBranch] = useState("all");

  return (
    <section id="business-model" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-50/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold">
            <Network className="w-3.5 h-3.5 text-emerald-600" />
            <span>Strategic Framework & Mindmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            The <span className="text-emerald-600">CropDOC</span> Business Model Architecture
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Built from extensive agricultural research: solving the key root causes behind crop loss through AI computer vision on smartphones.
          </p>
        </div>

        {/* Central Workflow Banner (3-Step Workflow from Image 2) */}
        <div className="mb-16 bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-emerald-800">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-mono text-emerald-400 tracking-widest uppercase font-bold">
              CORE PRODUCT ENGINE
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold mt-1">
              AI Crop Disease Detector Workflow
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            
            {/* Step 1 */}
            <div className="bg-emerald-950/80 border border-emerald-800/80 rounded-2xl p-6 flex flex-col items-center text-center relative group hover:border-emerald-500 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-extrabold text-lg mb-4 shadow-lg shadow-emerald-900/50">
                1
              </div>
              <div className="text-3xl mb-2">📸</div>
              <h4 className="text-lg font-bold text-white mb-1">Farmer Clicks Photo of Leaf</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Using any standard Android or iOS smartphone camera, even in low network areas.
              </p>
            </div>

            {/* Connecting Arrow (Desktop) */}
            <div className="hidden md:flex absolute top-1/2 left-1/3 -translate-y-1/2 -translate-x-1/2 z-20 text-emerald-400">
              <ArrowRight className="w-8 h-8 animate-pulse" />
            </div>

            {/* Step 2 */}
            <div className="bg-emerald-950/80 border border-emerald-800/80 rounded-2xl p-6 flex flex-col items-center text-center relative group hover:border-emerald-500 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center font-extrabold text-lg mb-4 shadow-lg shadow-teal-900/50">
                2
              </div>
              <div className="text-3xl mb-2">🤖</div>
              <h4 className="text-lg font-bold text-white mb-1">App Detects Disease Through AI</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Deep neural network analyzes plant pathology patterns in &lt; 2 seconds with 98.4% precision.
              </p>
            </div>

            {/* Connecting Arrow 2 (Desktop) */}
            <div className="hidden md:flex absolute top-1/2 left-2/3 -translate-y-1/2 -translate-x-1/2 z-20 text-emerald-400">
              <ArrowRight className="w-8 h-8 animate-pulse" />
            </div>

            {/* Step 3 */}
            <div className="bg-emerald-950/80 border border-emerald-800/80 rounded-2xl p-6 flex flex-col items-center text-center relative group hover:border-emerald-500 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-green-600 text-white flex items-center justify-center font-extrabold text-lg mb-4 shadow-lg shadow-green-900/50">
                3
              </div>
              <div className="text-3xl mb-2">🌱</div>
              <h4 className="text-lg font-bold text-white mb-1">App Suggests Treatment for Crop</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Provides instant dosage, organic alternatives, chemical solutions, and local spray timing.
              </p>
            </div>

          </div>
        </div>

        {/* 6 Mindmap Pillar Cards Grid (Faithful representation of Image 2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Pillar 1: Challenges */}
          <div className="bg-gradient-to-b from-purple-50/50 to-white rounded-3xl p-6 border border-purple-200/80 shadow-md hover:shadow-xl transition-all space-y-4">
            <div className="flex items-center justify-between">
              <span className="w-8 h-8 rounded-xl bg-purple-600 text-white font-bold flex items-center justify-center text-sm">
                1
              </span>
              <span className="text-xs font-mono font-bold text-purple-700 bg-purple-100 px-2.5 py-1 rounded-full">
                CHALLENGES
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900">Current Industry Pain Points</h3>
            <ul className="space-y-2.5">
              {BUSINESS_MINDMAP.challenges.map((c, i) => (
                <li key={i} className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center gap-2.5 ${c.color}`}>
                  <span className="text-base">{c.icon}</span>
                  <span>{c.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pillar 2: Observations */}
          <div className="bg-gradient-to-b from-blue-50/50 to-white rounded-3xl p-6 border border-blue-200/80 shadow-md hover:shadow-xl transition-all space-y-4">
            <div className="flex items-center justify-between">
              <span className="w-8 h-8 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center text-sm">
                2
              </span>
              <span className="text-xs font-mono font-bold text-blue-700 bg-blue-100 px-2.5 py-1 rounded-full">
                OBSERVATIONS
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900">Ground Reality & Behavior</h3>
            <ul className="space-y-2.5">
              {BUSINESS_MINDMAP.observations.map((obs, i) => (
                <li key={i} className="p-3 rounded-xl border border-blue-100 bg-blue-50/40 text-slate-800 text-xs font-semibold flex items-center gap-2.5">
                  <span className="text-base">{obs.icon}</span>
                  <span>{obs.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pillar 3: Opportunities */}
          <div className="bg-gradient-to-b from-teal-50/50 to-white rounded-3xl p-6 border border-teal-200/80 shadow-md hover:shadow-xl transition-all space-y-4">
            <div className="flex items-center justify-between">
              <span className="w-8 h-8 rounded-xl bg-teal-600 text-white font-bold flex items-center justify-center text-sm">
                3
              </span>
              <span className="text-xs font-mono font-bold text-teal-700 bg-teal-100 px-2.5 py-1 rounded-full">
                OPPORTUNITIES
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900">Technology Leverages</h3>
            <ul className="space-y-2.5">
              {BUSINESS_MINDMAP.opportunities.map((opp, i) => (
                <li key={i} className="p-3 rounded-xl border border-teal-100 bg-teal-50/40 text-slate-800 text-xs font-semibold flex items-center gap-2.5">
                  <span className="text-base">{opp.icon}</span>
                  <span>{opp.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pillar 4: Root Cause */}
          <div className="bg-gradient-to-b from-orange-50/50 to-white rounded-3xl p-6 border border-orange-200/80 shadow-md hover:shadow-xl transition-all space-y-4">
            <div className="flex items-center justify-between">
              <span className="w-8 h-8 rounded-xl bg-orange-600 text-white font-bold flex items-center justify-center text-sm">
                4
              </span>
              <span className="text-xs font-mono font-bold text-orange-700 bg-orange-100 px-2.5 py-1 rounded-full">
                ROOT CAUSES
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900">Why Yield Losses Escalate</h3>
            <ul className="space-y-2.5">
              {BUSINESS_MINDMAP.rootCauses.map((rc, i) => (
                <li key={i} className="p-3 rounded-xl border border-orange-200 bg-orange-50/60 text-orange-950 text-xs font-semibold flex items-center gap-2.5">
                  <span className="text-base">{rc.icon}</span>
                  <span>{rc.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pillar 5: Possible Solutions Evaluation */}
          <div className="bg-gradient-to-b from-amber-50/50 to-white rounded-3xl p-6 border border-amber-200/80 shadow-md hover:shadow-xl transition-all space-y-4">
            <div className="flex items-center justify-between">
              <span className="w-8 h-8 rounded-xl bg-amber-600 text-white font-bold flex items-center justify-center text-sm">
                5
              </span>
              <span className="text-xs font-mono font-bold text-amber-700 bg-amber-100 px-2.5 py-1 rounded-full">
                POSSIBLE SOLUTIONS
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900">Explored Approaches</h3>
            <div className="space-y-2.5 text-xs">
              <div className="p-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-500 line-through flex items-center justify-between">
                <span>👥 More Experts In Village</span>
                <span className="text-[10px] bg-slate-200 px-1.5 py-0.5 rounded text-slate-600 no-underline">High Cost</span>
              </div>
              <div className="p-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-500 line-through flex items-center justify-between">
                <span>🧪 Portable Chemical Kits</span>
                <span className="text-[10px] bg-slate-200 px-1.5 py-0.5 rounded text-slate-600 no-underline">Complex</span>
              </div>
              <div className="p-3.5 rounded-xl border-2 border-emerald-500 bg-emerald-50 text-emerald-950 font-bold flex items-center justify-between shadow-xs">
                <span>📷 Mobile App Using Camera</span>
                <span className="text-[10px] bg-emerald-600 text-white px-2 py-0.5 rounded font-extrabold">WINNER</span>
              </div>
            </div>
          </div>

          {/* Pillar 6: Best Solution (CropDOC) */}
          <div className="bg-gradient-to-b from-emerald-50 to-teal-50 rounded-3xl p-6 border-2 border-emerald-400 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <span className="w-8 h-8 rounded-xl bg-emerald-700 text-white font-extrabold flex items-center justify-center text-sm">
                6
              </span>
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-200 px-2.5 py-1 rounded-full">
                BEST SOLUTION
              </span>
            </div>
            <h3 className="text-xl font-extrabold text-emerald-950">
              CropDOC AI Application
            </h3>
            <ul className="space-y-3">
              {BUSINESS_MINDMAP.bestSolution.map((bs, i) => (
                <li key={i} className="p-3 rounded-2xl bg-white border border-emerald-200 shadow-xs space-y-0.5">
                  <div className="text-xs font-extrabold text-emerald-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>{bs.text}</span>
                  </div>
                  <div className="text-[11px] text-slate-600 pl-5">{bs.desc}</div>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
