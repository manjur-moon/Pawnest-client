"use client";

import { motion } from "framer-motion";
import { BadgeCheck, MapPin, PawPrint } from "lucide-react";
import Link from "next/link";

export default function PetCard({ pet }) {
  const petId = pet?._id || pet?.id;
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="pet-card-shell group overflow-hidden rounded-[30px] transition hover:-translate-y-1">
      <div className="relative h-60 overflow-hidden">
        <img src={pet?.image || "https://images.unsplash.com/photo-1450778869180-41d0601e046e"} alt={pet?.petName || "Adoptable pet"} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-sm font-black text-orange-700 shadow-sm backdrop-blur">{pet?.species || "Pet"}</span>
        <span className={`absolute right-4 top-4 rounded-full px-4 py-2 text-sm font-bold backdrop-blur ${pet?.status === "adopted" ? "bg-slate-900/85 text-white" : "bg-green-600/90 text-white"}`}>{pet?.status === "adopted" ? "Adopted" : "Available"}</span>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div><h3 className="text-xl font-black text-slate-950">{pet?.petName || "Lovely Pet"}</h3><p className="mt-1 flex items-center gap-1 text-sm font-semibold text-slate-500"><PawPrint size={15} className="text-orange-500" />{pet?.breed || "Mixed Breed"}</p></div>
          <p className="rounded-2xl bg-orange-50 px-3 py-2 text-sm font-black text-orange-700">${pet?.adoptionFee || 0}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2 text-sm"><span className="flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-600"><MapPin size={14} />{pet?.location || "Unknown"}</span><span className="flex items-center gap-1 rounded-full bg-green-50 px-3 py-1 font-semibold text-green-700"><BadgeCheck size={14} />{pet?.vaccinationStatus || "Vaccination info"}</span></div>
        <p className="mt-4 line-clamp-2 text-sm leading-6 text-slate-600">{pet?.description || "This pet is waiting for a caring family and a safe forever home."}</p>
        <Link href={`/pets/${petId}`} className="brand-btn-primary mt-5 block rounded-2xl px-5 py-3 text-center font-black text-white transition">View Details</Link>
      </div>
    </motion.div>
  );
}
