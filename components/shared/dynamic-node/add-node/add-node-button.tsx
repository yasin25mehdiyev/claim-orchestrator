import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useClaimStore } from "@/store"

import { AddNodeTrigger } from "./add-node-trigger"
import { AddNodeMenu } from "./add-node-menu"

type NodeType = "information-note" | "additional-attachment"

type AddNodeButtonProps = {
  insertAfterIndex: number
}

export function AddNodeButton({ insertAfterIndex }: AddNodeButtonProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { addDynamicNode } = useClaimStore();

  function handleAdd(type: NodeType) {
    addDynamicNode({
      type,
      title: type === "information-note" ? "Information Note" : "Additional Attachment",
      content: type === "information-note"
        ? "This is an information note added to the claim process."
        : "An additional attachment has been added to the claim process.",
      insertAfterIndex,
    })
    setIsOpen(false)
  }

  return (
    <div className="flex items-center justify-center py-1">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="trigger"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <AddNodeTrigger onClick={() => setIsOpen(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
          >
            <AddNodeMenu
              onSelect={handleAdd}
              onClose={() => setIsOpen(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
