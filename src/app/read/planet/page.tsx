import type { Metadata } from "next"
import { Suspense } from "react"
import { PlanetReader } from "@/components/planet-reader"

export const metadata: Metadata = {
  title: "惑星から読む",
}

export default function PlanetReadPage() {
  return (
    <Suspense fallback={<p className="px-5 py-16 text-muted-foreground">読み込み中です</p>}>
      <PlanetReader />
    </Suspense>
  )
}
