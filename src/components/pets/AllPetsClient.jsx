"use client";

import { getPetsApi } from "@/lib/petsApi";
import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";
import { useState } from "react";
import EmptyState from "../shared/EmptyState";
import ErrorState from "../shared/ErrorState";
import LoadingSpinner from "../shared/LoadingSpinner";
import PetCard from "./PetCard";

const speciesOptions = ["Dog", "Cat", "Bird", "Rabbit", "Fish", "Other"];

export default function AllPetsClient() {
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [species, setSpecies] = useState("");
  const [sort, setSort] = useState("");
  const { data, isLoading, isError } = useQuery({ queryKey: ["pets", search, species, sort], queryFn: () => getPetsApi({ search, species, sort }) });
  const pets = data?.pets || [];

  function handleSubmit(event) { event.preventDefault(); setSearch(searchInput.trim()); }
  function handleReset() { setSearchInput(""); setSearch(""); setSpecies(""); setSort(""); }

  return (
    <section className="section-padding bg-orange-50"><div className="container-custom"><div className="mx-auto max-w-3xl text-center"><p className="mb-3 inline-block rounded-full bg-white px-5 py-2 text-sm font-bold text-orange-700">Explore Pets</p><h1 className="text-4xl font-black text-slate-950 md:text-5xl">All Pets</h1><p className="mt-4 text-slate-600">Search by pet name, filter by species, and sort available pets for adoption.</p></div>
      <div className="mt-10 rounded-[28px] bg-white p-5 shadow-sm"><form onSubmit={handleSubmit} className="grid gap-4 lg:grid-cols-[1fr_220px_220px_auto]"><div className="relative"><Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" /><input type="text" value={searchInput} onChange={(event) => setSearchInput(event.target.value)} placeholder="Search pets by name..." className="w-full rounded-2xl border border-orange-100 py-3 pl-12 pr-4 outline-none transition focus:border-orange-500" /></div><select value={species} onChange={(event) => setSpecies(event.target.value)} className="rounded-2xl border border-orange-100 px-4 py-3 font-semibold text-slate-700 outline-none transition focus:border-orange-500"><option value="">All Species</option>{speciesOptions.map((item) => <option key={item} value={item}>{item}</option>)}</select><select value={sort} onChange={(event) => setSort(event.target.value)} className="rounded-2xl border border-orange-100 px-4 py-3 font-semibold text-slate-700 outline-none transition focus:border-orange-500"><option value="">Default Sort</option><option value="newest">Newest First</option><option value="fee-low">Fee: Low to High</option><option value="fee-high">Fee: High to Low</option></select><div className="flex gap-3"><button type="submit" className="rounded-2xl bg-orange-600 px-6 py-3 font-bold text-white transition hover:bg-orange-700">Search</button><button type="button" onClick={handleReset} className="rounded-2xl border border-orange-200 px-6 py-3 font-bold text-orange-700 transition hover:bg-orange-50">Reset</button></div></form></div>
      <div className="mt-10">{isLoading && <LoadingSpinner message="Loading pets..." />}{isError && <ErrorState title="Pets could not be loaded" message="Please make sure the server is running and MongoDB is connected." />}{!isLoading && !isError && pets.length === 0 && <EmptyState title="No pets found" message="Try another pet name, species filter, or sorting option." />}{!isLoading && !isError && pets.length > 0 && <><div className="mb-5 flex items-center justify-between"><p className="font-bold text-slate-700">Showing {pets.length} pet{pets.length > 1 ? "s" : ""}</p></div><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{pets.map((pet) => <PetCard key={pet._id} pet={pet} />)}</div></>}</div>
    </div></section>
  );
}
