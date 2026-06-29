"use client";

import { createAdoptionRequestApi } from "@/lib/requestsApi";
import { useAuth } from "@/providers/AuthProvider";
import { useMutation } from "@tanstack/react-query";
import { CalendarDays, HeartHandshake } from "lucide-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function AdoptionForm({ pet }) {
  const { user } = useAuth();
  const isOwner = pet?.ownerEmail === user?.email;
  const isAdopted = pet?.status === "adopted";
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const requestMutation = useMutation({ mutationFn: createAdoptionRequestApi, onSuccess: (response) => { toast.success(response.message || "Adoption request submitted"); reset(); }, onError: (error) => toast.error(error?.response?.data?.message || "Failed to submit adoption request") });
  async function onSubmit(formData) {
    if (isOwner) return toast.error("You cannot adopt your own pet.");
    if (isAdopted) return toast.error("This pet has already been adopted.");
    await requestMutation.mutateAsync({ petId: pet._id, pickupDate: formData.pickupDate, message: formData.message });
  }
  return <div className="rounded-[28px] border border-orange-100 bg-white p-6 shadow-sm"><div className="mb-6 flex items-center gap-3"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-600"><HeartHandshake /></div><div><h2 className="text-2xl font-black text-slate-950">Adoption Request</h2><p className="text-sm text-slate-500">Submit a thoughtful request to the owner.</p></div></div>{isOwner && <div className="mb-5 rounded-2xl bg-red-50 p-4 text-sm font-semibold text-red-700">You are the owner of this pet. Owners cannot submit adoption requests for their own pets.</div>}{isAdopted && <div className="mb-5 rounded-2xl bg-slate-100 p-4 text-sm font-semibold text-slate-700">This pet has already been adopted. Further requests are disabled.</div>}<form onSubmit={handleSubmit(onSubmit)} className="space-y-5"><ReadOnly label="Pet Name" value={pet?.petName || ""} /><ReadOnly label="User Name" value={user?.name || ""} /><ReadOnly label="User Email" value={user?.email || ""} /><div><label className="mb-2 block font-bold text-slate-700">Pickup Date</label><div className="relative"><CalendarDays size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" /><input type="date" min={new Date().toISOString().split("T")[0]} className="w-full rounded-2xl border border-orange-100 py-3 pl-12 pr-4 outline-none transition focus:border-orange-500" {...register("pickupDate", { required: "Pickup date is required" })} /></div>{errors.pickupDate && <p className="mt-2 text-sm font-semibold text-red-600">{errors.pickupDate.message}</p>}</div><div><label className="mb-2 block font-bold text-slate-700">Message</label><textarea rows={5} placeholder="Tell the owner why you want to adopt this pet and how you will care for them..." className="w-full rounded-2xl border border-orange-100 px-4 py-3 outline-none transition focus:border-orange-500" {...register("message", { required: "Message is required", minLength: { value: 10, message: "Message should be at least 10 characters" } })} />{errors.message && <p className="mt-2 text-sm font-semibold text-red-600">{errors.message.message}</p>}</div><button type="submit" disabled={requestMutation.isPending || isOwner || isAdopted} className="w-full rounded-2xl bg-orange-600 px-5 py-3 font-bold text-white transition hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-60">{requestMutation.isPending ? "Submitting..." : "Adopt"}</button></form></div>;
}
function ReadOnly({ label, value }) { return <div><label className="mb-2 block font-bold text-slate-700">{label}</label><input type="text" value={value} readOnly className="w-full cursor-not-allowed rounded-2xl border border-orange-100 bg-orange-50 px-4 py-3 font-semibold text-slate-600 outline-none" /></div>; }
