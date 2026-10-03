import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { cn } from "cn"

export function PageFrame({
  children,
  backHref,
  backLabel = "戻る",
  className,
}: {
  children: React.ReactNode
  backHref?: string
  backLabel?: string
  className?: string
}) {
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-border/80 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-lg items-center gap-2 px-3">
          {backHref ? (
            <Link
              href={backHref}
              className="inline-flex min-h-11 items-center gap-0.5 rounded-xl px-2 text-sm text-muted-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              <ChevronLeft className="size-5" aria-hidden="true" />
              {backLabel}
            </Link>
          ) : (
            <span className="w-11" />
          )}
          <Link
            href="/"
            className="font-heading text-base tracking-wide text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            星読みナビ
          </Link>
        </div>
      </header>
      <main className={cn("mx-auto w-full max-w-lg flex-1 px-5 pt-8 pb-16", className)}>
        {children}
      </main>
    </>
  )
}
