import { Claim } from "@/types"
import { Typography } from "@/components/ui/typography"

type ClaimHeaderProps = {
  claim: Claim
}

export function ClaimHeader({ claim }: ClaimHeaderProps) {
  return (
    <div className="border border-border bg-card rounded-lg p-5">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <Typography variant="caption">File No</Typography>
          <Typography variant="h1" weight="medium">
            #{claim.fileNo}
          </Typography>
          <Typography variant="p" className="text-muted-foreground">
            {claim.currentStatus}
          </Typography>
        </div>

        <div className="flex flex-col items-end gap-1">
          <div className="bg-status-action-bg border border-status-action-border rounded-lg px-3 py-1.5">
            <Typography variant="p" weight="medium" className="text-status-action-text">
              {claim.estimatedRemainingTime}
            </Typography>
          </div>
          <Typography variant="caption">estimated remaining</Typography>
        </div>
      </div>
    </div>
  )
}
