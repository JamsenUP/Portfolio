"use client";

import { useState } from "react";
import {
  Wrench,
  PanelsTopLeft,
  Smartphone,
  Bot,
  Send,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  X,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export interface ServiceDetail {
  id: string;
  title: string;
  price: string;
  duration: string;
  badge?: string;
  shortDesc: string;
  features: string[];
  requirements: string[];
  techOrDetails?: string[];
  icon: typeof Wrench;
}

export const servicesData: ServiceDetail[] = [
  {
    id: "fix",
    title: "Доработка сайта",
    price: "от 1 000 ₽",
    duration: "до 2 дней",
    badge: "Быстрый старт",
    icon: Wrench,
    shortDesc:
      "Правка верстки, стилей, логики и адаптивности. Оперативное устранение багов и улучшение визуала.",
    features: [
      "Правка структуры страниц: перенос блоков, меню, шапки и подвала",
      "Доработка CSS: цвета, шрифты, отступы, выравнивание и аккуратность",
      "Адаптация под мобильные: исправление верстки на смартфонах и планшетах",
      "Правка скриптов: слайдеры, табы, модалки и интерактивные элементы",
    ],
    requirements: [
      "FTP-доступ к сайту (хост, логин, пароль) или архив с файлами проекта",
      "Четкое описание задач по пунктам — что именно нужно исправить",
    ],
    techOrDetails: ["HTML/CSS/JS", "React/Next.js", "WordPress", "Tilda"],
  },
  {
    id: "turnkey",
    title: "Сайт под ключ",
    price: "от 15 000 ₽",
    duration: "3–7 дней",
    badge: "Популярное",
    icon: PanelsTopLeft,
    shortDesc:
      "Адаптивный лендинг или многостраничный сайт под ключ: продуманная структура, чистый код и подготовка к запуску.",
    features: [
      "Индивидуальная структура и аккуратная верстка (Next.js / React / HTML)",
      "100% адаптивность под компьютеры, планшеты и смартфоны",
      "Формы заявок с мгновенными уведомлениями в Telegram и на Email",
      "Плавная базовая анимация, интерактив, модальные окна и слайдеры",
      "Базовая SEO-оптимизация (Title, Description, H1-H2, Sitemap, Robots.txt)",
    ],
    requirements: [
      "Макет в Figma / PSD / XD или ссылки на понравившиеся примеры",
      "Если макета нет — описание задачи: тип сайта, количество секций, тексты и фото",
      "Логотип и фирменные цвета (при наличии)",
    ],
    techOrDetails: ["Next.js 15", "React 19", "Tailwind CSS", "SEO Ready"],
  },
  {
    id: "twa",
    title: "Разработка Telegram Mini Apps",
    price: "от 20 000 ₽",
    duration: "от 7 дней",
    badge: "Тренд 2026",
    icon: Smartphone,
    shortDesc:
      "Создание современных Telegram Web Apps (TWA) с геймификацией, сложной бизнес-логикой и интеграцией с ботом.",
    features: [
      "Разработка TWA на стеке React / Next.js с нативным UX мессенджера",
      "Игровая механика, свайпы, кастомные анимации и интерактив",
      "Бэкенд логики, базы данных, авторизация через Telegram initData",
      "Интеграция с платежными системами, крипто-кошельками и CRM",
    ],
    requirements: [
      "Описание идеи и целей приложения, сценарии поведения пользователя",
      "Примерная структура интерфейса и ключевой функционал",
      "Менеджер предоставит бриф для детального расчета стоимости",
    ],
    techOrDetails: ["Telegram WebApp API", "FastAPI / Node.js", "PostgreSQL / Redis"],
  },
  {
    id: "ai-bot",
    title: "AI-ассистент & Бот для бизнеса",
    price: "от 15 000 ₽",
    duration: "до 10 дней",
    badge: "AI & Автоматизация",
    icon: Bot,
    shortDesc:
      "Кастомные Telegram-боты и AI-ассистенты для автоматизации рутины, продаж, сбора данных и поддержки клиентов.",
    features: [
      "Анализ бизнес-процессов и выявление точек для автоматизации",
      "Разработка индивидуальных AI-ботов под задачи компании",
      "Интеграция с CRM: Bitrix24, AmoCRM, Notion, Google Sheets (+7 500 ₽)",
      "Скрипты рассылок, парсинг маркетплейсов/соцсетей, автозалив",
      "Обучение сотрудников и полное техническое сопровождение",
    ],
    requirements: [
      "Кратко — что отнимает время и что хочется делегировать автоматике",
      "Описание текущих процессов и используемых сервисов (CRM, таблицы)",
      "Готовое ТЗ или просто концепт идеи — проработаем вместе",
    ],
    techOrDetails: ["Python / Node.js", "OpenAI / Claude API", "CRM Integrations"],
  },
  {
    id: "tg-channel",
    title: "Ведение Telegram-канала эксперта",
    price: "15 000 ₽",
    duration: "14 постов / 1 мес",
    badge: "Контент & Продажи",
    icon: Send,
    shortDesc:
      "Комплексная упаковка и ведение Telegram-канала: превращаем контент в регулярный источник прогретых заявок и продаж.",
    features: [
      "Разработка контент-стратегии и позиционирования под вашу нишу",
      "Визуальная упаковка канала (аватар, описание, закрепленное сообщение)",
      "Написание 14 экспертных и продающих постов с высоким вовлечением",
      "Создание авторского визуала и коротких видео-форматов",
      "Аналитика эффективности, отчетность и рекомендации по масштабированию",
    ],
    requirements: [
      "Доступы к Telegram-каналу для публикаций",
      "Ссылки на сайт, портфолио или другие соцсети",
      "Информация о проекте, целевой аудитории и ключевых продуктах",
    ],
    techOrDetails: ["Копирайтинг", "SMM-стратегия", "Воронки продаж"],
  },
  {
    id: "seo",
    title: "SEO-продвижение & Трафик",
    price: "от 30 000 ₽",
    duration: "от 30 дней",
    badge: "Лиды из поиска",
    icon: TrendingUp,
    shortDesc:
      "Комплексная техническая и поисковая оптимизация. Вывод сайта в ТОП Яндекса и Google и долгосрочный рост трафика.",
    features: [
      "Глубокий технический и юзабилити аудит сайта",
      "Оптимизация скорости загрузки до PageSpeed 98/100 (Core Web Vitals)",
      "Сбор полного семантического ядра и кластеризация поисковых запросов",
      "Внутренняя перелинковка, оптимизация метатегов и текстов",
      "Ежемесячная прозрачная аналитика позиций и роста органики",
    ],
    requirements: [
      "Адрес сайта и доступы к Яндекс.Метрике / Google Analytics",
      "Список приоритетных направлений или услуг для продвижения",
    ],
    techOrDetails: ["PageSpeed 98+", "Яндекс.Вебмастер", "Google Search Console"],
  },
];

export default function Services() {
  const [activeModal, setActiveModal] = useState<ServiceDetail | null>(null);

  const handleSelectService = (title: string) => {
    if (typeof window !== "undefined") {
      const selectElem = document.getElementById("service-select") as HTMLSelectElement | null;
      if (selectElem) {
        selectElem.value = title;
        // Trigger change event
        selectElem.dispatchEvent(new Event("change", { bubbles: true }));
      }
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="py-24 relative" id="services">
      <div className="section-inner">
        <ScrollReveal delayMs={0}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#EADEC9] mb-3 block">
              SERVICES &amp; SOLUTIONS // TRANSPARENT PRICING
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F8F6F0] tracking-tight font-outfit">
              Услуги И Стоимость
            </h2>
            <p className="text-[#D4C5B9] text-base mt-4 max-w-xl mx-auto font-inter">
              Индивидуальный подход к каждому проекту: от точечных правок кода до запуска AI-ботов и
              масштабных веб-платформ.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.id} delayMs={(idx % 3) * 80}>
                <div className="glass-card p-8 rounded-2xl flex flex-col justify-between h-full border border-[#EADEC9]/20 hover:border-[#EADEC9]/50 hover:bg-[#6B594C]/15 transition-all duration-300 group relative">
                  <div>
                    {/* Header: Icon + Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3.5 rounded-xl bg-[#6B594C]/30 border border-[#EADEC9]/20 group-hover:border-[#EADEC9]/50 transition-colors">
                        <Icon className="w-6 h-6 text-[#EADEC9]" />
                      </div>
                      {service.badge && (
                        <span className="font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full bg-[#EADEC9]/15 text-[#EADEC9] border border-[#EADEC9]/30">
                          {service.badge}
                        </span>
                      )}
                    </div>

                    {/* Title & Short Desc */}
                    <h3 className="text-xl font-bold text-[#F8F6F0] mb-2.5 group-hover:text-[#EADEC9] transition-colors font-outfit">
                      {service.title}
                    </h3>
                    <p className="text-[#D4C5B9] text-xs leading-relaxed mb-5 font-inter">
                      {service.shortDesc}
                    </p>

                    {/* Feature bullets */}
                    <div className="space-y-2 mb-6 pt-4 border-t border-[#EADEC9]/15">
                      {service.features.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-[#D4C5B9]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#EADEC9] shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    {/* Price & Duration */}
                    <div className="flex items-center justify-between mb-5 px-3.5 py-2.5 rounded-xl bg-[#2B221C]/90 border border-[#EADEC9]/20">
                      <span className="font-outfit font-bold text-base text-[#F8F6F0]">
                        {service.price}
                      </span>
                      <span className="font-mono text-xs text-[#EADEC9]">{service.duration}</span>
                    </div>

                    {/* Action buttons */}
                    <div className="grid grid-cols-2 gap-2.5">
                      <button
                        onClick={() => setActiveModal(service)}
                        className="py-3 px-3 rounded-xl font-mono text-[11px] uppercase tracking-wider text-[#D4C5B9] bg-[#2B221C]/60 border border-[#EADEC9]/20 hover:text-[#F8F6F0] hover:border-[#EADEC9]/40 transition-colors flex items-center justify-center gap-1.5"
                      >
                        <HelpCircle className="w-3.5 h-3.5" />
                        <span>Детали</span>
                      </button>

                      <button
                        onClick={() => handleSelectService(service.title)}
                        className="py-3 px-3 rounded-xl font-mono text-[11px] uppercase tracking-wider text-[#2B221C] bg-gradient-to-r from-[#EADEC9] to-[#D4C5B9] hover:from-[#F8F6F0] hover:to-[#EADEC9] transition-all font-bold flex items-center justify-center gap-1.5 shadow-md"
                      >
                        <span>Заказать</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Modal: Full Service Details & Requirements */}
      {activeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
          <div className="glass-card max-w-2xl w-full rounded-2xl p-6 sm:p-8 border border-[#EADEC9]/40 max-h-[90vh] overflow-y-auto relative shadow-2xl">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 p-2 text-[#D4C5B9] hover:text-[#F8F6F0] rounded-lg bg-[#2B221C]/80 border border-[#EADEC9]/20 transition-colors"
              aria-label="Закрыть"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs uppercase px-3 py-1 rounded-full bg-[#EADEC9]/15 text-[#EADEC9] border border-[#EADEC9]/30">
                {activeModal.badge || "Услуга"}
              </span>
              <span className="font-mono text-xs text-[#D4C5B9]">{activeModal.duration}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F8F6F0] mb-2 font-outfit">
              {activeModal.title}
            </h3>

            <div className="text-xl font-bold text-[#EADEC9] mb-6 font-outfit">
              {activeModal.price}
            </div>

            <p className="text-[#D4C5B9] text-sm leading-relaxed mb-6 font-inter">
              {activeModal.shortDesc}
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#EADEC9] mb-3">
                  Что входит в работу:
                </h4>
                <ul className="space-y-2.5">
                  {activeModal.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#D4C5B9]">
                      <CheckCircle2 className="w-4 h-4 text-[#EADEC9] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#EADEC9] mb-3">
                  Что нужно для заказа:
                </h4>
                <ul className="space-y-2 bg-[#2B221C]/80 p-4 rounded-xl border border-[#EADEC9]/20">
                  {activeModal.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#D4C5B9]">
                      <span className="text-[#EADEC9] font-mono font-bold">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {activeModal.techOrDetails && (
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[#EADEC9] mb-2">
                    Стек и форматы:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModal.techOrDetails.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-[#6B594C]/30 text-[#F8F6F0] border border-[#EADEC9]/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 pt-6 border-t border-[#EADEC9]/20 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  const title = activeModal.title;
                  setActiveModal(null);
                  handleSelectService(title);
                }}
                className="w-full btn-primary-spatial !py-3 font-mono text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2"
              >
                <span>Заказать эту услугу</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveModal(null)}
                className="btn-ghost-spatial !py-3 font-mono text-xs uppercase tracking-wider text-center"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
