import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import {
  ChefHat,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Sparkles,
  ShieldCheck
} from "lucide-react";

export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await login(email, password);
      nav("/");
    } catch {
      alert("Invalid credentials. Please check your email and password.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fffcf9] flex items-center justify-center p-4 py-20">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-0 overflow-hidden bg-white rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-stone-100">

        {/* Left Side: Login Form */}
        <div className="p-8 lg:p-16">
          <div className="mb-10">
            <Link to="/" className="inline-flex items-center gap-2 mb-8 lg:hidden">
              <h2 className="text-2xl font-serif">
                Aditi <span className="italic text-orange-600">Restaurant</span>
              </h2>
            </Link>
            <h1 className="text-4xl font-serif text-stone-900 mb-3">Welcome Back</h1>
            <p className="text-stone-500 font-light">Sign in to continue your culinary journey with us.</p>
          </div>

          <form onSubmit={submit} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest ml-1">
                Email Address
              </label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-orange-600 transition-colors w-5 h-5" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-stone-50 border-none focus:ring-2 focus:ring-orange-600/20 outline-none transition-all text-stone-800"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest ml-1">
                Password
              </label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-orange-600 transition-colors w-5 h-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-4 rounded-2xl bg-stone-50 border-none focus:ring-2 focus:ring-orange-600/20 outline-none transition-all text-stone-800"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-orange-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Options */}
            <div className="flex justify-between items-center text-xs px-1">
              <label className="flex items-center gap-2 cursor-pointer text-stone-500">
                <input type="checkbox" className="w-4 h-4 rounded border-stone-300 text-orange-600 focus:ring-orange-500 cursor-pointer" />
                Remember me
              </label>
              <Link to="/forgot-password" size={18} className="text-orange-600 font-bold hover:underline">
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-5 rounded-2xl bg-orange-600 text-white font-bold text-lg flex items-center justify-center gap-3 hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/20 disabled:opacity-40 group"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Sign In
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <p className="text-center text-stone-500 mt-10 text-sm font-light">
            New to Aditi Restaurant?{" "}
            <Link to="/signup" className="text-orange-600 font-bold hover:text-orange-700 transition-colors ml-1">
              Create an account
            </Link>
          </p>
        </div>

        {/* Right Side: Visual & Brand Experience */}
        <div className="hidden lg:flex flex-col relative bg-stone-900 p-16 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-40">
            <img

              className="w-full h-full object-cover"
              alt="Dining Experience"
            />
          </div>
          <div className="relative z-10 h-full flex flex-col justify-between">
            <Link to="/" className="inline-flex items-center gap-2 group">
              <h2 className="text-3xl font-serif">
                Aditi <span className="italic text-orange-600">Restaurant</span>
              </h2>
            </Link>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-600/20 border border-orange-600/30 text-orange-500 mb-6 backdrop-blur-sm">
                <Sparkles className="w-3 h-3" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Welcome Back</span>
              </div>
              <h2 className="text-5xl font-serif mb-6 leading-tight">
                Your Table is <br />
                <span className="italic text-orange-600">Waiting For You</span>
              </h2>
              <p className="text-stone-400 font-light text-lg max-w-md leading-relaxed">
                Log in to access your favorite dishes, track your orders, and enjoy exclusive member rewards.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                <div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold">Secure Access</h4>
                  <p className="text-xs text-stone-400">Your data is fully encrypted</p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
}

// import React, { useState } from "react";
// import { useAuth } from "@/context/AuthContext";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const { login } = useAuth();
//   const nav = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const submit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try { await login(email, password); nav("/"); }
//     catch { alert("Invalid credentials"); }
//   };

//   return (
//     <div className="container mx-auto px-4 py-10 grid md:grid-cols-2 gap-6 items-center">
//       <div className="card p-6">
//         <h2 className="text-xl font-semibold mb-4">Login</h2>
//         <form onSubmit={submit} className="space-y-3">
//           <input className="w-full border px-4 py-2 rounded-xl" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
//           <input type="password" className="w-full border px-4 py-2 rounded-xl" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
//           <button className="w-full bg-brand-600 text-white py-2 rounded-xl">Login</button>
//         </form>
//       </div>
//       <div className="hidden md:block">
//         <h3 className="text-2xl font-bold">Welcome back to Aditi Restaurant</h3>
//         <p className="text-slate-600 mt-2">Secure access to your account and a better shopping experience.</p>
//       </div>
//     </div>
//   );
// }