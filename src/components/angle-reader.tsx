"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { AstroSymbol } from "@/components/astro-symbol"
import { ExampleLink } from "@/components/example-link"
import { OptionButton } from "@/components/option-button"
import { PageFrame } from "@/components/page-frame"
import { ReadActionBar } from "@/components/read-action-bar"
import { StepSwitcher } from "@/components/step-switcher"
import { angles, signs, getAngle, getSign } from "@/data"
import { angleResultHref, sampleAngleResultHref } from "@/lib/paths"

const steps = [
  { id: 1 as const, label: "ポイント", heading: "ASC・MC・ICを選ぶ", hint: "どのポイントから読むか選びます。" },
  { id: 2 as const, label: "星座", heading: "星座を選ぶ", hint: "そのポイントが、どの星座にあるか選びます。" },
]

type StepId = (typeof steps)[number]["id"]

export function AngleReader() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const angle = getAngle(searchParams.get("angle"))
  const sign = getSign(searchParams.get("sign"))
  const requested = Number(searchParams.get("step"))
  const step: StepId = requested === 1 || requested === 2 ? requested : 1
  const current = steps.find((item) => item.id === step) ?? steps[0]
  const ready = Boolean(angle && sign)
  const exampleHref = sampleAngleResultHref()

  function update(next: { angleId?: string | null; signId?: string | null; step: StepId }) {
    const params = new URLSearchParams()
    const angleId = next.angleId === undefined ? angle?.id : next.angleId
    const signId = next.signId === undefined ? sign?.id : next.signId
    if (angleId) params.set("angle", angleId)
    if (signId) params.set("sign", signId)
    params.set("step", String(next.step))
    router.replace(`/read/angle?${params.toString()}`, { scroll: false })
  }

  return (
    <PageFrame backHref="/read" className="pb-6">
      <p className="text-sm tracking-[0.14em] text-muted-foreground">ASC・MC・ICから読む</p>
      <h1 className="mt-2 font-heading text-[1.7rem] leading-snug">{current.heading}</h1>
      <p className="mt-2 leading-relaxed text-muted-foreground">{current.hint}</p>
      {exampleHref ? <ExampleLink href={exampleHref}>例：IC × 蟹座を読む</ExampleLink> : null}

      <div className="mt-6">
        <StepSwitcher steps={steps} current={step} onChange={(next) => update({ step: next })} />
      </div>

      <p className="mt-5 text-center text-sm leading-relaxed" aria-live="polite">
        {angle ? (
          <span className="text-foreground">
            {angle.label}
            <span className="text-muted-foreground"> {angle.name}</span>
          </span>
        ) : (
          <span className="text-muted-foreground">ASC / MC / IC</span>
        )}
        <span className="px-1.5 text-gold">×</span>
        {sign ? (
          <span className="text-foreground">
            <AstroSymbol>{sign.symbol}</AstroSymbol> {sign.name}
          </span>
        ) : (
          <span className="text-muted-foreground">星座</span>
        )}
      </p>

      <div className={step === 1 ? "mt-5 grid gap-2.5" : "mt-5 grid grid-cols-2 gap-2.5"}>
        {step === 1
          ? angles.map((item) => (
              <OptionButton
                key={item.id}
                selected={angle?.id === item.id}
                onSelect={() => update({ angleId: item.id, step: 2 })}
              >
                <span className="w-12 font-heading text-base tracking-wide text-gold">{item.label}</span>
                <span>
                  <span className="block font-medium">{item.name}</span>
                </span>
              </OptionButton>
            ))
          : null}
        {step === 2
          ? signs.map((item) => (
              <OptionButton
                key={item.id}
                selected={sign?.id === item.id}
                onSelect={() => update({ signId: item.id, step: 2 })}
              >
                <AstroSymbol className="w-7 text-center text-[1.35rem] leading-none">
                  {item.symbol}
                </AstroSymbol>
                <span className="font-medium">{item.name}</span>
              </OptionButton>
            ))
          : null}
      </div>

      <ReadActionBar
        ready={ready}
        label="読む"
        hint="ASC / MC / IC と星座を選ぶと読めます"
        onRead={() => {
          if (!angle || !sign) return
          router.push(angleResultHref(angle.id, sign.id))
        }}
      />
    </PageFrame>
  )
}
