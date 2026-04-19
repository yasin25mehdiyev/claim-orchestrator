import { FileText, Paperclip } from "lucide-react";

type DynamicNodeIconProps = {
  type: "information-note" | "additional-attachment";
};

export function DynamicNodeIcon({ type }: DynamicNodeIconProps) {
  return type === "information-note" ? (
    <FileText className="w-4 h-4 text-muted-foreground" />
  ) : (
    <Paperclip className="w-4 h-4 text-muted-foreground" />
  );
}
