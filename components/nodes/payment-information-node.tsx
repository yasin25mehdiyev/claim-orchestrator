import { PaymentInformationNode } from "@/types"

import { FieldGrid, FieldItem, AiAssistant } from "@/components/shared"
import { Typography } from "@/components/ui/typography"

type PaymentInformationNodeProps = {
  data: PaymentInformationNode
}

export function PaymentInformationNodeComponent({ data }: PaymentInformationNodeProps) {
  return (
    <div className="space-y-4">
      <FieldGrid>
        <FieldItem label="Paid To" value={data.paidTo} />
        <FieldItem label="Payment Amount" value={data.paymentAmount} />
        <FieldItem label="Note" value={data.note} />
      </FieldGrid>

      <Typography variant="label">IBAN</Typography>
      <Typography variant="mono" weight="medium">{data.iban}</Typography>
      
      <AiAssistant node={data} />
    </div>
  )
}
