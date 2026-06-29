"use client";

import { getFeaturedPetsApi } from "@/lib/petsApi";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import ErrorState from "../shared/ErrorState";
import LoadingSpinner from "../shared/LoadingSpinner";
import PetCard from "../pets/PetCard";

export default function FeaturedPets() {
  const { data, isLoading, isError } = useQuery({ queryKey: ["featured-pets"], queryFn: getFeaturedPetsApi });
  const pets = data?.pets || [];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 inline-block rounded-full bg-orange-100 px-5 py-2 text-sm font-bold text-orange-700">Featured Pets</p>
            <h2 className="text-3xl font-black text-slate-950 md:text-5xl">Pets waiting for a loving home</h2>
            <p className="mt-4 max-w-2xl text-slate-600">Browse some of the latest pets available for adoption.</p>
          </div>
          <Link href="/all-pets" className="rounded-full bg-slate-950 px-6 py-3 text-center font-bold text-white transition hover:bg-orange-600">View All Pets</Link>
        </div>
        {isLoading && <LoadingSpinner message="Loading featured pets..." />}
        {isError && <ErrorState title="Featured pets could not be loaded" message="Please make sure the server is running and MongoDB is connected." />}
        {!isLoading && !isError && <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{pets.slice(0, 6).map((pet) => <PetCard key={pet._id} pet={pet} />)}</div>}
      </div>
    </section>
  );
}
