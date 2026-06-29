"use client";

import { useAuth } from "@/providers/AuthProvider";
import { GoogleLogin } from "@react-oauth/google";
import { PawPrint } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function RegisterForm() {
  const { registerUser, loginWithGoogle } = useAuth();
  const router = useRouter();
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();
  const password = watch("password");

  async function onSubmit(formData) {
    try {
      const response = await registerUser({ name: formData.name, email: formData.email, photoURL: formData.photoURL, password: formData.password });
      toast.success(response.message || "Registration successful");
      router.replace("/");
      router.refresh();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Registration failed");
    }
  }

  async function handleGoogleSuccess(credentialResponse) {
    try {
      if (!credentialResponse?.credential) return toast.error("Google credential was not found");
      const response = await loginWithGoogle(credentialResponse.credential);
      toast.success(response.message || "Google login successful");
      router.replace("/");
      router.refresh();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Google login failed");
    }
  }

  return (
    <section className="flex min-h-screen items-center justify-center bg-orange-50 px-4 py-10">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-[32px] bg-white shadow-2xl md:grid-cols-2">
        <div className="hidden bg-gradient-to-br from-slate-950 to-orange-700 p-10 text-white md:block">
          <div className="flex items-center gap-2"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20"><PawPrint /></span><h1 className="text-2xl font-black">PawsNest</h1></div>
          <div className="mt-20"><h2 className="text-4xl font-black leading-tight">Start your adoption journey.</h2><p className="mt-5 leading-8 text-orange-50">Create an account to request adoption, manage listings, and help pets find safe homes.</p></div>
        </div>
        <div className="p-8 md:p-10">
          <h1 className="text-3xl font-black text-slate-950">Register</h1>
          <p className="mt-2 text-slate-600">Create your secure PawsNest account.</p>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
            <Field label="Name" error={errors.name?.message}><input type="text" placeholder="Your name" className="w-full rounded-2xl border border-orange-100 px-4 py-3 outline-none transition focus:border-orange-500" {...register("name", { required: "Name is required" })} /></Field>
            <Field label="Email" error={errors.email?.message}><input type="email" placeholder="you@example.com" className="w-full rounded-2xl border border-orange-100 px-4 py-3 outline-none transition focus:border-orange-500" {...register("email", { required: "Email is required" })} /></Field>
            <Field label="Photo URL" error={errors.photoURL?.message}><input type="url" placeholder="https://example.com/photo.jpg" className="w-full rounded-2xl border border-orange-100 px-4 py-3 outline-none transition focus:border-orange-500" {...register("photoURL", { required: "Photo URL is required" })} /></Field>
            <Field label="Password" error={errors.password?.message}><input type="password" placeholder="At least 6 characters" className="w-full rounded-2xl border border-orange-100 px-4 py-3 outline-none transition focus:border-orange-500" {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" }, pattern: { value: /^(?=.*[a-z])(?=.*[A-Z]).+$/, message: "Password must include uppercase and lowercase letters" } })} /></Field>
            <Field label="Confirm Password" error={errors.confirmPassword?.message}><input type="password" placeholder="Confirm password" className="w-full rounded-2xl border border-orange-100 px-4 py-3 outline-none transition focus:border-orange-500" {...register("confirmPassword", { required: "Confirm password is required", validate: (value) => value === password || "Password and confirm password must match" })} /></Field>
            <button type="submit" disabled={isSubmitting} className="w-full rounded-2xl bg-orange-600 px-5 py-3 font-bold text-white transition hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-60">{isSubmitting ? "Creating account..." : "Register"}</button>
          </form>
          <div className="my-6 flex items-center gap-3"><div className="h-px flex-1 bg-orange-100"></div><span className="text-sm font-semibold text-slate-500">OR</span><div className="h-px flex-1 bg-orange-100"></div></div>
          {process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ? <div className="flex justify-center"><GoogleLogin onSuccess={handleGoogleSuccess} onError={() => toast.error("Google login failed")} /></div> : <p className="rounded-2xl bg-orange-50 px-4 py-3 text-center text-sm font-semibold text-orange-700">Add NEXT_PUBLIC_GOOGLE_CLIENT_ID to enable Google Login.</p>}
          <p className="mt-7 text-center text-slate-600">Already have an account? <Link href="/login" className="font-bold text-orange-600">Login</Link></p>
        </div>
      </div>
    </section>
  );
}

function Field({ label, error, children }) {
  return <div><label className="mb-2 block font-bold text-slate-700">{label}</label>{children}{error && <p className="mt-2 text-sm font-semibold text-red-600">{error}</p>}</div>;
}
