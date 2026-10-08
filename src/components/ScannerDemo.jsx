import React, { useState, useRef } from 'react';
import { CROP_PRESETS } from '../data/diseasesData';
import { Camera, Upload, RefreshCw, CheckCircle, AlertTriangle, Info, Share2, Download, Zap, Sparkles, Shield, Leaf, Beaker } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ScannerDemo() {
  const [selectedPreset, setSelectedPreset] = useState(CROP_PRESETS[0]);
  const [customImage, setCustomImage] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scanStepLog, setScanStepLog] = useState("");
  const [activeTab, setActiveTab] = useState("organic"); // organic | chemical | preventive
  const [diagnosed, setDiagnosed] = useState(true);
  const fileInputRef = useRef(null);

  const handleSelectPreset = (preset) => {
    setSelectedPreset(preset);
    setCustomImage(null);
    runScanProcess(preset);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomImage(url);
      const customPreset = {
        id: "custom-uploaded",
        crop: "Custom Uploaded Crop",
        cropIcon: "🍃",
        diseaseName: "Tomato Early Blight (Detected)",
        scientificName: "Alternaria solani",
        status: "infected",
        severity: "High",
        confidence: 96.5,
        sampleImage: url,
        symptoms: "Dark brown necrotic spots with chlorotic halo on foliage.",
        rootCause: "High humidity and fungal spore accumulation.",
        yieldImpact: "35% - 45% potential crop reduction.",
        treatments: {
          organic: ["Spray Neem Oil 3-5ml/L", "Remove damaged leaves", "Apply Trichoderma harzianum"],
          chemical: ["Spray Mancozeb 75% WP @ 2.5g/L", "Chlorothalonil @ 2g/L"],
          preventive: ["Avoid overhead watering", "Ensure proper crop spacing"]
        }
      };
      setSelectedPreset(customPreset);
      runScanProcess(customPreset);
    }
  };

  const runScanProcess = (presetItem) => {
    setIsScanning(true);
    setDiagnosed(false);
    
    setScanStepLog("Capturing high-resolution leaf texture...");
    
    setTimeout(() => {
      setScanStepLog("Segmenting lesion margins & chlorophyll density...");
    }, 700);

    setTimeout(() => {
      setScanStepLog("Querying CropDOC Convolutional Vision Engine v3.4...");
    }, 1400);

    setTimeout(() => {
      setIsScanning(false);
      setDiagnosed(true);
      if (presetItem.status === "healthy") {
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
      }
    }, 2100);
  };

  return (
    <section id="scanner" className="py-16 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background visual accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
            <Zap className="w-3.5 h-3.5 animate-pulse" />
            <span>Interactive AI Simulator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Try the <span className="text-emerald-400">CropDOC AI Leaf Scanner</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Experience our instant disease diagnosis engine in action. Select sample infected leaves below or upload your own leaf photo.
          </p>
        </div>

        {/* Preset Selector Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <Camera className="w-4 h-4 text-emerald-400" />
              Select Sample Leaf Scenario:
            </span>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-800 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Upload Custom Photo</span>
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept="image/*"
              className="hidden"
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {CROP_PRESETS.map((preset) => (
              <button
                key={preset.id}
                onClick={() => handleSelectPreset(preset)}
                className={`p-3 rounded-xl border text-left transition-all flex items-center gap-3 cursor-pointer ${
                  selectedPreset.id === preset.id
                    ? "bg-emerald-950/80 border-emerald-400 shadow-lg shadow-emerald-900/40 ring-2 ring-emerald-500/30"
                    : "bg-slate-800/80 border-slate-700/80 hover:bg-slate-800 hover:border-slate-600 text-slate-300"
                }`}
              >
                <span className="text-2xl">{preset.cropIcon}</span>
                <div className="overflow-hidden">
                  <div className="text-xs font-bold text-white truncate">{preset.crop}</div>
                  <div className={`text-[11px] truncate font-medium ${preset.status === 'healthy' ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {preset.diseaseName}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Main Scanner Workspace (2-Column layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Viewfinder & Scanner View */}
          <div className="lg:col-span-5 bg-slate-800/90 border border-slate-700 rounded-3xl p-5 shadow-2xl relative">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-700/80">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></div>
                <span className="text-xs font-bold font-mono text-slate-200">
                  CAMERA VIEWFINDER
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono">
                {selectedPreset.crop}
              </span>
            </div>

            {/* Scanning Container */}
            <div className="relative rounded-2xl overflow-hidden aspect-4/3 bg-black border border-slate-700 group">
              <img
                src={selectedPreset.sampleImage}
                alt={selectedPreset.crop}
                className="w-full h-full object-cover"
              />

              {/* Laser Scanning Bar */}
              {isScanning && (
                <div className="absolute inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_20px_#34d399] animate-scan z-30"></div>
              )}

              {/* Corner Viewfinder brackets (Image 1 style) */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-4 border-l-4 border-emerald-400 rounded-tl-sm pointer-events-none z-20"></div>
              <div className="absolute top-4 right-4 w-8 h-8 border-t-4 border-r-4 border-emerald-400 rounded-tr-sm pointer-events-none z-20"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-4 border-l-4 border-emerald-400 rounded-bl-sm pointer-events-none z-20"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-4 border-r-4 border-emerald-400 rounded-br-sm pointer-events-none z-20"></div>

              {/* Bounding box visual if infected and diagnosed */}
              {diagnosed && selectedPreset.status === "infected" && !isScanning && (
                <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border-2 border-dashed border-red-500 bg-red-500/20 rounded-xl flex items-start justify-end p-2 animate-pulse z-20">
                  <span className="bg-red-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow-sm">
                    {selectedPreset.diseaseName}
                  </span>
                </div>
              )}

              {/* Status Banner overlay */}
              <div className="absolute bottom-3 inset-x-3 bg-slate-950/85 backdrop-blur-md border border-slate-800 rounded-xl p-3 flex items-center justify-between z-20">
                <div className="text-xs">
                  <div className="text-slate-400 font-mono text-[10px]">AI MODEL STATUS</div>
                  <div className="font-bold text-white flex items-center gap-1.5">
                    {isScanning ? (
                      <span className="text-emerald-400 flex items-center gap-1.5">
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        Analyzing...
                      </span>
                    ) : diagnosed ? (
                      <span className="text-emerald-400 flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5" />
                        Scan Complete ({selectedPreset.confidence}% Confidence)
                      </span>
                    ) : (
                      <span className="text-slate-300">Ready to scan</span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => runScanProcess(selectedPreset)}
                  disabled={isScanning}
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-3 py-1.5 rounded-lg text-xs transition-all flex items-center gap-1.5 disabled:opacity-50 cursor-pointer"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isScanning ? 'animate-spin' : ''}`} />
                  Rescan
                </button>
              </div>
            </div>

            {/* Scan Progress Bar & Log */}
            {isScanning && (
              <div className="mt-4 p-3 bg-slate-950/80 rounded-xl border border-emerald-800/60 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-emerald-400">
                  <span>PROCESSING...</span>
                  <span className="animate-pulse">AI GPU ACTIVE</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-400 animate-pulse w-full"></div>
                </div>
                <div className="text-xs text-slate-300 font-mono flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{scanStepLog}</span>
                </div>
              </div>
            )}
          </div>

          {/* Right: Detailed Diagnostic Results Panel */}
          <div className="lg:col-span-7 bg-slate-800/90 border border-slate-700 rounded-3xl p-6 shadow-2xl space-y-6">
            
            {/* Header of results */}
            <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-slate-700">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl">{selectedPreset.cropIcon}</span>
                  <span className="text-sm font-bold text-slate-400 uppercase tracking-wide">
                    {selectedPreset.crop} Diagnosis
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-white flex items-center gap-2">
                  {selectedPreset.diseaseName}
                  {selectedPreset.scientificName !== "N/A" && (
                    <span className="text-sm font-normal italic text-slate-400">
                      ({selectedPreset.scientificName})
                    </span>
                  )}
                </h3>
              </div>

              {/* Status Badge */}
              <div className="text-right">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
                  selectedPreset.status === "healthy"
                    ? "bg-emerald-950 text-emerald-400 border-emerald-700"
                    : "bg-red-950 text-red-400 border-red-800"
                }`}>
                  {selectedPreset.status === "healthy" ? <CheckCircle className="w-3.5 h-3.5" /> : <AlertTriangle className="w-3.5 h-3.5" />}
                  Severity: {selectedPreset.severity}
                </span>
                <div className="text-[11px] text-slate-400 mt-1 font-mono">
                  AI Confidence: {selectedPreset.confidence}%
                </div>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3.5 bg-slate-900/90 rounded-2xl border border-slate-700">
                <div className="text-xs text-slate-400 mb-1 flex items-center gap-1">
                  <Info className="w-3.5 h-3.5 text-amber-400" />
                  Identified Symptoms:
                </div>
                <div className="text-xs text-slate-200 leading-relaxed font-medium">
                  {selectedPreset.symptoms}
                </div>
              </div>

              <div className="p-3.5 bg-slate-900/90 rounded-2xl border border-slate-700">
                <div className="text-xs text-slate-400 mb-1 flex items-center gap-1">
                  <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                  Estimated Yield Risk:
                </div>
                <div className="text-xs text-red-300 font-bold leading-relaxed">
                  {selectedPreset.yieldImpact}
                </div>
              </div>
            </div>

            {/* Actionable Treatment Plan Section (Tabs: Organic | Chemical | Preventive) */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Recommended Treatment Plan:
                </h4>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-slate-700 space-x-2">
                <button
                  onClick={() => setActiveTab("organic")}
                  className={`pb-2.5 px-3 text-xs font-bold flex items-center gap-1.5 transition-colors border-b-2 cursor-pointer ${
                    activeTab === "organic"
                      ? "text-emerald-400 border-emerald-400"
                      : "text-slate-400 border-transparent hover:text-slate-200"
                  }`}
                >
                  <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                  Eco/Organic Remedy
                </button>

                <button
                  onClick={() => setActiveTab("chemical")}
                  className={`pb-2.5 px-3 text-xs font-bold flex items-center gap-1.5 transition-colors border-b-2 cursor-pointer ${
                    activeTab === "chemical"
                      ? "text-teal-400 border-teal-400"
                      : "text-slate-400 border-transparent hover:text-slate-200"
                  }`}
                >
                  <Beaker className="w-3.5 h-3.5 text-teal-400" />
                  Targeted Chemical Spray
                </button>

                <button
                  onClick={() => setActiveTab("preventive")}
                  className={`pb-2.5 px-3 text-xs font-bold flex items-center gap-1.5 transition-colors border-b-2 cursor-pointer ${
                    activeTab === "preventive"
                      ? "text-cyan-400 border-cyan-400"
                      : "text-slate-400 border-transparent hover:text-slate-200"
                  }`}
                >
                  <Shield className="w-3.5 h-3.5 text-cyan-400" />
                  Agronomic Prevention
                </button>
              </div>

              {/* Tab Contents */}
              <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800">
                {activeTab === "organic" && (
                  <ul className="space-y-2 text-xs text-slate-200">
                    {selectedPreset.treatments.organic.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-5 h-5 rounded-full bg-emerald-900/80 text-emerald-400 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {activeTab === "chemical" && (
                  <ul className="space-y-2 text-xs text-slate-200">
                    {selectedPreset.treatments.chemical.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-5 h-5 rounded-full bg-teal-900/80 text-teal-400 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                          🧪
                        </span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {activeTab === "preventive" && (
                  <ul className="space-y-2 text-xs text-slate-200">
                    {selectedPreset.treatments.preventive.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-5 h-5 rounded-full bg-cyan-900/80 text-cyan-400 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                          🛡️
                        </span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Action Buttons: WhatsApp / Print Report */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => alert("Diagnostic PDF Summary generated! CropDOC report downloaded.")}
                  className="bg-slate-700 hover:bg-slate-600 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-4 h-4 text-emerald-400" />
                  Download PDF Report
                </button>
                <button
                  onClick={() => alert("Report link ready to share on WhatsApp!")}
                  className="bg-emerald-950 hover:bg-emerald-900 text-emerald-300 border border-emerald-800 text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Share2 className="w-4 h-4 text-emerald-400" />
                  Share via WhatsApp
                </button>
              </div>

              <a
                href="#yield-calculator"
                className="text-xs font-bold text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
              >
                Calculate Saved Yield ROI →
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
