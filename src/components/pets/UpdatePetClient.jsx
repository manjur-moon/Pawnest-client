"use client";

import ErrorState from "@/components/shared/ErrorState";
import LoadingSpinner from "@/components/shared/LoadingSpinner";
import { getPetByIdApi, updatePetApi } from "@/lib/petsApi";
import { useAuth } from "@/providers/AuthProvider";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import PetForm from "./PetForm";

export default function UpdatePetClient({ petId }) {
  const router = useRouter();
  const { user } = useAuth();
  const { data, isLoading, isError } = useQuery({ queryKey: ["pet", petId], queryFn: () => getPetByIdApi(petId), enabled: Boolean(petId) });
  const updateMutation = useMutation({ mutationFn: (petData) => updatePetApi(petId, petData) });
  const pet = data?.pet;
  async function handleUpdatePet(petData) { try { const response = await updateMutation.mutateAsync(petData); toast.success(response.message || "Pet updated successfully"); router.push("/dashboard/my-listings"); router.refresh(); } catch (error) { toast.error(error?.response?.data?.message || "Failed to update pet"); } }
  if (isLoading) return <LoadingSpinner message="Loading pet information..." />;
  if (isError || !pet) return <ErrorState title="Pet not found" message="The pet listing could not be loaded." />;
  if (pet.ownerEmail !== user?.email) return <ErrorState title="You are not allowed" message="Only the pet owner can update this listing." />;
  return <div><div className="mb-8"><p className="mb-3 inline-block rounded-full bg-orange-100 px-5 py-2 text-sm font-bold text-orange-700">Update Listing</p><h1 className="text-3xl font-black text-slate-950">Update {pet.petName}</h1><p className="mt-3 max-w-2xl text-slate-600">Keep pet information accurate and helpful for adopters.</p></div><PetForm mode="update" initialData={pet} onSubmit={handleUpdatePet} loading={updateMutation.isPending} /></div>;
}
