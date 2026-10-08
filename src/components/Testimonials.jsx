import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: "Ramesh Patil",
    role: "Tomato & Onion Farmer (5 Acres)",
    location: "Nashik, Maharashtra",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    quote: "Early Blight wiped out 40% of my tomato crop last season because the local dealer gave me wrong pesticides. With CropDOC, I scanned the leaf, got exact organic Neem + Mancozeb dosage in 2 seconds, and saved ₹1.8 Lakhs harvest value!",
    rating: 5,
    cropSaved: "Saved ₹180,000"
  },
  {
    name: "Sukhwinder Singh",
    role: "Paddy & Wheat Farmer (12 Acres)",
    location: "Ludhiana, Punjab",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    quote: "The best part is that CropDOC works offline in the middle of our fields. When Bacterial Leaf Blight appeared during rains, the app warned me immediately and stopped me from spraying excess Urea.",
    rating: 5,
    cropSaved: "Saved 12 Acres Paddy"
  },
  {
    name: "Carlos Mendoza",
    role: "Potato & Corn Grower",
    location: "Sonora, Mexico",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    quote: "Late blight used to be our nightmare. CropDOC identified the oomycete spores on lower leaves before symptoms became severe. Simple, fast, and incredibly reliable!",
    rating: 5,
    cropSaved: "Saved 30% Yield"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>Trusted By 120,000+ Farmers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Real Impact in <span className="text-emerald-600">Real Fields</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Hear from farmers who protected their crops, reduced chemical spend, and boosted their annual harvest income with CropDOC.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md hover:shadow-xl transition-all space-y-4 flex flex-col justify-between relative"
            >
              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    {t.cropSaved}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-emerald-200" />

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-emerald-500"
                />
                <div>
                  <div className="text-sm font-bold text-slate-900 flex items-center gap-1">
                    {t.name}
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 inline" />
                  </div>
                  <div className="text-xs text-slate-500 font-medium">{t.role}</div>
                  <div className="text-[11px] text-emerald-700 font-semibold">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
