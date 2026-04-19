"use client";

import React from "react";
import { AnimatePresence } from "framer-motion";

import { useClaimData } from "@/hooks";
import { useClaimStore } from "@/store";

import { ClaimHeader, ClaimStepper, ClaimNodeCard } from "@/components/claim";
import {
  AddNodeButton,
  DynamicNodeCard,
  HeaderSkeleton,
  NodeCardSkeleton,
  StepperSkeleton,
  ErrorState,
  ThemeToggle,
} from "@/components/shared";
import { getDynamicNodesAfter } from "@/lib/get-dynamic-nodes-after";

export default function Home() {
  const { data, isLoading, isError } = useClaimData();
  const { dynamicNodes } = useClaimStore();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-3xl mx-auto p-6 space-y-4">
          <HeaderSkeleton />
          <StepperSkeleton />
          <div className="space-y-2">
            {Array.from({ length: 8 }).map((_, i) => (
              <NodeCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (isError) return <ErrorState onRetry={() => window.location.reload()} />;

  if (!data) return null;

  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />

      <div className="max-w-3xl mx-auto p-6 space-y-4">
        <ClaimHeader claim={data!} />
        <ClaimStepper nodes={data!.processDetails} />

        <div className="space-y-2">
          {data.processDetails.map((node, index) => (
            <React.Fragment key={node.title}>
              <ClaimNodeCard node={node} index={index} />

              <AnimatePresence>
                {getDynamicNodesAfter(dynamicNodes, index).map(
                  (dynamicNode) => (
                    <DynamicNodeCard key={dynamicNode.id} node={dynamicNode} />
                  ),
                )}
              </AnimatePresence>

              <AddNodeButton insertAfterIndex={index} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
