import Link from "next/link"

export function ChoiceLink({
  href,
  title,
  description,
  index,
}: {
  href: string
  title: string
  description: string
  index?: string
}) {
  return (
    <Link
      href={href}
      className="block rounded-2xl border border-border bg-card px-5 py-5 shadow-[0_1px_2px_rgba(70,55,30,0.04)] transition-colors hover:border-primary/30 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
    >
      {index ? (
        <span className="font-heading text-xs tracking-[0.16em] text-gold">{index}</span>
      ) : null}
      <span className="mt-1 block font-heading text-[1.25rem] leading-snug text-foreground">
        {title}
      </span>
      <span className="mt-2 block text-[1.02rem] leading-relaxed text-muted-foreground">
        {description}
      </span>
    </Link>
  )
}
