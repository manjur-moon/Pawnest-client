import { CircleAlert } from "lucide-react";

export default function ErrorState({ title = "Something went wrong", message = "Please check your server connection and try again." }) {
  return (
    <div className="rounded-3xl border border-red-100 bg-red-50 p-10 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-600">
        <CircleAlert size={30} />
      </div>
      <h3 className="mt-5 text-2xl font-black text-red-700">{title}</h3>
      <p className="mx-auto mt-3 max-w-md text-red-600">{message}</p>
    </div>
  );
}
