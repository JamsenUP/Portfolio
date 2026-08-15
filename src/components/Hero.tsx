import { Sparkles, Zap, TrendingUp, Target, CheckCircle2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  const stats = [
    {
      label: "PageSpeed",
      value: "98/100",
      change: "▲ +12% Index",
      icon: Zap,
    },
    {
      label: "Рост Трафика",
      value: "+340%",
      change: "▲ SEO Index",
      icon: TrendingUp,
    },
    {
      label: "Конверсия",
      value: "8.4%",
      change: "▲ Avg Index",
      icon: Target,
    },
    {
      label: "Проектов в срок",
      value: "100%",
      change: "▲ SLA Index",
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="hero-section relative min-h-screen pt-36 pb-20 overflow-hidden" id="hero">
      <div className="hero-glow-1" />
      <div className="hero-glow-2" />

      <div className="section-inner relative z-10">
        <ScrollReveal delayMs={0}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-glow mb-6">
            <Sparkles className="w-4 h-4 text-[#EADEC9] animate-pulse" />
            <span className="font-mono text-xs tracking-wider uppercase text-[#EADEC9]">
              PORCELAIN &amp; TRUFFLE // SPATIAL GLASS
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delayMs={80}>
          <h1 className="hero-title text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#F8F6F0] tracking-tight mb-6 max-w-4xl font-outfit">
            Сайты, Которые <br className="hidden sm:inline" />
            <span className="gradient-accent-text">Работают И Приносят Заявки</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delayMs={160}>
          <p className="hero-subtitle text-lg sm:text-xl text-[#D4C5B9] max-w-2xl mb-10 leading-relaxed font-inter">
            Разрабатываю и продвигаю сайты — от идеи до первых клиентов из поиска. Индивидуальная
            архитектура, PageSpeed 98+, SEO продвижение и Telegram WebApp интерфейсы.
          </p>
        </ScrollReveal>

        <ScrollReveal delayMs={240}>
          <div className="flex flex-wrap gap-4 mb-16">
            <a href="#services" className="btn-primary-spatial">
              Выбрать услугу
            </a>
            <a href="#contact" className="btn-ghost-spatial">
              Связаться
            </a>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <ScrollReveal key={stat.label} delayMs={300 + idx * 60}>
                <div className="glass-card p-6 rounded-2xl relative overflow-hidden group hover:border-[#EADEC9]/50 hover:bg-[#6B594C]/20 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-[#D4C5B9] uppercase tracking-wider">
                      {stat.label}
                    </span>
                    <Icon className="w-5 h-5 text-[#EADEC9] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-3xl font-extrabold text-[#F8F6F0] mb-1 font-outfit">
                    {stat.value}
                  </div>
                  <div className="font-mono text-xs text-[#EADEC9] flex items-center gap-1">
                    <span>{stat.change}</span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
