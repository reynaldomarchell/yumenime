import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonDetail() {
  return (
    <div className="h-full w-full space-y-4 py-5 ">
      <Skeleton className=" h-24 w-full rounded-xl object-cover md:h-40" />
      <div className=" flex flex-row justify-between">
        <div className="w-2/4 space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
        <div className=" w-1/4 space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
      </div>
      <div className=" w-full space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
      <div className="flex w-full gap-4 overflow-hidden">
        {Array.from({ length: 30 }).map((_, index) => (
          <div className="flex flex-col gap-2" key={index}>
            <Skeleton className="h-40 max-w-28 rounded-xl md:h-24 md:max-w-16" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-28 md:w-16" />
              <Skeleton className="h-4 w-28 md:w-16" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
