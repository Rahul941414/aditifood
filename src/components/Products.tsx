import React, { useMemo, useState } from "react";
import { products as all, type Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Search, Filter, SortAsc, Plus, Star, Clock } from "lucide-react";

export default function Products() {
  const { add } = useCart();
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<"" | Product["category"]>("");
  const [sort, setSort] = useState<"" | "price-asc" | "price-desc">("");

  // Filter + sort logic
  const items = useMemo(() => {
    let data = all.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );
    if (cat) data = data.filter((p) => p.category === cat);
    if (sort === "price-asc") data = [...data].sort((a, b) => a.price - b.price);
    if (sort === "price-desc")
      data = [...data].sort((a, b) => b.price - a.price);
    return data;
  }, [query, cat, sort]);

  const categories = [
    
    { value: "curries", label: "Curries" },
    { value: "snacks", label: "Snacks" },
    { value: "breads", label: "Breads" },
    { value: "desserts", label: "Desserts" },
    { value: "beverages", label: "Drinks" },
  ];

  return (
    <div className="min-h-screen bg-[#fffcf9] pb-20">
      {/* Hero Header */}
      <div className="bg-stone-900 pt-32 pb-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
            Our Signature <span className="italic text-orange-600">Menu</span>
          </h1>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Experience the culinary excellence of Aditi Restaurant. From smoky tandoors 
            to slow-cooked biryanis, every dish is a masterpiece.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10 relative z-20">
        {/* Search & Filter Bar */}
        <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-stone-100 p-4 md:p-6 mb-12">
          <div className="flex flex-col xl:flex-row gap-6 items-center">
            {/* Search */}
            <div className="relative w-full xl:max-w-md group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 w-5 h-5 group-focus-within:text-orange-600 transition-colors" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search your favorite dish..."
                className="w-full pl-12 pr-6 py-4 rounded-2xl bg-stone-50 border-none focus:ring-2 focus:ring-orange-600/20 text-stone-800 transition-all outline-none"
              />
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap justify-center gap-3 flex-1">
              <button
                onClick={() => setCat("")}
                className={`px-6 py-3 rounded-full text-sm font-semibold tracking-wide uppercase transition-all ${
                  cat === "" 
                  ? "bg-orange-600 text-white shadow-lg shadow-orange-600/20" 
                  : "bg-white border border-stone-200 text-stone-600 hover:border-orange-600"
                }`}
              >
                All Dishes
              </button>
              {categories.map((c) => (
                <button
                  key={c.value}
                  onClick={() => setCat(c.value as any)}
                  className={`px-6 py-3 rounded-full text-sm font-semibold tracking-wide uppercase transition-all ${
                    cat === c.value 
                    ? "bg-orange-600 text-white shadow-lg shadow-orange-600/20" 
                    : "bg-white border border-stone-200 text-stone-600 hover:border-orange-600"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="relative min-w-[180px]">
              <SortAsc className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 w-4 h-4" />
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as any)}
                className="w-full pl-10 pr-10 py-4 rounded-2xl bg-stone-50 border-none appearance-none cursor-pointer focus:ring-2 focus:ring-orange-600/20 text-stone-700 font-medium outline-none"
              >
                <option value="">Sort By</option>
                <option value="price-asc">Price: Low-High</option>
                <option value="price-desc">Price: High-Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between mb-10 px-2">
          <div className="h-[1px] bg-stone-200 flex-1"></div>
          <span className="mx-6 text-stone-400 font-serif italic">
            Displaying {items.length} Culinary Delights
          </span>
          <div className="h-[1px] bg-stone-200 flex-1"></div>
        </div>

        {/* Products Grid */}
        {items.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-[3rem] border border-dashed border-stone-200">
            <div className="w-20 h-20 bg-stone-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-8 h-8 text-stone-300" />
            </div>
            <h3 className="text-2xl font-serif text-stone-800 mb-2">No flavors found</h3>
            <p className="text-stone-500">Perhaps try a different search or category?</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
            {items.map((product) => (
              <div
                key={product.id}
                className="group relative bg-white rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest rounded-full text-stone-800">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1 text-orange-600">
                      <Star className="w-3 h-3 fill-current" />
                      <span className="text-xs font-bold">4.9</span>
                    </div>
                    <div className="flex items-center gap-1 text-stone-400">
                      <Clock className="w-3 h-3" />
                      <span className="text-[10px] font-medium uppercase">20-30 min</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-serif text-stone-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-stone-500 text-sm font-light leading-relaxed mb-6 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-stone-50">
                    <span className="text-2xl font-serif text-stone-900">
                      ₹{product.price}
                    </span>
                    <button
                      onClick={() => add({ ...product })}
                      className="p-4 bg-stone-900 text-white rounded-2xl hover:bg-orange-600 transition-all duration-300 shadow-lg shadow-stone-200 active:scale-90"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// import React, { useMemo, useState } from "react";
// import { products as all, type Product } from "@/data/products";
// import { useCart } from "@/context/CartContext";
// import { Search, Filter, SortAsc, Plus } from "lucide-react";

// export default function Products() {
//   const { add } = useCart();
//   const [query, setQuery] = useState("");
//   const [cat, setCat] = useState<"" | Product["category"]>("");
//   const [sort, setSort] = useState<"" | "price-asc" | "price-desc">("");

//   const items = useMemo(() => {
//     let data = all.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
//     if (cat) data = data.filter(p => p.category === cat);
//     if (sort === "price-asc") data = [...data].sort((a,b)=>a.price-b.price);
//     if (sort === "price-desc") data = [...data].sort((a,b)=>b.price-a.price);
//     return data;
//   }, [query, cat, sort]);

//   const categories = [
//     { value: "biryani", label: "🍛 Biryani", count: all.filter(p => p.category === "biryani").length },
//     { value: "curries", label: "🥘 Curries", count: all.filter(p => p.category === "curries").length },
//     { value: "snacks", label: "🍟 Snacks", count: all.filter(p => p.category === "snacks").length },
//     { value: "breads", label: "🍞 Breads", count: all.filter(p => p.category === "breads").length },
//     { value: "desserts", label: "🍰 Desserts", count: all.filter(p => p.category === "desserts").length },
//     { value: "beverages", label: "🥤 Beverages", count: all.filter(p => p.category === "beverages").length },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
//       <div className="container mx-auto px-4 py-8">
//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
//             Our <span className="text-orange-600">Delicious</span> Menu
//           </h1>
//           <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//             Discover authentic Indian flavors crafted with traditional recipes and fresh ingredients
//           </p>
//         </div>

//         {/* Filters Section */}
//         <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-orange-100 p-6 mb-8">
//           <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
//             {/* Search Bar */}
//             <div className="relative flex-1 w-full max-w-md">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
//               <input
//                 value={query}
//                 onChange={e => setQuery(e.target.value)}
//                 placeholder="Search for dishes..."
//                 className="w-full pl-10 pr-4 py-3 rounded-xl border border-orange-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
//               />
//             </div>

//             <div className="flex flex-wrap gap-3 items-center">
//               {/* Category Filter */}
//               <div className="relative">
//                 <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
//                 <select
//                   value={cat}
//                   onChange={e => setCat(e.target.value as any)}
//                   className="pl-10 pr-8 py-3 rounded-xl border border-orange-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none cursor-pointer transition-all"
//                 >
//                   <option value="">All Categories</option>
//                   {categories.map(category => (
//                     <option key={category.value} value={category.value}>
//                       {category.label} ({category.count})
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {/* Sort Filter */}
//               <div className="relative">
//                 <SortAsc className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
//                 <select
//                   value={sort}
//                   onChange={e => setSort(e.target.value as any)}
//                   className="pl-10 pr-8 py-3 rounded-xl border border-orange-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none cursor-pointer transition-all"
//                 >
//                   <option value="">Sort By</option>
//                   <option value="price-asc">Price: Low to High</option>
//                   <option value="price-desc">Price: High to Low</option>
//                 </select>
//               </div>
//             </div>
//           </div>

//           {/* Quick Category Filters */}
//           <div className="flex flex-wrap gap-2 mt-4 justify-center">
//             <button
//               onClick={() => setCat("")}
//               className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
//                 cat === "" 
//                   ? "bg-orange-600 text-white shadow-lg" 
//                   : "bg-orange-100 text-orange-700 hover:bg-orange-200"
//               }`}
//             >
//               All ({all.length})
//             </button>
//             {categories.map(category => (
//               <button
//                 key={category.value}
//                 onClick={() => setCat(category.value as any)}
//                 className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1 ${
//                   cat === category.value
//                     ? "bg-orange-600 text-white shadow-lg"
//                     : "bg-orange-100 text-orange-700 hover:bg-orange-200"
//                 }`}
//               >
//                 {category.label.split(' ')[0]} ({category.count})
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Results Count */}
//         <div className="mb-6">
//           <p className="text-slate-600">
//             Showing <span className="font-semibold text-orange-600">{items.length}</span> of <span className="font-semibold">{all.length}</span> dishes
//             {query && <span> for "<span className="font-semibold">{query}</span>"</span>}
//             {cat && <span> in <span className="font-semibold capitalize">{cat}</span></span>}
//           </p>
//         </div>

//         {/* Products Grid */}
//         {items.length === 0 ? (
//           <div className="text-center py-16">
//             <div className="text-6xl mb-4">🍽️</div>
//             <h3 className="text-xl font-semibold text-slate-700 mb-2">No dishes found</h3>
//             <p className="text-slate-500">Try adjusting your search or filter criteria</p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {items.map(product => (
//               <div
//                 key={product.id}
//                 className="bg-white rounded-2xl shadow-lg hover:shadow-xl border border-orange-100 overflow-hidden transition-all duration-300 hover:scale-105 group"
//               >
//                 {/* Product Image */}
//                 <div className="relative overflow-hidden">
//                   <img
//                     src={product.image}
//                     className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
//                     alt={product.name}
//                     loading="lazy"
//                   />
//                   <div className="absolute top-3 right-3">
//                     <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
//                       {product.category}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Product Info */}
//                 <div className="p-5">
//                   <div className="flex items-start justify-between mb-2">
//                     <h3 className="font-bold text-lg text-slate-900 line-clamp-1 flex-1 mr-2">
//                       {product.name}
//                     </h3>
//                     <span className="font-bold text-orange-600 text-xl whitespace-nowrap">
//                       ₹{product.price}
//                     </span>
//                   </div>
                  
//                   <p className="text-slate-600 text-sm leading-relaxed line-clamp-2 mb-4">
//                     {product.description}
//                   </p>

//                   <button
//                     onClick={() => add({
//                       id: product.id,
//                       name: product.name,
//                       price: product.price,
//                       image: product.image
//                     })}
//                     className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold hover:from-orange-700 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
//                   >
//                     <Plus className="w-4 h-4" />
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


// import React, { useMemo, useState } from "react";
// import { products as all, type Product } from "@/data/products";
// import { useCart } from "@/context/CartContext";

// export default function Products() {
//   const { add } = useCart();
//   const [query, setQuery] = useState("");
//   const [cat, setCat] = useState<"" | Product["category"]>("");
//   const [sort, setSort] = useState<"" | "price-asc" | "price-desc">("");

//   const items = useMemo(() => {
//     let data = all.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
//     if (cat) data = data.filter(p => p.category === cat);
//     if (sort === "price-asc") data = [...data].sort((a,b)=>a.price-b.price);
//     if (sort === "price-desc") data = [...data].sort((a,b)=>b.price-a.price);
//     return data;
//   }, [query, cat, sort]);

//   return (
//     <div className="container mx-auto px-4 py-10">
//       <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between">
//         <h2 className="text-2xl font-bold">Products</h2>
//         <div className="flex flex-wrap gap-2">
//           <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search..." className="px-3 py-2 rounded-xl border bg-white"/>
//           <select value={cat} onChange={e=>setCat(e.target.value as any)} className="px-3 py-2 rounded-xl border bg-white">
//             <option value="">All Categories</option>
//             <option value="biryani">Biryani</option>
//             <option value="curries">Curries</option>
//             <option value="snacks">Snacks</option>
//             <option value="breads">Breads</option>
//             <option value="desserts">Desserts</option>
//             <option value="beverages">Beverages</option>
//           </select>
//           <select value={sort} onChange={e=>setSort(e.target.value as any)} className="px-3 py-2 rounded-xl border bg-white">
//             <option value="">Sort</option>
//             <option value="price-asc">Price: Low to High</option>
//             <option value="price-desc">Price: High to Low</option>
//           </select>
//         </div>
//       </div>

//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
//         {items.map(p => (
//           <div key={p.id} className="card overflow-hidden">
//             <img src={p.image} className="w-full h-48 object-cover" alt={p.name} loading="lazy" />
//             <div className="p-5">
//               <div className="flex items-center justify-between">
//                 <h3 className="font-semibold">{p.name}</h3>
//                 <span className="font-bold">₹{p.price}</span>
//               </div>
//               <p className="text-sm text-slate-600 mt-2 line-clamp-2">{p.description}</p>
//               <button className="mt-4 w-full px-4 py-2 rounded-xl bg-brand-600 text-white hover:bg-brand-700" onClick={() => add({ id: p.id, name: p.name, price: p.price, image: p.image })}>Add to Cart</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }