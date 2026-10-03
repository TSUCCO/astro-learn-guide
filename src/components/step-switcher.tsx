import { cn } from "cn"

export function StepSwitcher<T extends number>({
  steps,
  current,
  onChange,
}: {
  steps: { id: T; label: string }[]
  current: T
  onChange: (id: T) => void
}) {
  return (
    <nav
      aria-label="選択の手順"
      className="grid gap-2"
      style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}
    >
      {steps.map((step) => {
        const active = step.id === current
        return (
          <button
            key={step.id}
            type="button"
            aria-current={active ? "step" : undefined}
            onClick={() => onChange(step.id)}
            className={cn(
              "min-h-14 rounded-2xl border px-2 py-2 text-center focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
              active
                ? "border-primary/35 bg-card"
                : "border-transparent bg-transparent text-muted-foreground",
            )}
          >
            <span className="block text-[0.7rem] tracking-[0.14em]">STEP {step.id}</span>
            <span className={cn("mt-0.5 block text-sm", active && "font-medium text-foreground")}>
              {step.label}
            </span>
          </button>
        )
      })}
    </nav>
  )
}
