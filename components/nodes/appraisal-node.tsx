import { AppraisalNode } from "@/types"
import { FieldItem } from "@/components/shared"

type AppraisalNodeProps = {
  data: AppraisalNode
}

export function AppraisalNodeComponent({ data }: AppraisalNodeProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <FieldItem label="Expert Assignment Date" value={data.expertAssignmentDate} />
      <FieldItem label="Expert Info" value={data.expertInfo} />
      <FieldItem label="Contact" value={data.contact} />
    </div>
  )
}
