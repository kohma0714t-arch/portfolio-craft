# koma — Portfolio | Mobile & Web Engineering

工学部情報工学科の学生エンジニア `koma` のポートフォリオサイトです。
[DESIGN.md](file:///C:/Users/kooku/Desktop/design/DESIGN.md) の **AuthKit スタイル（Frosted glass cathedral at midnight）** に完全準拠し、Vite + React + TypeScript + Tailwind CSS で構築されています。

---

## 🛠 技術スタック

- **フレームワーク**: Vite 6, React 18
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS (デザイントークン完全マッピング)
- **アイコン**: Lucide React
- **フォント**: Google Fonts (Space Grotesk, Inter, JetBrains Mono, Noto Sans JP)

---

##  ディレクトリ構成

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
