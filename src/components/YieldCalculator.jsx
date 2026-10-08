import React, { useState } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import { Calculator, TrendingUp, DollarSign, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

const CROP_ECONOMICS = [
  { crop: "Tomato", avgYieldVal: 85000, lossRiskPct: 40, pesticideSave: 12000 },
  { crop: "Rice / Paddy", avgYieldVal: 65000, lossRiskPct: 35, pesticideSave: 8500 },
  { crop: "Potato", avgYieldVal: 110000, lossRiskPct: 55, pesticideSave: 18000 },
  { crop: "Corn / Maize", avgYieldVal: 55000, lossRiskPct: 25, pesticideSave: 6000 },
  { crop: "Cotton", avgYieldVal: 75000, lossRiskPct: 38, pesticideSave: 10000 },
  { crop: "Wheat", avgYieldVal: 50000, lossRiskPct: 30, pesticideSave: 5500 }
];

export default function YieldCalculator() {
  const [selectedCrop, setSelectedCrop] = useState(CROP_ECONOMICS[0]);
  const [acres, setAcres] = useState(3);
  const [currency, setCurrency] = useState("₹"); // ₹ or $

  const grossCropValue = selectedCrop.avgYieldVal * acres;
  const potentialLossUntreated = Math.round(grossCropValue * (selectedCrop.lossRiskPct / 100));
  const chemicalSavings = selectedCrop.pesticideSave * acres;
  const netFinancialGain = potentialLossUntreated + chemicalSavings;

  const chartData = [
    {
      name: "Traditional (Late Diagnosis)",
      LossIncurred: potentialLossUntreated,
      ExcessPesticide: chemicalSavings,
      RetainedProfit: Math.max(0, grossCropValue - potentialLossUntreated - chemicalSavings)
    },
    {
      name: "With CropDOC AI",
      LossIncurred: Math.round(potentialLossUntreated * 0.05), // 95% saved
      ExcessPesticide: Math.round(chemicalSavings * 0.2), // 80% chemical saved
      RetainedProfit: grossCropValue - Math.round(potentialLossUntreated * 0.05)
    }
  ];

  const formatMoney = (amount) => {
    if (currency === "$") {
      return `$${Math.round(amount / 83).toLocaleString()}`;
    }
    return `₹${amount.toLocaleString('en-IN')}`;
  };

  return (
    <section id="yield-calculator" className="py-16 lg:py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold">
            <Calculator className="w-3.5 h-3.5 text-emerald-600" />
            <span>Interactive ROI & Loss Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Calculate Your <span className="text-emerald-600">Saved Crop Income</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            See how early AI disease detection protects your farm's bottom line by preventing disease spread and avoiding unnecessary chemical sprays.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Controls Card */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
                <span>Farm Input Parameters</span>
              </h3>
              <div className="flex rounded-lg bg-slate-100 p-1">
                <button
                  onClick={() => setCurrency("₹")}
                  className={`px-3 py-1 text-xs font-bold rounded-md ${currency === "₹" ? "bg-emerald-600 text-white" : "text-slate-600"}`}
                >
                  ₹ (INR)
                </button>
                <button
                  onClick={() => setCurrency("$")}
                  className={`px-3 py-1 text-xs font-bold rounded-md ${currency === "$" ? "bg-emerald-600 text-white" : "text-slate-600"}`}
                >
                  $ (USD)
                </button>
              </div>
            </div>

            {/* Select Crop */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                Select Crop Type:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {CROP_ECONOMICS.map((item) => (
                  <button
                    key={item.crop}
                    onClick={() => setSelectedCrop(item)}
                    className={`p-3 rounded-xl border text-xs font-bold text-left transition-all ${
                      selectedCrop.crop === item.crop
                        ? "bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-500/20"
                        : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {item.crop}
                  </button>
                ))}
              </div>
            </div>

            {/* Farm Land Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs font-bold">
                <span className="text-slate-700 uppercase tracking-wider">Total Farm Land:</span>
                <span className="text-emerald-700 font-extrabold text-base bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
                  {acres} {acres === 1 ? 'Acre' : 'Acres'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="25"
                value={acres}
                onChange={(e) => setAcres(parseInt(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                <span>1 Acre</span>
                <span>12 Acres</span>
                <span>25 Acres</span>
              </div>
            </div>

            {/* Key Output Metrics */}
            <div className="bg-emerald-950 text-white p-5 rounded-2xl space-y-3 shadow-inner">
              <div className="text-xs text-emerald-400 font-mono uppercase tracking-wider">
                ESTIMATED NET VALUE PROTECTED
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-300">
                {formatMoney(netFinancialGain)}
              </div>
              <div className="text-xs text-slate-300 border-t border-emerald-800/80 pt-2 grid grid-cols-2 gap-2">
                <div>
                  <span className="block text-slate-400 text-[10px]">Crop Loss Prevented:</span>
                  <span className="font-bold text-white">{formatMoney(potentialLossUntreated)}</span>
                </div>
                <div>
                  <span className="block text-slate-400 text-[10px]">Chemical Spend Saved:</span>
                  <span className="font-bold text-teal-300">{formatMoney(chemicalSavings)}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Visual Recharts Bar Chart */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Financial Impact Breakdown ({acres} Acres {selectedCrop.crop})
                </h3>
                <p className="text-xs text-slate-500">
                  Comparing traditional delayed treatment vs. instant CropDOC AI intervention.
                </p>
              </div>
              <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full">
                98.4% Accuracy Impact
              </span>
            </div>

            {/* Recharts Container */}
            <div className="h-72 w-full pt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 20, right: 30, left: 10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} />
                  <YAxis stroke="#64748b" fontSize={11} tickFormatter={(v) => currency === '$' ? `$${Math.round(v/83)}` : `₹${v/1000}k`} />
                  <Tooltip
                    formatter={(value) => [formatMoney(value), "Value"]}
                    contentStyle={{ backgroundColor: "#0f172a", color: "#fff", borderRadius: "12px", border: "none" }}
                  />
                  <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                  <Bar dataKey="RetainedProfit" name="Harvest Net Profit" fill="#059669" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="LossIncurred" name="Disease Yield Loss" fill="#ef4444" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="ExcessPesticide" name="Wasted Chemical Cost" fill="#f59e0b" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Bottom Callout */}
            <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-emerald-600 shrink-0" />
                <div className="text-xs text-emerald-950 font-medium">
                  <strong>CropDOC Guarantee:</strong> Pay zero upfront. Annual subscriptions starting at just ₹299 ($3.50) per farmer per year!
                </div>
              </div>
              <a
                href="#scanner"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all shrink-0 flex items-center gap-1"
              >
                <span>Test Scanner</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
