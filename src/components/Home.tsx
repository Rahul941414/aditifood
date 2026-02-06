import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-[#fffcf9]">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-widest text-orange-600 uppercase bg-orange-50 rounded-full">
            The Art of Fine Dining
          </span>
          <h1 className="text-6xl md:text-7xl font-serif text-stone-900 mb-8">
            Aditi <span className="italic text-orange-700">Restaurant</span>
          </h1>
          <div className="w-24 h-1 bg-orange-700 mx-auto mb-8"></div>
          <p className="mt-6 text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed font-light">
            Where tradition meets modern elegance. We bring you the rich heritage
            of Indian spices served with a contemporary touch.
          </p>
        </div>
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-30"></div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-4 pb-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-orange-100/50 rounded-2xl transform transition group-hover:rotate-2"></div>
            <img
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1000&q=80"
              alt="Aditi Restaurant Interior"
              className="relative rounded-xl shadow-2xl object-cover h-[500px] w-full"
            />
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl font-serif text-stone-900">
              Our Story: <span className="text-orange-700">From Tradition to Taste</span>
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              At <strong>Aditi Restaurant</strong>, food is more than just nourishment—it's an experience.
              We bring the authentic flavors of India straight to your doorstep.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="border-l-2 border-orange-200 pl-4">
                <h4 className="font-bold text-stone-800">Fast Delivery</h4>
                <p className="text-sm text-stone-500">Hot & Fresh to you</p>
              </div>
              <div className="border-l-2 border-orange-200 pl-4">
                <h4 className="font-bold text-stone-800">Best Quality</h4>
                <p className="text-sm text-stone-500">Premium Ingredients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="bg-stone-900 py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Why Order From Us?</h2>
            <p className="text-stone-400">Delicious food is just a click away.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Fresh Ingredients",
                desc: "Only the freshest vegetables and finest hand-picked spices make it into our kitchen.",
                icon: "🌿"
              },
              {
                title: "Authentic Zest",
                desc: "Every dish is prepared keeping Indian culture and heritage at its heart.",
                icon: "🥘"
              },
              {
                title: "Quick Service",
                desc: "We value your time. Experience lightning-fast processing for every order.",
                icon: "⚡"
              }
            ].map((value, index) => (
              <div key={index} className="text-center p-8 border border-stone-800 rounded-2xl hover:bg-stone-800 transition duration-300">
                <div className="text-4xl mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-orange-400">{value.title}</h3>
                <p className="text-stone-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Updated for Ordering */}
      <section className="py-20 text-center container mx-auto px-4">
        <div className="bg-orange-50 rounded-3xl py-16 px-8 border border-orange-100">
          <h2 className="text-3xl font-serif text-stone-900 mb-6">Hungry? We've Got You Covered!</h2>
          <p className="text-stone-600 mb-10 max-w-xl mx-auto">
            Experience the finest flavors of Aditi Restaurant from the comfort of your home.
          </p>
          <button className="bg-orange-600 text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-orange-700 transition duration-300 shadow-xl transform hover:scale-105">
            Order Food Online
          </button>
        </div>
      </section>
    </div>
  );
}
// import React from "react";
// import { Link } from "react-router-dom";

// export default function Home() {
//   return (
//     <div>
//       <section className="relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-brand-100 via-white to-brand-100"></div>
//         <div className="relative container mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
//           <div>
//             <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
//               Welcome to <span className="text-brand-700">Aditi Restaurant</span>
//             </h1>
//             <p className="mt-4 text-lg text-slate-600">
//               A modern Indian food ordering experience — fast performance, clean UI, and secure checkout.
//             </p>
//             <div className="mt-6 flex gap-3">
//               <Link to="/products" className="px-5 py-3 rounded-2xl bg-brand-600 text-white hover:bg-brand-700">Shop Now</Link>
//               <Link to="/about" className="px-5 py-3 rounded-2xl bg-white border hover:bg-slate-50">Learn More</Link>
//             </div>
//           </div>
//           <div className="relative">
//             <div className="aspect-[4/3] rounded-3xl border bg-white shadow-lg"></div>
//             <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-brand-200 rounded-3xl blur-xl opacity-80"></div>
//             <div className="absolute -top-6 -right-6 w-28 h-28 bg-brand-300 rounded-3xl blur-xl opacity-80"></div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }