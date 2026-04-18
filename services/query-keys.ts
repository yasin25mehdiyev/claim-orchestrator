export const queryKeys = {
  claim: {
    all: ["claim"] as const,
    detail: (fileNo: string) => ["claim", fileNo] as const,
  },
}
