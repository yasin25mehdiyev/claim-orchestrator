import { StateCreator } from "zustand"
import { AiSlice } from "@/types"

export const createAiSlice: StateCreator<AiSlice> = (set) => ({
  aiLoadingNodeTitle: null,
  aiResponseMap: {},
  setAiLoading: (nodeTitle) => set({ aiLoadingNodeTitle: nodeTitle }),
  setAiResponse: (nodeTitle, response) =>
    set((state) => ({
      aiResponseMap: { ...state.aiResponseMap, [nodeTitle]: response },
      aiLoadingNodeTitle: null,
    })),
})
