import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/cn"

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "text-3xl text-foreground",
      h2: "text-2xl text-foreground",
      h3: "text-xl text-foreground",
      h4: "text-lg text-foreground",
      h5: "text-base text-foreground",
      h6: "text-sm text-foreground",
      p: "text-sm text-foreground",
      span: "text-sm text-foreground",
      caption: "text-xs text-muted-foreground",
      label: "text-xs text-muted-foreground",
      mono: "text-sm font-mono text-foreground",
    },
    weight: {
      regular:   "font-normal",
      medium:    "font-medium",
      semibold:  "font-semibold",
      bold:      "font-bold",
      extrabold: "font-extrabold",
    },
  },
  defaultVariants: {
    variant: "p",
    weight: "regular",
  },
})

type TypographyVariant = NonNullable<VariantProps<typeof typographyVariants>["variant"]>

const variantTagMap: Record<TypographyVariant, string> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
  span: "span",
  caption: "p",
  label: "span",
  mono: "span",
}

type TypographyProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof typographyVariants> & {
    as?: string
  }

export function Typography({
  variant = "p",
  weight = "regular",
  as,
  className,
  children,
  ...props
}: TypographyProps) {
  const Tag = (as ?? variantTagMap[variant!]) as React.ElementType

  return (
    <Tag
      className={cn(typographyVariants({ variant, weight }), className)}
      {...props}
    >
      {children}
    </Tag>
  )
}
