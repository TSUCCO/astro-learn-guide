import { Button } from "@/components/ui/button"

export function ReadActionBar({
  ready,
  label,
  hint,
  onRead,
}: {
  ready: boolean
  label: string
  hint: string
  onRead: () => void
}) {
  return (
    <div className="sticky bottom-0 z-20 -mx-5 mt-8 border-t border-border bg-background/95 px-5 pt-3 pb-[max(0.85rem,env(safe-area-inset-bottom))] backdrop-blur-md">
      <p className="mb-2 text-center text-sm leading-relaxed text-muted-foreground">
        {ready ? "選択がそろいました" : hint}
      </p>
      <Button
        type="button"
        className="h-12 w-full rounded-2xl text-base"
        disabled={!ready}
        onClick={onRead}
      >
        {label}
      </Button>
    </div>
  )
}
