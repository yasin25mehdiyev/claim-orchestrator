import { z } from "zod"
import { ClaimSchema, UploadCertificateSchema } from "@/lib/schemas"

export type Claim = z.infer<typeof ClaimSchema>
export type UploadCertificate = z.infer<typeof UploadCertificateSchema>
