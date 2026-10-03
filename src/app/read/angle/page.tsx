import type { Metadata } from "next"
import { Suspense } from "react"
import { AngleReader } from "@/components/angle-reader"

export const metadata: Metadata = {
  title: "ASC・MC・ICから読む",
}

export default function AngleReadPage() {
  return (
    <Suspense fallback={<p className="px-5 py-16 text-muted-foreground">読み込み中です</p>}>
      <AngleReader />
    </Suspense>
  )
}
