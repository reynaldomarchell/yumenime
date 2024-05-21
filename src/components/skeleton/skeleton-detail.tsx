import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonDetail() {
  return (
    <div className="my-5 flex h-full w-full flex-col gap-2 pb-1 md:gap-3">
      <Skeleton className="mb-2 aspect-[3/1] w-full rounded-xl object-cover" />
      <div className=" flex flex-row justify-between">
        <div className="w-2/4 space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
        <div className="mb-2 w-1/4 space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
      </div>
      <div className="mb-2 w-full space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
      <div className="flex w-full gap-4 overflow-hidden">
        {Array.from({ length: 30 }).map((_, index) => (
          <div className="flex flex-col space-y-3" key={index}>
            <Skeleton className="aspect-[2/3] max-w-28 rounded-xl md:max-w-40" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-28 md:w-40" />
              <Skeleton className="h-4 w-28 md:w-40" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
