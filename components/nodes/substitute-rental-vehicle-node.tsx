import { SubstituteRentalVehicleNode } from "@/types";

import { FieldGrid, FieldItem, AiAssistant } from "@/components/shared";

type SubstituteRentalVehicleNodeProps = {
  data: SubstituteRentalVehicleNode;
};

export function SubstituteRentalVehicleNodeComponent({
  data,
}: SubstituteRentalVehicleNodeProps) {
  return (
    <div className="space-y-4">
      <FieldGrid>
        <FieldItem label="Vehicle Model" value={data.vehicleModel} />
        <FieldItem label="Vehicle Duration" value={data.vehicleDuration} />
        <FieldItem label="Extra Duration" value={data.extraDuration} />
      </FieldGrid>

      <AiAssistant node={data} />
    </div>
  );
}
