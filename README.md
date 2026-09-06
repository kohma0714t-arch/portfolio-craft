# koma — Portfolio | Mobile & Web Engineering

工学部情報工学科の学生エンジニア `koma` のポートフォリオサイトです。
[DESIGN.md](file:///C:/Users/kooku/Desktop/design/DESIGN.md) の **AuthKit スタイル（Frosted glass cathedral at midnight）** に完全準拠し、Vite + React + TypeScript + Tailwind CSS で構築されています。

---

## 🌟 デザイン & 特徴

- **Midnight Canvas & Blueprint Grid**:
  - ベースカラー `#05060f` に繊細な方眼ブループリントグリッドを重ね合わせ。
  - カーソル追従によるダイナミックなネオングロー（Void Violet `#663af3` ＆ Blueprint Blue）。
- **Frosted Glassmorphism**:
  - 半透明ガラスカード（`backdrop-blur-md`）、ヘアラインボーダー（`rgba(186, 215, 247, 0.12)`）と立体シャドウ。
- **モダンタイポグラフィ**:
  - ディスプレイ見出し: `Space Grotesk`（Ice Highlight グラデーション）
  - 本文 & UI: `Inter` / `Noto Sans JP`
  - アイブロウラベル: `JetBrains Mono`（トラッキング付きモノスペース）
- **Expo Go QRモーダル**:
  - モバイルアプリ（`Study Stack`、`わかりやすい時間割`）を実機スマートフォン（Expo Go）ですぐにテスト可能なインタラクティブモーダル。

---

## 🛠 技術スタック

- **フレームワーク**: Vite 6, React 18
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS (デザイントークン完全マッピング)
- **アイコン**: Lucide React
- **フォント**: Google Fonts (Space Grotesk, Inter, JetBrains Mono, Noto Sans JP)

---

## 📁 ディレクトリ構成

```text
site-myportfolio/
├── legacy/                  # リニューアル前のVanilla HTML/CSS/JSバックアップ
├── public/
│   └── images/              # アイコン画像、モックアップ、QRコード
├── src/
│   ├── components/
│   │   ├── BlueprintBackground.tsx  # グリッド背景＆カーソル追従グロー
│   │   ├── Navbar.tsx               # フロストガラスナビ＆モバイルメニュー
│   │   ├── Hero.tsx                 # ヒーロー見出し＆アバターカード
│   │   ├── About.tsx                # 自己紹介＆4つのバリューカード
│   │   ├── Skills.tsx               # 技術スタックカード一覧
│   │   ├── Works.tsx                # 制作実績＆スマホモックアップカード
│   │   ├── QrModal.tsx              # Expo Go QRコード拡大モーダル
│   │   └── Footer.tsx               # フッター＆ページトップリンク
│   ├── App.tsx                      # メインアプリケーション
│   ├── index.css                    # DESIGN.mdデザイントークン＆CSS定義
│   └── main.tsx                     # Reactエントリポイント
├── index.html                       # HTMLエントリ＆フォント設定
├── package.json
├── tailwind.config.js               # AuthKitデザイントークン定義
└── vite.config.ts                   # Vite設定
```

---

## 🚀 起動方法

### 開発サーバーの起動
```bash
npm run dev
```
ブラウザで `http://localhost:3000/` を開きます。

### プロダクションビルド
```bash
npm run build
```
`dist/` ディレクトリに最適化された静的アセットが出力されます。

### プレビュー確認
```bash
npm run preview
```
