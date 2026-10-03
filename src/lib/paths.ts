import { sampleAnglePlacement, samplePlacement } from "@/data"

export function planetReaderHref(input?: {
  planetId?: string
  signId?: string
  houseId?: string
  step?: 1 | 2 | 3
}) {
  const params = new URLSearchParams()
  if (input?.planetId) params.set("planet", input.planetId)
  if (input?.signId) params.set("sign", input.signId)
  if (input?.houseId) params.set("house", input.houseId)
  if (input?.step) params.set("step", String(input.step))
  const query = params.toString()
  return query ? `/read/planet?${query}` : "/read/planet"
}

export function planetResultHref(planetId: string, signId: string, houseId: string) {
  const params = new URLSearchParams({
    planet: planetId,
    sign: signId,
    house: houseId,
  })
  return `/read/planet/result?${params.toString()}`
}

export function angleReaderHref(input?: {
  angleId?: string
  signId?: string
  step?: 1 | 2
}) {
  const params = new URLSearchParams()
  if (input?.angleId) params.set("angle", input.angleId)
  if (input?.signId) params.set("sign", input.signId)
  if (input?.step) params.set("step", String(input.step))
  const query = params.toString()
  return query ? `/read/angle?${query}` : "/read/angle"
}

export function angleResultHref(angleId: string, signId: string) {
  const params = new URLSearchParams({ angle: angleId, sign: signId })
  return `/read/angle/result?${params.toString()}`
}

export function samplePlanetResultHref() {
  if (!samplePlacement) return null
  return planetResultHref(
    samplePlacement.planetId,
    samplePlacement.signId,
    samplePlacement.houseId,
  )
}

export function sampleAngleResultHref() {
  if (!sampleAnglePlacement) return null
  return angleResultHref(sampleAnglePlacement.angleId, sampleAnglePlacement.signId)
}
