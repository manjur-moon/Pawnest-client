"use client";

import { useAuth } from "@/providers/AuthProvider";
import { GoogleLogin } from "@react-oauth/google";
import { PawPrint } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function LoginForm() {
  const { user, authLoading, loginUser, loginWithGoogle } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get("redirect") || "/";

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  useEffect(() => {
    if (!authLoading && user) router.replace(redirectPath);
  }, [authLoading, user, router, redirectPath]);

  async function onSubmit(formData) {
    try {
      const response = await loginUser({ email: formData.email, password: formData.password });
      toast.success(response.message || "Login successful");
      router.replace(redirectPath);
      router.refresh();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Login failed");
    }
  }

  async function handleGoogleSuccess(credentialResponse) {
    try {
      if (!credentialResponse?.credential) return toast.error("Google credential was not found");
      const response = await loginWithGoogle(credentialResponse.credential);
      toast.success(response.message || "Google login successful");
      router.replace(redirectPath);
      router.refresh();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Google login failed");
    }
  }

  return (
    <section className="flex min-h-screen items-center justify-center bg-orange-50 px-4 py-10">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-[32px] bg-white shadow-2xl md:grid-cols-2">
        <div className="hidden bg-gradient-to-br from-orange-600 to-amber-500 p-10 text-white md:block">
          <div className="flex items-center gap-2"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20"><PawPrint /></span><h1 className="text-2xl font-black">PawsNest</h1></div>
          <div className="mt-20"><h2 className="text-4xl font-black leading-tight">Welcome back, pet hero.</h2><p className="mt-5 leading-8 text-orange-50">Login to manage adoption requests, add pet listings, and help pets find caring homes.</p></div>
        </div>
        <div className="p-8 md:p-10">
          <h1 className="text-3xl font-black text-slate-950">Login</h1>
          <p className="mt-2 text-slate-600">Access your PawsNest account securely.</p>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block font-bold text-slate-700">Email</label>
              <input type="email" placeholder="you@example.com" className="w-full rounded-2xl border border-orange-100 px-4 py-3 outline-none transition focus:border-orange-500" {...register("email", { required: "Email is required" })} />
              {errors.email && <p className="mt-2 text-sm font-semibold text-red-600">{errors.email.message}</p>}
            </div>
            <div>
              <label className="mb-2 block font-bold text-slate-700">Password</label>
              <input type="password" placeholder="Your password" className="w-full rounded-2xl border border-orange-100 px-4 py-3 outline-none transition focus:border-orange-500" {...register("password", { required: "Password is required" })} />
              {errors.password && <p className="mt-2 text-sm font-semibold text-red-600">{errors.password.message}</p>}
            </div>
            <button type="submit" disabled={isSubmitting} className="w-full rounded-2xl bg-orange-600 px-5 py-3 font-bold text-white transition hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-60">{isSubmitting ? "Logging in..." : "Login"}</button>
          </form>
          <div className="my-6 flex items-center gap-3"><div className="h-px flex-1 bg-orange-100"></div><span className="text-sm font-semibold text-slate-500">OR</span><div className="h-px flex-1 bg-orange-100"></div></div>
          {process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ? <div className="flex justify-center"><GoogleLogin onSuccess={handleGoogleSuccess} onError={() => toast.error("Google login failed")} /></div> : <p className="rounded-2xl bg-orange-50 px-4 py-3 text-center text-sm font-semibold text-orange-700">Add NEXT_PUBLIC_GOOGLE_CLIENT_ID to enable Google Login.</p>}
          <p className="mt-7 text-center text-slate-600">New to PawsNest? <Link href="/register" className="font-bold text-orange-600">Create an account</Link></p>
        </div>
      </div>
    </section>
  );
}
