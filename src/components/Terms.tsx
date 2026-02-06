import React from "react";
import { Scale, CreditCard, XCircle, ShieldAlert, Gavel, ArrowRight } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#fffcf9] pb-20">
      {/* Hero Header */}
      <div className="bg-stone-900 pt-32 pb-20 text-center">
        <div className="container mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-600/10 border border-orange-600/20 text-orange-500 mb-6 backdrop-blur-md">
            <Scale className="w-4 h-4" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Legal Agreement</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
            Terms & <span className="italic text-orange-600">Conditions</span>
          </h1>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Please review the rules and regulations that govern your
            culinary journey with Aditi Restaurant.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-stone-100">

            {/* Grid of Terms */}
            <div className="space-y-16">

              {/* Section 1: Payments */}
              <section className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                  <CreditCard size={28} />
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-serif text-stone-900">Payments & Pricing</h2>
                  <p className="text-stone-600 leading-relaxed font-light">
                    All prices are listed in <strong>Indian Rupees (INR)</strong>. Taxes are applicable as per government regulations. We accept a wide range of secure payment methods, including UPI, Credit/Debit Cards, and Netbanking through our authorized payment gateways.
                  </p>
                </div>
              </section>

              {/* Section 2: Cancellations */}
              <section className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                  <XCircle size={28} />
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-serif text-stone-900">Order Cancellations</h2>
                  <p className="text-stone-600 leading-relaxed font-light">
                    Orders may only be cancelled before they have entered the processing or shipment stage. Once our kitchen begins preparing your meal, cancellation may not be possible. Please contact our support team immediately for any assistance.
                  </p>
                </div>
              </section>

              {/* Section 3: Liability */}
              <section className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                  <ShieldAlert size={28} />
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-serif text-stone-900">Limitation of Liability</h2>
                  <p className="text-stone-600 leading-relaxed font-light">
                    Aditi Restaurant shall not be held liable for any indirect damages, loss of profits, or service interruptions caused by factors beyond our reasonable control, including but not limited to technical failures or extreme weather conditions.
                  </p>
                </div>
              </section>

              {/* Section 4: Jurisdiction */}
              <section className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                  <Gavel size={28} />
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-serif text-stone-900">Governing Law & Jurisdiction</h2>
                  <p className="text-stone-600 leading-relaxed font-light">
                    These terms are governed by and construed in accordance with the laws of India. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts in <strong>Indore, Madhya Pradesh</strong>.
                  </p>
                </div>
              </section>

            </div>

            {/* Bottom Note */}
            <div className="mt-20 pt-10 border-t border-stone-100 flex flex-col items-center">
              <p className="text-stone-400 text-sm italic text-center mb-6">
                By continuing to use our services, you acknowledge that you have read and agreed to these terms.
              </p>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-2 text-orange-600 font-bold uppercase text-[10px] tracking-[0.2em] hover:text-orange-700 transition-colors"
              >
                Back to top <ArrowRight size={14} className="-rotate-90" />
              </button>
            </div>

          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 text-center text-stone-400 text-xs uppercase tracking-[0.3em]">
        © 2026 Aditi Restaurant • Established for Excellence
      </div>
    </div>
  );
}