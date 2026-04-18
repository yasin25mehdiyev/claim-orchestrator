import { z } from "zod"
import {
  TowingServiceSchema,
  ClaimNotificationSchema,
  AppraisalSchema,
  SubstituteRentalVehicleSchema,
  FileReviewSchema,
  DeductionReasonSchema,
  PaymentInformationSchema,
  ClosedSchema,
  ClaimNodeSchema,
} from "@/lib/schemas"

export type TowingServiceNode = z.infer<typeof TowingServiceSchema>
export type ClaimNotificationNode = z.infer<typeof ClaimNotificationSchema>
export type AppraisalNode = z.infer<typeof AppraisalSchema>
export type SubstituteRentalVehicleNode = z.infer<typeof SubstituteRentalVehicleSchema>
export type FileReviewNode = z.infer<typeof FileReviewSchema>
export type DeductionReasonNode = z.infer<typeof DeductionReasonSchema>
export type PaymentInformationNode = z.infer<typeof PaymentInformationSchema>
export type ClosedNode = z.infer<typeof ClosedSchema>

export type ClaimNode = z.infer<typeof ClaimNodeSchema>
export type NodeTitle = ClaimNode["title"]
