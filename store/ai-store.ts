import { StateCreator } from "zustand";
import { AiSlice } from "@/types";

export const createAiSlice: StateCreator<AiSlice> = (set) => ({
  aiLoadingNodeTitle: null,
  aiResponseMap: {},
  aiErrorMap: {},
  setAiLoading: (nodeTitle) => set({ aiLoadingNodeTitle: nodeTitle }),
  setAiResponse: (nodeTitle, response) =>
    set((state) => ({
      aiResponseMap: { ...state.aiResponseMap, [nodeTitle]: response },
      aiLoadingNodeTitle: null,
    })),
  setAiError: (nodeTitle, error) =>
    set((state) => ({
      aiErrorMap: { ...state.aiErrorMap, [nodeTitle]: error },
      aiLoadingNodeTitle: null,
    })),
});
