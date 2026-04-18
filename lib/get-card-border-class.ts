import { ClaimNode } from "@/types";

export function getCardBorderClass(node: ClaimNode): string {
  if (node.status === "In Progress") return "border-status-active-border";
  if (node.status === "Action Needed") return "border-status-action-border";
  return "border-border";
}
