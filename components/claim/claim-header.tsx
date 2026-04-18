import { Claim } from "@/types"

type ClaimHeaderProps = {
  claim: Claim
}

export function ClaimHeader({ claim }: ClaimHeaderProps) {
  return (
    <div className="border border-border bg-card rounded-lg p-5">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground">File No</p>
          <h1 className="text-3xl font-medium text-foreground">
            #{claim.fileNo}
          </h1>
          <p className="text-sm text-muted-foreground">
            {claim.currentStatus}
          </p>
        </div>

        <div className="flex flex-col items-end gap-1">
          <div className="bg-status-action-bg border border-status-action-border rounded-lg px-3 py-1.5">
            <p className="text-sm font-medium text-status-action-text">
              {claim.estimatedRemainingTime}
            </p>
          </div>
          <p className="text-xs text-muted-foreground">estimated remaining</p>
        </div>
      </div>
    </div>
  )
}
