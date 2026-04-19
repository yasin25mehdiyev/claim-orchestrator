import { FileReviewNode } from "@/types"

import { FieldGrid, FieldItem, AiAssistant } from "@/components/shared"

type FileReviewNodeProps = {
  data: FileReviewNode
}

export function FileReviewNodeComponent({ data }: FileReviewNodeProps) {
  return (
    <div className="space-y-4">
      <FieldGrid>
        <FieldItem label="Review Referral Date" value={data.reviewReferralDate} />
        <FieldItem label="Review Completion Date" value={data.reviewCompletionDate} />
      </FieldGrid>

      <AiAssistant node={data} />
    </div>
  )
}
