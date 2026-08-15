"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    service: "Лендинг",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission / webhook
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section className="py-24 relative" id="contact">
      <div className="section-inner">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Info & Links */}
          <ScrollReveal delayMs={0} className="lg:col-span-5">
            <div className="space-y-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#EADEC9] block">
                LET&apos;S TALK // GET IN TOUCH
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F8F6F0] tracking-tight font-outfit">
                Обсудим проект
              </h2>
              <p className="text-[#D4C5B9] text-base leading-relaxed font-inter">
                Опишите задачу — я свяжусь с вами в течение нескольких часов и предложу
                оптимальное архитектурное решение.
              </p>

              <div className="pt-4 flex flex-col gap-4">
                <a
                  href="https://t.me/jamsenbang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-4 rounded-xl flex items-center gap-3 border border-[#EADEC9]/25 hover:border-[#EADEC9]/60 hover:bg-[#6B594C]/30 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#6B594C]/40 border border-[#EADEC9]/20 flex items-center justify-center text-[#EADEC9] group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 1 0 24 12.056A12.013 12.013 0 0 0 11.944 0Zm5.654 8.22l-1.736 8.19c-.13.586-.47.73-.952.454l-2.63-1.938l-1.27 1.22c-.14.138-.258.254-.53.254l.19-2.684l4.876-4.404c.213-.19-.046-.295-.33-.106l-6.03 3.796l-2.596-.81c-.565-.176-.576-.565.118-.837l10.148-3.91c.47-.176.882.106.73.837l-.002-.002Z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#D4C5B9] uppercase">Telegram</div>
                    <div className="text-sm font-semibold text-[#F8F6F0] group-hover:text-[#EADEC9] transition-colors">
                      @jamsenbang
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:jamsenbang@mail.ru"
                  className="glass-card p-4 rounded-xl flex items-center gap-3 border border-[#EADEC9]/25 hover:border-[#EADEC9]/60 hover:bg-[#6B594C]/30 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#6B594C]/40 border border-[#EADEC9]/20 flex items-center justify-center text-[#EADEC9] group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#D4C5B9] uppercase">Email</div>
                    <div className="text-sm font-semibold text-[#F8F6F0] group-hover:text-[#EADEC9] transition-colors">
                      jamsenbang@mail.ru
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Contact Form */}
          <ScrollReveal delayMs={120} className="lg:col-span-7">
            <div className="glass-card p-8 rounded-2xl border border-[#EADEC9]/25 relative overflow-hidden">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#EADEC9]/20 border border-[#EADEC9]/40 flex items-center justify-center mx-auto text-[#EADEC9]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#F8F6F0] font-outfit">Заявка отправлена!</h3>
                  <p className="text-[#D4C5B9] text-sm max-w-md mx-auto font-inter">
                    Спасибо за обращение. Я свяжусь с вами в ближайшее время через Telegram или email.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", contact: "", service: "Лендинг", message: "" });
                    }}
                    className="btn-ghost-spatial !py-2.5 !px-6 text-xs font-mono mt-4 uppercase"
                  >
                    Отправить ещё одно сообщение
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#D4C5B9] mb-2 tracking-wider">
                        Ваше Имя
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Алексей"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#2B221C]/90 border border-[#EADEC9]/30 rounded-xl px-4 py-3 text-[#F8F6F0] placeholder-[#6B594C] focus:outline-none focus:border-[#EADEC9] transition-colors text-sm font-inter"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-[#D4C5B9] mb-2 tracking-wider">
                        Telegram / Телефон / Email
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="@username или почта"
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        className="w-full bg-[#2B221C]/90 border border-[#EADEC9]/30 rounded-xl px-4 py-3 text-[#F8F6F0] placeholder-[#6B594C] focus:outline-none focus:border-[#EADEC9] transition-colors text-sm font-inter"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#D4C5B9] mb-2 tracking-wider">
                      Интересующая Услуга
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#2B221C]/90 border border-[#EADEC9]/30 rounded-xl px-4 py-3 text-[#F8F6F0] focus:outline-none focus:border-[#EADEC9] transition-colors text-sm font-inter"
                    >
                      <option value="Лендинг" className="bg-[#2B221C] text-[#F8F6F0]">
                        Лендинг (от 5 дней)
                      </option>
                      <option value="Корпоративный сайт" className="bg-[#2B221C] text-[#F8F6F0]">
                        Корпоративный сайт (от 10 дней)
                      </option>
                      <option value="Интернет-магазин" className="bg-[#2B221C] text-[#F8F6F0]">
                        Интернет-магазин (от 14 дней)
                      </option>
                      <option value="SEO-продвижение" className="bg-[#2B221C] text-[#F8F6F0]">
                        SEO-продвижение (от 30 дней)
                      </option>
                      <option value="Контекстная реклама" className="bg-[#2B221C] text-[#F8F6F0]">
                        Контекстная реклама (от 3 дней)
                      </option>
                      <option value="Поддержка и развитие" className="bg-[#2B221C] text-[#F8F6F0]">
                        Поддержка и развитие
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#D4C5B9] mb-2 tracking-wider">
                      О Проекте / Пожелания
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Расскажите коротко о вашей задаче, сроках и ожиданиях..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#2B221C]/90 border border-[#EADEC9]/30 rounded-xl px-4 py-3 text-[#F8F6F0] placeholder-[#6B594C] focus:outline-none focus:border-[#EADEC9] transition-colors text-sm font-inter resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-primary-spatial !py-4 font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Отправка...</span>
                    ) : (
                      <>
                        <span>Обсудить Проект</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center font-mono text-[11px] text-[#6B594C]">
                    Отвечаю обычно в течение 1–2 часов
                  </p>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
