import { reflectionFootnote, reflectionIntro } from "@/data/learn"

export function Reflection({ questions }: { questions: string[] }) {
  if (questions.length === 0) return null

  return (
    <section className="mt-12">
      <h2 className="font-heading text-[1.45rem] leading-snug">あなたの場合は？</h2>
      <p className="mt-3 leading-relaxed text-muted-foreground">{reflectionIntro}</p>
      <ul className="mt-5 space-y-3">
        {questions.map((question) => (
          <li
            key={question}
            className="rounded-2xl border border-border bg-card px-4 py-4 leading-relaxed shadow-[0_1px_2px_rgba(70,55,30,0.04)]"
          >
            {question}
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{reflectionFootnote}</p>
    </section>
  )
}
