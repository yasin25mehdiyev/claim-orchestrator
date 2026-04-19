import { AppraisalNode } from "@/types";

import { FieldGrid, FieldItem, AiAssistant } from "@/components/shared";

type AppraisalNodeProps = {
  data: AppraisalNode;
};

export function AppraisalNodeComponent({ data }: AppraisalNodeProps) {
  return (
    <div className="space-y-4">
      <FieldGrid>
        <FieldItem
          label="Expert Assignment Date"
          value={data.expertAssignmentDate}
        />
        <FieldItem label="Expert Info" value={data.expertInfo} />
        <FieldItem label="Contact" value={data.contact} />
      </FieldGrid>

      <AiAssistant node={data} />
    </div>
  );
}
