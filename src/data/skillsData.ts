import { SkillItem } from '../types/portfolio';
import {
  Smartphone,
  Globe,
  Code2,
  Cpu,
  Gamepad2,
  Wrench,
  Figma,
  Lightbulb,
  Bot,
  Eye,
  Rocket,
} from 'lucide-react';

export const techSkillsData: (SkillItem & { icon: any })[] = [
  {
    name: 'TypeScript',
    category: 'language',
    level: 'メイン主力（熟練）',
    experience: '2+ 年',
    description: '型安全性を徹底した堅牢なフロントエンド・モバイル開発を実践。GenericsやUtility Typesを適切に駆使した型設計が得意です。',
    useCases: ['Study Stack・UniTimeの全コードベース', 'ポートフォリオサイト', 'ハッカソンでの迅速かつ型安全な開発'],
    icon: Code2,
  },
  {
    name: 'React / Next.js',
    category: 'frontend',
    level: 'メイン主力（熟練）',
    experience: '2+ 年',
    description: 'コンポーネント指向、カスタムフックによるロジック分離、パフォーマンス最適化（useMemo, useCallback, メモ化）を重視したSPA/SSR構築。',
    useCases: ['ポートフォリオサイト', 'ハッカソン提出Webアプリ', '個人開発プロトタイプ'],
    icon: Globe,
  },
  {
    name: 'React Native / Expo',
    category: 'mobile',
    level: 'メイン主力（専門）',
    experience: '1.5+ 年',
    description: 'iOS/Android両対応のクロスプラットフォームアプリ開発。ネイティブAPI連携、アニメーション、オフライン永続化、EAS Buildに対応。',
    useCases: ['Study Stack（単語カード学習アプリ）', 'UniTime（大学生向け時間割アプリ）'],
    icon: Smartphone,
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    level: 'メイン主力（熟練）',
    experience: '2+ 年',
    description: 'ユーティリティファーストでの高速スタイリングと、デザイントークンを活用した一貫性のあるデザインシステム構築。',
    useCases: ['ポートフォリオサイトのネオブルータリズムUI', 'Webアプリプロトタイプ'],
    icon: Code2,
  },
  {
    name: 'Git / GitHub',
    category: 'tool',
    level: '日常利用（熟練）',
    experience: '2+ 年',
    description: 'ブランチ戦略、コミットメッセージの規範化、GitHub ActionsによるCI/CD（Pages自動デプロイ等）の構築。',
    useCases: ['個人開発全般のバージョン管理', 'チームハッカソンでのコンフリクト解消と並行開発'],
    icon: Wrench,
  },
  {
    name: 'Figma',
    category: 'design',
    level: '実務・設計（習熟）',
    experience: '1+ 年',
    description: 'ワイヤーフレーム作成、UIコンポーネント設計、プロトタイピング。エンジニア目線での実装しやすいデザイン設計が可能。',
    useCases: ['アプリ画面のワイヤーフレーム策定', 'デザイントークン・カラーパレット策定'],
    icon: Figma,
  },
  {
    name: 'C言語',
    category: 'language',
    level: '大学講義・基礎',
    experience: '1+ 年',
    description: '大学の情報工学講義を通じて、メモリ管理、ポインタ、低レイヤのアルゴリズムとデータ構造の基礎を習得。',
    useCases: ['アルゴリズム課題', 'システムプログラミングの基礎理解'],
    icon: Cpu,
  },
  {
    name: 'Unity',
    category: 'tool',
    level: '基礎・個人制作',
    experience: '0.5+ 年',
    description: 'C#を用いた2D/3Dゲームプロトタイピングの経験。物理演算やインタラクティブな演出の知見をWeb UI演出にも還元。',
    useCases: ['ミニゲーム制作実験', 'インタラクティブUIの知見応用'],
    icon: Gamepad2,
  },
];

export const workflowDetailedSteps = [
  {
    step: '01',
    icon: Lightbulb,
    title: 'アイデア・課題発見',
    subtitle: '日常の「ペイン」を起点に構想',
    description:
      '自身や身の回りの友人が感じている日常のリアルな不便・違和感を発掘。「誰のどんな痛みを、どんな最小工数で解決できるか」を徹底的に言語化し、要件を絞り込みます。',
    details: [
      'ユーザー体験（UX）のコアバリューを1文で定義',
      '競合アプリや既存ツールの弱点を分析',
      'Figmaでのラフスケッチと情報階層の素早い設計',
    ],
  },
  {
    step: '02',
    icon: Bot,
    title: 'AIによる高速変換',
    subtitle: 'AIを相棒にコード・デザインを爆速生成',
    description:
      'LLM・AIアシスタントを高度に活用し、仕様策定から型定義、コンポーネントの骨組み、ロジックのベースを一気に立ち上げます。実装速度を3倍以上に高め、検証サイクルを圧倒的に短縮します。',
    details: [
      '型定義先行（Type-First）でのAPI/データモデル生成',
      'ボイラープレートの自動生成とコンポーネントスキャフォールディング',
      'エッジケースや異常系のテストコードの迅速なドラフト作成',
    ],
  },
  {
    step: '03',
    icon: Eye,
    title: '人間による磨き込み',
    subtitle: '手触りと細部のクオリティを徹底チューニング',
    description:
      'AIが生成したコードやUIを人間ならではの審美眼で磨き上げます。マイクロインタラクション、余白・タイポグラフィの美しさ、例外処理、パフォーマンスの最適化を妥協なく行います。',
    details: [
      '指先の操作感・トランジションのイージング調整',
      'アクセシビリティ・視認性の徹底検証',
      'コードレビュー・リファクタリングによる保守性の担保',
    ],
  },
  {
    step: '04',
    icon: Rocket,
    title: 'リリース・改善',
    subtitle: '実機テストと継続的なフィードバック反映',
    description:
      'Expo Goや実機インストールによる手元での徹底テスト、GitHub Actionsを通じた自動デプロイを実施。実際のユーザーに使ってもらいながらフィードバックを迅速に反映し続けます。',
    details: [
      'iOS/Android実機でのレスポンス検証とメモリ監視',
      'GitHub Pages / EAS Build を用いたCI/CD自動化',
      '利用ログやフィードバックをもとにしたアジャイルな機能改善',
    ],
  },
];
