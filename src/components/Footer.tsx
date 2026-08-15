export default function Footer() {
  return (
    <footer className="py-12 border-t border-[#EADEC9]/15 relative z-10">
      <div className="section-inner flex flex-col sm:flex-row items-center justify-between gap-6">
        <a href="#" className="dock-logo text-xl">
          jamsen<span className="accent-dot">.</span>
        </a>
        <div className="font-mono text-xs text-[#D4C5B9]">
          &copy; 2026 jamsen. All rights reserved. Spatial Glass System.
        </div>
      </div>
    </footer>
  );
}
