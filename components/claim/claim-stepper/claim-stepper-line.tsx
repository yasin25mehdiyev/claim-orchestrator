import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type ClaimStepperLineProps = {
  isCompleted: boolean;
};

export function ClaimStepperLine({ isCompleted }: ClaimStepperLineProps) {
  return (
    <div className="w-full h-0.5">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={cn("h-full w-full origin-left", {
          "bg-status-completed-border": isCompleted,
          "bg-border": !isCompleted,
        })}
      />
    </div>
  )
}
