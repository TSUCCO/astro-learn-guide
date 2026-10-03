import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { angleReadingMethodNote, readingMethodNote } from "@/data/learn"
import type { Angle, House, Planet, Sign } from "@/data"

export function WhyReading({
  planet,
  sign,
  house,
}: {
  planet: Planet
  sign: Sign
  house: House
}) {
  const planetMeaning = planet.readingMeaning ?? planet.keyword
  const signMeaning = sign.readingMeaning ?? sign.keyword
  const houseMeaning = house.resultHeadline
  if (!planetMeaning || !signMeaning || !houseMeaning) return null

  const steps = [
    {
      step: "1",
      formula: "惑星｜何を？",
      name: planet.name,
      meaning: planetMeaning,
      question: planet.readingQuestion ?? planet.question,
    },
    {
      step: "2",
      formula: "星座｜どんなふうに？",
      name: sign.name,
      meaning: signMeaning,
    },
    {
      step: "3",
      formula: "ハウス｜どこで？",
      name: house.name,
      meaning: houseMeaning,
    },
  ]

  return (
    <Card className="mt-8 rounded-2xl py-1 shadow-[0_1px_2px_rgba(70,55,30,0.04)] ring-border">
      <Accordion defaultValue={[]}>
        <AccordionItem value="why" className="border-b-0">
          <AccordionTrigger className="min-h-14 px-5 py-4 text-base font-medium no-underline hover:no-underline">
            どうしてこう読むの？
          </AccordionTrigger>
          <AccordionContent className="px-5 text-base leading-relaxed text-foreground">
            <ol>
              {steps.map((step, index) => (
                <li key={step.step}>
                  <div className="rounded-2xl bg-background px-4 py-4">
                    <p className="text-xs tracking-[0.16em] text-primary">STEP {step.step}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{step.formula}</p>
                    <p className="mt-3 font-medium">{step.name}</p>
                    <p className="mt-1 leading-relaxed">{step.meaning}</p>
                    {step.question ? (
                      <p className="mt-3 text-[0.98rem] leading-relaxed text-muted-foreground">
                        {step.question}
                      </p>
                    ) : null}
                  </div>
                  {index < steps.length - 1 ? (
                    <p className="py-2 text-center text-gold" aria-hidden="true">
                      ↓
                    </p>
                  ) : null}
                </li>
              ))}
            </ol>
            <p className="mt-4 leading-relaxed">{readingMethodNote}</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  )
}

export function AngleWhyReading({ angle, sign }: { angle: Angle; sign: Sign }) {
  const angleMeaning = angle.readingMeaning
  const signMeaning = sign.readingMeaning ?? sign.keyword
  if (!angleMeaning || !signMeaning) return null

  const steps = [
    {
      step: "1",
      formula: `${angle.label}｜何を見る？`,
      name: angle.label,
      meaning: angleMeaning,
    },
    {
      step: "2",
      formula: "星座｜どんなふうに？",
      name: sign.name,
      meaning: signMeaning,
    },
  ]

  return (
    <Card className="mt-8 rounded-2xl py-1 shadow-[0_1px_2px_rgba(70,55,30,0.04)] ring-border">
      <Accordion defaultValue={[]}>
        <AccordionItem value="why" className="border-b-0">
          <AccordionTrigger className="min-h-14 px-5 py-4 text-base font-medium no-underline hover:no-underline">
            どうしてこう読むの？
          </AccordionTrigger>
          <AccordionContent className="px-5 text-base leading-relaxed text-foreground">
            <ol>
              {steps.map((step, index) => (
                <li key={step.step}>
                  <div className="rounded-2xl bg-background px-4 py-4">
                    <p className="text-xs tracking-[0.16em] text-primary">STEP {step.step}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{step.formula}</p>
                    <p className="mt-3 font-medium">{step.name}</p>
                    <p className="mt-1 leading-relaxed">{step.meaning}</p>
                  </div>
                  {index < steps.length - 1 ? (
                    <p className="py-2 text-center text-gold" aria-hidden="true">
                      ↓
                    </p>
                  ) : null}
                </li>
              ))}
            </ol>
            <p className="mt-4 leading-relaxed">{angleReadingMethodNote}</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  )
}
