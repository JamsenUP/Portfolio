import { Quote, Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface TestimonialItem {
  quote: string;
  badge: string;
  author: string;
  role: string;
}

const testimonials: TestimonialItem[] = [
  {
    quote:
      "Разработал WebApp дейтинг-бота в рекордные сроки. Интеграция алгоритма верификации веса и свайп-механики превзошла все ожидания. Пользователи в восторге от плавности интерфейса!",
    badge: "+15 000 пользователей",
    author: "Александр",
    role: "CEO ScaleMate Telegram Bot",
  },
  {
    quote:
      "Премиальный сайт для элитной недвижимости полностью себя оправдал. PageSpeed 98/100, видео на фоне работает идеально плавно даже на мобильных. Конверсия VIP-заявок выросла в 3 раза.",
    badge: "+240% премиум-заявок",
    author: "Елена",
    role: "Маркетинг-директор Horizon Estate",
  },
  {
    quote:
      "Обратились за B2B-платформой с калькулятором расчетов и АИС ОССиГ. Результат — строгий промышленный дизайн, быстродействующие формы и полное соблюдение ТЗ.",
    badge: "Интеграция с АИС ОССиГ",
    author: "Игорь",
    role: "Технический директор ООО «Технопарк»",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 relative" id="testimonials">
      <div className="section-inner">
        <ScrollReveal delayMs={0}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#EADEC9] mb-3 block">
              РЕАЛЬНЫЕ ОТЗЫВЫ КЛИЕНТОВ // Отзывы Заказчиков
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F8F6F0] tracking-tight font-outfit">
              Что Говорят Заказчики
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <ScrollReveal key={item.author} delayMs={idx * 120}>
              <div className="glass-card p-8 rounded-2xl flex flex-col justify-between h-full border border-[#EADEC9]/20 hover:border-[#EADEC9]/50 hover:bg-[#6B594C]/15 transition-all duration-300 relative group">
                <Quote className="w-8 h-8 text-[#EADEC9]/30 mb-6 shrink-0" />

                <p className="text-[#D4C5B9] text-sm leading-relaxed italic mb-8 flex-1 font-inter">
                  &ldquo;{item.quote}&rdquo;
                </p>

                <div>
                  <div className="mb-4">
                    <span className="font-mono text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-[#EADEC9]/15 text-[#EADEC9] border border-[#EADEC9]/30 inline-flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#EADEC9]" />
                      {item.badge}
                    </span>
                  </div>

                  <div className="pt-4 border-t border-[#EADEC9]/15">
                    <div className="font-bold text-[#F8F6F0] text-base mb-0.5 font-outfit">
                      {item.author}
                    </div>
                    <div className="text-xs font-mono text-[#D4C5B9]">{item.role}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
