export const CROP_PRESETS = [
  {
    id: "tomato-early-blight",
    crop: "Tomato",
    cropIcon: "🍅",
    diseaseName: "Early Blight",
    scientificName: "Alternaria solani",
    status: "infected",
    severity: "High",
    confidence: 97.8,
    sampleImage: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19657?auto=format&fit=crop&w=800&q=80",
    symptoms: "Target-board dark concentric rings on mature lower leaves, stem lesions, yellowing halo around brown spots.",
    rootCause: "Fungal pathogen overwintering in plant debris, favored by warm temperature (24-29°C) & high humidity.",
    yieldImpact: "Up to 45% yield reduction if untreated within 7 days.",
    treatments: {
      organic: [
        "Spray Neem Oil (3-5 ml/L water) every 7 days.",
        "Apply Trichoderma harzianum bio-fungicide (5g/L) to leaf surface.",
        "Prune affected lower leaves and dispose far from farm field."
      ],
      chemical: [
        "Spray Mancozeb 75% WP @ 2.5g per liter of water.",
        "Alternatively apply Chlorothalonil 75% WP @ 2.0g/L.",
        "Follow a 14-day pre-harvest interval (PHI)."
      ],
      preventive: [
        "Ensure proper plant spacing for air circulation.",
        "Avoid overhead irrigation; use drip irrigation.",
        "Rotate crop with non-solanaceous plants (corn, beans) every 2 years."
      ]
    }
  },
  {
    id: "corn-common-rust",
    crop: "Corn / Maize",
    cropIcon: "🌽",
    diseaseName: "Common Rust",
    scientificName: "Puccinia sorghi",
    status: "infected",
    severity: "Medium",
    confidence: 96.4,
    sampleImage: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80",
    symptoms: "Small, oval to elongate cinnamon-brown pustules scattered on upper & lower leaf surfaces.",
    rootCause: "Airborne fungal spores blown from southern regions; thrives in cool, humid weather (16-23°C).",
    yieldImpact: "15-25% reduction in kernel filling and grain weight.",
    treatments: {
      organic: [
        "Apply Copper Octanoate (Soap-based fungicide) @ 5ml/L.",
        "Sprinkle wood ash infusion to boost potassium resilience.",
        "Maintain optimal soil nitrogen balance."
      ],
      chemical: [
        "Apply Azoxystrobin 23% SC @ 1.0ml/L of water at first sign.",
        "Propiconazole 25% EC @ 1.0ml/L for severe infection."
      ],
      preventive: [
        "Plant rust-resistant hybrid seeds (e.g. CropDOC Certified Hybrids).",
        "Destroy crop residue post-harvest to eliminate spore carryover."
      ]
    }
  },
  {
    id: "rice-bacterial-blight",
    crop: "Rice / Paddy",
    cropIcon: "🌾",
    diseaseName: "Bacterial Leaf Blight",
    scientificName: "Xanthomonas oryzae",
    status: "infected",
    severity: "Critical",
    confidence: 99.1,
    sampleImage: "https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&w=800&q=80",
    symptoms: "Water-soaked lesions on leaf margins turning pale yellow to whitish grey, leaf tip drying & curling.",
    rootCause: "Bacterial entry through leaf stomata or wounds caused by high winds/flooding; spreads via irrigation water.",
    yieldImpact: "30% to 60% severe crop loss if unchecked during tillering stage.",
    treatments: {
      organic: [
        "Spray Fresh Cow Dung Extract (20%) + Panchagavya solution (3%).",
        "Drain excess standing water from paddy field for 3-4 days.",
        "Apply Pseudomonas fluorescens @ 10g/L."
      ],
      chemical: [
        "Spray Streptocycline (6g) + Copper Oxychloride 50% WP (500g) in 200 Liters water per acre.",
        "Avoid excess nitrogen fertilizer application during outbreak."
      ],
      preventive: [
        "Use balanced N-P-K fertilization (avoid excess Urea).",
        "Treat seeds with Streptocycline @ 40ppm before sowing."
      ]
    }
  },
  {
    id: "potato-late-blight",
    crop: "Potato",
    cropIcon: "🥔",
    diseaseName: "Late Blight",
    scientificName: "Phytophthora infestans",
    status: "infected",
    severity: "Critical",
    confidence: 98.6,
    sampleImage: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80",
    symptoms: "Large, dark brown to purplish-black water-soaked lesions with white mold growth under wet leaves.",
    rootCause: "Oomycete pathogen spread by wind-blown sporangia in damp, foggy weather.",
    yieldImpact: "Up to 80-100% total crop destruction within 5-10 days!",
    treatments: {
      organic: [
        "Bordeaux mixture (1%) foliar spray.",
        "Extract of Garlic & Onion peel bio-spray.",
        "Remove and burn severely infected vines immediately."
      ],
      chemical: [
        "Systemic fungicide: Cymoxanil 8% + Mancozeb 64% WP @ 2.0g/L.",
        "Dimethomorph 50% WP @ 1.0g/L in severe conditions."
      ],
      preventive: [
        "Plant certified disease-free seed tubers.",
        "Ensure high hilling of potato rows to prevent tuber infection."
      ]
    }
  },
  {
    id: "healthy-crop",
    crop: "Healthy Cotton / Soybean",
    cropIcon: "🌱",
    diseaseName: "Healthy Crop (No Disease)",
    scientificName: "N/A",
    status: "healthy",
    severity: "None",
    confidence: 99.4,
    sampleImage: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80",
    symptoms: "Lush green foliage, uniform leaf cell structure, vibrant chlorophyll concentration, zero necrotic spots.",
    rootCause: "Optimal nutrient availability and clean soil environment.",
    yieldImpact: "Expected 100% peak harvest yield potential.",
    treatments: {
      organic: [
        "Continue routine organic composting and bio-fertilizer application.",
        "Maintain mulch cover to preserve soil moisture."
      ],
      chemical: [
        "No chemical fungicide application required."
      ],
      preventive: [
        "Scan leaves weekly with CropDOC to catch latent spore infections early."
      ]
    }
  }
];

export const BUSINESS_MINDMAP = {
  challenges: [
    { text: "Crop Diseases Outbreaks", icon: "🦠", color: "bg-red-50 text-red-700 border-red-200" },
    { text: "Low Crop Yield & Quality", icon: "📉", color: "bg-orange-50 text-orange-700 border-orange-200" },
    { text: "Severe Financial Losses (₹/💰)", icon: "💸", color: "bg-amber-50 text-amber-700 border-amber-200" },
    { text: "Wrong & Excessive Pesticides", icon: "🧪", color: "bg-purple-50 text-purple-700 border-purple-200" },
    { text: "Delayed Disease Diagnosis", icon: "⏱️", color: "bg-rose-50 text-rose-700 border-rose-200" }
  ],
  observations: [
    { text: "Farmers Depend On Expert Advice", icon: "🧑‍🌾" },
    { text: "Agronomists Not Always Available in Remote Villages", icon: "🚫" },
    { text: "85%+ Farmers Now Own Smartphones", icon: "📱" }
  ],
  opportunities: [
    { text: "Leverage Smartphone Camera Tech", icon: "📸" },
    { text: "Artificial Intelligence & Computer Vision", icon: "🤖" },
    { text: "Digital Farming Ecosystem", icon: "🌐" },
    { text: "Affordable Micro-Subscription Models", icon: "💳" }
  ],
  rootCauses: [
    { text: "Farmers Cannot Identify Complex Diseases Early", icon: "👁️" },
    { text: "No Instant Action Possible in Isolated Fields", icon: "⏳" },
    { text: "Delayed Treatment Causes Irreversible Loss", icon: "❌" }
  ],
  bestSolution: [
    { text: "Mobile & Web Application", desc: "Instant scanning anytime, anywhere" },
    { text: "Affordable & Effective", desc: "Saves up to ₹45,000 per acre in crop loss & chemicals" },
    { text: "Easy To Use Interface", desc: "Simple 1-2-3 click flow with local language voice guides" }
  ]
};

export const LANGUAGES = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "hi", name: "हिन्दी (Hindi)", flag: "🇮🇳" },
  { code: "mr", name: "मराठी (Marathi)", flag: "🇮🇳" },
  { code: "te", name: "తెలుగు (Telugu)", flag: "🇮🇳" },
  { code: "es", name: "Español (Spanish)", flag: "🇪🇸" }
];
