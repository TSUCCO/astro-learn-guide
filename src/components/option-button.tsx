import { cn } from "cn"

export function OptionButton({
  selected,
  onSelect,
  children,
}: {
  selected: boolean
  onSelect: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onSelect}
      className={cn(
        "flex min-h-14 w-full items-center gap-3 rounded-2xl border px-3.5 text-left text-base transition-colors",
        "focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
        selected
          ? "border-primary/45 bg-lavender text-foreground"
          : "border-border bg-card hover:border-primary/30",
      )}
    >
      {children}
    </button>
  )
}
