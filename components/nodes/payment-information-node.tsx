import { PaymentInformationNode } from "@/types"
import { FieldItem } from "@/components/shared"

type PaymentInformationNodeProps = {
  data: PaymentInformationNode
}

export function PaymentInformationNodeComponent({ data }: PaymentInformationNodeProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <FieldItem label="Paid To" value={data.paidTo} />
      <FieldItem label="Payment Amount" value={data.paymentAmount} />
      <FieldItem label="IBAN" value={data.iban} />
      <FieldItem label="Note" value={data.note} />
    </div>
  )
}
