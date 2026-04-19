import { PaymentInformationNode } from "@/types"

import { FieldGrid, FieldItem, AiAssistant } from "@/components/shared"

type PaymentInformationNodeProps = {
  data: PaymentInformationNode
}

export function PaymentInformationNodeComponent({ data }: PaymentInformationNodeProps) {
  return (
    <div className="space-y-4">
      <FieldGrid>
        <FieldItem label="Paid To" value={data.paidTo} />
        <FieldItem label="Payment Amount" value={data.paymentAmount} />
        <FieldItem label="IBAN" value={data.iban} />
        <FieldItem label="Note" value={data.note} />
      </FieldGrid>

      <AiAssistant node={data} />
    </div>
  )
}
