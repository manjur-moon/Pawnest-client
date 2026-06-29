"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ProtectedRoute from "./ProtectedRoute";

export default function DashboardShell({ children }) {
  const pathname = usePathname();
  const links = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/dashboard/my-requests", label: "My Requests" },
    { href: "/dashboard/add-pet", label: "Add Pet" },
    { href: "/dashboard/my-listings", label: "My Listings" },
  ];

  return (
    <ProtectedRoute>
      <section className="min-h-screen bg-orange-50">
        <div className="container-custom grid gap-6 py-8 lg:grid-cols-[260px_1fr]">
          <aside className="rounded-3xl bg-white p-5 shadow-sm lg:sticky lg:top-24 lg:self-start">
            <h2 className="mb-5 text-xl font-black text-slate-950">Dashboard</h2>
            <nav className="grid gap-2 sm:grid-cols-2 lg:flex lg:flex-col">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link key={link.href} href={link.href} className={isActive ? "rounded-2xl bg-orange-600 px-4 py-3 font-bold text-white" : "rounded-2xl px-4 py-3 font-semibold text-slate-700 transition hover:bg-orange-100 hover:text-orange-700"}>
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </aside>
          <div className="rounded-3xl bg-white p-6 shadow-sm">{children}</div>
        </div>
      </section>
    </ProtectedRoute>
  );
}
