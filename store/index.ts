import { create } from "zustand"
import { DynamicNodesSlice, AiSlice, ClaimSlice } from "@/types"
import { createDynamicNodesSlice } from "./dynamic-nodes-store"
import { createAiSlice } from "./ai-store"
import { createClaimSlice } from "./claim-store"

type StoreState = DynamicNodesSlice & AiSlice & ClaimSlice

export const useClaimStore = create<StoreState>((...args) => ({
  ...createDynamicNodesSlice(...args),
  ...createAiSlice(...args),
  ...createClaimSlice(...args),
}))
