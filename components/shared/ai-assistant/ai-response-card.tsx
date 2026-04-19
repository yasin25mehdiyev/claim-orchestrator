import { Sparkles } from "lucide-react"
import { Typography } from "@/components/ui/typography"
import { AiTypingText } from "./ai-typing-text"

type AiResponseCardProps = {
  text: string
}

export function AiResponseCard({ text }: AiResponseCardProps) {
  return (
    <div className="bg-status-active-bg border border-status-active-border rounded-lg p-3 space-y-2">
      <div className="flex items-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-status-active-text" />
        <Typography variant="label" weight="medium" className="text-status-active-text">
          AI Explanation
        </Typography>
      </div>
      <AiTypingText text={text} />
    </div>
  )
}
