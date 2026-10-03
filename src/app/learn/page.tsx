import type { Metadata } from "next"
import { PageFrame } from "@/components/page-frame"
import { moonAndIc, readingFormula, similarHousePairs } from "@/data/learn"

export const metadata: Metadata = {
  title: "星の読み方を学ぶ",
}

export default function LearnPage() {
  return (
    <PageFrame backHref="/">
      <p className="text-sm tracking-[0.14em] text-muted-foreground">星の読み方</p>
      <h1 className="mt-2 font-heading text-[1.9rem] leading-snug">{readingFormula.title}</h1>

      <div className="mt-8 flex flex-col items-stretch">
        {readingFormula.parts.map((part, index) => (
          <div key={part.role}>
            <div className="rounded-3xl border border-border bg-card px-5 py-7 text-center shadow-[0_1px_2px_rgba(70,55,30,0.04)]">
              <p className="text-sm tracking-[0.18em] text-muted-foreground">{part.role}</p>
              <p className="mt-2 font-heading text-[1.85rem] leading-snug">{part.question}</p>
            </div>
            {index < readingFormula.parts.length - 1 ? (
              <p className="py-3 text-center font-heading text-xl text-gold" aria-hidden="true">
                ×
              </p>
            ) : null}
          </div>
        ))}
      </div>

      <p className="mt-8 leading-relaxed">{readingFormula.description}</p>

      <section className="mt-14">
        <h2 className="font-heading text-[1.45rem] leading-snug">似ているハウスの違い</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          同じように見えても、見ているものは違います。
        </p>
        <div className="mt-6 space-y-5">
          {similarHousePairs.map((pair) => (
            <section key={pair.title}>
              <h3 className="text-sm tracking-wide text-muted-foreground">{pair.title}</h3>
              <div className="mt-2 overflow-hidden rounded-2xl border border-border bg-card shadow-[0_1px_2px_rgba(70,55,30,0.04)]">
                {pair.items.map((item, index) => (
                  <div
                    key={item.label}
                    className={index > 0 ? "border-t border-border px-4 py-4" : "px-4 py-4"}
                  >
                    <p className="text-sm font-medium text-primary">{item.label}</p>
                    <p className="mt-1 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-heading text-[1.45rem] leading-snug">{moonAndIc.title}</h2>
        <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-card shadow-[0_1px_2px_rgba(70,55,30,0.04)]">
          {moonAndIc.items.map((item, index) => (
            <div key={item.label} className={index > 0 ? "border-t border-border px-4 py-4" : "px-4 py-4"}>
              <p className="text-sm font-medium text-primary">{item.label}</p>
              <p className="mt-1 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </PageFrame>
  )
}
