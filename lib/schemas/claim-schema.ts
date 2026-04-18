import { z } from "zod"
import { ClaimNodeSchema } from "./nodes-schema"

export const ClaimSchema = z.object({
  title: z.string(),
  fileNo: z.string(),
  estimatedRemainingTime: z.string(),
  currentStatus: z.string(),
  processDetails: z.array(ClaimNodeSchema),
})

export const UploadCertificateSchema = z.object({
  file: z.instanceof(File, { message: "File is required" }),
  fileType: z.string().refine(
    (type) => type === "application/pdf" || type.startsWith("image/"),
    { message: "Only PDF or image files are allowed" }
  ),
  fileSize: z.number().max(5 * 1024 * 1024, { message: "Maximum file size is 5MB" }),
})
