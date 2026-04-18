export default function Home() {
  return (
    <div className="min-h-screen bg-background p-8 space-y-8">
      {/* Typography */}
      <div className="space-y-2">
        <h1 className="text-3xl font-medium text-foreground">
          Claim Orchestrator
        </h1>
        <p className="text-sm text-muted-foreground">Token sistemi yoxlanışı</p>
      </div>

      {/* Status badges */}
      <div className="flex flex-wrap gap-3">
        <span className="px-3 py-1 rounded-full text-sm border bg-status-completed-bg text-status-completed-text border-status-completed-border">
          Completed
        </span>
        <span className="px-3 py-1 rounded-full text-sm border bg-status-active-bg text-status-active-text border-status-active-border">
          In Progress
        </span>
        <span className="px-3 py-1 rounded-full text-sm border bg-status-action-bg text-status-action-text border-status-action-border">
          Action Needed
        </span>
        <span className="px-3 py-1 rounded-full text-sm border bg-status-pending-bg text-status-pending-text border-status-pending-border">
          Pending
        </span>
      </div>

      {/* Card */}
      <div className="border border-border bg-card rounded-lg p-5 max-w-sm">
        <p className="text-base font-medium text-card-foreground">Test Card</p>
        <p className="text-sm text-muted-foreground mt-1">
          bg-card, border-border, text-muted-foreground
        </p>
      </div>
    </div>
  );
}
