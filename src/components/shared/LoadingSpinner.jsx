export default function LoadingSpinner({ message = "Loading..." }) {
  return (
    <div className="flex min-h-[55vh] items-center justify-center">
      <div className="text-center">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-orange-200 border-t-orange-600"></div>
        <p className="mt-4 font-semibold text-orange-700">{message}</p>
      </div>
    </div>
  );
}
