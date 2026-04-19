import { Button, ButtonVariant, statusVariantMap } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"

type ClaimNodeButtonProps = {
  index: number
  status: string
}

export function ClaimNodeButton({ index, status }: ClaimNodeButtonProps) {
  const variant: ButtonVariant = statusVariantMap[status] ?? "pending"

  return (
    <Button
      variant={variant}
      size="icon-xs"
      className="rounded-full pointer-events-none"
    >
      <Typography variant="span" weight="medium">
        {index + 1}
      </Typography>
    </Button>
  )
}
