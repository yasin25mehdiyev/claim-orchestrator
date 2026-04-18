import { FileReviewNode } from "@/types"
import { FieldItem } from "@/components/shared"

type FileReviewNodeProps = {
  data: FileReviewNode
}

export function FileReviewNodeComponent({ data }: FileReviewNodeProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <FieldItem label="Review Referral Date" value={data.reviewReferralDate} />
      <FieldItem label="Review Completion Date" value={data.reviewCompletionDate} />
    </div>
  )
}
