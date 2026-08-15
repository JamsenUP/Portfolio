# Jamsen — Kinetic Spatial Glass Portfolio

> Современное высокопроизводительное портфолио веб-разработчика в эстетике **Kinetic Spatial Glass** и минеральной палитре **Deep Truffle & Oat**.

Живая версия: [jamsen.vercel.app](https://jamsen.vercel.app)

---

## 🛠 Стек технологий

- **Фреймворк:** [Next.js 15](https://nextjs.org/) (App Router, Server & Client Components)
- **Библиотека интерфейса:** [React 19](https://react.dev/)
- **Типизация:** [TypeScript](https://www.typescriptlang.org/)
- **Стилизация:** [Tailwind CSS](https://tailwindcss.com/) & Vanilla Spatial Glassmorphism
- **Иконки:** [Lucide React](https://lucide.dev/)
- **Шрифты:** Outfit, Inter, JetBrains Mono (Google Fonts)
- **Оптимизация:** PageSpeed 98/100, Unoptimized Images / WebP, SVG Blur Placeholders

---

## 📂 Структура проекта

```text
├── public/                     # Статические ассеты и изображения проектов
│   ├── favicon.ico
│   ├── project_scalemate.jpg
│   ├── project_omniprice.jpg
│   ├── project_horizon.jpg
│   ├── project_tchpark.jpg
│   ├── project_boba.jpg
│   └── project_generator.jpg
├── src/
│   ├── app/
│   │   ├── globals.css         # Базовые стили, стеклянные эффекты, анимации
│   │   ├── layout.tsx          # RootLayout, SEO метатеги и шрифты
│   │   └── page.tsx            # Главная страница портфолио
│   └── components/
│       ├── AmbientGlow.tsx     # Радиальное свечение, следующее за курсором
│       ├── ScrollReveal.tsx    # Двунаправленная анимация появления блоков
│       ├── Header.tsx          # Spatial Dock панель и мобильное меню
│       ├── Hero.tsx            # Главный экран с метриками и индикаторами
│       ├── Services.tsx        # Сетка услуг с карточками и сроками
│       ├── Portfolio.tsx       # 3D Parallax галерея проектов с тегами и ссылками
│       ├── Testimonials.tsx    # Отзывы заказчиков с подтвержденными результатами
│       ├── Stack.tsx           # Стек технологий и архитектура
│       ├── Contact.tsx         # Интерактивная форма заявки и контакты (Telegram / Email)
│       └── Footer.tsx          # Подвал сайта
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 Запуск и разработка

```bash
# Установка зависимостей
npm install

# Запуск dev-сервера
npm run dev

# Сборка продакшн-бандла
npm run build

# Локальный запуск продакшн-сборки
npm run start
```
