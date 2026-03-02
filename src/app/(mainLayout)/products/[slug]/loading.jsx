export default function ProductDetailsSkeleton() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden border border-base-300">
          <div className="skeleton h-full w-full" />
        </div>

        <div className="space-y-4">
          <div className="skeleton h-8 w-3/4" />
          <div className="skeleton h-5 w-2/3" />

          <div className="flex items-center gap-3">
            <div className="skeleton h-5 w-10" />
            <div className="skeleton h-5 w-16" />
            <div className="skeleton h-5 w-28" />
          </div>

          <div className="flex items-center gap-4">
            <div className="skeleton h-9 w-28" />
            <div className="skeleton h-6 w-16" />
            <div className="skeleton h-6 w-20 rounded-full" />
          </div>

          <div className="flex flex-wrap gap-2">
            <div className="skeleton h-7 w-28 rounded-full" />
            <div className="skeleton h-7 w-36 rounded-full" />
            <div className="skeleton h-7 w-32 rounded-full" />
            <div className="skeleton h-7 w-40 rounded-full" />
          </div>

          <div className="skeleton h-12 w-44 rounded-xl" />
        </div>
      </div>

      <div className="mt-10 space-y-3">
        <div className="skeleton h-7 w-40" />
        <div className="skeleton h-4 w-full" />
        <div className="skeleton h-4 w-11/12" />
        <div className="skeleton h-4 w-10/12" />
        <div className="skeleton h-4 w-9/12" />
      </div>
    </div>
  );
}
