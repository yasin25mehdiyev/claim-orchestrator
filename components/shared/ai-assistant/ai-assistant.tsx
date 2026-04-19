import { Sparkles } from "lucide-react";
import { cn } from "@/lib/cn";

import { useClaimStore } from "@/store";
import { ClaimNode } from "@/types";

import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

import { aiExplanations } from "./ai-explanations";
import { AiResponseCard } from "./ai-response-card";

type AiAssistantProps = {
  node: ClaimNode;
  className?: string;
};

export function AiAssistant({ node, className }: AiAssistantProps) {
  const {
    aiLoadingNodeTitle,
    aiResponseMap,
    aiErrorMap,
    setAiLoading,
    setAiResponse,
    setAiError,
  } = useClaimStore();

  const isLoading = aiLoadingNodeTitle === node.title;
  const response = aiResponseMap[node.title];
  const error = aiErrorMap[node.title];

  async function handleExplain() {
    try {
      setAiLoading(node.title);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setAiResponse(
        node.title,
        aiExplanations[node.title] ?? "No explanation available.",
      );
    } catch (err) {
      setAiError(node.title, "Something went wrong. Please try again.");
      console.error("AI explanation failed:", err);
    }
  }

  return (
    <div className={cn("mt-4 space-y-3", className)}>
      {!response && !error && (
        <Button
          variant="outline"
          size="sm"
          onClick={handleExplain}
          disabled={isLoading}
          className="gap-2"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <Typography variant="span" weight="medium">
            {isLoading ? "Analyzing..." : "Explain with AI"}
          </Typography>
        </Button>
      )}

      {error && (
        <div className="flex items-center gap-2">
          <Typography variant="caption" className="text-destructive">
            {error}
          </Typography>
          <Button variant="ghost" size="xs" onClick={handleExplain}>
            Try again
          </Button>
        </div>
      )}

      {response && <AiResponseCard text={response} />}
    </div>
  );
}
