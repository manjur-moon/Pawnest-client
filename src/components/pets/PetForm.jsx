"use client";

import { useAuth } from "@/providers/AuthProvider";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const speciesOptions = ["Dog", "Cat", "Bird", "Rabbit", "Fish", "Other"];
const genderOptions = ["Male", "Female", "Unknown"];
const vaccinationOptions = ["Fully vaccinated", "Partially vaccinated", "Not vaccinated", "Vaccination unknown"];

export default function PetForm({ mode = "add", initialData = null, onSubmit, loading = false }) {
  const { user } = useAuth();
  const { register, handleSubmit, reset, formState: { errors } } = useForm({ defaultValues: { petName: "", species: "Dog", breed: "", age: "", gender: "Male", image: "", healthStatus: "", vaccinationStatus: "Fully vaccinated", location: "", adoptionFee: "", description: "" } });

  useEffect(() => {
    if (initialData) reset({ petName: initialData.petName || "", species: initialData.species || "Dog", breed: initialData.breed || "", age: initialData.age ?? "", gender: initialData.gender || "Male", image: initialData.image || "", healthStatus: initialData.healthStatus || "", vaccinationStatus: initialData.vaccinationStatus || "Fully vaccinated", location: initialData.location || "", adoptionFee: initialData.adoptionFee ?? "", description: initialData.description || "" });
  }, [initialData, reset]);

  function submitHandler(formData) { onSubmit({ ...formData, age: Number(formData.age), adoptionFee: Number(formData.adoptionFee) }); }
  const inputClass = "w-full rounded-2xl border border-orange-100 px-4 py-3 outline-none focus:border-orange-500";
  return (
    <form onSubmit={handleSubmit(submitHandler)} className="space-y-6"><div className="grid gap-5 md:grid-cols-2">
      <TextInput label="Pet Name" name="petName" placeholder="Max" register={register} errors={errors} />
      <SelectInput label="Species" name="species" options={speciesOptions} register={register} />
      <TextInput label="Breed" name="breed" placeholder="Golden Retriever" register={register} errors={errors} />
      <NumberInput label="Age" name="age" placeholder="2" register={register} errors={errors} />
      <SelectInput label="Gender" name="gender" options={genderOptions} register={register} />
      <TextInput label="Image URL" type="url" name="image" placeholder="https://example.com/pet.jpg" register={register} errors={errors} />
      <TextInput label="Health Status" name="healthStatus" placeholder="Healthy and active" register={register} errors={errors} />
      <SelectInput label="Vaccination Status" name="vaccinationStatus" options={vaccinationOptions} register={register} />
      <TextInput label="Location" name="location" placeholder="Dhaka" register={register} errors={errors} />
      <NumberInput label="Adoption Fee" name="adoptionFee" placeholder="50" register={register} errors={errors} />
      <div className="md:col-span-2"><label className="mb-2 block font-bold text-slate-700">Owner Email</label><input type="email" value={user?.email || ""} readOnly className="w-full cursor-not-allowed rounded-2xl border border-orange-100 bg-orange-50 px-4 py-3 font-semibold text-slate-600 outline-none" /></div>
      <div className="md:col-span-2"><label className="mb-2 block font-bold text-slate-700">Description</label><textarea rows={5} placeholder="Write a clear and caring description about this pet..." className={inputClass} {...register("description", { required: "Description is required", minLength: { value: 20, message: "Description should be at least 20 characters" } })} />{errors.description && <p className="mt-2 text-sm font-semibold text-red-600">{errors.description.message}</p>}</div>
    </div><button type="submit" disabled={loading} className="rounded-2xl bg-orange-600 px-8 py-4 font-bold text-white transition hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-60">{loading ? (mode === "add" ? "Adding Pet..." : "Updating Pet...") : (mode === "add" ? "Add Pet" : "Update Pet")}</button></form>
  );
}

function TextInput({ label, name, type = "text", placeholder, register, errors }) { return <div><label className="mb-2 block font-bold text-slate-700">{label}</label><input type={type} placeholder={placeholder} className="w-full rounded-2xl border border-orange-100 px-4 py-3 outline-none focus:border-orange-500" {...register(name, { required: `${label} is required` })} />{errors[name] && <p className="mt-2 text-sm font-semibold text-red-600">{errors[name].message}</p>}</div>; }
function NumberInput({ label, name, placeholder, register, errors }) { return <div><label className="mb-2 block font-bold text-slate-700">{label}</label><input type="number" min="0" placeholder={placeholder} className="w-full rounded-2xl border border-orange-100 px-4 py-3 outline-none focus:border-orange-500" {...register(name, { required: `${label} is required`, min: { value: 0, message: `${label} cannot be negative` } })} />{errors[name] && <p className="mt-2 text-sm font-semibold text-red-600">{errors[name].message}</p>}</div>; }
function SelectInput({ label, name, options, register }) { return <div><label className="mb-2 block font-bold text-slate-700">{label}</label><select className="w-full rounded-2xl border border-orange-100 px-4 py-3 outline-none focus:border-orange-500" {...register(name, { required: `${label} is required` })}>{options.map((item) => <option key={item} value={item}>{item}</option>)}</select></div>; }
