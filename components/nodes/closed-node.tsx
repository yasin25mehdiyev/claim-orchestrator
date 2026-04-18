import { ClosedNode } from "@/types"
import { FieldItem } from "@/components/shared"

type ClosedNodeProps = {
  data: ClosedNode
}

export function ClosedNodeComponent({ data }: ClosedNodeProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <FieldItem label="Completion Date" value={data.completionDate} />
    </div>
  )
}
