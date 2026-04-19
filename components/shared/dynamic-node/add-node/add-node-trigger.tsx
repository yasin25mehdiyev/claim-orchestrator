import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"

type AddNodeTriggerProps = {
  onClick: () => void
}

export function AddNodeTrigger({ onClick }: AddNodeTriggerProps) {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={onClick}
      className="gap-2 text-muted-foreground cursor-pointer hover:text-foreground"
    >
      <Plus className="w-3.5 h-3.5" />
      <Typography variant="caption">Add note or attachment</Typography>
    </Button>
  )
}
