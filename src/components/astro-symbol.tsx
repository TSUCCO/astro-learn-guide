import { cn } from "cn"

export function AstroSymbol({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <span className={cn("symbol text-gold", className)}>{children}</span>
}
