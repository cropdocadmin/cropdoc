import React, { useState } from 'react';
import { CROP_PRESETS } from '../data/diseasesData';
import { Search, BookOpen, Filter, Leaf, Beaker, ChevronRight } from 'lucide-react';

const EXTRA_DISEASES = [
  {
    id: "wheat-yellow-rust",
    crop: "Wheat",
    cropIcon: "🌾",
    diseaseName: "Yellow / Stripe Rust",
    scientificName: "Puccinia striiformis",
    severity: "High",
    symptoms: "Bright yellow pustules arranged in linear stripes along leaf veins.",
    remedy: "Spray Propiconazole 25% EC @ 1ml/L or apply bio-agent Trichoderma."
  },
  {
    id: "apple-scab",
    crop: "Apple",
    cropIcon: "🍎",
    diseaseName: "Apple Scab",
    scientificName: "Venturia inaequalis",
    severity: "Medium",
    symptoms: "Velvety olive-green to brown lesions on foliage and fruit skin.",
    remedy: "Apply Captan 50% WP @ 2.5g/L or Neem-based bio-spray."
  },
  {
    id: "cotton-leaf-curl",
    crop: "Cotton",
    cropIcon: "☁️",
    diseaseName: "Cotton Leaf Curl Virus",
    scientificName: "CLCuV (Begomovirus)",
    severity: "Critical",
    symptoms: "Upward or downward curling of leaves with cup-like leaf outgrowths.",
    remedy: "Control Whitefly vector using Imidacloprid 17.8% SL @ 0.5ml/L."
  }
];

export default function DiseaseLibrary() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCropFilter, setSelectedCropFilter] = useState("All");

  const allDiseases = [...CROP_PRESETS, ...EXTRA_DISEASES];

  const filteredDiseases = allDiseases.filter(item => {
    const matchesSearch = item.diseaseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.crop.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.symptoms.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCrop = selectedCropFilter === "All" || item.crop.includes(selectedCropFilter);
    return matchesSearch && matchesCrop;
  });

  return (
    <section id="disease-library" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold">
            <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
            <span>Agronomic Knowledge Hub</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Crop DOC <span className="text-emerald-600">Disease Database</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Explore hundreds of verified plant diseases, symptoms, causes, and step-by-step treatment remedies cataloged by agronomists.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-slate-50 p-4 rounded-2xl border border-slate-200">
          
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by crop, disease or symptom..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            <Filter className="w-4 h-4 text-slate-400 shrink-0 hidden sm:inline" />
            {["All", "Tomato", "Corn", "Rice", "Potato", "Wheat"].map((crop) => (
              <button
                key={crop}
                onClick={() => setSelectedCropFilter(crop)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                  selectedCropFilter === crop
                    ? "bg-emerald-600 text-white shadow-xs"
                    : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
                }`}
              >
                {crop}
              </button>
            ))}
          </div>

        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDiseases.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-lg transition-all space-y-4 flex flex-col justify-between group hover:border-emerald-300"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{item.cropIcon}</span>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                      {item.crop}
                    </span>
                  </div>
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                    item.severity === "Critical" || item.severity === "High"
                      ? "bg-red-50 text-red-700 border-red-200"
                      : item.severity === "Medium"
                      ? "bg-amber-50 text-amber-700 border-amber-200"
                      : "bg-emerald-50 text-emerald-700 border-emerald-200"
                  }`}>
                    {item.severity} Risk
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {item.diseaseName}
                </h3>

                {item.scientificName && (
                  <div className="text-xs italic text-slate-400 font-mono">
                    {item.scientificName}
                  </div>
                )}

                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>Key Symptoms:</strong> {item.symptoms}
                </p>
              </div>

              {/* Remedy Callout */}
              <div className="pt-3 border-t border-slate-100 space-y-2">
                <div className="text-xs font-bold text-emerald-800 flex items-center gap-1.5">
                  <Leaf className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Targeted Cure:</span>
                </div>
                <div className="text-xs text-slate-700 bg-emerald-50/60 p-2.5 rounded-xl border border-emerald-100/80 leading-snug">
                  {item.treatments?.organic[0] || item.remedy}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
