import type { Angle } from "./types"

export const angles: Angle[] = [
  {
    id: "asc",
    label: "ASC",
    name: "アセンダント",
    keyword: "自然に表に出る自分",
    description:
      "人に与えやすい第一印象だけでなく、考える前に自然に出やすい振る舞いや、外の世界との関わり方を表します。",
    question: "私は自然に、どんなふうにこの世界と関わっている？",
    readingMeaning: "自然な振る舞い・外の世界との関わり方・第一印象",
  },
  {
    id: "mc",
    label: "MC",
    name: "ミッドヘブン",
    keyword: "社会で向かう方向・社会的役割",
    description: "社会の中でどんな方向へ成長し、どんな力を発揮していくかを見るポイントです。",
    question: "私は社会の中で、どんな力を発揮していく？",
    readingMeaning: "社会の中で目指す方向・仕事・社会的役割",
  },
  {
    id: "ic",
    label: "IC",
    name: "アイシー",
    keyword: "自分の根っこ・内側の土台",
    description:
      "社会に見せる自分ではなく、もっと深いところにある自分を支えている土台。家庭やルーツとの関係にも表れます。",
    question: "どんなところに戻ると『自分に戻った』と感じる？",
    readingMeaning: "自分の根っこ・心の土台・自分に戻れる居場所",
  },
]
