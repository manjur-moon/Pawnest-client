import PetDetailsShell from "@/components/pets/PetDetailsShell";

export default async function PetDetailsPage({ params }) {
  const { id } = await params;
  return <PetDetailsShell petId={id} />;
}
