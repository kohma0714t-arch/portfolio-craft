# ポートフォリオ システム構成・設計記録

本書は、ポートフォリオサイト（portfolio-craft）の基本設計、アーキテクチャ構成、および今後の更新・拡張履歴を記録する設計書です。

---

## 1. プロジェクト概要

- **名称**: `koma — Portfolio | Mobile & Web Engineering`
- **目的**: 工学部情報工学科の学生エンジニア `koma` のポートフォリオサイト
- **デザインコンセプト**: "Student Craft"（ネオブルータリズム × ポップ × 親しみやすさ）

---

## 2. 技術スタック

| 分類 | 技術 | バージョン/備考 |
|---|---|---|
| 言語 | TypeScript | 5.7+ |
| コアフレームワーク | React | 18.3 |
| ビルドツール | Vite | 6.1 |
| ルーティング | React Router DOM | 7.18 (BrowserRouter) |
| スタイリング | Tailwind CSS | 3.4 (Neo-Brutalism設定) |
| アニメーション | Framer Motion | 13.2 |
| アイコン | Lucide React | 0.475 |

---

## 3. ディレクトリ・アーキテクチャ設計

```text
portfolio/
├── docs/
│   ├── design-spec.md           # UI/UXデザイントークン仕様
│   └── architecture-overview.md # 本書（アーキテクチャ・設計記録）
├── public/
│   └── images/                  # 静的画像（アプリアイコン、QRコード、モックアップ）
├── src/
│   ├── components/              # 共通UIコンポーネント（Navbar, Footer, Card等）
│   ├── pages/                   # 各ページ画面コンポーネント
│   │   ├── HomePage.tsx         # トップページ
│   │   ├── AboutPage.tsx        # プロフィール
│   │   ├── SkillsPage.tsx       # スキル一覧
│   │   ├── WorksPage.tsx        # 制作実績一覧
│   │   ├── WorkDetailPage.tsx   # 実績詳細
│   │   └── AchievementsPage.tsx # 受賞実績
│   ├── data/                    # 実績・スキル等の静的データ定義
│   ├── types/                   # TypeScript型定義
│   ├── utils/                   # ユーティリティ関数
│   ├── App.tsx                  # ルート定義・レイアウト設定
│   ├── index.css                # グローバルスタイル・Tailwind設定
│   └── main.tsx                 # エントリポイント
└── tailwind.config.js           # デザイントークン設定
```

---

## 4. ページ構成・ルーティング設計

1. `/` (`HomePage`) : ヒーロー、主要な自己紹介、ピックアップ作品、受賞歴への導線
2. `/about` (`AboutPage`) : 経歴、大切にしている価値観、自己紹介
3. `/skills` (`SkillsPage`) : フロントエンド、モバイル、バックエンド、ツール等のスキル一覧
4. `/works` (`WorksPage`) : 制作実績一覧
5. `/works/:id` (`WorkDetailPage`) : 作品ごとの詳細・技術仕様・QRコード
6. `/achievements` (`AchievementsPage`) : ハッカソン優秀賞などの成果・表彰実績

---

## 5. 設計方針・実装ルール

1. **デザイントークン遵守**:
   - `docs/design-spec.md` で定義されたカラー（`--cream`, `--ink`, `--pop-blue`, `--pop-orange` 等）およびネオブルータリズムのシャドウスタイルを遵守する。
2. **コンポーネントの分離**:
   - データ（`src/data/`）と表示コンポーネント（`src/components/`, `src/pages/`）を明確に分離し、保守性と拡張性を高める。
3. **レスポンシブ対応**:
   - モバイルファーストおよびPCワイド画面（最大幅1200px）に対応したレイアウトとする。
4. **設計変更・機能追加の記録**:
   - 機能追加や仕様変更が発生した際は、本書の変更履歴に内容を追記する。

---

## 6. 作品データモデル・UI機能設計

### 6.1 WorkItem データモデル定義
制作実績（Works）は `src/types/portfolio.ts` で一元管理され、以下のフィールドを持ちます。

- 基本情報: `id`, `projectNumber`, `category`, `title`, `subtitle`, `tagline`, `period`, `role`, `status`, `accentColor`
- 本文・ストーリー: `description`, `longDescription` (配列)
- 技術・機能: `techStack` (配列), `highlights` (配列), `challenges` (配列), `architecture` (配列), `futurePlans` (配列)
- メディア・リンク: `iconImage`, `screenshotImage`, `qrCodeImage`, `githubUrl`, `demoUrl`
- ガバナンス・注記: `disclaimer`（ハッカソン試作・非公式プロトタイプ等の免責事項）

### 6.2 Web / モバイル両対応のUI振る舞い設計
- **モバイルアプリの場合**:
  - Expo Go QRコードモーダルおよび実機体験カードを表示。
  - スクリーンショット比率はモバイル比率（`aspect-[9/16]`）に最適化。
- **Webプロダクトの場合**:
  - 外部デモサイトリンク（`demoUrl`）への誘導カード・ボタンをヘッダーおよびクイックアクションに表示。
  - スクリーンショット比率を横長Web比率（`aspect-[16/10]`）に自動調整。
- **免責事項（Disclaimer）**:
  - `disclaimer` プロパティが存在する場合、注意喚起カード（`#FFFBEB` 背景 + アンバー境界線）を詳細ページ上部に強調表示。

---

## 7. 更新・改修履歴

| 日付 | 変更種別 | 内容 |
|---|---|---|
| 2026-10-19 | 初回記録 | リポジトリクローンに伴う初期アーキテクチャの記録作成 |
| 2026-10-19 | 機能追加・設計拡張 | 新規制作実績「DatePlanner（PROJECT 04）」の追加。<br>1. `WorkItem` 型に `disclaimer` プロパティを追加。<br>2. `WorkDetailPage` におけるWeb作品向けデモ誘導機能および免責事項カードの表示に対応。<br>3. アプリアイコン画像（夕日と波）を生成し `public/images/` へ配置。 |

