import { Heart, Home, Sparkles } from "lucide-react";

export default function WhyAdopt() {
  const items = [
    { icon: Heart, title: "Save a life", text: "Adoption gives abandoned or rescued pets a new chance to live safely." },
    { icon: Home, title: "Build a family bond", text: "Pets bring warmth, companionship, and emotional support to your home." },
    { icon: Sparkles, title: "Support ethical care", text: "Adoption encourages responsible pet ownership and shelter support." },
  ];
  return (
    <section className="section-padding bg-orange-50">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center"><p className="mb-3 inline-block rounded-full bg-white px-5 py-2 text-sm font-bold text-orange-700">Why Adopt?</p><h2 className="text-3xl font-black text-slate-950 md:text-5xl">Adoption changes two lives</h2><p className="mt-4 text-slate-600">You give a pet a home, and they give you loyalty, joy, and love.</p></div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">{items.map((item) => { const Icon = item.icon; return <div key={item.title} className="rounded-3xl bg-white p-7 shadow-sm"><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600"><Icon /></div><h3 className="mt-5 text-xl font-black text-slate-950">{item.title}</h3><p className="mt-3 leading-7 text-slate-600">{item.text}</p></div>; })}</div>
      </div>
    </section>
  );
}
