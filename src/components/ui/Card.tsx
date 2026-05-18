import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border bg-card text-card-foreground shadow-sm bg-white/50 backdrop-blur-sm dark:bg-black/50 border-gray-200 dark:border-gray-800",
        className
      )}
      {...props}
    />
  )
)
Card.displayName = "Card"

export { Card }
