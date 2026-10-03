import type { Metadata } from "next"
import { AngleReading } from "@/components/angle-reading"
import { getAngle, getSign } from "@/data"
import { firstParam } from "@/lib/search"

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{
    angle?: string | string[]
    sign?: string | string[]
  }>
}): Promise<Metadata> {
  const query = await searchParams
  const angle = getAngle(firstParam(query.angle))
  const sign = getSign(firstParam(query.sign))
  if (!angle || !sign) return { title: "星を読む" }
  return { title: `${angle.label} × ${sign.name}` }
}

export default async function AngleResultPage({
  searchParams,
}: {
  searchParams: Promise<{
    angle?: string | string[]
    sign?: string | string[]
  }>
}) {
  const query = await searchParams
  return <AngleReading angleId={firstParam(query.angle)} signId={firstParam(query.sign)} />
}
