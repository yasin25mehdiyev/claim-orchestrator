import { StateCreator } from "zustand";
import { ClaimSlice } from "@/types";

import { updateSetItem } from "@/lib/set-utils";

export const createClaimSlice: StateCreator<ClaimSlice> = (set) => ({
  expandedNodes: new Set<string>(),
  toggleNode: (nodeTitle) =>
    set((state) => ({
      expandedNodes: updateSetItem(state.expandedNodes, nodeTitle),
    })),
  setNodeExpanded: (nodeTitle, expanded) =>
    set((state) => ({
      expandedNodes: updateSetItem(state.expandedNodes, nodeTitle, expanded),
    })),
});
