import { ClaimNotificationNode } from "@/types"
import { FieldItem } from "@/components/shared"

type ClaimNotificationNodeProps = {
  data: ClaimNotificationNode
}

export function ClaimNotificationNodeComponent({ data }: ClaimNotificationNodeProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <FieldItem label="Date & Time" value={data.dateTime} />
      <FieldItem label="Report Type" value={data.reportType} />
      <FieldItem label="Reason for Damage" value={data.reasonForDamage} />
      <FieldItem label="Reporting Party" value={data.reportingParty} />
      <FieldItem label="Contact" value={data.contact} />
    </div>
  )
}
