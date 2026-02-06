import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import {
  ChefHat,
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Check,
  Award,
  Sparkles
} from "lucide-react";

export default function Signup() {
  const { signup } = useAuth();
  const nav = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreeTerms) return;
    setIsLoading(true);
    try {
      await signup(fullName, email, phone, password);
      nav("/");
    } catch {
      alert("Signup failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const rules = {
    length: password.length >= 8,
    upper: /[A-Z]/.test(password),
    lower: /[a-z]/.test(password),
    number: /\d/.test(password),
    special: /[^A-Za-z0-9]/.test(password)
  };

  const score = Object.values(rules).filter(Boolean).length;

  return (
    <div className="min-h-screen bg-[#fffcf9] flex items-center justify-center p-4 py-20">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-0 overflow-hidden bg-white rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-stone-100">

        {/* Left Side: Visual Experience */}
        <div className="hidden lg:flex flex-col relative bg-stone-900 p-16 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-40">
            <img
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80"
              className="w-full h-full object-cover"
              alt="Restaurant Atmosphere"
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
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Privilege Member</span>
              </div>
              <h2 className="text-5xl font-serif mb-6 leading-tight">
                Unlock a World of <br />
                <span className="italic text-orange-600">Culinary Delights</span>
              </h2>
              <p className="text-stone-400 font-light text-lg max-w-md leading-relaxed">
                Join our exclusive circle and enjoy faster checkouts, personalized recommendations, and member-only rewards.
              </p>
            </div>

            <div className="flex items-center gap-4 text-stone-500">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-stone-900 bg-stone-800 flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                  </div>
                ))}
              </div>
              <p className="text-xs tracking-wide">Joined by 10,000+ food lovers</p>
            </div>
          </div>

          {/* Decorative Circle */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl"></div>
        </div>

        {/* Right Side: Signup Form */}
        <div className="p-8 lg:p-16">
          <div className="mb-10">
            <h1 className="text-4xl font-serif text-stone-900 mb-3">Create Account</h1>
            <p className="text-stone-500 font-light">Enter your details to begin your journey with us.</p>
          </div>

          <form onSubmit={submit} className="space-y-5">
            <Field
              icon={<User size={18} />}
              label="Full Name"
              value={fullName}
              onChange={setFullName}
              placeholder="e.g. Riya gupta"
            />

            <Field
              icon={<Mail size={18} />}
              label="Email Address"
              value={email}
              onChange={setEmail}
              placeholder="you@example.com"
              type="email"
            />

            <Field
              icon={<Phone size={18} />}
              label="Phone Number"
              value={phone}
              onChange={setPhone}
              placeholder="+91 00000 00000"
              type="tel"
            />

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest ml-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-4 rounded-2xl bg-stone-50 border-none focus:ring-2 focus:ring-orange-600/20 outline-none transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-orange-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {/* Enhanced Password Strength UI */}
              {password && (
                <div className="mt-4 p-5 bg-stone-50 rounded-[2rem] border border-stone-100">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Security Strength</span>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${score >= 4 ? "bg-green-100 text-green-700" : score >= 3 ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-700"
                      }`}>
                      {score >= 4 ? "Strong" : score >= 3 ? "Medium" : "Weak"}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      ["8+ Characters", rules.length],
                      ["Uppercase", rules.upper],
                      ["Number", rules.number],
                      ["Special Character", rules.special]
                    ].map(([label, ok], i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors ${ok ? "bg-orange-600" : "bg-stone-200"}`}>
                          {ok && <Check className="w-2.5 h-2.5 text-white" />}
                        </div>
                        <span className={`text-[11px] ${ok ? "text-stone-900 font-medium" : "text-stone-400"}`}>{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <label className="flex items-start gap-3 cursor-pointer group py-2">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={e => setAgreeTerms(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-stone-300 text-orange-600 focus:ring-orange-500 cursor-pointer"
              />
              <span className="text-xs text-stone-500 leading-relaxed font-light">
                I agree to the <Link to="/terms" className="text-orange-600 font-medium hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-orange-600 font-medium hover:underline">Privacy Policy</Link>.
              </span>
            </label>

            <button
              type="submit"
              disabled={isLoading || !agreeTerms}
              className="w-full py-5 rounded-2xl bg-orange-600 text-white font-bold text-lg flex items-center justify-center gap-3 hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/20 disabled:opacity-40 disabled:grayscale group"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Create Account
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <p className="text-center text-stone-500 mt-10 text-sm font-light">
            Already a member?{" "}
            <Link to="/login" className="text-orange-600 font-bold hover:text-orange-700 transition-colors ml-1">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

function Field({ icon, label, value, onChange, placeholder, type = "text" }: any) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest ml-1">
        {label}
      </label>
      <div className="relative group">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-orange-600 transition-colors">
          {icon}
        </div>
        <input
          type={type}
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-12 pr-4 py-4 rounded-2xl bg-stone-50 border-none focus:ring-2 focus:ring-orange-600/20 outline-none transition-all placeholder:text-stone-300 text-stone-800"
          required
        />
      </div>
    </div>
  );
}

// import React, { useState } from "react";
// import { useAuth } from "@/context/AuthContext";
// import { useNavigate } from "react-router-dom";

// export default function Signup() {
//   const { signup } = useAuth();
//   const nav = useNavigate();
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");

//   const submit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try { await signup(fullName, email, phone, password); nav("/"); }
//     catch { alert("Signup failed"); }
//   };

//   return (
//     <div className="container mx-auto px-4 py-10 grid md:grid-cols-2 gap-6 items-center">
//       <div className="card p-6">
//         <h2 className="text-xl font-semibold mb-4">Create Account</h2>
//         <form onSubmit={submit} className="space-y-3">
//           <input className="w-full border px-4 py-2 rounded-xl" placeholder="Full Name" value={fullName} onChange={e => setFullName(e.target.value)} />
//           <input className="w-full border px-4 py-2 rounded-xl" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
//           <input className="w-full border px-4 py-2 rounded-xl" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} />
//           <input type="password" className="w-full border px-4 py-2 rounded-xl" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
//           <button className="w-full bg-brand-600 text-white py-2 rounded-xl">Sign Up</button>
//         </form>
//       </div>
//       <div className="hidden md:block">
//         <h3 className="text-2xl font-bold">Join Aditi Restaurant</h3>
//         <p className="text-slate-600 mt-2">Save your details and checkout faster next time.</p>
//       </div>
//     </div>
//   );
// }