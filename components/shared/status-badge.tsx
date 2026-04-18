import { cn } from "@/lib/cn"
import { Button } from "@/components/ui/button"
import { statusVariantMap } from "@/components/shared/status-config"

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
