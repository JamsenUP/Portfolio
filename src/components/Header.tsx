"use client";

import { useState, useEffect } from "react";
import { Sparkles, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header className="spatial-dock-nav">
        <div className="dock-inner">
          <a href="#" className="dock-logo">
            jamsen<span className="accent-dot">.</span>
          </a>

          <nav className="dock-links">
            <a href="#services" className="dock-link">
              Услуги
            </a>
            <a href="#portfolio" className="dock-link">
              Портфолио
            </a>
            <a href="#testimonials" className="dock-link">
              Отзывы
            </a>
            <a href="#stack" className="dock-link">
              Стек
            </a>
          </nav>

          <div className="dock-right">
            <div className="theme-pill">
              <span className="theme-dot">●</span> TRUFFLE &amp; OAT
            </div>

            <a href="#contact" className="dock-cta">
              <Sparkles className="w-4 h-4 text-[#EADEC9] inline-block mr-1.5" />
              Обсудить Проект
            </a>

            <button
              className="dock-burger text-[#F8F6F0]"
              aria-label="Открыть меню"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#F8F6F0]" />
              ) : (
                <Menu className="w-6 h-6 text-[#F8F6F0]" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Spatial Mobile Menu */}
      <div className={`spatial-mobile-menu ${mobileMenuOpen ? "active" : ""}`}>
        <div className="mobile-menu-inner">
          <a href="#services" className="mobile-link" onClick={closeMenu}>
            Услуги
          </a>
          <a href="#portfolio" className="mobile-link" onClick={closeMenu}>
            Портфолио
          </a>
          <a href="#testimonials" className="mobile-link" onClick={closeMenu}>
            Отзывы
          </a>
          <a href="#stack" className="mobile-link" onClick={closeMenu}>
            Стек
          </a>

          <div className="mt-4 pt-4 border-t border-[#EADEC9]/20 flex flex-col gap-3">
            <div className="theme-pill !flex justify-center text-center">
              <span className="theme-dot">●</span> TRUFFLE &amp; OAT
            </div>
            <a
              href="#contact"
              className="dock-cta !flex w-full text-center py-3 justify-center items-center"
              onClick={closeMenu}
            >
              <Sparkles className="w-4 h-4 text-[#EADEC9] inline-block mr-1.5" />
              Обсудить Проект
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
