import React from "react";
import { ChefHat, Heart, Award, ShieldCheck, Clock, Star, Utensils } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const stats = [
    { number: "15K+", label: "Served Meals", icon: <Utensils className="w-6 h-6" /> },
    { number: "60+", label: "Master Chefs", icon: <ChefHat className="w-6 h-6" /> },
    { number: "4.9★", label: "Top Rated", icon: <Star className="w-6 h-6" /> },
    { number: "25min", label: "Fast Delivery", icon: <Clock className="w-6 h-6" /> }
  ];

  const values = [
    {
      icon: <ChefHat className="w-10 h-10 text-orange-600" />,
      title: "Our Heritage",
      description:
        "Aditi Restaurant is built on the foundation of authentic spices and recipes passed down through generations."
    },
    {
      icon: <Heart className="w-10 h-10 text-orange-600" />,
      title: "Cooked with Love",
      description:
        "We believe that the secret ingredient to any great dish is the passion and care put into its preparation."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-orange-600" />,
      title: "Hygiene First",
      description:
        "Your health is our priority. We maintain the highest standards of cleanliness and food safety."
    }
  ];

  return (
    <div className="min-h-screen bg-[#fffcf9]">
      {/* Hero Section with Parallax Feel */}
      <div className="relative pt-32 pb-24 overflow-hidden bg-stone-900">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=1600&q=80"
            className="w-full h-full object-cover"
            alt="Background"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-600/10 border border-orange-600/20 text-orange-500 mb-8 backdrop-blur-md">
            <Award className="w-4 h-4" />
            <span className="text-xs font-bold tracking-widest uppercase">Award Winning Taste</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-serif text-white mb-8">
            Aditi <span className="italic text-orange-600">Restaurant</span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-400 max-w-3xl mx-auto font-light leading-relaxed">
            Where every spice tells a story and every meal is a celebration of Indian culture.
          </p>
        </div>
      </div>

      {/* Floating Stats Section */}
      <div className="container mx-auto px-4 -mt-12 relative z-10">
        <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-10 border border-stone-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="group text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 mb-4 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl font-serif text-stone-900 mb-1">{stat.number}</div>
                <div className="text-stone-500 text-sm font-medium uppercase tracking-tighter">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Narrative Section */}
      <section className="container mx-auto px-4 py-32">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                alt="Chef at work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-5xl font-serif text-stone-900">
              The Legacy of <span className="italic text-orange-600">Fine Dining</span>
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              Founded in the heart of the city, <strong>Aditi Restaurant</strong> was born out of a desire to redefine the Indian dining experience. We don't just serve food; we serve memories on a plate.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed">
              Our chefs are curators of taste, hand-picking every ingredient to ensure that the balance of heat, sweet, and soul is perfect in every bite you take.
            </p>
            <div className="pt-4">
              <Link to="/products" className="text-orange-600 font-bold border-b-2 border-orange-600 pb-1 hover:text-orange-700 hover:border-orange-700 transition-all">
                Discover Our Signature Dishes →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Minimalist Cards */}
      <section className="bg-stone-50 py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">Our Core Values</h2>
            <div className="w-20 h-1 bg-orange-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-stone-200/50">
                <div className="mb-8 p-4 bg-[#fffcf9] inline-block rounded-2xl border border-orange-100">
                  {v.icon}
                </div>
                <h3 className="text-2xl font-serif text-stone-900 mb-4">{v.title}</h3>
                <p className="text-stone-600 leading-relaxed font-light">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - The Grand Finale */}
      <section className="container mx-auto px-4 py-32">
        <div className="relative rounded-[3rem] overflow-hidden bg-stone-900 px-8 py-20 md:p-24 text-center">
          {/* Subtle Decorative Gradient */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/20 rounded-full blur-[100px]"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
              Experience the Taste of <br />
              <span className="italic text-orange-600">Pure Tradition</span>
            </h2>
            <p className="text-stone-400 text-lg mb-12 font-light leading-relaxed">
              Join thousands of happy food lovers who choose Aditi Restaurant for their special moments.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/products"
                className="px-10 py-5 bg-orange-600 text-white rounded-full font-bold hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/20"
              >
                Order Now
              </Link>
              <Link
                to="/contact"
                className="px-10 py-5 border border-stone-700 text-white rounded-full font-bold hover:bg-white hover:text-stone-900 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// import React from "react";
// import { Users, Target, Heart, Award } from "lucide-react";

// export default function About() {
//   const stats = [
//     { number: "10K+", label: "Happy Customers" },
//     { number: "500+", label: "Products" },
//     { number: "5★", label: "Average Rating" },
//     { number: "24/7", label: "Support" }
//   ];

//   const values = [
//     {
//       icon: <Target className="w-8 h-8 text-blue-600" />,
//       title: "Our Mission",
//       description: "To bring authentic Indian products and experiences to every home, connecting communities through quality and tradition."
//     },
//     {
//       icon: <Heart className="w-8 h-8 text-red-500" />,
//       title: "Our Values",
//       description: "We believe in authenticity, quality, and building lasting relationships with our customers and artisan partners."
//     },
//     {
//       icon: <Award className="w-8 h-8 text-yellow-600" />,
//       title: "Our Promise",
//       description: "Premium quality products, exceptional service, and a seamless shopping experience that exceeds expectations."
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
//       {/* Hero Section */}
//       <div className="relative overflow-hidden bg-gradient-to-r from-orange-600 to-red-600 text-white">
//         <div className="absolute inset-0 bg-black/20"></div>
//         <div className="relative container mx-auto px-4 py-20">
//           <div className="text-center max-w-4xl mx-auto">
//             <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
//               About <span className="text-yellow-300">Aditi Restaurant</span>
//             </h1>
//             <p className="text-xl md:text-2xl text-orange-100 leading-relaxed">
//               Where tradition meets innovation in the digital marketplace
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="container mx-auto px-4 -mt-10 relative z-10">
//         <div className="bg-white rounded-2xl shadow-2xl p-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
//                   {stat.number}
//                 </div>
//                 <div className="text-gray-600 font-medium">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="container mx-auto px-4 py-16">
//         {/* Story Section */}
//         <div className="max-w-4xl mx-auto mb-20">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Story</h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
//           </div>

//           <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
//             <p className="text-lg text-gray-700 leading-relaxed mb-6">
//               Aditi Restaurant began with a simple vision: to create a modern Indian storefront that bridges
//               the gap between traditional craftsmanship and contemporary digital commerce. Founded on the
//               principles of performance, design, and compliance, we've built more than just an online store.
//             </p>
//             <p className="text-lg text-gray-700 leading-relaxed mb-6">
//               We're a community that celebrates the rich heritage of Indian culture while embracing
//               innovative technology to deliver exceptional shopping experiences. Every product in our
//               collection is carefully curated to ensure authenticity, quality, and cultural significance.
//             </p>
//             <p className="text-lg text-gray-700 leading-relaxed">
//               Today, Aditi Restaurant stands as a testament to what's possible when tradition meets
//               innovation, serving customers worldwide while supporting local artisans and businesses
//               across India.
//             </p>
//           </div>
//         </div>

//         {/* Values Section */}
//         <div className="mb-20">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-gray-800 mb-4">What Drives Us</h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {values.map((value, index) => (
//               <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
//                 <div className="mb-6">{value.icon}</div>
//                 <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{value.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>





//         {/* CTA Section */}
//         <div className="text-center bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl p-12">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Journey</h2>
//           <p className="text-xl mb-8 text-orange-100">
//             Be part of our mission to celebrate and preserve Indian heritage through commerce
//           </p>

//         </div>
//       </div>
//     </div>
//   );
// }
