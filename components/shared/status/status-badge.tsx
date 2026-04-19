import { cn } from "@/lib/cn"
import { Button, statusVariantMap } from "@/components/ui/button"

interface StatusBadgeProps {
  status: string
  className?: string
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const variant = statusVariantMap[status] ?? "pending"

  return (
    <Button
      variant={variant}
      size="sm"
      className={cn("rounded-full pointer-events-none", className)}
    >
      {status}
    </Button>
  )
}
