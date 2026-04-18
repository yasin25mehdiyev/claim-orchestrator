import { cn } from "@/lib/cn";
import { getStepStatus } from "@/lib/get-step-status";
import { ClaimNode } from "@/types";
import { ClaimStepperDot } from "./claim-stepper-dot";
import { ClaimStepperLine } from "./claim-stepper-line";

type ClaimStepperItemProps = {
  node: ClaimNode;
  index: number;
  isLast: boolean;
};

export function ClaimStepperItem({
  node,
  index,
  isLast,
}: ClaimStepperItemProps) {
  const { isCompleted } = getStepStatus(node.status);

  return (
    <div className={cn("flex items-center", { "flex-1": !isLast })}>
      <ClaimStepperDot node={node} index={index} />
      {!isLast && <ClaimStepperLine isCompleted={isCompleted} />}
    </div>
  );
}
