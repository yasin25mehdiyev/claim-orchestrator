import { TowingServiceNode } from "@/types";

import { FieldGrid, FieldItem, AiAssistant } from "@/components/shared";

type TowingServiceNodeProps = {
  data: TowingServiceNode;
};

export function TowingServiceNodeComponent({ data }: TowingServiceNodeProps) {
  return (
    <div className="space-y-4">
      <FieldGrid>
        <FieldItem label="Pickup Location" value={data.pickupLocation} />
        <FieldItem label="Towing Date" value={data.towingDate} />
      </FieldGrid>

      <AiAssistant node={data} />
    </div>
  );
}
