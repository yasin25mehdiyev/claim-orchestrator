import { DeductionReasonNode } from "@/types"
import { FieldItem } from "@/components/shared"

type DeductionReasonNodeProps = {
  data: DeductionReasonNode
}

export function DeductionReasonNodeComponent({ data }: DeductionReasonNodeProps) {
  return (
    <div className="space-y-4">
      <div className="bg-status-action-bg border border-status-action-border rounded-lg p-3">
        <p className="text-xs font-medium text-status-action-text">
          Action Required
        </p>
        <p className="text-sm text-status-action-text mt-1">
          {data.actionRequired}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <FieldItem label="Occupational Deduction" value={data.occupationalDeduction} />
        <FieldItem label="Appreciation Deduction" value={data.appreciationDeduction} />
        <FieldItem label="Policy Deductible" value={data.policyDeductible} />
        <FieldItem label="Non Damage Amount" value={data.nonDamageAmount} />
      </div>
    </div>
  )
}
