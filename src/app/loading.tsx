export default function Loading() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center px-4">
      <div
        className="h-10 w-10 animate-spin rounded-full border-2 border-zinc-200 border-t-zinc-900"
        role="status"
        aria-label="Loading"
      />
    </div>
  );
}
