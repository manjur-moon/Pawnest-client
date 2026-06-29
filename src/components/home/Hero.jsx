import {
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
  PawPrint,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-section overflow-hidden">
      <div className="container-custom grid min-h-[calc(100vh-64px)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="section-eyebrow mb-5">
            <PawPrint size={17} /> Pet Adoption Platform
          </p>

          <h1 className="max-w-4xl text-4xl font-black leading-[1.04] tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
            Adopt love, not just a pet.
            <span className="block bg-gradient-to-r from-orange-600 via-rose-500 to-amber-500 bg-clip-text text-transparent">
              Build a kinder home.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            PawsNest connects caring families with dogs, cats, birds, rabbits,
            and other pets waiting for safety, comfort, and a permanent home.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/all-pets"
              className="brand-btn-primary inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-center font-black transition"
            >
              Adopt Now <ArrowRight size={18} />
            </Link>

            <Link
              href="/dashboard/add-pet"
              className="brand-btn-secondary inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-center font-black transition"
            >
              Add a Pet <Sparkles size={18} />
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="hero-trust-pill">
              <span className="hero-trust-icon">✓</span>
              <span>Verified requests</span>
            </div>

            <div className="hero-trust-pill">
              <span className="hero-trust-icon">✓</span>
              <span>Owner controlled</span>
            </div>

            <div className="hero-trust-pill">
              <span className="hero-trust-icon">✓</span>
              <span>Adoption tracking</span>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="glass-panel rounded-[28px] p-6">
              <HeartHandshake className="text-orange-600" />
              <h3 className="mt-4 text-lg font-black text-slate-950">
                Caring adoption
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Submit thoughtful requests and communicate with pet owners
                safely.
              </p>
            </div>

            <div className="glass-panel rounded-[28px] p-6">
              <ShieldCheck className="text-orange-600" />
              <h3 className="mt-4 text-lg font-black text-slate-950">
                Owner controlled
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Owners can approve, reject, update, and manage listings.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-8 -top-8 h-44 w-44 rounded-full bg-orange-300/50 blur-3xl"></div>
          <div className="absolute -bottom-8 -left-8 h-44 w-44 rounded-full bg-emerald-300/40 blur-3xl"></div>

          <div className="glass-panel relative overflow-hidden rounded-[44px] p-4">
            <img
              src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1"
              alt="Happy adopted dog with owner"
              className="h-[540px] w-full rounded-[34px] object-cover"
            />

            <div className="absolute left-8 top-8 rounded-3xl bg-slate-950/82 p-5 text-white shadow-xl backdrop-blur">
              <p className="text-sm font-bold text-orange-200">Live impact</p>
              <p className="mt-1 text-3xl font-black">120+</p>
              <p className="text-sm font-semibold text-slate-200">
                Pets found homes
              </p>
            </div>

            <div className="absolute bottom-8 right-8 max-w-[230px] rounded-3xl bg-white/90 p-5 shadow-xl backdrop-blur">
              <p className="text-sm font-black text-orange-700">
                Today’s mission
              </p>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">
                Help one pet move from waiting to belonging.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
