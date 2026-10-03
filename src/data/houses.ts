import type { House, HouseId } from "./types"

function house(
  number: number,
  extra: Pick<
    House,
    | "keyword"
    | "description"
    | "keywords"
    | "supplement"
    | "reflectionFallback"
    | "resultHeadline"
    | "resultDescription"
  >,
): House {
  return {
    id: String(number) as HouseId,
    number,
    name: `${number}ハウス`,
    ...extra,
  }
}

export const houses: House[] = [
  house(1, {
    keyword: "自分自身",
    description:
      "自分自身・身体・外見・振る舞い・第一印象・生き方など、『私はどう存在するか』に関わる領域。",
    keywords: ["自分", "身体", "外見", "振る舞い", "第一印象", "自己表現"],
    reflectionFallback: "自分の振る舞い方や、人から見える出方に、それはどんなときに表れる？",
    resultHeadline: "自分自身・振る舞い",
    resultDescription:
      "この性質は、自分自身のあり方や振る舞い、外の世界への出方などに表れやすくなります。人から見えるあなたらしさにも関わります。",
  }),
  house(2, {
    keyword: "自分が持っているもの",
    description:
      "お金・所有物・才能・資質・身体など、自分に備わっているものと、それをどう扱うかに関わる領域。自分にとって何が価値あるものかという価値観も表す。",
    keywords: ["お金", "所有", "才能", "資質", "身体", "価値観", "自己価値"],
    supplement: "身体そのものを見るときは1ハウスとの関連も考えます。",
    reflectionFallback: "才能やお金、何に価値を感じるかというところに、それはどう表れる？",
    resultHeadline: "才能・お金・価値観",
    resultDescription:
      "この性質は、自分の才能や資質をどう育てるか、何に価値を感じるか、お金や所有するものとどう関わるかなどに表れやすくなります。",
  }),
  house(3, {
    keyword: "学び・伝える",
    description: "日常的な学び、言葉、情報、コミュニケーション、身近な移動や環境などに関わる領域。",
    reflectionFallback: "身近なことを学んだり、人に伝えたりするとき、それはどんなふうに出る？",
    resultHeadline: "学び・伝える・身近な世界",
    resultDescription:
      "この性質は、物事をどう学ぶか、情報をどう受け取り伝えるか、人とどのようにコミュニケーションを取るかなどに表れやすくなります。",
  }),
  house(4, {
    keyword: "居場所・土台",
    description: "家庭・家族・ルーツ・プライベート・心の基盤など、自分の土台となるものに関わる領域。",
    reflectionFallback: "家庭や、安心して戻れる居場所では、それはどんなふうに出る？",
    resultHeadline: "家庭・居場所・自分の土台",
    resultDescription:
      "この性質は、家庭や家族との関わり、自分が安心して戻れる居場所、心の土台をどうつくるかなどに表れやすくなります。",
  }),
  house(5, {
    keyword: "創造・楽しみ",
    description:
      "遊び・恋愛・創作・趣味・自己表現・子どもなど、『やらなければ』ではなく『やりたい』から生まれるものに関わる領域。",
    reflectionFallback: "楽しむとき、何かを創るとき、自分を表現するときに、それはどんなふうに出る？",
    resultHeadline: "楽しみ・創造・自己表現",
    resultDescription:
      "この性質は、自分が何を楽しいと感じるか、どんなふうに自分を表現するか、創作・恋愛・遊びなどに表れやすくなります。",
  }),
  house(6, {
    keyword: "日常を整える",
    description:
      "日々の仕事・役割・健康・習慣・生活管理・人の役に立つことなど、毎日の暮らしを整え、機能させる領域。",
    reflectionFallback: "毎日の仕事や、生活を整える習慣の中では、それはどんなふうに出る？",
    resultHeadline: "日常・仕事・習慣",
    resultDescription:
      "この性質は、毎日の仕事や役割、生活習慣、健康管理、日々をどう整えていくかなどに表れやすくなります。",
  }),
  house(7, {
    keyword: "一対一の関係",
    description:
      "パートナー・結婚・一対一の人間関係・契約など、『私』と『あなた』が向き合う関係に関わる領域。",
    reflectionFallback: "一対一で誰かと向き合う関係の中では、それはどんなふうに出る？",
    resultHeadline: "パートナー・一対一の関係",
    resultDescription:
      "この性質は、パートナーや一対一の人間関係の中で、どんな相手と関わり、どのように関係を築いていくかなどに表れやすくなります。",
  }),
  house(8, {
    keyword: "深いつながり・共有",
    description:
      "親密な関係、共有するもの、受け取るもの、継承、相続、深い心理、変容など、自分だけでは完結しないものに関わる領域。",
    reflectionFallback:
      "人と深く結びついたり、大切なものを共有したりするとき、それはどんなふうに出る？",
    resultHeadline: "深いつながり・共有・変容",
    resultDescription:
      "この性質は、人と深く関わること、大切なものを誰かと共有すること、受け取ることや受け継ぐこと、深い心理的な変化などに表れやすくなります。",
  }),
  house(9, {
    keyword: "世界を広げる",
    description:
      "哲学・思想・専門的な学び・高等教育・海外・宗教・精神性など、自分の知っている世界を超えて、より大きな意味を探究する領域。",
    reflectionFallback: "今知っている世界を越えて学んだり、視野を広げたりするとき、それはどんなふうに出る？",
    resultHeadline: "探究・思想・世界を広げる",
    resultDescription:
      "この性質は、専門的な学びや探究、哲学や精神性、海外など、自分が知っている世界を越えて視野を広げることに表れやすくなります。",
  }),
  house(10, {
    keyword: "社会での自分",
    description:
      "仕事・キャリア・社会的役割・目標・実績・社会から見える自分など、社会の中で何を成していくかに関わる領域。",
    reflectionFallback: "仕事や社会での役割、目指している方向の中では、それはどんなふうに出る？",
    resultHeadline: "仕事・社会的役割・目標",
    resultDescription:
      "この性質は、仕事やキャリア、社会の中でどんな役割を担うか、どんな力を発揮し、何を目指していくかなどに表れやすくなります。",
  }),
  house(11, {
    keyword: "仲間・未来",
    description:
      "友人・仲間・コミュニティ・ネットワーク・未来への希望・理想など、個人を超えて人とつながることに関わる領域。",
    reflectionFallback: "仲間と何かを目指したり、これからを考えたりするとき、それはどんなふうに出る？",
    resultHeadline: "仲間・コミュニティ・未来",
    resultDescription:
      "この性質は、友人や仲間との関わり、コミュニティの中での自分、未来に向けてどんな理想や可能性を描くかなどに表れやすくなります。",
  }),
  house(12, {
    keyword: "見えない世界",
    description:
      "無意識・潜在意識・精神世界・癒し・一人になる時間・集合的なものなど、普段の意識では捉えにくい領域。",
    reflectionFallback: "一人でいる時間や、自分でも気づきにくい心の動きの中では、それはどんなふうに出る？",
    resultHeadline: "無意識・内面・見えない世界",
    resultDescription:
      "この性質は、自分でも気づきにくい心の動きや無意識、一人でいる時間、精神的な世界や目に見えないものとの関わりなどに表れやすくなります。",
  }),
]
