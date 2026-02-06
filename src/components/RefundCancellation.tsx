import React from "react";
import { RefreshCcw, AlertCircle, HelpCircle, Calendar, ArrowRight } from "lucide-react";

export default function RefundCancellation() {
  return (
    <div className="min-h-screen bg-[#fffcf9] pb-20">
      {/* Hero Header */}
      <div className="bg-stone-900 pt-32 pb-20 text-center">
        <div className="container mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-600/10 border border-orange-600/20 text-orange-500 mb-6 backdrop-blur-md">
            <RefreshCcw className="w-4 h-4" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Service Transparency</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
            Refund & <span className="italic text-orange-600">Cancellation</span>
          </h1>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            We value your satisfaction. Here is how we handle changes
            to your culinary orders at Aditi Restaurant.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-stone-100">

            <div className="grid gap-12">

              {/* Section 1: Refund Timelines */}
              <section className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                  <Calendar size={28} />
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-serif text-stone-900">Refund Timelines</h2>
                  <p className="text-stone-600 leading-relaxed font-light">
                    Once a refund is approved, it will be credited back to your original payment method. The standard timeline for this process is <strong>5–7 business days</strong>, depending on your bank's processing time.
                  </p>
                </div>
              </section>

              {/* Section 2: Non-Refundable Items */}
              <section className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                  <AlertCircle size={28} />
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-serif text-stone-900">Non-Refundable Orders</h2>
                  <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100">
                    <p className="text-stone-600 leading-relaxed font-light">
                      Please note that <strong>perishable, custom, or personalized orders</strong> cannot be refunded once the kitchen has begun preparation or the order has been processed for delivery.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: How to Request */}
              <section className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                  <HelpCircle size={28} />
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-serif text-stone-900">How to Request a Refund</h2>
                  <p className="text-stone-600 leading-relaxed font-light mb-4">
                    For a faster resolution, please contact our support team with the following details:
                  </p>
                  <ul className="space-y-3">
                    {['Your Unique Order ID', 'Reason for cancellation/refund', 'Relevant photos (if any quality issues)'].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-stone-700 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-600"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

            </div>

            {/* Support CTA */}
            <div className="mt-20 p-8 rounded-3xl bg-stone-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-xl font-serif mb-1">Need immediate help?</h4>
                <p className="text-stone-400 text-sm font-light">Our support team is available Mon-Sat.</p>
              </div>
              <a
                href="/contact"
                className="px-8 py-3 bg-orange-600 text-white rounded-full font-bold hover:bg-orange-700 transition-all flex items-center gap-2 group"
              >
                Contact Support <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 text-center text-stone-400 text-xs uppercase tracking-[0.3em]">
        Aditi Restaurant • Hospitality Redefined
      </div>
    </div>
  );
}