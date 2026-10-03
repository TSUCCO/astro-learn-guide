import type { Metadata } from "next"
import { DictionaryView } from "@/components/dictionary-view"
import { PageFrame } from "@/components/page-frame"

export const metadata: Metadata = {
  title: "星の意味を調べる",
}

export default function DictionaryPage() {
  return (
    <PageFrame backHref="/">
      <h1 className="font-heading text-[1.8rem] leading-snug">星の意味を調べる</h1>
      <p className="mt-3 leading-relaxed text-muted-foreground">
        気になる言葉を、短い意味と問いから確認できます。文章を足した項目が、ここに増えていきます。
      </p>
      <div className="mt-8">
        <DictionaryView />
      </div>
    </PageFrame>
  )
}
