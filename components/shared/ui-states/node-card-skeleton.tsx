import { Skeleton } from "@/components/ui/skeleton";

export function NodeCardSkeleton() {
  return (
    <div className="border border-border bg-card rounded-lg p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Skeleton className="w-7 h-7 rounded-full" />
          <Skeleton className="h-4 w-36" />
        </div>
        <div className="flex items-center gap-3">
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="w-4 h-4" />
        </div>
      </div>
    </div>
  )
}
