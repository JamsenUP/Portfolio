import {
  PanelsTopLeft,
  Building2,
  ShoppingBag,
  TrendingUp,
  Megaphone,
  Wrench,
  ArrowRight,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface ServiceItem {
  title: string;
  badge?: string;
  description: string;
  duration: string;
  icon: typeof PanelsTopLeft;
}

const services: ServiceItem[] = [
  {
    title: "Лендинг",
    badge: "Популярное",
    description:
      "Одностраничный сайт, который конвертирует посетителей в клиентов. Адаптивный дизайн, быстрая загрузка и продуманная структура.",
    duration: "Срок: от 5 дней",
    icon: PanelsTopLeft,
  },
  {
    title: "Корпоративный сайт",
    description:
      "Многостраничный сайт для бизнеса — каталог услуг, портфолио, контакты и презентационный блок.",
    duration: "Срок: от 10 дней",
    icon: Building2,
  },
  {
    title: "Интернет-магазин",
    description:
      "Каталог товаров, корзина, онлайн-оплата, интеграция с CRM, складским учетом и доставкой.",
    duration: "Срок: от 14 дней",
    icon: ShoppingBag,
  },
  {
    title: "SEO-продвижение",
    description:
      "Аудит, техническая оптимизация, контент-стратегия. Рост органического трафика в Яндексе и Google.",
    duration: "Срок: от 30 дней",
    icon: TrendingUp,
  },
  {
    title: "Контекстная реклама",
    description:
      "Настройка и ведение рекламных кампаний в Яндекс.Директ. Быстрый старт целевых продаж.",
    duration: "Срок: от 3 дней",
    icon: Megaphone,
  },
  {
    title: "Поддержка и развитие",
    description:
      "Техническая поддержка, обновления компонентов, доработки функционала и мониторинг 24/7.",
    duration: "Срок: ежемесячно",
    icon: Wrench,
  },
];

export default function Services() {
  return (
    <section className="py-24 relative" id="services">
      <div className="section-inner">
        <ScrollReveal delayMs={0}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#EADEC9] mb-3 block">
              SERVICES &amp; SOLUTIONS // NO HIDDEN FEES
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F8F6F0] tracking-tight font-outfit">
              Что Я Могу Для Вас Сделать
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.title} delayMs={idx * 80}>
                <div className="glass-card p-8 rounded-2xl flex flex-col justify-between h-full border border-[#EADEC9]/20 hover:border-[#EADEC9]/50 hover:bg-[#6B594C]/15 transition-all duration-300 group">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3 rounded-xl bg-[#6B594C]/30 border border-[#EADEC9]/20 group-hover:border-[#EADEC9]/40 transition-colors">
                        <Icon className="w-6 h-6 text-[#EADEC9]" />
                      </div>
                      {service.badge && (
                        <span className="font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full bg-[#EADEC9]/20 text-[#EADEC9] border border-[#EADEC9]/40">
                          {service.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-[#F8F6F0] mb-3 group-hover:text-[#EADEC9] transition-colors font-outfit">
                      {service.title}
                    </h3>
                    <p className="text-[#D4C5B9] text-sm leading-relaxed mb-6 font-inter">
                      {service.description}
                    </p>
                  </div>

                  <div>
                    <div className="font-mono text-xs text-[#EADEC9] mb-6 inline-block px-3 py-1.5 rounded-lg bg-[#2B221C]/80 border border-[#EADEC9]/20">
                      {service.duration}
                    </div>
                    <a
                      href="#contact"
                      className="w-full py-3 px-4 rounded-xl font-mono text-xs uppercase tracking-wider text-[#F8F6F0] bg-[#6B594C]/40 border border-[#EADEC9]/30 hover:bg-[#EADEC9] hover:text-[#2B221C] transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer"
                    >
                      <span>Выбрать</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
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
