import { AlertCircle, RefreshCw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

type ErrorStateProps = {
  onRetry?: () => void;
};

export function ErrorState({ onRetry }: ErrorStateProps) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-md w-full mx-auto p-6">
        <div className="border border-destructive/30 bg-destructive/5 rounded-lg p-6 space-y-4">
        
          <div className="flex justify-center items-center gap-3">
            <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0" />
            <Typography
              variant="h3"
              weight="medium"
              className="text-destructive"
            >
              Something went wrong
            </Typography>
          </div>

          <Typography variant="p" className="text-muted-foreground">
            An error occurred while loading your claim information. Please try
            again.
          </Typography>

          {onRetry && (
            <div className="text-center">
              <Button
                variant="outline"
                size="sm"
                onClick={onRetry}
                className="gap-2 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <Typography variant="span" weight="medium">
                  Try again
                </Typography>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
