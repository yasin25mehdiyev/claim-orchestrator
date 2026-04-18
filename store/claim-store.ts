import { StateCreator } from "zustand"
import { ClaimSlice } from "@/types"

export const createClaimSlice: StateCreator<ClaimSlice> = (set) => ({
  expandedNodes: new Set<string>(),
  toggleNode: (nodeTitle) =>
    set((state) => {
      const next = new Set(state.expandedNodes)
      next.has(nodeTitle) ? next.delete(nodeTitle) : next.add(nodeTitle)
      return { expandedNodes: next }
    }),
  setNodeExpanded: (nodeTitle, expanded) =>
    set((state) => {
      const next = new Set(state.expandedNodes)
      expanded ? next.add(nodeTitle) : next.delete(nodeTitle)
      return { expandedNodes: next }
    }),
})
