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

    window.location.href = `mailto:kohma0714.t@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => setIsSending(false), 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kohma0714.t@gmail.com',
      href: 'mailto:kohma0714.t@gmail.com',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/kohma0714t-arch',
      href: 'https://github.com/kohma0714t-arch',
    },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden bg-section-alt">
      {/* Background texture */}
      <div className="text-texture text-[clamp(80px,12vw,180px)] bottom-8 right-[-3%] opacity-[0.06] text-white">
        CONTACT
      </div>

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono tracking-[0.2em] text-pop-mint font-semibold">06</span>
            <span className="w-8 h-px bg-pop-mint" />
            <span className="text-xs font-mono tracking-[0.2em] text-white/50 uppercase">Contact</span>
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight mb-4">
              一緒に、つくりませんか？
            </h2>
            <p className="text-sm text-white/60 leading-relaxed mb-8">
              Webアプリ・スマホアプリの開発依頼、
              <br />
              案件のご相談、カジュアル面談など
              <br />
              お気軽にご連絡ください。
            </p>

            {/* Contact Links */}
            <div className="space-y-4">
              {contactLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 border-2 border-white/20 flex items-center justify-center group-hover:border-pop-mint group-hover:bg-pop-mint/10 transition-all">
                    <link.icon size={16} className="text-white/60 group-hover:text-pop-mint transition-colors" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-white/40 uppercase">{link.label}</p>
                    <p className="text-xs font-mono text-white/70 group-hover:text-white transition-colors">{link.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-name"
                  className="text-xs text-white/50 font-mono uppercase tracking-wider"
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
                  className="w-full px-4 py-3 bg-white/5 border-2 border-white/15 text-sm text-white placeholder:text-white/20 focus-ring"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-email"
                  className="text-xs text-white/50 font-mono uppercase tracking-wider"
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
                  className="w-full px-4 py-3 bg-white/5 border-2 border-white/15 text-sm text-white placeholder:text-white/20 focus-ring"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-message"
                  className="text-xs text-white/50 font-mono uppercase tracking-wider"
                >
                  ご相談内容
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="ご相談内容をご入力ください..."
                  className="w-full px-4 py-3 bg-white/5 border-2 border-white/15 text-sm text-white placeholder:text-white/20 focus-ring resize-none"
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={isSending}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-pop-orange text-white font-bold text-sm border-2 border-pop-orange hover:bg-orange-600 hover:border-orange-600 transition-colors disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>{isSending ? '送信中...' : '送信する'}</span>
                <ArrowRight size={16} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
