import { cn } from "@/lib/cn"

type FieldGridProps = {
  children: React.ReactNode
  className?: string
}

export function FieldGrid({ children, className }: FieldGridProps) {
  return (
    <div className={cn("grid grid-cols-2 gap-4", className)}>
      {children}
    </div>
  )
}
