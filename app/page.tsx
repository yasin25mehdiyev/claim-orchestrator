import { mockClaim } from "@/data/mock";
import { cn } from "@/lib/cn";

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-8 space-y-6">
      {/* Claim Header */}
      <div className="border border-border bg-card rounded-lg p-5">
        <p className="text-sm text-muted-foreground">File No</p>
        <h1 className="text-3xl font-medium text-foreground">
          #{mockClaim.fileNo}
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          {mockClaim.currentStatus}
        </p>
        <p className="text-sm text-muted-foreground">
          {mockClaim.estimatedRemainingTime} remaining
        </p>
      </div>

      {/* Nodes */}
      <div className="space-y-3">
        {mockClaim.processDetails.map((node) => (
          <div
            key={node.title}
            className="border border-border bg-card rounded-lg p-4"
          >
            <div className="flex items-center justify-between cursor-pointer">
              <h2 className="text-base font-medium text-foreground">
                {node.title}
              </h2>

              <span
                className={cn("px-3 py-1 rounded-full text-xs border", {
                  "bg-status-completed-bg text-status-completed-text border-status-completed-border":
                    node.status === "Completed" ||
                    node.status === "Report Completed",
                  "bg-status-active-bg text-status-active-text border-status-active-border":
                    node.status === "In Progress",
                  "bg-status-pending-bg text-status-pending-text border-status-pending-border":
                    node.status === "Pending",
                  "bg-status-action-bg text-status-action-text border-status-action-border":
                    node.status === "Action Needed",
                })}
              >
                {node.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
