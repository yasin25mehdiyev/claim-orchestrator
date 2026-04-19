import { cn } from "@/lib/cn";
import { Typography } from "@/components/ui/typography";

type FieldItemProps = {
  label: string;
  value: string;
  className?: string;
};

export function FieldItem({ label, value, className }: FieldItemProps) {
  return (
    <div className={cn("space-y-1", className)}>
      <Typography variant="label">{label}</Typography>
      <Typography variant="p" weight="medium">
        {value}
      </Typography>
    </div>
  );
}
