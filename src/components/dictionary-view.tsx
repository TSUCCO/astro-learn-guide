"use client"

import { AstroSymbol } from "@/components/astro-symbol"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  dictionaryAngles,
  dictionaryHouses,
  dictionaryPlanets,
  dictionarySigns,
  type Angle,
  type House,
  type Planet,
  type Sign,
} from "@/data"

const tabClass =
  "h-auto min-h-11 whitespace-normal rounded-xl px-2 py-2 text-center text-[0.95rem] leading-snug text-foreground/80 data-active:bg-card data-active:text-foreground"

export function DictionaryView() {
  const planetEntries = dictionaryPlanets()
  const signEntries = dictionarySigns()
  const houseEntries = dictionaryHouses()
  const angleEntries = dictionaryAngles()

  return (
    <Tabs defaultValue="planets">
      <TabsList className="grid h-auto! w-full grid-cols-2 gap-1 rounded-2xl bg-mist p-1 sm:grid-cols-4">
        <TabsTrigger value="planets" className={tabClass}>
          惑星
        </TabsTrigger>
        <TabsTrigger value="signs" className={tabClass}>
          星座
        </TabsTrigger>
        <TabsTrigger value="houses" className={tabClass}>
          ハウス
        </TabsTrigger>
        <TabsTrigger value="angles" className={tabClass}>
          ASC / MC / IC
        </TabsTrigger>
      </TabsList>

      <TabsContent value="planets" className="mt-5 text-base leading-relaxed">
        <EntryList
          empty="惑星の文章は、まだ用意していません。"
          entries={planetEntries.map((item) => ({
            key: item.id,
            title: <PlanetTitle planet={item} />,
            keyword: item.keyword,
            question: item.question,
            keywords: item.keywords?.join("、"),
            description: item.description,
            notes: item.notes,
          }))}
        />
      </TabsContent>
      <TabsContent value="signs" className="mt-5 text-base leading-relaxed">
        <EntryList
          empty="星座の文章は、まだ用意していません。"
          entries={signEntries.map((item) => ({
            key: item.id,
            title: <SignTitle sign={item} />,
            keyword: item.keyword,
            description: item.description,
          }))}
        />
      </TabsContent>
      <TabsContent value="houses" className="mt-5 text-base leading-relaxed">
        <EntryList
          empty="ハウスの文章は、まだ用意していません。"
          entries={houseEntries.map((item) => ({
            key: item.id,
            title: <HouseTitle house={item} />,
            keyword: item.keyword,
            keywords: item.keywords?.join("、"),
            description: item.description,
            notes: item.supplement ? [item.supplement] : undefined,
          }))}
        />
      </TabsContent>
      <TabsContent value="angles" className="mt-5 text-base leading-relaxed">
        <EntryList
          empty="ASC / MC / IC の文章は、まだ用意していません。"
          entries={angleEntries.map((item) => ({
            key: item.id,
            title: <AngleTitle angle={item} />,
            keyword: item.keyword,
            question: item.question,
            description: item.description,
          }))}
        />
      </TabsContent>
    </Tabs>
  )
}

function EntryList({
  entries,
  empty,
}: {
  entries: {
    key: string
    title: React.ReactNode
    keyword?: string
    question?: string
    keywords?: string
    description?: string
    notes?: string[]
  }[]
  empty: string
}) {
  if (entries.length === 0) {
    return <p className="leading-relaxed text-muted-foreground">{empty}</p>
  }

  return (
    <div className="space-y-3">
      {entries.map((entry) => (
        <Card
          key={entry.key}
          className="gap-0 rounded-2xl py-0 shadow-[0_1px_2px_rgba(70,55,30,0.04)] ring-border"
        >
          <article className="px-5 py-5">
            <h2 className="font-heading text-[1.25rem] leading-snug">{entry.title}</h2>
            {entry.keyword ? (
              <p className="mt-4 leading-relaxed">
                <span className="mr-2 text-sm text-muted-foreground">一言</span>
                {entry.keyword}
              </p>
            ) : null}
            {entry.question ? (
              <p className="mt-3 leading-relaxed">
                <span className="mr-2 text-sm text-muted-foreground">問い</span>
                {entry.question}
              </p>
            ) : null}
            {entry.keywords ? (
              <p className="mt-3 leading-relaxed">
                <span className="mr-2 text-sm text-muted-foreground">キーワード</span>
                {entry.keywords}
              </p>
            ) : null}
            {entry.description ? <p className="mt-3 leading-relaxed">{entry.description}</p> : null}
            {entry.notes?.map((note) => (
              <p key={note} className="mt-3 leading-relaxed">
                <span className="mr-2 text-sm text-muted-foreground">補足</span>
                {note}
              </p>
            ))}
          </article>
        </Card>
      ))}
    </div>
  )
}

function PlanetTitle({ planet }: { planet: Planet }) {
  return (
    <span className="inline-flex items-center gap-2">
      <AstroSymbol className="text-[1.45rem] leading-none">{planet.symbol}</AstroSymbol>
      {planet.name}
    </span>
  )
}

function SignTitle({ sign }: { sign: Sign }) {
  return (
    <span className="inline-flex items-center gap-2">
      <AstroSymbol className="text-[1.45rem] leading-none">{sign.symbol}</AstroSymbol>
      {sign.name}
    </span>
  )
}

function HouseTitle({ house }: { house: House }) {
  return house.name
}

function AngleTitle({ angle }: { angle: Angle }) {
  return (
    <span>
      {angle.label}
      <span className="ml-2 text-base font-normal text-muted-foreground">{angle.name}</span>
    </span>
  )
}
