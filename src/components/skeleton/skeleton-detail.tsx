import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonDetail() {
  return (
    <div>
      <div className="my-5 flex max-h-fit w-full flex-col space-y-2 pb-1 md:space-y-3">
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
              <Skeleton className="aspect-[2/3] max-w-24 rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-24" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
