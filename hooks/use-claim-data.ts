import { useQuery } from "@tanstack/react-query"
import { queryKeys, queryConfig, claimService } from "@/services"

export const useClaimData = () => {
  return useQuery({
    queryKey: queryKeys.claim.all,
    queryFn: claimService.getClaim,
    ...queryConfig,
  })
}
