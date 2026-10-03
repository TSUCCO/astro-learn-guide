export const readingFormula = {
  title: "星読みの基本公式",
  description:
    "3つの意味を順番につなげていくと、ホロスコープを自分で読めるようになります。",
  parts: [
    { role: "惑星", question: "何を？" },
    { role: "星座", question: "どんなふうに？" },
    { role: "ハウス", question: "どこで？" },
  ],
} as const

export const readingMethodNote = "この3つを組み合わせて読んでいきます。"

export const angleReadingMethodNote = "この2つを組み合わせて読んでいきます。"

export const reflectionIntro = "星の意味を、自分自身の経験と照らし合わせてみましょう。"

export const reflectionFootnote =
  "星は『あなたはこういう人』と決めるものではありません。星をヒントに自分自身を振り返ることで、これまで気づかなかった自分が見えてくることがあります。"

export const generationPlanetNote =
  "この天体は長い期間同じ星座に滞在するため、星座の意味は同じ世代の多くの人が共有します。あなた個人にどのように表れやすいかを見るときは、ハウスも合わせて読んでみましょう。"

export const unregisteredCombinationNote = "この組み合わせの読み文は、まだ登録されていません。"

export const moonAndIc = {
  title: "月とICはどう違う？",
  items: [
    {
      label: "月",
      text: "心の安心。心が安心するために必要なもので、日常の感情や無意識の反応にも表れやすい。",
    },
    {
      label: "IC",
      text: "もっと根本にある自分の土台。どこに戻ると自分自身に戻れるのか、という根っこの部分。",
    },
  ],
} as const

export interface HousePairItem {
  label: string
  text: string
}

export interface HousePair {
  title: string
  items: [HousePairItem, HousePairItem]
}

export const similarHousePairs: HousePair[] = [
  {
    title: "3Hと9H",
    items: [
      { label: "3H", text: "身近な世界で、知る・学ぶ・伝える。" },
      { label: "9H", text: "今いる世界を越えて、意味や真理を探究する。" },
    ],
  },
  {
    title: "4Hと10H",
    items: [
      { label: "4H", text: "家庭や居場所など、自分の内側の土台。" },
      { label: "10H", text: "仕事や社会的役割など、社会の中で目指す方向。" },
    ],
  },
  {
    title: "5Hと11H",
    items: [
      { label: "5H", text: "自分がやりたいこと。楽しみ、創造、自己表現。" },
      { label: "11H", text: "仲間と何を目指すか。未来に何をつくるか。" },
    ],
  },
  {
    title: "6Hと10H",
    items: [
      { label: "6H", text: "日々どう働くか。毎日の仕事、役割、働き方、生活習慣。" },
      { label: "10H", text: "社会の中でどこを目指すか。キャリアや社会的役割。" },
    ],
  },
  {
    title: "7Hと8H",
    items: [
      { label: "7H", text: "あなたと私。パートナーなど、一対一で相手と向き合う関係。" },
      { label: "8H", text: "二人の間で深く共有するもの。その関係のさらに奥で結びつく。" },
    ],
  },
]
