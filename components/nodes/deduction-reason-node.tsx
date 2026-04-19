import { DeductionReasonNode } from "@/types"

import { Typography } from "@/components/ui/typography"
import { FieldGrid, FieldItem, AiAssistant } from "@/components/shared"

type DeductionReasonNodeProps = {
  data: DeductionReasonNode
}

export function DeductionReasonNodeComponent({ data }: DeductionReasonNodeProps) {
  return (
    <div className="space-y-4">
      <div className="bg-status-action-bg border border-status-action-border rounded-lg p-3 space-y-1">
        <Typography variant="label" weight="medium" className="text-status-action-text">
          Action Required
        </Typography>
        <Typography variant="p" className="text-status-action-text">
          {data.actionRequired}
        </Typography>
      </div>

      <FieldGrid>
        <FieldItem label="Occupational Deduction" value={data.occupationalDeduction} />
        <FieldItem label="Appreciation Deduction" value={data.appreciationDeduction} />
        <FieldItem label="Policy Deductible" value={data.policyDeductible} />
        <FieldItem label="Non Damage Amount" value={data.nonDamageAmount} />
      </FieldGrid>

      <AiAssistant node={data} />
    </div>
  )
}
