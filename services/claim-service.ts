import { ClaimSchema } from "@/lib/schemas"
import { mockClaim } from "@/data/mock"
import { Claim } from "@/types"

export const claimService = {
  getClaim: async (): Promise<Claim> => {
    await new Promise((resolve) => setTimeout(resolve, 800))
    return ClaimSchema.parse(mockClaim)
  },
}
