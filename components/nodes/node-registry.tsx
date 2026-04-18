import { NodeTitle } from "@/types"
import { TowingServiceNodeComponent } from "./towing-service-node"
import { ClaimNotificationNodeComponent } from "./claim-notification-node"
import { AppraisalNodeComponent } from "./appraisal-node"
import { SubstituteRentalVehicleNodeComponent } from "./substitute-rental-vehicle-node"
import { FileReviewNodeComponent } from "./file-review-node"
import { DeductionReasonNodeComponent } from "./deduction-reason-node"
import { PaymentInformationNodeComponent } from "./payment-information-node"
import { ClosedNodeComponent } from "./closed-node"
import { ClaimNode } from "@/types"

type NodeRegistry = {
  [K in NodeTitle]: React.FC<{ data: Extract<ClaimNode, { title: K }> }>
}

export const nodeRegistry: NodeRegistry = {
  "Towing Service": TowingServiceNodeComponent,
  "Claim Notification": ClaimNotificationNodeComponent,
  "Appraisal": AppraisalNodeComponent,
  "Substitute Rental Vehicle": SubstituteRentalVehicleNodeComponent,
  "File Review": FileReviewNodeComponent,
  "Deduction Reason": DeductionReasonNodeComponent,
  "Payment Information": PaymentInformationNodeComponent,
  "Closed": ClosedNodeComponent,
}
