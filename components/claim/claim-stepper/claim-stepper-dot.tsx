import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { getStepStatus } from "@/lib/get-step-status";
import { ClaimNode } from "@/types";
import { Check } from "lucide-react";
import { Typography } from "@/components/ui/typography";

type ClaimStepperDotProps = {
  node: ClaimNode;
  index: number;
};

export function ClaimStepperDot({ node, index }: ClaimStepperDotProps) {
  const { isCompleted, isActive, isAction } = getStepStatus(node.status);

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className={cn(
        "w-8 h-8 rounded-full flex items-center justify-center border-2 flex-shrink-0 z-10",
        {
          "bg-status-completed-bg border-status-completed-border text-status-completed-text":
            isCompleted,
          "bg-status-active-bg border-status-active-border text-status-active-text":
            isActive,
          "bg-status-action-bg border-status-action-border text-status-action-text":
            isAction,
          "bg-muted border-border text-muted-foreground":
            !isCompleted && !isActive && !isAction,
        },
      )}
    >
      {isCompleted ? (
        <Check className="w-4 h-4" />
      ) : (
        <Typography variant="span" weight="medium" className="text-[10px]">
          {index + 1}
        </Typography>
      )}
    </motion.div>
  );
}
