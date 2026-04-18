import { SubstituteRentalVehicleNode } from "@/types"
import { FieldItem } from "@/components/shared"

type SubstituteRentalVehicleNodeProps = {
  data: SubstituteRentalVehicleNode
}

export function SubstituteRentalVehicleNodeComponent({ data }: SubstituteRentalVehicleNodeProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <FieldItem label="Vehicle Model" value={data.vehicleModel} />
      <FieldItem label="Vehicle Duration" value={data.vehicleDuration} />
      <FieldItem label="Extra Duration" value={data.extraDuration} />
    </div>
  )
}
