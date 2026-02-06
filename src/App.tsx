import React, { useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import Home from "@/components/Home";
import Products from "@/components/Products";
import Cart from "@/components/Cart";
import Checkout from "@/components/Checkout";
import OrderConfirmation from "@/components/OrderConfirmation";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Terms from "@/components/Terms";
import Privacy from "@/components/Privacy";
import RefundCancellation from "@/components/RefundCancellation";
import ShippingDelivery from "@/components/ShippingDelivery";
import Login from "@/components/Login";
import Signup from "@/components/Signup";

import { CartProvider } from "@/context/CartContext";
import { AuthProvider, useAuth } from "@/context/AuthContext";

/* 🔁 Smooth Scroll to Top on Route Change */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

/* 🔒 Protected Route Component */
function RequireAuth({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useAuth();
  const loc = useLocation();

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-[#fffcf9]">
        <div className="relative">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-orange-600 border-solid"></div>
          <div className="mt-4 text-stone-800 font-serif animate-pulse">Aditi Restaurant...</div>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: loc }} replace />;
  }

  return <>{children}</>;
}

/* 🌍 Main App Component - Updated for Aditi Restaurant */
export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        {/* Main Wrapper with updated Background Theme */}
        <div className="min-h-screen flex flex-col overflow-x-hidden bg-[#fffcf9] text-stone-900 selection:bg-orange-100 selection:text-orange-900">

          {/* Global Scroll Control */}
          <ScrollToTop />

          {/* Navigation Bar */}
          <Header />

          {/* Page Content with subtle background details */}
          <main className="flex-1 relative">
            {/* Decorative background accent */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-orange-50/50 to-transparent pointer-events-none -z-10"></div>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route
                path="/checkout"
                element={
                  <RequireAuth>
                    <Checkout />
                  </RequireAuth>
                }
              />
              <Route path="/confirmation" element={<OrderConfirmation />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route
                path="/refund-cancellation"
                element={<RefundCancellation />}
              />
              <Route path="/shipping-delivery" element={<ShippingDelivery />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              {/* 404 Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          {/* Footer & Global Notifications */}
          <Footer />
          <CookieBanner />

        </div>
      </CartProvider>
    </AuthProvider>
  );
}

// import React from "react";
// import { Routes, Route, Navigate, useLocation } from "react-router-dom";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import CookieBanner from "@/components/CookieBanner";
// import Home from "@/components/Home";
// import Products from "@/components/Products";
// import Cart from "@/components/Cart";
// import Checkout from "@/components/Checkout";
// import OrderConfirmation from "@/components/OrderConfirmation";
// import About from "@/components/About";
// import Contact from "@/components/Contact";
// import Terms from "@/components/Terms";
// import Privacy from "@/components/Privacy";
// import RefundCancellation from "@/components/RefundCancellation";
// import ShippingDelivery from "@/components/ShippingDelivery";
// import Login from "@/components/Login";
// import Signup from "@/components/Signup";
// import { CartProvider } from "@/context/CartContext";
// import { AuthProvider, useAuth } from "@/context/AuthContext";

// function RequireAuth({ children }: { children: React.ReactNode }) {
//   const { user, isLoading } = useAuth();
//   const loc = useLocation();
//   if (isLoading) return null;
//   if (!user) return <Navigate to="/login" state={{ from: loc }} replace />;
//   return <>{children}</>;
// }

// export default function App() {
//   return (
//     <AuthProvider>
//       <CartProvider>
//         <div className="min-h-dvh flex flex-col">
//           <Header />
//           <main className="flex-1">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/products" element={<Products />} />
//               <Route path="/cart" element={<Cart />} />
//               <Route path="/checkout" element={<RequireAuth><Checkout /></RequireAuth>} />
//               <Route path="/confirmation" element={<OrderConfirmation />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/contact" element={<Contact />} />
//               <Route path="/privacy" element={<Privacy />} />
//               <Route path="/terms" element={<Terms />} />
//               <Route path="/refund-cancellation" element={<RefundCancellation />} />
//               <Route path="/shipping-delivery" element={<ShippingDelivery />} />
//               <Route path="/login" element={<Login />} />
//               <Route path="/signup" element={<Signup />} />
//               <Route path="*" element={<Navigate to="/" replace />} />
//             </Routes>
//           </main>
//           <Footer />
//           <CookieBanner />
//         </div>
//       </CartProvider>
//     </AuthProvider>
//   );
// }