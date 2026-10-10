import { TimelineItem } from '../types/portfolio';

export const coreValues = [
  {
    title: 'Student Curiosity',
    subtitle: '知的好奇心と行動力',
    description:
      '新しい技術やツールに躊躇せず飛び込み、まずは手を動かして動くものを作る。学生ならではの柔軟さと熱量を最大の武器にしています。',
    accentColor: 'border-pop-blue text-pop-blue',
  },
  {
    title: 'AI-Native Craft',
    subtitle: 'AIと共創する高速開発',
    description:
      'AIを単なる補助ではなく開発パートナーとして位置づけ、仕様策定からプロトタイピングまで圧倒的なスピードで形にします。',
    accentColor: 'border-pop-orange text-pop-orange',
  },
  {
    title: 'Detail & Touch',
    subtitle: '手触りとUI/UXへのこだわり',
    description:
      '「動けばいい」で終わらせず、触れたときの気持ちよさ、見やすいレイアウト、心地よいマイクロインタラクションに妥協しません。',
    accentColor: 'border-pop-mint text-pop-mint',
  },
];

export const timelineData: TimelineItem[] = [
  {
    period: '2024.04',
    title: '大学入学（情報工学専攻）',
    subtitle: 'コンピュータサイエンスの探求開始',
    description:
      'アルゴリズム、データ構造、C言語など基礎を学びつつ、Webおよびモバイルアプリ開発の独学を開始。',
  },
  {
    period: '2025.08',
    title: 'UniTime 開発',
    subtitle: '学生生活の課題を解決する時間割アプリ',
    description:
      '大学の複雑な講義・教室管理を効率化するReact Nativeアプリを企画・開発。UI/UXデザインをHIGベースで設計。',
    badge: 'Mobile App',
  },
  {
    period: '2025.10',
    title: 'Study Stack 開発着手',
    subtitle: '忘却曲線を味方にする反復学習アプリ',
    description:
      '苦手カードの自動優先表示ロジックを搭載したカード学習アプリを開発。実機での快適なスワイプ操作を追求。',
    badge: 'Mobile App',
  },
  {
    period: '2025.12',
    title: 'ハッカソン 優秀賞 受賞',
    subtitle: 'フロントエンドリードとしてプロダクトを牽引',
    description:
      'チーム開発ハッカソンに参加。迅速なUIプロトタイピングと実装を行い、アイデアと完成度が高く評価され優秀賞を受賞。',
    badge: 'Award 🏆',
  },
  {
    period: '2026.02 - 現在',
    title: 'ポートフォリオ v2 制作 & 継続開発',
    subtitle: 'ネオブルータリズム × ポップカラー',
    description:
      '自身の開発ストーリーと制作物をより魅力的に伝えるため、階層構造を持つモダンなポートフォリオを構築。',
    badge: 'Current',
  },
];
