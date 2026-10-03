import Link from "next/link"

export function ExampleLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <p className="mt-4 text-sm leading-relaxed">
      <Link
        href={href}
        className="text-primary underline decoration-primary/30 underline-offset-4 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
      >
        {children}
      </Link>
    </p>
  )
}
