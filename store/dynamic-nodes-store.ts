import { StateCreator } from "zustand"
import { DynamicNodesSlice } from "@/types"

export const createDynamicNodesSlice: StateCreator<DynamicNodesSlice> = (set) => ({
  dynamicNodes: [],
  addDynamicNode: (node) =>
    set((state) => ({
      dynamicNodes: [
        ...state.dynamicNodes,
        { ...node, id: crypto.randomUUID() },
      ],
    })),
  removeDynamicNode: (id) =>
    set((state) => ({
      dynamicNodes: state.dynamicNodes.filter((n) => n.id !== id),
    })),
})
