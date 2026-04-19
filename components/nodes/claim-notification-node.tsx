import { ClaimNotificationNode } from "@/types";

import { FieldGrid, FieldItem, AiAssistant } from "@/components/shared";

type ClaimNotificationNodeProps = {
  data: ClaimNotificationNode;
};

export function ClaimNotificationNodeComponent({
  data,
}: ClaimNotificationNodeProps) {
  return (
    <div className="space-y-4">
      <FieldGrid>
        <FieldItem label="Date & Time" value={data.dateTime} />
        <FieldItem label="Report Type" value={data.reportType} />
        <FieldItem label="Reason for Damage" value={data.reasonForDamage} />
        <FieldItem label="Reporting Party" value={data.reportingParty} />
        <FieldItem label="Contact" value={data.contact} />
      </FieldGrid>

      <AiAssistant node={data} />
    </div>
  );
}
