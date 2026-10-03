import { angleSignInterpretations } from "./angle-sign-interpretations"
import { angles } from "./angles"
import { houses } from "./houses"
import { placementInterpretations } from "./placement-interpretations"
import { planetSignInterpretations } from "./planet-sign-interpretations"
import { planets } from "./planets"
import { signs } from "./signs"
import type {
  Angle,
  AngleSignInterpretation,
  House,
  PlacementInterpretation,
  Planet,
  PlanetSignInterpretation,
  Sign,
} from "./types"

export {
  angleSignInterpretations,
  angles,
  houses,
  placementInterpretations,
  planetSignInterpretations,
  planets,
  signs,
}

export type {
  Angle,
  AngleId,
  AngleSignInterpretation,
  House,
  HouseId,
  PlacementInterpretation,
  Planet,
  PlanetId,
  PlanetSignInterpretation,
  Sign,
  SignId,
} from "./types"

function hasDictionaryCopy(item: { keyword?: string; description?: string }) {
  return Boolean(item.keyword || item.description)
}

export function getPlanet(id: string | null | undefined): Planet | undefined {
  if (!id) return undefined
  return planets.find((item) => item.id === id)
}

export function getSign(id: string | null | undefined): Sign | undefined {
  if (!id) return undefined
  return signs.find((item) => item.id === id)
}

export function getHouse(id: string | null | undefined): House | undefined {
  if (!id) return undefined
  return houses.find((item) => item.id === id)
}

export function getAngle(id: string | null | undefined): Angle | undefined {
  if (!id) return undefined
  return angles.find((item) => item.id === id)
}

export function getPlanetSignInterpretation(
  planetId: string,
  signId: string,
): PlanetSignInterpretation | undefined {
  return planetSignInterpretations.find(
    (item) => item.planetId === planetId && item.signId === signId,
  )
}

export function getPlacementInterpretation(
  planetId: string,
  signId: string,
  houseId: string,
): PlacementInterpretation | undefined {
  return placementInterpretations.find(
    (item) =>
      item.planetId === planetId && item.signId === signId && item.houseId === houseId,
  )
}

export function getAngleSignInterpretation(
  angleId: string,
  signId: string,
): AngleSignInterpretation | undefined {
  return angleSignInterpretations.find(
    (item) => item.angleId === angleId && item.signId === signId,
  )
}

export function planetSignHeadline(item: PlanetSignInterpretation) {
  return item.short ?? item.headline ?? ""
}

/** 結果画面のハウスカード。惑星×星座の性質が、どの人生の場面に出るかを示します。 */
export function houseStage(house: House) {
  return {
    headline: house.resultHeadline,
    description: house.resultDescription,
  }
}

/** 質問1は惑星×星座。質問2は、その性質がハウスの領域にどう出るかを見る。 */
export function planetReflectionQuestions(
  planet: Planet,
  house: House,
  planetSign?: PlanetSignInterpretation,
  placement?: PlacementInterpretation,
) {
  const first = planetSign?.reflectionQuestion ?? planet.experienceQuestion
  const second = placement?.reflectionQuestion ?? house.reflectionFallback
  return [first, second].filter((question): question is string => Boolean(question))
}

export function dictionaryPlanets() {
  return planets.filter(hasDictionaryCopy)
}

export function dictionarySigns() {
  return signs.filter(hasDictionaryCopy)
}

export function dictionaryHouses() {
  return houses.filter(hasDictionaryCopy)
}

export function dictionaryAngles() {
  return angles.filter(hasDictionaryCopy)
}

export const samplePlacement = placementInterpretations[0]
export const sampleAnglePlacement =
  angleSignInterpretations.find((item) => item.angleId === "ic" && item.signId === "cancer") ??
  angleSignInterpretations[0]
