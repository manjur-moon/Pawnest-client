import UpdatePetClient from "@/components/pets/UpdatePetClient";

export const metadata = { title: "Update Pet | PawsNest" };

export default async function UpdatePetPage({ params }) {
  const { id } = await params;
  return <UpdatePetClient petId={id} />;
}
