import Link from "next/link"
import { AstroSymbol } from "@/components/astro-symbol"
import { ExampleLink } from "@/components/example-link"
import { PageFrame } from "@/components/page-frame"
import { Reflection } from "@/components/reflection"
import { AngleWhyReading } from "@/components/why-reading"
import { Card } from "@/components/ui/card"
import { getAngle, getAngleSignInterpretation, getSign } from "@/data"
import { unregisteredCombinationNote } from "@/data/learn"
import { angleReaderHref, sampleAngleResultHref } from "@/lib/paths"

export function AngleReading({ angleId, signId }: { angleId?: string; signId?: string }) {
  const angle = getAngle(angleId)
  const sign = getSign(signId)
  const backHref = angleReaderHref({
    angleId: angle?.id,
    signId: sign?.id,
    step: 2,
  })

  if (!angle || !sign) {
    const exampleHref = sampleAngleResultHref()
    return (
      <PageFrame backHref="/read/angle">
        <h1 className="font-heading text-[1.7rem] leading-snug">組み合わせを確認できません</h1>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          ASC・MC・ICと星座を選び直すと、読みを表示できます。
        </p>
        {exampleHref ? <ExampleLink href={exampleHref}>例：IC × 蟹座を読む</ExampleLink> : null}
      </PageFrame>
    )
  }

  const reading = getAngleSignInterpretation(angle.id, sign.id)
  const exampleHref = sampleAngleResultHref()

  return (
    <PageFrame backHref={backHref}>
      <p className="text-sm tracking-[0.14em] text-muted-foreground">この配置</p>
      <h1 className="mt-2 font-heading text-[1.7rem] leading-snug">
        {angle.label}
        <span className="px-1.5 text-gold">×</span>
        <AstroSymbol className="mr-1">{sign.symbol}</AstroSymbol>
        {sign.name}
      </h1>

      {reading ? (
        <>
          <Card className="mt-8 gap-0 rounded-2xl py-0 shadow-[0_1px_2px_rgba(70,55,30,0.04)] ring-border">
            <div className="px-5 py-5">
              <h2 className="font-heading text-[1.2rem] leading-snug">
                {angle.label}
                <span className="px-1.5 text-gold">×</span>
                <AstroSymbol className="mr-1">{sign.symbol}</AstroSymbol>
                {sign.name}
              </h2>
              <p className="mt-4 text-[1.05rem] leading-relaxed font-medium">{reading.short}</p>
              <p className="mt-3 leading-relaxed">{reading.description}</p>
            </div>
          </Card>
          <AngleWhyReading angle={angle} sign={sign} />
          <Reflection questions={[reading.reflectionQuestion]} />
        </>
      ) : (
        <Card className="mt-8 gap-0 rounded-2xl py-0 shadow-none ring-border">
          <div className="px-5 py-5">
            <p className="leading-relaxed">{unregisteredCombinationNote}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              文章データを足すと、この画面に表示されます。
            </p>
            {exampleHref ? <ExampleLink href={exampleHref}>用意されている例を読む</ExampleLink> : null}
          </div>
        </Card>
      )}

      <p className="mt-10 text-sm">
        <Link
          href={backHref}
          className="text-primary underline decoration-primary/30 underline-offset-4"
        >
          別の組み合わせを読む
        </Link>
      </p>
    </PageFrame>
  )
}
