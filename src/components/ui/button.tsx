import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "asinline-flex asitems-center asjustify-center aswhitespace-nowrap asrounded-md astext-sm asfont-medium asring-offset-background astransition-colors focus-visible:asoutline-none focus-visible:asring-2 focus-visible:asring-ring focus-visible:asring-offset-2 disabled:aspointer-events-none disabled:asopacity-50",
  {
    variants: {
      variant: {
        default: "asbg-primary astext-primary-foreground hover:asbg-primary/90",
        destructive:
          "asbg-destructive astext-destructive-foreground hover:asbg-destructive/90",
        outline:
          "asborder asborder-input asbg-background hover:asbg-accent hover:astext-accent-foreground",
        secondary:
          "asbg-secondary astext-secondary-foreground hover:asbg-secondary/80",
        ghost: "hover:asbg-accent hover:astext-accent-foreground",
        link: "astext-primary asunderline-offset-4 hover:asunderline",
      },
      size: {
        default: "ash-10 aspx-4 aspy-2",
        sm: "ash-9 asrounded-md aspx-3",
        lg: "ash-11 asrounded-md aspx-8",
        icon: "ash-10 asw-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
