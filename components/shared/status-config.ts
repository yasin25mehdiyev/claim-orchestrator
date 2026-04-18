import { buttonVariants } from "@/components/ui/button";
import { VariantProps } from "class-variance-authority";

export type ButtonVariant = NonNullable<
  VariantProps<typeof buttonVariants>["variant"]
>;

export const statusVariantMap: Record<string, ButtonVariant> = {
  Completed: "completed",
  "Report Completed": "completed",
  "In Progress": "active",
  "Action Needed": "action",
  Pending: "pending",
};
