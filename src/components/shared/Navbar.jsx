"use client";

import { useAuth } from "@/providers/AuthProvider";
import { LayoutDashboard, LogOut, Menu, PawPrint, UserRound, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { user, authLoading, logoutUser } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    try {
      await logoutUser();
      toast.success("Logged out successfully");
      setOpen(false);
      setProfileOpen(false);
      router.push("/");
      router.refresh();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Logout failed");
    }
  }

  function linkClass(href) {
    return pathname === href ? "active-link" : "font-semibold text-slate-700 transition hover:text-orange-600";
  }

  return (
    <header className="site-header sticky top-0 z-50 border-b backdrop-blur-xl">
      <nav className="container-custom flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="brand-logo-icon flex h-10 w-10 items-center justify-center rounded-2xl text-white"><PawPrint size={22} /></span>
          <div>
            <h1 className="text-xl font-black text-slate-950">PawsNest</h1>
            <p className="-mt-1 text-xs font-medium text-orange-600">Adopt with love</p>
          </div>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          <Link href="/" className={linkClass("/")}>Home</Link>
          <Link href="/all-pets" className={linkClass("/all-pets")}>All Pets</Link>
          {user && (
            <>
              <Link href="/dashboard/my-requests" className={linkClass("/dashboard/my-requests")}>My Requests</Link>
              <Link href="/dashboard/add-pet" className={linkClass("/dashboard/add-pet")}>Add Pet</Link>
            </>
          )}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle />
          {authLoading ? (
            <div className="h-10 w-24 animate-pulse rounded-full bg-orange-100"></div>
          ) : user ? (
            <div className="relative">
              <button type="button" onClick={() => setProfileOpen(!profileOpen)} className="flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-3 py-2">
                {user.photoURL ? (
                  <img src={user.photoURL} alt={user.name} className="h-8 w-8 rounded-full object-cover" />
                ) : (
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-600 text-white"><UserRound size={18} /></span>
                )}
                <span className="max-w-28 truncate font-bold text-slate-800">{user.name}</span>
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-3 w-60 rounded-2xl border border-orange-100 bg-white p-3 shadow-xl">
                  <div className="border-b border-orange-100 px-3 pb-3">
                    <p className="font-bold text-slate-900">{user.name}</p>
                    <p className="truncate text-sm text-slate-500">{user.email}</p>
                  </div>
                  <Link href="/dashboard" onClick={() => setProfileOpen(false)} className="mt-3 flex items-center gap-2 rounded-xl px-3 py-2 font-semibold text-slate-700 transition hover:bg-orange-50">
                    <LayoutDashboard size={18} /> Dashboard
                  </Link>
                  <button type="button" onClick={handleLogout} className="flex w-full items-center gap-2 rounded-xl px-3 py-2 font-semibold text-red-600 transition hover:bg-red-50">
                    <LogOut size={18} /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link href="/login" className="brand-btn-primary rounded-full px-5 py-2 font-bold text-white transition">Login</Link>
          )}
        </div>

        <button type="button" onClick={() => setOpen(!open)} className="rounded-xl border border-orange-100 p-2 md:hidden" aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-orange-100 bg-white/95 px-5 py-5 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4">
            <Link href="/" onClick={() => setOpen(false)} className={linkClass("/")}>Home</Link>
            <Link href="/all-pets" onClick={() => setOpen(false)} className={linkClass("/all-pets")}>All Pets</Link>
            {user && (
              <>
                <Link href="/dashboard/my-requests" onClick={() => setOpen(false)} className={linkClass("/dashboard/my-requests")}>My Requests</Link>
                <Link href="/dashboard/add-pet" onClick={() => setOpen(false)} className={linkClass("/dashboard/add-pet")}>Add Pet</Link>
                <Link href="/dashboard" onClick={() => setOpen(false)} className={linkClass("/dashboard")}>Dashboard</Link>
              </>
            )}
            <div className="flex items-center justify-between rounded-2xl bg-orange-50 px-4 py-3">
              <span className="font-bold text-slate-700">Theme</span>
              <ThemeToggle />
            </div>
            {authLoading ? (
              <div className="h-10 animate-pulse rounded-full bg-orange-100"></div>
            ) : user ? (
              <button type="button" onClick={handleLogout} className="rounded-full bg-red-600 px-5 py-2 text-center font-bold text-white">Logout</button>
            ) : (
              <Link href="/login" onClick={() => setOpen(false)} className="brand-btn-primary rounded-full px-5 py-2 text-center font-bold text-white transition">Login</Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
