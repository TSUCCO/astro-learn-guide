"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { AstroSymbol } from "@/components/astro-symbol"
import { ExampleLink } from "@/components/example-link"
import { OptionButton } from "@/components/option-button"
import { PageFrame } from "@/components/page-frame"
import { ReadActionBar } from "@/components/read-action-bar"
import { StepSwitcher } from "@/components/step-switcher"
import { houses, planets, signs, getHouse, getPlanet, getSign } from "@/data"
import { planetResultHref, samplePlanetResultHref } from "@/lib/paths"

const steps = [
  { id: 1 as const, label: "惑星", heading: "惑星を選ぶ", hint: "惑星＝何を？" },
  { id: 2 as const, label: "星座", heading: "星座を選ぶ", hint: "星座＝どんなふうに？" },
  { id: 3 as const, label: "ハウス", heading: "ハウスを選ぶ", hint: "ハウス＝どこで？" },
]

type StepId = (typeof steps)[number]["id"]

export function PlanetReader() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const planet = getPlanet(searchParams.get("planet"))
  const sign = getSign(searchParams.get("sign"))
  const house = getHouse(searchParams.get("house"))
  const requested = Number(searchParams.get("step"))
  const step: StepId = requested === 1 || requested === 2 || requested === 3 ? requested : 1
  const current = steps.find((item) => item.id === step) ?? steps[0]
  const ready = Boolean(planet && sign && house)
  const exampleHref = samplePlanetResultHref()

  function update(next: {
    planetId?: string | null
    signId?: string | null
    houseId?: string | null
    step: StepId
  }) {
    const params = new URLSearchParams()
    const planetId = next.planetId === undefined ? planet?.id : next.planetId
    const signId = next.signId === undefined ? sign?.id : next.signId
    const houseId = next.houseId === undefined ? house?.id : next.houseId
    if (planetId) params.set("planet", planetId)
    if (signId) params.set("sign", signId)
    if (houseId) params.set("house", houseId)
    params.set("step", String(next.step))
    router.replace(`/read/planet?${params.toString()}`, { scroll: false })
  }

  return (
    <PageFrame backHref="/read" className="pb-6">
      <p className="text-sm tracking-[0.14em] text-muted-foreground">惑星から読む</p>
      <h1 className="mt-2 font-heading text-[1.7rem] leading-snug">{current.heading}</h1>
      <p className="mt-2 leading-relaxed text-muted-foreground">{current.hint}</p>
      {exampleHref ? (
        <ExampleLink href={exampleHref}>例：月 × 牡牛座 × 8ハウスを読む</ExampleLink>
      ) : null}

      <div className="mt-6">
        <StepSwitcher
          steps={steps}
          current={step}
          onChange={(next) => update({ step: next })}
        />
      </div>

      <p className="mt-5 text-center text-sm leading-relaxed" aria-live="polite">
        <SelectionPiece ready={Boolean(planet)} fallback="惑星">
          {planet ? (
            <>
              <AstroSymbol>{planet.symbol}</AstroSymbol> {planet.name}
            </>
          ) : null}
        </SelectionPiece>
        <span className="px-1.5 text-gold">×</span>
        <SelectionPiece ready={Boolean(sign)} fallback="星座">
          {sign ? (
            <>
              <AstroSymbol>{sign.symbol}</AstroSymbol> {sign.name}
            </>
          ) : null}
        </SelectionPiece>
        <span className="px-1.5 text-gold">×</span>
        <SelectionPiece ready={Boolean(house)} fallback="ハウス">
          {house?.name}
        </SelectionPiece>
      </p>

      <div className="mt-5 grid grid-cols-2 gap-2.5">
        {step === 1
          ? planets.map((item) => (
              <OptionButton
                key={item.id}
                selected={planet?.id === item.id}
                onSelect={() => update({ planetId: item.id, step: 2 })}
              >
                <AstroSymbol className="w-7 text-center text-[1.35rem] leading-none">
                  {item.symbol}
                </AstroSymbol>
                <span className="font-medium">{item.name}</span>
              </OptionButton>
            ))
          : null}
        {step === 2
          ? signs.map((item) => (
              <OptionButton
                key={item.id}
                selected={sign?.id === item.id}
                onSelect={() => update({ signId: item.id, step: 3 })}
              >
                <AstroSymbol className="w-7 text-center text-[1.35rem] leading-none">
                  {item.symbol}
                </AstroSymbol>
                <span className="font-medium">{item.name}</span>
              </OptionButton>
            ))
          : null}
        {step === 3
          ? houses.map((item) => (
              <OptionButton
                key={item.id}
                selected={house?.id === item.id}
                onSelect={() => update({ houseId: item.id, step: 3 })}
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-mist text-sm font-medium text-primary">
                  {item.number}
                </span>
                <span className="font-medium">{item.name}</span>
              </OptionButton>
            ))
          : null}
      </div>

      <ReadActionBar
        ready={ready}
        label="この星を読む"
        hint="惑星・星座・ハウスを選ぶと読めます"
        onRead={() => {
          if (!planet || !sign || !house) return
          router.push(planetResultHref(planet.id, sign.id, house.id))
        }}
      />
    </PageFrame>
  )
}

function SelectionPiece({
  ready,
  fallback,
  children,
}: {
  ready: boolean
  fallback: string
  children: React.ReactNode
}) {
  if (!ready) return <span className="text-muted-foreground">{fallback}</span>
  return <span className="text-foreground">{children}</span>
}
