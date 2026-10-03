import type { Metadata } from "next"
import { ChoiceLink } from "@/components/choice-link"
import { PageFrame } from "@/components/page-frame"

export const metadata: Metadata = {
  title: "自分の星を読む",
}

export default function ReadPage() {
  return (
    <PageFrame backHref="/">
      <h1 className="font-heading text-[1.8rem] leading-snug">自分の星を読む</h1>
      <p className="mt-3 leading-relaxed text-muted-foreground">
        読みたい入り口を選んでください。
      </p>
      <div className="mt-8 flex flex-col gap-3">
        <ChoiceLink
          href="/read/planet"
          index="A"
          title="惑星から読む"
          description="惑星 × 星座 × ハウス"
        />
        <ChoiceLink
          href="/read/angle"
          index="B"
          title="ASC・MC・ICから読む"
          description="ASC / MC / IC × 星座"
        />
      </div>
    </PageFrame>
  )
}
