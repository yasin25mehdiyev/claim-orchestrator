import { cn } from "@/lib/cn";
import { getStepStatus } from "@/lib/get-step-status";
import { ClaimNode } from "@/types";
import { Typography } from "@/components/ui/typography";

type ClaimStepperLabelProps = {
  node: ClaimNode;
};

export function ClaimStepperLabel({ node }: ClaimStepperLabelProps) {
  const { isCompleted, isActive, isAction } = getStepStatus(node.status);

  return (
    <Typography
      variant="caption"
      className={cn("mt-2 leading-tight text-[10px] max-w-[56px] text-center", {
        "text-status-completed-text": isCompleted,
        "text-status-active-text": isActive,
        "text-status-action-text": isAction,
        "text-muted-foreground": !isCompleted && !isActive && !isAction,
      })}
      weight={isActive || isAction ? "medium" : "regular"}
    >
      {node.title}
    </Typography>
  );
}
