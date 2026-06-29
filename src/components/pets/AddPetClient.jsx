"use client";

import { addPetApi } from "@/lib/petsApi";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import PetForm from "./PetForm";

export default function AddPetClient() {
  const router = useRouter();
  const { mutateAsync, isPending } = useMutation({ mutationFn: addPetApi });
  async function handleAddPet(petData) { try { const response = await mutateAsync(petData); toast.success(response.message || "Pet added successfully"); router.push("/dashboard/my-listings"); router.refresh(); } catch (error) { toast.error(error?.response?.data?.message || "Failed to add pet"); } }
  return <div><div className="mb-8"><p className="mb-3 inline-block rounded-full bg-orange-100 px-5 py-2 text-sm font-bold text-orange-700">Add Listing</p><h1 className="text-3xl font-black text-slate-950">Add Pet</h1><p className="mt-3 max-w-2xl text-slate-600">Share accurate pet information so adopters can make a responsible decision.</p></div><PetForm mode="add" onSubmit={handleAddPet} loading={isPending} /></div>;
}
