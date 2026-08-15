import ScrollReveal from "./ScrollReveal";

const techStack = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "Telegram WebApp API",
  "Chart.js",
  "SEO / PageSpeed 98+",
  "REST API / Edge Auth",
  "Vite / Turbopack",
  "Git / Vercel",
];

export default function Stack() {
  return (
    <section className="py-24 relative" id="stack">
      <div className="section-inner">
        <ScrollReveal delayMs={0}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#EADEC9] mb-3 block">
              TECH STACK &amp; ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F8F6F0] tracking-tight font-outfit">
              Стек И Технологии
            </h2>
          </div>
        </ScrollReveal>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {techStack.map((tech, idx) => (
            <ScrollReveal key={tech} delayMs={idx * 40}>
              <div className="glass-card px-6 py-3.5 rounded-full border border-[#EADEC9]/25 hover:border-[#EADEC9]/60 hover:bg-[#EADEC9]/10 transition-all duration-300 cursor-default">
                <span className="font-mono text-xs font-medium text-[#F8F6F0] tracking-wide">
                  {tech}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
