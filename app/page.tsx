"use client"

import { useClaimData } from "@/hooks"
import { ClaimHeader } from "@/components/claim/claim-header"
import { ClaimStepper } from "@/components/claim/claim-stepper"
import { ClaimNodeCard } from "@/components/claim/claim-node-card"

export default function Home() {
  const { data, isLoading, isError } = useClaimData()

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background p-8">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-background p-8">
        <p className="text-destructive">Something went wrong.</p>
      </div>
    )
  }

  if (!data) return null

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto p-6 space-y-4">
        <ClaimHeader claim={data} />
        <ClaimStepper nodes={data.processDetails} />
        <div className="space-y-3">
          {data.processDetails.map((node, index) => (
            <ClaimNodeCard key={node.title} node={node} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
