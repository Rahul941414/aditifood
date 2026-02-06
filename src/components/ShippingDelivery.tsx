import React from "react";
import { Truck, Clock, ShieldAlert, MapPin, ArrowRight } from "lucide-react";

export default function ShippingDelivery() {
  return (
    <div className="min-h-screen bg-[#fffcf9] pb-20">
      {/* Hero Header */}
      <div className="bg-stone-900 pt-32 pb-20 text-center">
        <div className="container mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-600/10 border border-orange-600/20 text-orange-500 mb-6 backdrop-blur-sm">
            <Truck className="w-4 h-4" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Express Service</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
            Shipping & <span className="italic text-orange-600">Delivery</span>
          </h1>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            From our kitchen to your doorstep. Experience the gold standard
            of food delivery with Aditi Restaurant.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-stone-100 space-y-16">

            {/* Delivery Timeline Section */}
            <section className="flex flex-col md:flex-row gap-10 items-start">
              <div className="w-16 h-16 rounded-3xl bg-orange-50 flex items-center justify-center text-orange-600 shrink-0 shadow-sm border border-orange-100">
                <Clock size={32} />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-serif text-stone-900">Same Day Delivery</h2>
                <p className="text-stone-600 leading-relaxed font-light text-lg">
                  At <strong>Aditi Restaurant</strong>, we ensure your food is delivered fresh and fast. Our signature shipping commitment ensures delivery within <strong>5-6 hours</strong> of your order being placed.
                </p>
                <div className="bg-stone-50 p-6 rounded-2xl border-l-4 border-orange-600">
                  <p className="text-stone-700 text-sm font-medium">
                    "We prioritize freshness above all else. Every meal is packed only when it's ready to travel."
                  </p>
                </div>
              </div>
            </section>

            {/* Delivery Fees Section */}
            <section className="flex flex-col md:flex-row gap-10 items-start">
              <div className="w-16 h-16 rounded-3xl bg-orange-50 flex items-center justify-center text-orange-600 shrink-0 shadow-sm border border-orange-100">
                <MapPin size={32} />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-serif text-stone-900">Delivery Fees</h2>
                <p className="text-stone-600 leading-relaxed font-light">
                  A nominal fee of <strong>₹49</strong> applies for our Express Same Day Delivery service.
                  <span className="block mt-2 text-sm text-stone-400 italic">*Fees may vary slightly based on your specific location and the size of your order.</span>
                </p>
              </div>
            </section>

            {/* Safety & Damage Section */}
            <section className="flex flex-col md:flex-row gap-10 items-start">
              <div className="w-16 h-16 rounded-3xl bg-red-50 flex items-center justify-center text-red-600 shrink-0 shadow-sm border border-red-100">
                <ShieldAlert size={32} />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-serif text-stone-900">Damaged / Tampered Packages</h2>
                <p className="text-stone-600 leading-relaxed font-light">
                  Your safety is our priority. If your package appears tampered with or damaged in any way, <strong>please do not accept the delivery.</strong> Contact our support team immediately, and we will arrange a fresh replacement for you.
                </p>
              </div>
            </section>

            {/* Support Link */}
            <div className="pt-10 border-t border-stone-100 flex flex-col items-center">
              <p className="text-stone-400 text-sm mb-6 uppercase tracking-widest">Questions about your order?</p>
              <a
                href="/contact"
                className="flex items-center gap-2 px-10 py-4 bg-stone-900 text-white rounded-full font-bold hover:bg-orange-600 transition-all duration-300 shadow-xl group"
              >
                Visit Help Center <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 text-center text-stone-400 text-xs uppercase tracking-[0.4em]">
        Aditi Restaurant • Freshness Delivered Daily
      </div>
    </div>
  );
}