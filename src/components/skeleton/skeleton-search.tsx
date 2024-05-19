import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonSearch() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-24 w-16 rounded-md" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Skeleton className="h-24 w-16 rounded-md" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    </div>
  );
}
