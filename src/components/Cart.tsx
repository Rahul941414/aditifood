import React from "react";
import { useCart } from "@/context/CartContext";
import { useNavigate, Link } from "react-router-dom";
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, ChevronRight } from "lucide-react";

export default function Cart() {
  const { items, inc, dec, remove, totalPrice } = useCart();
  const nav = useNavigate();

  return (
    <div className="min-h-screen bg-[#fffcf9] pb-24">
      {/* Header Section */}
      <div className="bg-stone-900 pt-32 pb-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">
            Your <span className="italic text-orange-600">Basket</span>
          </h1>
          <p className="text-stone-400 font-light tracking-wide uppercase text-xs">
            Review your selection of authentic flavors
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10 relative z-20">
        {items.length === 0 ? (
          <div className="bg-white rounded-[2rem] p-16 text-center shadow-sm border border-stone-100">
            <div className="w-20 h-20 bg-stone-50 rounded-full flex items-center justify-center mx-auto mb-6 text-stone-300">
              <ShoppingBag size={40} />
            </div>
            <h2 className="text-2xl font-serif text-stone-800 mb-4">Your basket is feeling light.</h2>
            <p className="text-stone-500 mb-10">Add some spice to your day by exploring our menu.</p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 text-white rounded-full font-bold hover:bg-orange-700 transition-all"
            >
              <ArrowLeft size={18} /> Back to Menu
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Items List */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-stone-100">
                <div className="space-y-8">
                  {items.map(item => (
                    <div key={item.id} className="flex flex-col sm:flex-row items-center gap-6 pb-8 border-b border-stone-50 last:border-0 last:pb-0">
                      {/* Product Image */}
                      <div className="w-28 h-28 rounded-2xl overflow-hidden shadow-md">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>

                      {/* Details */}
                      <div className="flex-1 text-center sm:text-left">
                        <h4 className="text-xl font-serif text-stone-900 mb-1">{item.name}</h4>
                        <p className="text-stone-400 text-sm font-light uppercase tracking-widest mb-4">₹{item.price} per portion</p>

                        {/* Quantity Controls */}
                        <div className="inline-flex items-center bg-stone-50 rounded-full p-1 border border-stone-100">
                          <button
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-stone-600 hover:bg-orange-600 hover:text-white transition-all shadow-sm"
                            onClick={() => dec(item.id)}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-10 text-center font-bold text-stone-800">{item.quantity}</span>
                          <button
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-stone-600 hover:bg-orange-600 hover:text-white transition-all shadow-sm"
                            onClick={() => inc(item.id)}
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>

                      {/* Price and Remove */}
                      <div className="flex flex-col items-center sm:items-end gap-3">
                        <p className="text-2xl font-serif text-stone-900">₹{item.price * item.quantity}</p>
                        <button
                          className="flex items-center gap-2 text-stone-400 hover:text-red-600 transition-colors text-xs font-bold uppercase tracking-widest"
                          onClick={() => remove(item.id)}
                        >
                          <Trash2 size={14} /> Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Link to="/products" className="inline-flex items-center gap-2 text-orange-600 font-bold tracking-wide hover:gap-4 transition-all">
                <ArrowLeft size={18} /> Continue Exploring Our Flavors
              </Link>
            </div>

            {/* Order Summary Summary Sidebar */}
            <aside className="lg:col-span-1">
              <div className="bg-stone-900 rounded-[2rem] p-8 text-white shadow-xl sticky top-24">
                <h3 className="text-2xl font-serif mb-8 border-b border-stone-800 pb-4">Order Summary</h3>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-stone-400 font-light">
                    <span>Subtotal</span>
                    <span className="text-white">₹{totalPrice}</span>
                  </div>
                  <div className="flex justify-between text-stone-400 font-light">
                    <span>GST & Taxes</span>
                    <span className="text-white">₹{(totalPrice * 0.05).toFixed(0)}</span>
                  </div>
                  <div className="flex justify-between text-stone-400 font-light">
                    <span>Delivery Fee</span>
                    <span className="text-green-500 font-medium uppercase text-xs tracking-widest">Free</span>
                  </div>
                  <div className="pt-6 border-t border-stone-800 flex justify-between items-end">
                    <span className="text-stone-400 uppercase tracking-widest text-xs">Grand Total</span>
                    <span className="text-3xl font-serif text-orange-600">₹{(totalPrice * 1.05).toFixed(0)}</span>
                  </div>
                </div>

                <button
                  className="w-full bg-orange-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/20 flex items-center justify-center gap-3 group"
                  onClick={() => nav("/checkout")}
                >
                  Confirm Order
                  <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-[10px] text-stone-500 text-center mt-6 uppercase tracking-[0.2em]">
                  Secure Checkout Guaranteed
                </p>
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}