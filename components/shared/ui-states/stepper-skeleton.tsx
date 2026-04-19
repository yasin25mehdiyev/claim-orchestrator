import React from "react"
import { Skeleton } from "@/components/ui/skeleton"

export function StepperSkeleton() {
  const count = 8

  return (
    <div className="border border-border bg-card rounded-lg p-5">
      <div className="overflow-x-auto">
        <div className="min-w-[500px]">
          <div
            className="grid items-center"
            style={{
              gridTemplateColumns: `repeat(${count - 1}, 32px 1fr) 32px`,
            }}
          >
            {Array.from({ length: count }).map((_, i) => (
              <React.Fragment key={i}>
                <div className="flex justify-center">
                  <Skeleton className="w-8 h-8 rounded-full flex-shrink-0" />
                </div>
                {i < count - 1 && <Skeleton className="h-0.5 w-full" />}
              </React.Fragment>
            ))}
          </div>

          <div
            className="grid mt-2"
            style={{
              gridTemplateColumns: `repeat(${count - 1}, 32px 1fr) 32px`,
            }}
          >
            {Array.from({ length: count }).map((_, i) => (
              <React.Fragment key={i}>
                <div className="flex justify-center">
                  <Skeleton className="h-3 w-10 mt-1" />
                </div>
                {i < count - 1 && <div />}
              </React.Fragment>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}
