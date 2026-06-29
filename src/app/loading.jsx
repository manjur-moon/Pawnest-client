import { PawPrint } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-orange-50">
      <div className="text-center">
        <div className="mx-auto flex h-20 w-20 animate-pulse items-center justify-center rounded-3xl bg-orange-600 text-white shadow-lg shadow-orange-200">
          <PawPrint size={34} />
        </div>
        <div className="mx-auto mt-6 h-12 w-12 animate-spin rounded-full border-4 border-orange-200 border-t-orange-600"></div>
        <h2 className="mt-6 text-2xl font-black text-slate-950">Loading PawsNest</h2>
        <p className="mt-2 text-slate-600">Preparing pets and adoption details for you.</p>
      </div>
    </div>
  );
}
