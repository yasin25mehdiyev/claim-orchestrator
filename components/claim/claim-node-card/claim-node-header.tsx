import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

import { ClaimNode } from "@/types"

import { Typography } from "@/components/ui/typography"
import { StatusBadge } from "@/components/shared"

import { ClaimNodeButton } from "./claim-node-button"

type ClaimNodeHeaderProps = {
  node: ClaimNode
  index: number
  isExpanded: boolean
  onToggle: () => void
}

export function ClaimNodeHeader({
  node,
  index,
  isExpanded,
  onToggle,
}: ClaimNodeHeaderProps) {
  return (
    <div
      onClick={onToggle}
      className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors cursor-pointer"
    >
      <div className="flex items-center gap-3">
        <ClaimNodeButton index={index} status={node.status} />
        <Typography variant="h6" weight="medium">
          {node.title}
        </Typography>
      </div>

      <div className="flex items-center gap-3">
        <StatusBadge status={node.status} />
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </motion.div>
      </div>
    </div>
  )
}
