"use client";

import { AnimatePresence } from "framer-motion";

import { useClaimData } from "@/hooks";
import { useClaimStore } from "@/store";

import { ClaimHeader } from "@/components/claim/claim-header";
import { ClaimStepper } from "@/components/claim/claim-stepper";
import { ClaimNodeCard } from "@/components/claim/claim-node-card";
import { AddNodeButton, DynamicNodeCard } from "@/components/shared";
import React from "react";

export default function Home() {
  const { data, isLoading, isError } = useClaimData();
  const { dynamicNodes } = useClaimStore();

  const getDynamicNodesAfter = (index: number) =>
    dynamicNodes.filter((d) => d.insertAfterIndex === index);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background p-8">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-background p-8">
        <p className="text-destructive">Something went wrong.</p>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto p-6 space-y-4">
        <ClaimHeader claim={data} />
        <ClaimStepper nodes={data.processDetails} />

        <div className="space-y-2">
          {data.processDetails.map((node, index) => (
            <React.Fragment key={node.title}>
              <ClaimNodeCard node={node} index={index} />

              <AnimatePresence>
                {getDynamicNodesAfter(index).map((dynamicNode) => (
                  <DynamicNodeCard key={dynamicNode.id} node={dynamicNode} />
                ))}
              </AnimatePresence>
              
              <AddNodeButton insertAfterIndex={index} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
