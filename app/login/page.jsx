"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock, ArrowRight, Loader2, ShieldCheck } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch(
        "https://uat-service.ireedindia.com/auth/v1/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            emailId: email,
            password: password,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || "Login failed");
      }

      /* ===============================
         ✅ SAVE DATA TO LOCAL STORAGE
         =============================== */

      // Login flag
      localStorage.setItem("isLoggedIn", "true");

      // Access Token
      if (data?.accessToken) {
        localStorage.setItem("accessToken", data.accessToken);
      }

      // User Info (Dynamic)
      const userData = {
        userId: data.userId,
        name: data.name,
        emailId: data.emailId,
        mobile: data.mobile,
        role: data.role,
      };

      localStorage.setItem("user", JSON.stringify(userData));

      // Menu / Permissions
      if (data?.allowedMenuKeys) {
        localStorage.setItem(
          "allowedMenuKeys",
          JSON.stringify(data.allowedMenuKeys)
        );
      }

      // Redirect
      router.push("/dashboard");
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#bea172]/10 rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#bea172]/10 rounded-full blur-3xl translate-y-1/2"></div>
      </div>

      <div className="w-full max-w-md p-8 z-10">
        <div className="bg-white rounded-2xl shadow-xl border border-white/50 p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#bea172]/10 text-[#bea172] mb-4">
              <ShieldCheck size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Welcome Back
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Please sign in to your admin account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="admin@company.com"
                  className="w-full pl-10 py-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#bea172]/20 focus:outline-none"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="w-full pl-10 py-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#bea172]/20 focus:outline-none"
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm">
                ⚠️ {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center py-3 rounded-lg bg-[#bea172] text-white font-medium hover:opacity-90 disabled:opacity-70"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin mr-2" size={18} />
                  Signing in...
                </>
              ) : (
                <>
                  Sign In <ArrowRight className="ml-2" size={18} />
                </>
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center text-sm text-gray-500">
            Don’t have an account?{" "}
            <span className="text-[#bea172] font-medium">
              Contact Support
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
