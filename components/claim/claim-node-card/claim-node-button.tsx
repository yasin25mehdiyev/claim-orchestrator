import { ButtonVariant, statusVariantMap } from "@/components/shared/status-config";
import { Button } from "@/components/ui/button";

type ClaimNodeButtonProps = {
  index: number;
  status: string;
};

export function ClaimNodeButton({ index, status }: ClaimNodeButtonProps) {
  const variant: ButtonVariant = statusVariantMap[status] ?? "pending";

  return (
    <Button
      variant={variant}
      size="icon-xs"
      className="rounded-full text-xs font-medium pointer-events-none"
    >
      {index + 1}
    </Button>
  );
}
