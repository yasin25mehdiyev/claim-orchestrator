import { cn } from "@/lib/cn";

type FieldItemProps = {
  label: string
  value: string
  className?: string
}

export function FieldItem({ label, value, className }: FieldItemProps) {
  return (
    <div className={cn("space-y-1", className)}>
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="text-sm font-medium text-foreground">{value}</p>
    </div>
  )
}
