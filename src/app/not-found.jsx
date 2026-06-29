import { Home, PawPrint } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-orange-50 px-4">
      <div className="max-w-xl rounded-[36px] bg-white p-10 text-center shadow-xl">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-orange-100 text-orange-600">
          <PawPrint size={38} />
        </div>
        <h1 className="mt-6 text-7xl font-black text-orange-600">404</h1>
        <h2 className="mt-4 text-3xl font-black text-slate-950">This page wandered away</h2>
        <p className="mt-4 leading-7 text-slate-600">
          The page you are looking for does not exist, or the route may have changed. Let’s take you back home.
        </p>
        <Link href="/" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-orange-600 px-7 py-3 font-bold text-white transition hover:bg-orange-700">
          <Home size={18} />
          Back to Home
        </Link>
      </div>
    </section>
  );
}
