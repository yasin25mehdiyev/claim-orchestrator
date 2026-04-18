export function getStepStatus(status: string) {
  return {
    isCompleted: status === "Completed" || status === "Report Completed",
    isActive: status === "In Progress",
    isAction: status === "Action Needed",
    isPending: status === "Pending",
  }
}
