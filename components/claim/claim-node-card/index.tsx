import { useState } from "react";
import { motion } from "framer-motion";
import { ClaimNode } from "@/types";
import { cn } from "@/lib/cn";
import { getCardBorderClass } from "@/lib/get-card-border-class";
import { ClaimNodeHeader } from "./claim-node-header";
import { ClaimNodeBody } from "./claim-node-body";

type ClaimNodeCardProps = {
  node: ClaimNode;
  index: number;
}

export function ClaimNodeCard({ node, index }: ClaimNodeCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className={cn(
        "border rounded-lg bg-card overflow-hidden",
        getCardBorderClass(node),
      )}
    >
      <ClaimNodeHeader
        node={node}
        index={index}
        isExpanded={isExpanded}
        onToggle={() => setIsExpanded((prev) => !prev)}
      />
      <ClaimNodeBody node={node} isExpanded={isExpanded} />
    </motion.div>
  );
}
