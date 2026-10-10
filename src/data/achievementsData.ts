import { AchievementItem } from '../types/portfolio';
import { getAssetUrl } from '../utils/assets';

export const achievementsData: AchievementItem[] = [
  {
    id: 'procthon-2026',
    number: '05',
    title: '生成AI Procthon 2026 優秀賞',
    subtitle: 'セリオ株式会社 主催 / 岡山の社会課題 × 生成AI ハッカソン',
    award: '優秀賞 🏆',
    date: '2026.06.13 - 2026.07.28',
    team: 'チーム「岡山ゴミ箱探検隊」',
    role: 'フロントエンド実装 / UI・UXデザイン / プレゼンテーションUI',
    description:
      '岡山の社会課題を生成AIで解決するハッカソン「生成AI Procthon 2026」に参加し、チーム「岡山ゴミ箱探検隊」として約1ヶ月間の開発を経て優秀賞を受賞しました。',
    longDescription: [
      '岡山の地域社会が抱えるリアルな課題に対し、生成AIの技術を実用的かつ親しみやすい形で落とし込む約1ヶ月間の実践的ハッカソンでした。',
      'チーム「岡山ゴミ箱探検隊」として、課題のペイン発掘からアイデアの具体化、UI/UX設計、フロントエンド実装、生成AI APIの連携、成果発表プレゼンテーションまでをチームメンバーと協働して完遂しました。',
      '審査員からは、生成AIの効果的な活用アプローチに加え、ユーザーが直感的に使いたくなるUIの完成度と創意工夫が高く評価され、見事「優秀賞」を獲得しました。',
    ],
    problemAndSolution: {
      problem:
        '観光地や街頭におけるゴミ箱の不足・ポイ捨て問題、および地域の美化活動において、市民や観光客が楽しく主体的に参加できる仕組みが不足していたこと。',
      solution:
        '生成AIと位置情報を組み合わせ、ゴミ箱の発見・共有や街の美化をゲーミフィケーション感覚で楽しく行える直感的UIのWeb/モバイルアプリを構築。',
    },
    keyFeatures: [
      '生成AIを活用したゴミ・リサイクル分別の画像認識・案内機能',
      '地図上で直感的にゴミ箱位置や美化スポットを把握できるマップUI',
      '学生や観光客が気軽に参加したくなるポップで親しみやすいインターフェース',
      'チームメンバー間のリアルタイム同期とスムーズな操作感',
    ],
    technicalHighlights: [
      '短期間での高速プロトタイピングを可能にするコンポーネント指向フロントエンド設計',
      'AI APIレスポンスのストリーミング表示や非同期処理の最適化による快適なUX',
      'TypeScriptとモダンCSSによる型安全かつレスポンシブなUI実装',
    ],
    photos: [
      {
        src: getAssetUrl('/images/hackathon_pic1.jpg'),
        alt: 'ハッカソン優秀賞受賞の様子',
        caption: '授賞式での記念写真。約1ヶ月の開発期間を駆け抜け、チームで優秀賞を勝ち取りました。',
      },
      {
        src: getAssetUrl('/images/hackathon_pic2.jpg'),
        alt: '優秀賞 賞状',
        caption: 'セリオ株式会社より授与された「生成AI Procthon 2026」優秀賞の表彰状。',
      },
    ],
    externalLink: 'https://www.serio.inc/topics/2026/07/28/20260728/',
    linkText: '成果発表レポート（セリオ株式会社）',
  },
];
