# デザイン定義書 — koma Portfolio v2

> **コンセプト**: "Student Craft" — 学生だからこその好奇心と行動力を、ポップで親しみやすいデザインで表現する。
> 
> **参考サイト**: arti-lab.jp（構造的レイアウト・セクション番号）、techguild.jp（ネオブルータリズム・太いタイポグラフィ・ポップなカラー）

---

## 1. カラーパレット

| トークン名 | 値 | 用途 |
|---|---|---|
| `--cream` | `#FAF6EE` | 背景メイン。温かみのあるクリーム白 |
| `--ink` | `#1A1A2E` | テキスト基本色。深い濃紺 |
| `--pop-blue` | `#3B82F6` | プライマリーアクセント。学生らしいポップな青 |
| `--pop-orange` | `#F97316` | セカンダリアクセント。エネルギッシュなオレンジ |
| `--pop-mint` | `#34D399` | サクセス・ハイライト。爽やかなミント |
| `--muted` | `#94A3B8` | サブテキスト・ボーダー |
| `--card-bg` | `#FFFFFF` | カード背景 |
| `--section-alt` | `#1A1A2E` | 反転セクション背景（ダークセクション） |

### カラーの使い方ルール
- 背景は `--cream` を基調に、重要セクションで `--section-alt`（ダーク反転）を使う
- ボタンは `--pop-blue` をプライマリ、`--pop-orange` をセカンダリとする
- テキストの強調は `--pop-orange` を使う（arti-lab の朱色アクセントの代替）
- セクション番号・装飾数字は `--pop-blue` で大きく表示

---

## 2. タイポグラフィ

| 用途 | フォント | ウェイト | サイズ |
|---|---|---|---|
| ディスプレイ見出し（h1） | `Space Grotesk` | 700-800 | `clamp(40px, 8vw, 96px)` |
| セクション見出し（h2） | `Space Grotesk` | 700 | `clamp(24px, 4vw, 40px)` |
| 本文 / UI | `Inter` + `Noto Sans JP` | 400-500 | `0.95rem` ~ `1rem` |
| セクション番号 / ラベル | `Space Grotesk` | 800 | `clamp(48px, 8vw, 96px)` |
| モノスペース（タグ・コード） | `JetBrains Mono` | 500 | `0.75rem` |

### タイポグラフィルール
- セクション番号は **超大型** で `--pop-blue` 色、テキストの裏に透かし的にも使用
- 見出しは `font-black` レベルの太さで力強く
- 本文は `leading-relaxed`（1.8〜1.9）で読みやすく
- ラベルは `uppercase tracking-widest` でスタイリッシュに

---

## 3. レイアウト・コンポーネントスタイル

### 3.1 ネオブルータリズムカード
techguild.jp のスタイルを踏襲：
```css
border: 2px solid var(--ink);
box-shadow: 6px 6px 0 0 var(--ink);
transition: all 0.2s;
```
ホバー時：
```css
box-shadow: 3px 3px 0 0 var(--ink);
transform: translate(3px, 3px);
```

### 3.2 セクション構造
arti-lab.jp の `§01` `§02` レイアウトを踏襲：
- 各セクションにセクション番号（大きな数字）+ 英語ラベル + 日本語タイトル
- `md:grid-cols-3` で左にヘッダー（sticky）、右にコンテンツ

### 3.3 スタンプ風バッジ
techguild.jp のスタンプボタンを活用：
- ハッカソン実績の「優秀賞」バッジに最適
- `transform: rotate(-2deg)` で手作り感

### 3.4 背景テクスチャ文字
両サイトに共通する大きな背景テキスト装飾：
- `opacity: 0.04` ~ `0.06` で超薄く
- セクションキーワードを英字で大きく配置

---

## 4. インタラクション・アニメーション

### 4.1 スクロールリビール
- `IntersectionObserver` による `.reveal` アニメーション
- `opacity: 0 → 1`, `translateY(24px) → 0`
- stagger delay で順次表示

### 4.2 カードホバー
- ネオブルータリズムシャドウのシフト（上述）
- ボタンホバーで `scale(1.02)` + 色反転

### 4.3 スムーズスクロール
- ナビゲーションのアンカーリンクに `scroll-behavior: smooth`

---

## 5. セクション構成（リメイク後）

| # | セクション | 内容 |
|---|---|---|
| — | **Navbar** | クリーム背景 + ネオブルータリズムボタン |
| 01 | **Hero** | 「学生エンジニア koma」の大きな見出し、短いキャッチコピー |
| 02 | **About** | 自己紹介・バリューカード |
| 03 | **Skills** | 技術スタック（カテゴリ別カード） |
| 04 | **Works** | 制作実績（Study Stack, わかりやすい時間割 etc.） |
| 05 | **Achievements** | 🆕 ハッカソン優秀賞（写真+概要+リンク） |
| 06 | **Contact / Footer** | SNSリンク・フッター |

---

## 6. デザイントークン（CSS変数）

```css
:root {
  /* Colors */
  --cream: #FAF6EE;
  --ink: #1A1A2E;
  --pop-blue: #3B82F6;
  --pop-orange: #F97316;
  --pop-mint: #34D399;
  --muted: #94A3B8;
  --card-bg: #FFFFFF;
  --section-alt: #1A1A2E;
  
  /* Typography */
  --font-display: 'Space Grotesk', sans-serif;
  --font-body: 'Inter', 'Noto Sans JP', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  
  /* Spacing */
  --section-py: clamp(64px, 10vw, 128px);
  --content-max: 1200px;
  --content-px: clamp(20px, 4vw, 40px);
  
  /* Shadows (Neo-Brutalism) */
  --shadow-brutal: 6px 6px 0 0 var(--ink);
  --shadow-brutal-hover: 3px 3px 0 0 var(--ink);
  --shadow-brutal-blue: 6px 6px 0 0 var(--pop-blue);
  
  /* Border */
  --border-brutal: 2px solid var(--ink);
  --border-light: 1px solid rgba(26, 26, 46, 0.12);
  
  /* Radius */
  --radius-none: 0px;
  --radius-sm: 4px;
  
  /* Transitions */
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
}
```

---

## 7. 変更なし（踏襲する要素）

- **技術スタック**: Vite + React + TypeScript + Tailwind CSS
- **既存の制作実績コンテンツ**: Study Stack, わかりやすい時間割の情報・QRコード
- **アイコン**: Lucide React
- **アニメーション**: Framer Motion（既存で使用中）

---

## 8. 差分まとめ（Before → After）

| 要素 | Before（v1） | After（v2） |
|---|---|---|
| カラー | ダーク（#05060f） + ネオングロー | クリーム（#FAF6EE）+ ポップ青/オレンジ |
| トーン | サイバーパンク・クール | ポップ・親しみやすい・学生らしい |
| カード | グラスモーフィズム | ネオブルータリズム |
| 背景 | ブループリントグリッド | 透かし文字テクスチャ |
| セクション | 自由配置 | §01〜§06 の構造的レイアウト |
| 🆕コンテンツ | — | ハッカソン優秀賞セクション |
