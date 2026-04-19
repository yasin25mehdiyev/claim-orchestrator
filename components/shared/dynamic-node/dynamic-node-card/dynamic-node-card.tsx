import { motion } from "framer-motion"
import { X } from "lucide-react"

import { useClaimStore } from "@/store"
import { DynamicNode } from "@/types"

import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"

import { DynamicNodeIcon } from "./dynamic-node-icon"

type DynamicNodeCardProps = {
  node: DynamicNode
}

export function DynamicNodeCard({ node }: DynamicNodeCardProps) {
  const { removeDynamicNode } = useClaimStore();

  return (
    <motion.div
      initial={{ opacity: 0, y: -8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className="border border-dashed border-border bg-muted/30 rounded-lg p-4"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="mt-0.5">
            <DynamicNodeIcon type={node.type} />
          </div>

          <div className="space-y-1">
            <Typography variant="label" weight="medium">
              {node.title}
            </Typography>
            <Typography variant="caption">
              {node.content}
            </Typography>
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon-sm"
          onClick={() => removeDynamicNode(node.id)}
          className="text-muted-foreground hover:text-destructive flex-shrink-0 cursor-pointer"
        >
          <X className="w-3.5 h-3.5" />
        </Button>
      </div>
    </motion.div>
  )
}
