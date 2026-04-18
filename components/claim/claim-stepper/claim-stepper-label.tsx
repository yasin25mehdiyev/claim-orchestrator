import { cn } from "@/lib/cn";
import { getStepStatus } from "@/lib/get-step-status";
import { ClaimNode } from "@/types";

type ClaimStepperLabelProps = {
  node: ClaimNode;
};

export function ClaimStepperLabel({ node }: ClaimStepperLabelProps) {
  const { isCompleted, isActive, isAction } = getStepStatus(node.status);

  return (
    <p
      className={cn("mt-2 leading-tight text-[10px] max-w-[56px]", {
        "text-status-completed-text": isCompleted,
        "text-status-active-text font-medium": isActive,
        "text-status-action-text font-medium": isAction,
        "text-muted-foreground": !isCompleted && !isActive && !isAction,
      })}
    >
      {node.title}
    </p>
  );
}
