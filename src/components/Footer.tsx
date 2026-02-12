import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 text-white border-t border-stone-800">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* Brand & Description */}
          <div className="md:col-span-5 space-y-6">
            <Link to="/" className="inline-block group">
              <h2 className="text-4xl font-serif tracking-tight">
                Aditi <span className="text-orange-600 italic group-hover:text-orange-500 transition-colors">Restaurant</span>
              </h2>
            </Link>
            <p className="text-stone-400 max-w-sm leading-relaxed text-lg font-light">
              Experience the true essence of Indian hospitality. We bring
              authentic flavors and timeless recipes from our family kitchen
              straight to your table.
            </p>

            {/* Social Icons with custom styling */}
            <div className="flex gap-4 pt-2">
              {[
                
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-12 h-12 rounded-full bg-stone-900 border border-stone-800 hover:border-orange-600 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(234,88,12,0.3)]"
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-orange-500 font-medium tracking-widest uppercase text-xs mb-6">Explore</h3>
            <ul className="space-y-4 text-stone-300">
              {["Home", "Products", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="hover:text-white transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-[1px] bg-orange-600 mr-0 group-hover:mr-2 transition-all"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

{/* Contact Info */}
<div className="md:col-span-3">
  <h3 className="text-orange-500 font-medium tracking-widest uppercase text-xs mb-6">
    Visit Us
  </h3>

  <div className="text-stone-300 space-y-4 font-light">
    {/* Restaurant Address */}
    <p className="flex items-start gap-3">
      <span className="text-orange-600">📍</span>
      80 Feet Rd, near MCM hospital, Shiv Nagar, Niwai, Rajasthan 304021
    </p>

    {/* Owner Permanent Address */}
    <p className="flex items-start gap-3">
      <span className="text-orange-600">🏠</span>
      124, Jatlao, PO: Gungorad, DIST: Sawai Madhopur, Rajasthan - 322023
    </p>

    {/* New Phone Number */}
    <p className="flex items-center gap-3">
      <span className="text-orange-600">📞</span>
      +91 9829768508
    </p>

    {/* Existing Phone Number */}
    <p className="flex items-center gap-3">
      <span className="text-orange-600">📞</span>
      +91 8209194046
    </p>

    <p className="flex items-center gap-3">
      <span className="text-orange-600">✉️</span>
      unacademyunacademy05@gmail.com
    </p>
  </div>
</div>


        </div>

        {/* Newsletter - Elegant Overlay Style */}
        <div className="mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-stone-900 to-stone-800 border border-stone-700/50 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-md">
            <h3 className="text-2xl font-serif mb-2">Join Our Foodie Circle</h3>
            <p className="text-stone-400">Get 10% off your first order and exclusive updates.</p>
          </div>
          <div className="w-full max-w-sm flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-stone-950 border border-stone-700 px-6 py-4 rounded-full focus:outline-none focus:border-orange-600 transition-colors"
            />
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-bold transition-transform active:scale-95">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="bg-black py-8 border-t border-stone-900">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-stone-500 tracking-wider">
          <p>© {currentYear} ADITI RESTAURANT. CRAFTED WITH LOVE.</p>

          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-orange-500 transition-colors">PRIVACY</Link>
            <Link to="/terms" className="hover:text-orange-500 transition-colors">TERMS</Link>
            <Link to="/refund-cancellation" className="hover:text-orange-500 transition-colors">REFUNDS</Link>
            <Link to="/shipping-delivery" className="hover:text-orange-500 transition-colors">SHIPPING</Link>
          </div>

        </div>
      </div>
    </footer>
  );
}


// import React from "react";
// import { Link } from "react-router-dom";

// export default function Footer() {
//   return (
//     <footer className="mt-16 border-t bg-white">
//       <div className="container mx-auto px-4 py-8 grid gap-6 md:grid-cols-2 items-center">
//         <p className="text-sm text-slate-600">© {new Date().getFullYear()} Aditi Restaurant. All rights reserved.</p>
//         <div className="flex flex-wrap gap-4 justify-start md:justify-end text-sm">
//           <Link to="/privacy" className="hover:text-brand-700">Privacy</Link>
//           <Link to="/terms" className="hover:text-brand-700">Terms</Link>
//           <Link to="/refund-cancellation" className="hover:text-brand-700">Refund & Cancellation</Link>
//           <Link to="/shipping-delivery" className="hover:text-brand-700">Shipping</Link>
//         </div>
//       </div>
//     </footer>
//   );
// }