import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Github } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const subject = encodeURIComponent(
      `【ポートフォリオ経由】${formData.name} さんからのお問い合わせ`
    );
    const body = encodeURIComponent(
      `お名前: ${formData.name}\nメールアドレス: ${formData.email}\n\n${formData.message}`
    );

    window.location.href = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
    setTimeout(() => setIsSending(false), 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactLinks = [
    { icon: Mail, label: 'Email', value: 'your-email@example.com' },
    { icon: Github, label: 'GitHub', value: 'github.com/your-handle' },
  ];

  return (
    <section id="contact" className="py-28 bg-canvas-subtle relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 text-xs font-mono tracking-widest text-ink-muted uppercase mb-4">
            <span>05</span>
            <span className="w-8 h-px bg-ink-faint" />
            <span>Contact</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left: Text & Links */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-ink font-display tracking-tight mb-4">
              一緒に、理想を形に
              <br />
              しませんか？
            </h2>
            <p className="text-sm text-ink-secondary leading-relaxed mb-8">
              Webアプリ・スマホアプリの開発依頼、
              <br />
              案件のご相談、カジュアル面談など
              <br />
              お気軽にご連絡ください。
            </p>

            {/* Contact Links */}
            <div className="space-y-4">
              {contactLinks.map((link, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-ink-secondary">
                  <div className="w-8 h-8 rounded-lg bg-white border border-black/[0.06] flex items-center justify-center shadow-card">
                    <link.icon size={14} className="text-ink-secondary" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-ink-muted uppercase">{link.label}</p>
                    <p className="text-xs font-mono">{link.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="lg:col-span-7 relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              {/* Name */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-name"
                  className="text-xs text-ink-secondary"
                >
                  お名前
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="山田 太郎"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-black/[0.08] text-sm text-ink placeholder:text-ink-faint focus-ring"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-email"
                  className="text-xs text-ink-secondary"
                >
                  メールアドレス
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@mail.com"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-black/[0.08] text-sm text-ink placeholder:text-ink-faint focus-ring"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-message"
                  className="text-xs text-ink-secondary"
                >
                  ご相談内容・お問い合わせ内容
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="ご相談内容をご入力ください..."
                  className="w-full px-4 py-3 rounded-xl bg-white border border-black/[0.08] text-sm text-ink placeholder:text-ink-faint focus-ring resize-none"
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={isSending}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-ink text-white font-medium text-sm hover:bg-ink/90 transition-colors disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>{isSending ? '送信中...' : '送信する'}</span>
                <ArrowRight size={16} />
              </motion.button>
            </form>

            {/* Handwritten decoration */}
            <motion.p
              className="absolute -right-4 bottom-0 text-4xl sm:text-5xl font-handwritten text-ink-faint/30 -rotate-6 select-none pointer-events-none hidden lg:block"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Let's shape
              <br />
              your ideal.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
