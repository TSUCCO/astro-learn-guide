import type { PlacementInterpretation } from "./types"

/**
 * 惑星 × 星座 × ハウスの読み。
 * summary が「この配置をひとことで」、
 * houseHeadline / houseDescription がハウス欄、
 * questions が「あなたの場合は？」に出ます。
 */
export const placementInterpretations: PlacementInterpretation[] = [
  {
    planetId: "moon",
    signId: "taurus",
    houseId: "8",
    summary: "心地よさと安定を大切にしながら、深く信頼できる人とのつながりを求める",
    houseHeadline: "深いつながり・共有・継承・変容",
    houseDescription:
      "この月の性質が、人との深いつながりや、誰かと大切なものを共有する領域に現れやすくなります。",
  },
  {
    planetId: "venus",
    signId: "capricorn",
    houseId: "8",
    reflectionQuestion: "人との関係の中で、時間をかけて育てていきたい絆はどんなもの？",
  },
  {
    planetId: "mars",
    signId: "virgo",
    houseId: "7",
    reflectionQuestion:
      "一対一の関係の中で、『ここをもっと良くしたい』と思うと、自然と動きたくなることはある？",
  },
  {
    planetId: "mars",
    signId: "pisces",
    houseId: "12",
    reflectionQuestion: "一人でいるときや静かな時間の中で、自然と『やってみよう』と思うことはある？",
  },
  {
    planetId: "jupiter",
    signId: "virgo",
    houseId: "3",
    reflectionQuestion:
      "身近な学びや、人に伝えることの中で、もっと磨いて役立てたい知識や技術はどんなもの？",
  },
  {
    planetId: "saturn",
    signId: "aries",
    houseId: "5",
    reflectionQuestion:
      "楽しむことや、何かを創ること、自分を表現することの中で、経験を重ねながら自分で動けるようになってきたことはある？",
  },
  {
    planetId: "uranus",
    signId: "taurus",
    houseId: "2",
    reflectionQuestion:
      "自分にとっての豊かさ、お金、才能、持っているものとの関わりに、どんな新しい価値観を感じる？",
  },
  {
    planetId: "neptune",
    signId: "capricorn",
    houseId: "10",
    reflectionQuestion: "仕事や社会での役割、目指しているものの中で、理想を形にしたいものは何？",
  },
  {
    planetId: "pluto",
    signId: "libra",
    houseId: "7",
    reflectionQuestion: "一対一で向き合う関係の中で、『本当に対等だろうか』と感じることはある？",
  },
]
