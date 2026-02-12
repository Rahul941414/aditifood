import React from "react";
import { ShieldCheck, Lock, Eye, FileText, UserCircle } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#fffcf9] pb-20">
      {/* Hero Header */}
      <div className="bg-stone-900 pt-32 pb-20 text-center">
        <div className="container mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-600/10 border border-orange-600/20 text-orange-500 mb-6 backdrop-blur-md">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Security Guaranteed</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
            Privacy <span className="italic text-orange-600">Policy</span>
          </h1>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Your trust is our most valued ingredient. Learn how we protect
            your personal data at Aditi Restaurant.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-stone-100 space-y-12">

            {/* Introduction */}
            <section className="space-y-4">
              <div className="flex items-center gap-3 text-orange-600 mb-2">
                <FileText size={24} />
                <h2 className="text-2xl font-serif text-stone-900">Commitment to Privacy</h2>
              </div>
              <p className="text-stone-600 leading-relaxed font-light">
                At <strong>Aditi Restaurant</strong>, we respect your privacy and are committed to protecting your personal data. This policy explains what information we collect, how it is used, and the measures we take to ensure your data remains secure while you enjoy our services.
              </p>
            </section>

            {/* Data Collection */}
            <section className="space-y-6">
              <div className="flex items-center gap-3 text-orange-600 mb-2">
                <Eye size={24} />
                <h2 className="text-2xl font-serif text-stone-900">Data We Collect</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100">
                  <h4 className="font-bold text-stone-900 mb-2">Personal Information</h4>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    Name, phone number, and delivery address required for accurate order fulfillment and communication.
                  </p>
                </div>
                <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100">
                  <h4 className="font-bold text-stone-900 mb-2">Digital Footprint</h4>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    Website analytics and cookies to understand your preferences and improve your browsing experience.
                  </p>
                </div>
              </div>
            </section>

            {/* Data Sharing */}
            <section className="space-y-4">
              <div className="flex items-center gap-3 text-orange-600 mb-2">
                <Lock size={24} />
                <h2 className="text-2xl font-serif text-stone-900">Data Sharing & Retention</h2>
              </div>
              <p className="text-stone-600 leading-relaxed font-light">
                We maintain a strict policy against selling your personal data to third parties. Your information is only shared with trusted partners (like delivery services) essential for our operations. We retain order records only as long as necessary for tax compliance and legal requirements.
              </p>
            </section>

            {/* Grievance Officer Section */}
            <section className="bg-stone-900 rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/10 rounded-full blur-3xl"></div>
              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="w-16 h-16 rounded-2xl bg-orange-600 flex items-center justify-center shadow-lg shadow-orange-600/20">
                  <UserCircle size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-serif mb-4 text-orange-500 tracking-wide uppercase">Grievance Officer</h3>
                  <div className="space-y-2 text-stone-300 font-light">
                    <p className="flex items-center gap-3 font-medium text-white">
                      NAMO BAI MEENA
                    </p>
                    <p className="flex items-center gap-3 text-sm">
                      <span className="text-orange-600">✉</span>  unacademyunacademy05@gmail.com
                    </p>
                    <p className="flex items-center gap-3 text-sm leading-relaxed">
                      <span className="text-orange-600">📍</span>  80 Feet Rd, near MCM hospital, Shiv Nagar,  Rajasthan 304021, India
                    </p>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 text-center text-stone-400 text-xs uppercase tracking-widest">
        Last Updated: February 2026
      </div>
    </div>
  );
}