# 星読みナビ

占星術講座の受講生向けの学習ノートです。占い結果を受け取るためではなく、惑星・星座・ハウスを自分で組み合わせて読めるようになるためのアプリです。

読み方の基本は、次の3つです。

- 惑星 ＝ 何を？
- 星座 ＝ どんなふうに？
- ハウス ＝ どこで？

## 起動

```bash
npm install
npm run dev
```

開発サーバーは [http://localhost:3000](http://localhost:3000) で開きます。

## 画面

- `/` トップ
- `/read` 自分の星を読む
- `/read/planet` 惑星 × 星座 × ハウス
- `/read/angle` ASC / MC / IC × 星座
- `/dictionary` 星の意味
- `/learn` 星の読み方

惑星・星座・ハウス・ASC / MC / IC の基本意味は入っています。惑星 × 星座の監修文は、太陽 × 12星座と月 × 12星座の24件です。三つの配置をまとめた文は「月 × 牡牛座 × 8ハウス」、ASC / MC / IC × 星座は「IC × 蟹座」だけです。それ以外の組み合わせは、未登録と表示したうえで、基本の意味から読めます。

## 文章を追加するとき

画面の部品はそのままで、`src/data` の配列にオブジェクトを足します。辞書は `keyword` か `description` がある項目だけを表示します。

| 足したいもの | 編集するファイル |
| --- | --- |
| 惑星の意味、記号、読み方の短い説明 | `src/data/planets.ts` |
| 星座の意味 | `src/data/signs.ts` |
| ハウスの意味 | `src/data/houses.ts` |
| ASC / MC / IC の意味 | `src/data/angles.ts` |
| 惑星 × 星座の監修文 120件 | `src/data/planet-sign-interpretations.ts` |
| 惑星 × 星座 × ハウスの「ひとことで」と、ハウスでの現れ | `src/data/placement-interpretations.ts` |
| ASC / MC / IC × 星座の文章 | `src/data/angle-sign-interpretations.ts` |
| 基本公式や、似ているハウスの説明 | `src/data/learn.ts` |

型は `src/data/types.ts` にあります。惑星 × 星座を足すときは、`planet-sign-interpretations.ts` に `planetId`、`signId`、`short`、`description` を追加します。その組み合わせの振り返りまで書くときは `reflectionQuestion` も足します。未登録のままでも結果は出ますが、監修文の代わりに「まだ登録されていません」と出ます。質問2は、配置の `reflectionQuestion`、惑星×星座の `reflectionQuestion`、なければハウスごとの汎用質問の順で使います。

「この配置をひとことで」は、`placement-interpretations.ts` にその3つの組み合わせがあるときだけ出ます。無いときは、惑星×星座の文章と、ハウスの領域を分けて表示します。
