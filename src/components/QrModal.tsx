import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export interface AppItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  qrImage: string;
}

interface QrModalProps {
  app: AppItem | null;
  onClose: () => void;
}

export const QrModal: React.FC<QrModalProps> = ({ app, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (app) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [app, onClose]);

  if (!app) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="relative w-full max-w-sm rounded-xl p-6 border border-white/[0.12] bg-[#0c0e14] shadow-2xl text-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded text-neutral-400 hover:text-white hover:bg-white/[0.06] transition-colors"
          aria-label="閉じる"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <p className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
          Expo Go Preview
        </p>

        <h3 className="text-xl font-semibold text-white mb-5">
          {app.title}
        </h3>

        {/* QR Frame */}
        <div className="mx-auto w-52 h-52 rounded-lg bg-white p-3 shadow flex items-center justify-center mb-5">
          <img
            src={app.qrImage}
            alt={`${app.title} QRコード`}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Instructions */}
        <div className="p-3 rounded border border-white/[0.06] bg-white/[0.02] text-xs text-neutral-400 text-left mb-5 space-y-1">
          <p className="text-neutral-300 font-medium">利用手順：</p>
          <p>1. スマートフォンに <strong>Expo Go</strong> アプリをインストール</p>
          <p>2. iOSはカメラ、AndroidはExpo Goスキャナーで読み取り</p>
        </div>

        {/* Close CTA */}
        <button
          onClick={onClose}
          className="w-full py-2.5 rounded border border-white/[0.1] text-xs font-mono text-neutral-300 hover:text-white hover:bg-white/[0.05] transition-colors"
        >
          閉じる
        </button>
      </div>
    </div>
  );
};
