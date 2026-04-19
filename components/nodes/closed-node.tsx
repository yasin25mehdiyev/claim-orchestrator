import { ClosedNode } from "@/types";

import { FieldGrid, FieldItem, AiAssistant } from "@/components/shared";

type ClosedNodeProps = {
  data: ClosedNode;
};

export function ClosedNodeComponent({ data }: ClosedNodeProps) {
  return (
    <div className="space-y-4">
      <FieldGrid>
        <FieldItem label="Completion Date" value={data.completionDate} />
      </FieldGrid>

      <AiAssistant node={data} />
    </div>
  );
}
