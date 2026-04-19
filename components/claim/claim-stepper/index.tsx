import React from "react";
import { ClaimNode } from "@/types";
import { getStepStatus } from "@/lib/get-step-status";
import { ClaimStepperDot } from "./claim-stepper-dot";
import { ClaimStepperLine } from "./claim-stepper-line";
import { ClaimStepperLabel } from "./claim-stepper-label";

type ClaimStepperProps = {
  nodes: ClaimNode[];
};

export function ClaimStepper({ nodes }: ClaimStepperProps) {
  const count = nodes.length;

  return (
    <div className="border border-border bg-card rounded-lg p-5">
      <div className="overflow-x-auto">
        <div className="min-w-[500px]">
          <div
            className="grid items-center"
            style={{
              gridTemplateColumns: `repeat(${count - 1}, 32px 1fr) 32px`,
            }}
          >
            {nodes.map((node, index) => {
              const isLast = index === nodes.length - 1;
              const { isCompleted } = getStepStatus(node.status);
              return (
                <React.Fragment key={node.title}>
                  <div className="flex justify-center">
                    <ClaimStepperDot node={node} index={index} />
                  </div>
                  {!isLast && (
                    <ClaimStepperLine
                      key={`line-${index}`}
                      isCompleted={isCompleted}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </div>

          <div
            className="grid mt-2"
            style={{
              gridTemplateColumns: `repeat(${count - 1}, 32px 1fr) 32px`,
            }}
          >
            {nodes.map((node, index) => {
              const isLast = index === nodes.length - 1;
              return (
                <React.Fragment key={node.title}>
                  <div className="flex justify-center">
                    <ClaimStepperLabel node={node} />
                  </div>
                  {!isLast && <div />}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
