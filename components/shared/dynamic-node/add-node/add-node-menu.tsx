import { FileText, Paperclip, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

type NodeType = "information-note" | "additional-attachment";

type AddNodeMenuProps = {
  onSelect: (type: NodeType) => void;
  onClose: () => void;
};

export function AddNodeMenu({ onSelect, onClose }: AddNodeMenuProps) {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onSelect("information-note")}
        className="gap-2 cursor-pointer"
      >
        <FileText className="w-3.5 h-3.5" />
        <Typography variant="caption" weight="medium">
          Information Note
        </Typography>
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={() => onSelect("additional-attachment")}
        className="gap-2 cursor-pointer"
      >
        <Paperclip className="w-3.5 h-3.5" />
        <Typography variant="caption" weight="medium">
          Attachment
        </Typography>
      </Button>

      <Button
        variant="ghost"
        size="icon-sm"
        onClick={onClose}
        className="text-muted-foreground hover:text-destructive flex-shrink-0 cursor-pointer"
      >
        <X className="w-3.5 h-3.5" />
      </Button>
    </div>
  );
}
