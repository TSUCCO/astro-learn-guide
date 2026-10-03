import type { Metadata } from "next"
import { PlanetReading } from "@/components/planet-reading"
import { getHouse, getPlanet, getSign } from "@/data"
import { firstParam } from "@/lib/search"

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{
    planet?: string | string[]
    sign?: string | string[]
    house?: string | string[]
  }>
}): Promise<Metadata> {
  const query = await searchParams
  const planet = getPlanet(firstParam(query.planet))
  const sign = getSign(firstParam(query.sign))
  const house = getHouse(firstParam(query.house))
  if (!planet || !sign || !house) return { title: "星を読む" }
  return { title: `${planet.name} × ${sign.name} × ${house.name}` }
}

export default async function PlanetResultPage({
  searchParams,
}: {
  searchParams: Promise<{
    planet?: string | string[]
    sign?: string | string[]
    house?: string | string[]
  }>
}) {
  const query = await searchParams
  return (
    <PlanetReading
      planetId={firstParam(query.planet)}
      signId={firstParam(query.sign)}
      houseId={firstParam(query.house)}
    />
  )
}
