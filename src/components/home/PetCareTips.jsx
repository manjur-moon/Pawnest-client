import { Apple, CalendarCheck, Stethoscope } from "lucide-react";

export default function PetCareTips() {
  const tips = [
    { icon: Apple, title: "Balanced food", text: "Choose food based on species, age, size, and health condition." },
    { icon: CalendarCheck, title: "Regular routine", text: "Pets feel safer with consistent feeding, walking, and sleep schedules." },
    { icon: Stethoscope, title: "Vet checkups", text: "Regular health checkups help prevent serious illness early." },
  ];
  return (
    <section className="section-padding bg-orange-50"><div className="container-custom"><div className="mb-10 max-w-3xl"><p className="mb-3 inline-block rounded-full bg-white px-5 py-2 text-sm font-bold text-orange-700">Pet Care Tips</p><h2 className="text-3xl font-black text-slate-950 md:text-5xl">Care starts before adoption</h2><p className="mt-4 text-slate-600">Prepare your home and habits before bringing a new pet into your family.</p></div><div className="grid gap-6 md:grid-cols-3">{tips.map((tip) => { const Icon = tip.icon; return <div key={tip.title} className="rounded-3xl bg-white p-7 shadow-sm"><Icon className="text-orange-600" size={34} /><h3 className="mt-5 text-xl font-black text-slate-950">{tip.title}</h3><p className="mt-3 leading-7 text-slate-600">{tip.text}</p></div>; })}</div></div></section>
  );
}
