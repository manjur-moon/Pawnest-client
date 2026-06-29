import { SearchX } from "lucide-react";

export default function EmptyState({ title = "No data found", message = "Try changing your search or filter options." }) {
  return (
    <div className="rounded-3xl border border-dashed border-orange-200 bg-white p-10 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-600">
        <SearchX size={30} />
      </div>
      <h3 className="mt-5 text-2xl font-black text-slate-950">{title}</h3>
      <p className="mx-auto mt-3 max-w-md text-slate-600">{message}</p>
    </div>
  );
}
