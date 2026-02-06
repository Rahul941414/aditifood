import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  Menu,
  User,
  Utensils,
  X,
  ChevronDown,
  LogOut,
  ShoppingBag
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";

export default function Header() {
  const { totalQty } = useCart();
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const nav = useNavigate();

  const baseLink = "relative px-2 py-1 text-sm font-semibold tracking-wide uppercase transition-all duration-300";

  const active = ({ isActive }: any) =>
    isActive
      ? `${baseLink} text-orange-600`
      : `${baseLink} text-stone-600 hover:text-orange-600`;

  const handleLogout = () => {
    logout();
    nav("/");
    setUserDropdown(false);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-100 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">

        {/* --- Brand Logo --- */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-stone-900 flex items-center justify-center transition-transform group-hover:rotate-12">
            <Utensils className="w-5 h-5 text-orange-500" />
          </div>
          <span className="text-2xl font-serif tracking-tight text-stone-900">
            Aditi <span className="italic text-orange-600">Restaurant</span>
          </span>
        </Link>

        {/* --- Desktop Navigation --- */}
        <nav className="hidden lg:flex items-center gap-8">
          {[
            { path: "/", label: "Home" },
            { path: "/products", label: "Menu" },
            { path: "/about", label: "About" },
            { path: "/contact", label: "Contact" }
          ].map((item) => (
            <NavLink key={item.path} to={item.path} className={active} end>
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}

          {/* Cart Icon */}
          <NavLink to="/cart" className="relative p-2 text-stone-700 hover:text-orange-600 transition-colors">
            <ShoppingBag size={22} strokeWidth={2.5} />
            {totalQty > 0 && (
              <span className="absolute top-0 right-0 w-5 h-5 text-[10px] bg-orange-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg border-2 border-white">
                {totalQty}
              </span>
            )}
          </NavLink>

          <div className="h-6 w-[1px] bg-stone-200 mx-2"></div>

          {/* User Section */}
          {user ? (
            <div className="relative">
              <button
                onClick={() => setUserDropdown(!userDropdown)}
                className="flex items-center gap-2 pl-2 py-2 group"
              >
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-700 font-bold border border-orange-200">
                  {user.fullName[0].toUpperCase()}
                </div>
                <span className="text-sm font-bold text-stone-800">
                  {user.fullName.split(" ")[0]}
                </span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${userDropdown ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {userDropdown && (
                <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-2xl border border-stone-100 overflow-hidden py-2 animate-in fade-in slide-in-from-top-2">
                  <div className="px-4 py-3 border-b border-stone-50 mb-1">
                    <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">Signed in as</p>
                    <p className="text-sm font-bold text-stone-900 truncate">{user.email}</p>
                  </div>
                  <Link to="/profile" className="flex items-center gap-3 px-4 py-2.5 text-sm text-stone-600 hover:bg-stone-50 transition-colors">
                    <User size={16} /> Profile
                  </Link>
                  <Link to="/orders" className="flex items-center gap-3 px-4 py-2.5 text-sm text-stone-600 hover:bg-stone-50 transition-colors">
                    <ShoppingBag size={16} /> My Orders
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors mt-1 border-t border-stone-50"
                  >
                    <LogOut size={16} /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link to="/login" className="text-sm font-bold text-stone-700 hover:text-orange-600">
                Sign In
              </Link>
              <Link
                to="/signup"
                className="px-6 py-2.5 rounded-full bg-stone-900 text-white text-sm font-bold hover:bg-orange-600 transition-all shadow-lg active:scale-95"
              >
                Join Now
              </Link>
            </div>
          )}
        </nav>

        {/* --- Mobile Actions --- */}
        <div className="lg:hidden flex items-center gap-5">
          <Link to="/cart" className="relative p-1 text-stone-800">
            <ShoppingBag size={24} />
            {totalQty > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 text-[10px] bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                {totalQty}
              </span>
            )}
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="p-2 bg-stone-100 rounded-xl text-stone-900"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* --- Mobile Menu Overlay --- */}
      {open && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-stone-100 shadow-2xl py-6 px-4 space-y-2 animate-in slide-in-from-top-4">
          {[
            { path: "/", label: "Home" },
            { path: "/products", label: "Menu" },
            { path: "/about", label: "About" },
            { path: "/contact", label: "Contact" }
          ].map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 rounded-2xl text-stone-800 font-bold hover:bg-orange-50 hover:text-orange-600 transition-all"
            >
              {item.label}
            </NavLink>
          ))}
          {!user && (
            <div className="pt-4 grid grid-cols-2 gap-4">
              <Link to="/login" onClick={() => setOpen(false)} className="text-center py-4 rounded-2xl border border-stone-200 font-bold text-stone-800">
                Login
              </Link>
              <Link to="/signup" onClick={() => setOpen(false)} className="text-center py-4 rounded-2xl bg-orange-600 text-white font-bold">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
// import React, { useState } from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { ShoppingCart, Menu, UserRound } from "lucide-react";
// import { useCart } from "@/context/CartContext";
// import { useAuth } from "@/context/AuthContext";

// export default function Header() {
//   const { totalQty } = useCart();
//   const { user, logout } = useAuth();
//   const [open, setOpen] = useState(false);
//   const nav = useNavigate();

//   const navLink = "px-3 py-2 rounded-lg hover:bg-slate-100";
//   const active = ({ isActive }: any) => (isActive ? "bg-slate-200 " + navLink : navLink);

//   return (
//     <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
//       <div className="container mx-auto px-4 h-16 flex items-center justify-between">
//         <Link to="/" className="font-extrabold text-xl tracking-tight">
//           <span className="text-brand-700">Apna</span> Thikana
//         </Link>
//         <nav className="hidden md:flex items-center gap-1">
//           <NavLink to="/" className={active} end>Home</NavLink>
//           <NavLink to="/products" className={active}>Products</NavLink>
//           <NavLink to="/about" className={active}>About</NavLink>
//           <NavLink to="/contact" className={active}>Contact</NavLink>
//           <NavLink to="/cart" className={active}>
//             <div className="relative flex items-center gap-2">
//               <ShoppingCart size={18}/>
//               <span>Cart</span>
//               {totalQty > 0 && (
//                 <span className="absolute -right-2 -top-2 text-xs bg-brand-600 text-white rounded-full px-1.5">{totalQty}</span>
//               )}
//             </div>
//           </NavLink>
//           {user ? (
//             <div className="ml-2 flex items-center gap-2">
//               <span className="text-sm text-slate-700 flex items-center gap-1"><UserRound size={16}/> {user.fullName.split(" ")[0]}</span>
//               <button className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-sm" onClick={()=>{ logout(); nav("/"); }}>Logout</button>
//             </div>
//           ) : (
//             <>
//               <NavLink to="/login" className={active}>Login</NavLink>
//               <NavLink to="/signup" className={active}>Signup</NavLink>
//             </>
//           )}
//         </nav>
//         <button className="md:hidden p-2 rounded-lg hover:bg-slate-100" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
//           <Menu />
//         </button>
//       </div>
//       {open && (
//         <div className="md:hidden border-t bg-white">
//           <div className="flex flex-col p-2">
//             <NavLink onClick={()=>setOpen(false)} to="/" className="px-3 py-2 rounded-lg hover:bg-slate-100">Home</NavLink>
//             <NavLink onClick={()=>setOpen(false)} to="/products" className="px-3 py-2 rounded-lg hover:bg-slate-100">Products</NavLink>
//             <NavLink onClick={()=>setOpen(false)} to="/about" className="px-3 py-2 rounded-lg hover:bg-slate-100">About</NavLink>
//             <NavLink onClick={()=>setOpen(false)} to="/contact" className="px-3 py-2 rounded-lg hover:bg-slate-100">Contact</NavLink>
//             <NavLink onClick={()=>setOpen(false)} to="/cart" className="px-3 py-2 rounded-lg hover:bg-slate-100">Cart</NavLink>
//             {user ? <button className="text-left px-3 py-2 rounded-lg hover:bg-slate-100" onClick={()=>{ setOpen(false); logout(); }}>Logout</button> : (<><NavLink onClick={()=>setOpen(false)} to="/login" className="px-3 py-2 rounded-lg hover:bg-slate-100">Login</NavLink><NavLink onClick={()=>setOpen(false)} to="/signup" className="px-3 py-2 rounded-lg hover:bg-slate-100">Signup</NavLink></>)}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }