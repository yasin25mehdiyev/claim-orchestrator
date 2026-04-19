import { DynamicNode } from "@/types";

export function getDynamicNodesAfter(nodes: DynamicNode[], index: number) {
  return nodes.filter((d) => d.insertAfterIndex === index)
}
