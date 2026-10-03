export type PlanetId =
  | "sun"
  | "moon"
  | "mercury"
  | "venus"
  | "mars"
  | "jupiter"
  | "saturn"
  | "uranus"
  | "neptune"
  | "pluto"

export type SignId =
  | "aries"
  | "taurus"
  | "gemini"
  | "cancer"
  | "leo"
  | "virgo"
  | "libra"
  | "scorpio"
  | "sagittarius"
  | "capricorn"
  | "aquarius"
  | "pisces"

export type HouseId =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12"

export type AngleId = "asc" | "mc" | "ic"

/** 選択リストと辞書の両方に使う天体。辞書の文章が無い項目は選択肢にだけ出ます。 */
export interface Planet {
  id: PlanetId
  name: string
  symbol: string
  /** 辞書の一言 */
  keyword?: string
  /** 辞書の問い */
  question?: string
  /** 辞書の説明 */
  description?: string
  /** 辞書のキーワード */
  keywords?: string[]
  /** 辞書の補足。木星・土星・海王星・冥王星など */
  notes?: string[]
  /** 天王星・海王星・冥王星など、世代で星座を共有する天体 */
  generationPlanet?: boolean
  /** 惑星×星座の問いが無いときの振り返り */
  experienceQuestion?: string
  /** 「どうしてこう読むの？」に出す短い意味。未設定なら一言を使います */
  readingMeaning?: string
  /** 「どうしてこう読むの？」に出す問い。未設定なら辞書の問いを使います */
  readingQuestion?: string
}

export interface Sign {
  id: SignId
  name: string
  symbol: string
  keyword?: string
  description?: string
  readingMeaning?: string
}

export interface House {
  id: HouseId
  name: string
  number: number
  keyword?: string
  description?: string
  keywords?: string[]
  /** 辞書に出す補足 */
  supplement?: string
  /** 質問2が未登録のときの振り返り */
  reflectionFallback?: string
  /** 結果画面のハウスカード見出し */
  resultHeadline: string
  /** 結果画面のハウスカード説明 */
  resultDescription: string
}

export interface Angle {
  id: AngleId
  /** 画面に出す短い表記。例: ASC */
  label: string
  /** かな・漢字の名前 */
  name: string
  keyword?: string
  question?: string
  description?: string
  /** 「どうしてこう読むの？」に出す、このポイントで見るもの */
  readingMeaning?: string
}

/**
 * 惑星 × 星座。ハウスが違っても共通で使います。
 * 見出しは short。以前から入っている文章は headline に残しています。
 */
export interface PlanetSignInterpretation {
  planetId: PlanetId
  signId: SignId
  /** 新しい監修文の見出し */
  short?: string
  /** 既存の監修文の見出し */
  headline?: string
  description: string
  /** 「あなたの場合は？」の1問目。惑星×星座の振り返り */
  reflectionQuestion?: string
}

/** 惑星 × 星座 × ハウス。結果画面の「ひとことで」と、ハウスでの現れ、振り返りの問い。 */
export interface PlacementInterpretation {
  planetId: PlanetId
  signId: SignId
  houseId: HouseId
  summary?: string
  houseHeadline?: string
  houseDescription?: string
  /** 質問2。この配置に監修文があるときだけ使います */
  reflectionQuestion?: string
}

/** ASC / MC / IC × 星座。惑星×星座とは別のデータです。 */
export interface AngleSignInterpretation {
  angleId: AngleId
  signId: SignId
  short: string
  description: string
  reflectionQuestion: string
}
