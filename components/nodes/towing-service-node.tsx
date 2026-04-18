import { TowingServiceNode } from "@/types"
import { FieldItem } from "@/components/shared"

type TowingServiceNodeProps = {
  data: TowingServiceNode
}

export function TowingServiceNodeComponent({ data }: TowingServiceNodeProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <FieldItem label="Pickup Location" value={data.pickupLocation} />
      <FieldItem label="Towing Date" value={data.towingDate} />
    </div>
  )
}
