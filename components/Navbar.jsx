'use client'
import React, { useState, useEffect } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const navLinks = [
  { label: "Courts", href: "#courts" },
  { label: "Book Slot", href: "#slot-section" },
  { label: "Pricing", href: "#pricing" },
  { label: "Events", href: "#events" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800;900&family=DM+Sans:wght@300;400;500&display=swap');
        .nav-link {
          position: relative;
          transition: color 0.2s;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1.5px;
          background: #a3e635;
          transition: width 0.25s ease;
        }
        .nav-link:hover::after { width: 100%; }
        .nav-link:hover { color: #a3e635; }
        .logo-dot {
          animation: pulse-lime 2.4s ease-in-out infinite;
        }
        @keyframes pulse-lime {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.85); }
        }
        .mobile-menu {
          animation: slideDown 0.22s ease;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .book-btn {
          position: relative;
          overflow: hidden;
          transition: color 0.2s;
        }
        .book-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #a3e635;
          transform: translateX(-100%);
          transition: transform 0.25s ease;
          z-index: 0;
        }
        .book-btn:hover::before { transform: translateX(0); }
        .book-btn:hover { color: #000; }
        .book-btn span { position: relative; z-index: 1; }
      `}</style>

      <header
        className={`fixed top-0 left-0 right-0 z-[100] font-['DM_Sans',sans-serif] transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(10,10,15,0.92)] backdrop-blur-2xl border-b border-white/[0.07]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-[68px] flex items-center justify-between">
          {/* ── LOGO ── */}
          <a href="/" className="no-underline flex items-center gap-2.5">
            {/* Icon mark - Grid layout */}
            <div className="w-9 h-9 rounded-[10px] bg-lime-400/[0.12] border border-lime-400/[0.35] flex items-center justify-center flex-shrink-0">
              <div className="grid grid-cols-2 gap-1 w-[18px] h-[18px]">
                <div className="w-[7px] h-[7px] rounded-sm bg-lime-400" />
                <div className="w-[7px] h-[7px] rounded-sm bg-lime-400 opacity-50" />
                <div className="w-[7px] h-[7px] rounded-sm bg-lime-400 opacity-50" />
                <div className="w-[7px] h-[7px] rounded-sm bg-lime-400" />
              </div>
            </div>

            {/* Brand name */}
            <div className="leading-none">
              <div className="font-['Syne',sans-serif] font-black text-[17px] tracking-tight text-white flex items-center gap-[1px]">
                <span>Genz</span>
                <span className="text-lime-400">Pakistan</span>
                <span className="logo-dot inline-block w-[5px] h-[5px] rounded-full bg-lime-400 ml-[3px] mb-2" />
              </div>
              <div className="font-['DM_Sans',sans-serif] text-[9px] tracking-[0.22em] text-lime-400/60 font-medium uppercase mt-[1px]">
                Indoor Arena
              </div>
            </div>
          </a>

          {/* ── DESKTOP NAV ── */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link text-white/60 text-[13px] font-medium no-underline tracking-[0.02em]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* ── RIGHT SIDE ── */}
          <div className="flex items-center gap-3">
            {/* Live badge */}
            <div className="hidden md:flex items-center gap-1.5 bg-lime-400/[0.08] border border-lime-400/20 rounded-full px-2.5 py-1 text-[11px] text-lime-400 font-['Syne',sans-serif] font-bold tracking-[0.1em]">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse inline-block" />
              LIVE SLOTS
            </div>

            {/* Book Now CTA */}
            <a
              href="#slot-section"
              className="book-btn hidden md:inline-block px-5 py-2.5 rounded-[10px] border-[1.5px] border-lime-400 text-lime-400 text-xs font-['Syne',sans-serif] font-extrabold tracking-[0.1em] no-underline uppercase"
            >
              <span>Book Now</span>
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen((p) => !p)}
              aria-label="Toggle menu"
              className="md:hidden bg-transparent border-none cursor-pointer p-1 text-2xl transition-colors duration-200"
            >
              {mobileOpen ? (
                <IoClose className="text-lime-400" />
              ) : (
                <HiOutlineMenuAlt3 className="text-white/70" />
              )}
            </button>
          </div>
        </div>

        {/* ── MOBILE MENU ── */}
        {mobileOpen && (
          <div className="mobile-menu bg-[rgba(10,10,15,0.97)] border-t border-white/[0.06] px-6 py-5 md:hidden">
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block py-3 text-white/70 font-['Syne',sans-serif] font-bold text-[15px] tracking-[0.06em] no-underline transition-colors hover:text-lime-400 ${
                  i < navLinks.length - 1 ? "border-b border-white/[0.05]" : ""
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#slot-section"
              onClick={() => setMobileOpen(false)}
              className="block mt-4 py-3.5 bg-lime-400 text-black font-['Syne',sans-serif] font-black text-[13px] tracking-[0.12em] text-center no-underline rounded-xl uppercase"
            >
              Book Now →
            </a>
          </div>
        )}
      </header>

      {/* Spacer so page content starts below fixed nav */}
      <div className="h-[68px]" />
    </>
  );
}