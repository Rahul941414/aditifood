import React from "react";
import { Mail, Phone, MapPin, User, Clock, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#fffcf9] pb-20">
      {/* Hero Header */}
      <div className="bg-stone-900 pt-32 pb-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
            Get In <span className="italic text-orange-600">Touch</span>
          </h1>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Have a question about our menu, catering, or private events?
            We're here to help you experience the best of Aditi Restaurant.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-12 relative z-20">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6">

            {/* Info Card */}
            <div className="bg-white rounded-[2rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-stone-100">
              <h2 className="text-2xl font-serif text-stone-900 mb-8">
                Contact Info
              </h2>

              <div className="space-y-6">

                {/* Manager */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all">
                    <User size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">
                      Manager
                    </p>
                    <p className="text-stone-800 font-medium">
                      NAMO BAI MEENA
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">
                      Email Us
                    </p>
                    <p className="text-stone-800 font-medium">
                       unacademyunacademy05@gmail.com
                    </p>
                  </div>
                </div>

               {/* Phone */}
<div className="flex items-start gap-4 group">
  <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all">
    <Phone size={20} />
  </div>
  <div>
    <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">
      Call Anytime
    </p>

    <p className="text-stone-800 font-medium">
      +91 9829768508
    </p>

    <p className="text-stone-800 font-medium">
      +91 8209194046
    </p>
  </div>
</div>


                {/* Restaurant Location */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">
                      Restaurant Location
                    </p>
                    <p className="text-stone-800 font-medium leading-relaxed">
                      80 Feet Rd, near MCM hospital, Shiv Nagar, Niwai,
                      <br /> Rajasthan, 304021
                    </p>
                  </div>
                </div>

                {/* Permanent Address */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">
                      Permanent Address
                    </p>
                    <p className="text-stone-800 font-medium leading-relaxed">
                      124, Jatlao, PO: Gungorad,
                      <br />
                      DIST: Sawai Madhopur,
                      <br />
                      Rajasthan - 322023
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-stone-900 rounded-[2rem] p-8 text-white shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="text-orange-600" size={24} />
                <h3 className="text-xl font-serif">Kitchen Hours</h3>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between border-b border-stone-800 pb-2">
                  <span className="text-stone-400">Mon – Sat</span>
                  <span className="text-orange-500 font-medium">
                    9am – 10pm
                  </span>
                </div>

                <div className="flex justify-between text-stone-500 italic">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>

                <p className="text-xs text-stone-500 mt-4 leading-relaxed">
                  *Delivery available during working hours only.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-stone-100 h-full">
              <h3 className="text-3xl font-serif text-stone-900 mb-8">
                Send Us a{" "}
                <span className="text-orange-600">Message</span>
              </h3>

              <form className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-500 uppercase tracking-widest ml-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-stone-50 border-none focus:ring-2 focus:ring-orange-600/20 outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-500 uppercase tracking-widest ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="hello@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-stone-50 border-none focus:ring-2 focus:ring-orange-600/20 outline-none transition-all"
                  />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-bold text-stone-500 uppercase tracking-widest ml-1">
                    Subject
                  </label>
                  <select className="w-full px-6 py-4 rounded-2xl bg-stone-50 border-none focus:ring-2 focus:ring-orange-600/20 outline-none transition-all">
                    <option>General Inquiry</option>
                    <option>Catering Request</option>
                    <option>Feedback</option>
                    <option>Support</option>
                  </select>
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-bold text-stone-500 uppercase tracking-widest ml-1">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="How can we help you today?"
                    className="w-full px-6 py-4 rounded-2xl bg-stone-50 border-none focus:ring-2 focus:ring-orange-600/20 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <div className="md:col-span-2">
                  <button className="w-full md:w-auto px-12 py-5 bg-orange-600 text-white rounded-full font-bold hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/20 flex items-center justify-center gap-3 group">
                    Send Message
                    <Send
                      size={18}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </button>
                </div>
              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
