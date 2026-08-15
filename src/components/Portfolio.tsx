import Image from "next/image";
import { CheckCircle, ExternalLink } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface ProjectItem {
  title: string;
  badge: string;
  image: string;
  description: string;
  tasks: string[];
  link: string;
  linkText: string;
}

const projects: ProjectItem[] = [
  {
    title: "ScaleMate — Dating Bot",
    badge: "Telegram WebApp / Bot",
    image: "/project_scalemate.jpg",
    description:
      "Telegram WebApp / Bot с алгоритмом верификации веса, интерактивной очередью свайпов и высокопроизводительным бэкендом чатов.",
    tasks: [
      "Telegram WebApp & Bot UI",
      "Алгоритм верификации веса",
      "Интерактивный свайп анкет",
      "Бэкенд мэтчинга и чатов",
    ],
    link: "https://t.me/scalemate_test_bot",
    linkText: "Открыть бота (@scalemate_test_bot)",
  },
  {
    title: "OmniPrice Radar — Сканер скидок",
    badge: "E-Commerce / Real-time",
    image: "/project_omniprice.jpg",
    description:
      "Трекер цен в реальном времени для Ozon, Wildberries и Яндекс Маркета с графиками динамики цен (Chart.js) и подпиской на алерты.",
    tasks: [
      "Парсинг REST API маркетплейсов",
      "Графики динамики цен (Chart.js)",
      "Система алертов и подписок",
      "Фильтрация и экспорт в CSV",
    ],
    link: "https://omniprice-radar.vercel.app",
    linkText: "Перейти к сервису (omniprice-radar)",
  },
  {
    title: "Horizon Estate — Элитная недвижимость",
    badge: "Элитная Недвижимость / Next.js",
    image: "/project_horizon.jpg",
    description:
      "Веб-платформа премиум-класса для элитной недвижимости на Next.js с Bento-каталогом объектов и фоновым видео-таймлапсом.",
    tasks: [
      "Премиум дизайн с видео-фоном",
      "Bento Grid каталог объектов",
      "Оптимизация PageSpeed (98/100)",
      "Адаптивная верстка и микро-анимации",
    ],
    link: "https://horizon-estate-six.vercel.app",
    linkText: "Смотреть проект",
  },
  {
    title: "ООО «Технопарк»",
    badge: "B2B Web Platform / Next.js",
    image: "/project_tchpark.jpg",
    description:
      "Промышленная B2B эко-платформа по переработке отходов с калькулятором расчёта стоимости и интеграцией с системой АИС ОССиГ.",
    tasks: [
      "UX/UI дизайн в эко-стиле",
      "Интеграция АИС ОССиГ & ЭДО",
      "Калькулятор расчёта услуг",
      "Next.js App Router & SEO",
    ],
    link: "https://tchpark.ru",
    linkText: "Перейти на сайт (tchpark.ru)",
  },
  {
    title: "Fantastic Boba — Web App",
    badge: "Web Application / Netlify",
    image: "/project_boba.jpg",
    description:
      "Веб-приложение с защищенным доступом, развернутое на платформе Netlify с отзывчивым UI и Edge-авторизацией.",
    tasks: [
      "Разработка Web App на Netlify",
      "Интерфейсы защищенного доступа",
      "Адаптивный компонентный UI",
      "Клиентская оптимизация скорости",
    ],
    link: "https://fantastic-boba-873bc1.netlify.app",
    linkText: "Открыть приложение",
  },
  {
    title: "Portfolio Generator",
    badge: "Web App (Vite / React)",
    image: "/project_generator.jpg",
    description:
      "Конструктор персональных сайтов-портфолио для разработчиков на Vite/React с динамической компиляцией тем.",
    tasks: [
      "Кастомный конструктор блоков",
      "Динамическая смена тем и стилей",
      "Оптимизация сборки в Vite",
      "Клиентский генератор экспорта",
    ],
    link: "https://portfolio-generator-vite.vercel.app/",
    linkText: "Смотреть проект",
  },
];

export default function Portfolio() {
  return (
    <section className="py-24 relative" id="portfolio">
      <div className="section-inner">
        <ScrollReveal delayMs={0}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#EADEC9] mb-3 block">
              3D PARALLAX GALLERY
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F8F6F0] tracking-tight font-outfit">
              Выбранные Проекты
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ScrollReveal key={project.title} delayMs={(idx % 3) * 100}>
              <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col group border border-[#EADEC9]/20 hover:border-[#EADEC9]/50 transition-all duration-300">
                <div className="relative aspect-video w-full overflow-hidden bg-[#2B221C]/60">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#2B221C]/85 backdrop-blur-md px-3 py-1 rounded-full border border-[#EADEC9]/30">
                    <span className="font-mono text-[11px] text-[#EADEC9] uppercase tracking-wider">
                      {project.badge}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#F8F6F0] mb-3 group-hover:text-[#EADEC9] transition-colors font-outfit">
                      {project.title}
                    </h3>
                    <p className="text-[#D4C5B9] text-sm leading-relaxed mb-6 font-inter">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <span className="font-mono text-xs text-[#EADEC9] uppercase tracking-wider block mb-3">
                        Выполненные работы:
                      </span>
                      <ul className="space-y-2">
                        {project.tasks.map((task) => (
                          <li key={task} className="flex items-center text-xs text-[#D4C5B9]">
                            <CheckCircle className="w-3.5 h-3.5 text-[#EADEC9] mr-2 shrink-0" />
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-mono font-medium text-[#EADEC9] hover:text-[#F8F6F0] transition-colors group/link mt-auto pt-2"
                  >
                    <span>{project.linkText}</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
