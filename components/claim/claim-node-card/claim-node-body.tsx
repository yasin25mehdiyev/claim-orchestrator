import { motion } from "framer-motion";
import { nodeRegistry } from "@/components/nodes";
import { ClaimNode } from "@/types";
import { AnimatePresence } from "framer-motion";

type ClaimNodeBodyProps = {
  node: ClaimNode;
  isExpanded: boolean;
};

export function ClaimNodeBody({ node, isExpanded }: ClaimNodeBodyProps) {
  const NodeComponent = nodeRegistry[node.title] as React.FC<{
    data: ClaimNode;
  }>;

  return (
    <AnimatePresence initial={false}>
      {isExpanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="px-4 pb-4 pt-3 border-t border-border bg-muted/30">
            <NodeComponent data={node} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
