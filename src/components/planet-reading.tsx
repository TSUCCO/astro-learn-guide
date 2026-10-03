import Link from "next/link"
import { AstroSymbol } from "@/components/astro-symbol"
import { ExampleLink } from "@/components/example-link"
import { PageFrame } from "@/components/page-frame"
import { Reflection } from "@/components/reflection"
import { WhyReading } from "@/components/why-reading"
import { Card } from "@/components/ui/card"
import {
  getHouse,
  getPlacementInterpretation,
  getPlanet,
  getPlanetSignInterpretation,
  getSign,
  houseStage,
  planetReflectionQuestions,
  planetSignHeadline,
} from "@/data"
import { generationPlanetNote, unregisteredCombinationNote } from "@/data/learn"
import { planetReaderHref, samplePlanetResultHref } from "@/lib/paths"

export function PlanetReading({
  planetId,
  signId,
  houseId,
}: {
  planetId?: string
  signId?: string
  houseId?: string
}) {
  const planet = getPlanet(planetId)
  const sign = getSign(signId)
  const house = getHouse(houseId)
  const backHref = planetReaderHref({
    planetId: planet?.id,
    signId: sign?.id,
    houseId: house?.id,
    step: 3,
  })

  if (!planet || !sign || !house) {
    const exampleHref = samplePlanetResultHref()
    return (
      <PageFrame backHref="/read/planet">
        <h1 className="font-heading text-[1.7rem] leading-snug">組み合わせを確認できません</h1>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          惑星・星座・ハウスを選び直すと、読みを表示できます。
        </p>
        {exampleHref ? <ExampleLink href={exampleHref}>例：月 × 牡牛座 × 8ハウスを読む</ExampleLink> : null}
      </PageFrame>
    )
  }

  const planetSign = getPlanetSignInterpretation(planet.id, sign.id)
  const placement = getPlacementInterpretation(planet.id, sign.id, house.id)
  const houseCard = houseStage(house)
  const questions = planetReflectionQuestions(planet, house, planetSign, placement)
  const exampleHref = samplePlanetResultHref()

  return (
    <PageFrame backHref={backHref}>
      <p className="text-sm tracking-[0.14em] text-muted-foreground">この配置</p>
      <h1 className="mt-2 font-heading text-[1.65rem] leading-snug">
        <span className="whitespace-nowrap">
          <AstroSymbol className="mr-1">{planet.symbol}</AstroSymbol>
          {planet.name}
        </span>
        <span className="px-1.5 text-gold">×</span>
        <span className="whitespace-nowrap">
          <AstroSymbol className="mr-1">{sign.symbol}</AstroSymbol>
          {sign.name}
        </span>
        <span className="px-1.5 text-gold">×</span>
        <span className="whitespace-nowrap">{house.name}</span>
      </h1>

      {placement?.summary ? (
        <section className="mt-8">
          <h2 className="text-sm text-muted-foreground">この配置をひとことで</h2>
          <p className="mt-3 border-l-2 border-gold/70 pl-4 font-heading text-[1.35rem] leading-relaxed">
            {placement.summary}
          </p>
        </section>
      ) : null}

      {planetSign ? (
        <Card className="mt-8 gap-0 rounded-2xl py-0 shadow-[0_1px_2px_rgba(70,55,30,0.04)] ring-border">
          <div className="px-5 py-5">
            <h2 className="font-heading text-[1.2rem] leading-snug">
              <AstroSymbol className="mr-1">{planet.symbol}</AstroSymbol>
              {planet.name}
              <span className="px-1.5 text-gold">×</span>
              <AstroSymbol className="mr-1">{sign.symbol}</AstroSymbol>
              {sign.name}
            </h2>
            <p className="mt-4 text-[1.05rem] leading-relaxed font-medium">
              {planetSignHeadline(planetSign)}
            </p>
            <p className="mt-3 leading-relaxed">{planetSign.description}</p>
          </div>
        </Card>
      ) : (
        <Card className="mt-8 gap-0 rounded-2xl py-0 shadow-[0_1px_2px_rgba(70,55,30,0.04)] ring-border">
          <div className="px-5 py-5">
            <h2 className="font-heading text-[1.2rem] leading-snug">
              <AstroSymbol className="mr-1">{planet.symbol}</AstroSymbol>
              {planet.name}
              <span className="px-1.5 text-gold">×</span>
              <AstroSymbol className="mr-1">{sign.symbol}</AstroSymbol>
              {sign.name}
            </h2>
            <p className="mt-4 leading-relaxed">{unregisteredCombinationNote}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              文章データを足すと、この画面に表示されます。
            </p>
            {exampleHref ? (
              <ExampleLink href={exampleHref}>用意されている例を読む</ExampleLink>
            ) : null}
          </div>
        </Card>
      )}

      <Card className="mt-4 gap-0 rounded-2xl py-0 shadow-[0_1px_2px_rgba(70,55,30,0.04)] ring-border">
        <div className="px-5 py-5">
          <h2 className="font-heading text-[1.2rem] leading-snug">＋ {house.name}</h2>
          <p className="mt-4 text-[1.05rem] leading-relaxed font-medium">{houseCard.headline}</p>
          <p className="mt-3 leading-relaxed">{houseCard.description}</p>
        </div>
      </Card>

      {planet.generationPlanet ? (
        <Card className="mt-4 gap-0 rounded-2xl bg-mist py-0 shadow-none ring-border">
          <p className="px-5 py-4 text-sm leading-relaxed text-muted-foreground">
            {generationPlanetNote}
          </p>
        </Card>
      ) : null}

      <WhyReading planet={planet} sign={sign} house={house} />

      <Reflection questions={questions} />

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
