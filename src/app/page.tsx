import { ChoiceLink } from "@/components/choice-link"

const entries = [
  {
    href: "/read",
    index: "01",
    title: "自分の星を読む",
    description: "自分の惑星やASC・MC・ICを選んで、星を読んでみよう",
  },
  {
    href: "/dictionary",
    index: "02",
    title: "星の意味を調べる",
    description: "惑星・星座・ハウス・ASC / MC / ICの意味を確認",
  },
  {
    href: "/learn",
    index: "03",
    title: "星の読み方を学ぶ",
    description: "星読みの基本ルールを確認",
  },
]

export default function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-lg flex-1 flex-col px-5 pt-16 pb-16 sm:pt-24">
      <p className="text-sm tracking-[0.16em] text-muted-foreground">はじめての星読みをサポート</p>
      <h1 className="mt-4 font-heading text-[2.5rem] leading-tight font-medium tracking-wide">
        星読みナビ
      </h1>
      <p className="mt-4 text-[1.08rem] leading-relaxed text-muted-foreground">
        星をヒントに、自分を読み解いてみよう
      </p>
      <div className="mt-6 h-px w-12 bg-gold/80" />

      <div className="mt-12 flex flex-col gap-3">
        {entries.map((entry) => (
          <ChoiceLink key={entry.href} {...entry} />
        ))}
      </div>

      <p className="mt-12 text-sm leading-relaxed text-muted-foreground">
        星は、あなたを決めるものではありません。自分を見つめるためのヒントです。
      </p>
    </main>
  )
}
