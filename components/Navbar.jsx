'use client'
import React, { useState, useEffect } from "react";

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
        .hamburger-bar {
          transition: all 0.25s ease;
          transform-origin: center;
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
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          fontFamily: "'DM Sans', sans-serif",
          transition:
            "background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease",
          background: scrolled ? "rgba(10,10,15,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.07)"
            : "1px solid transparent",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1.5rem",
            height: "68px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* ── LOGO ── */}
          <a
            href="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {/* Icon mark */}
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                background: "rgba(163,230,53,0.12)",
                border: "1px solid rgba(163,230,53,0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect
                  x="2"
                  y="2"
                  width="6"
                  height="6"
                  rx="1.5"
                  fill="#a3e635"
                />
                <rect
                  x="10"
                  y="2"
                  width="6"
                  height="6"
                  rx="1.5"
                  fill="#a3e635"
                  opacity="0.5"
                />
                <rect
                  x="2"
                  y="10"
                  width="6"
                  height="6"
                  rx="1.5"
                  fill="#a3e635"
                  opacity="0.5"
                />
                <rect
                  x="10"
                  y="10"
                  width="6"
                  height="6"
                  rx="1.5"
                  fill="#a3e635"
                />
              </svg>
            </div>

            {/* Brand name */}
            <div style={{ lineHeight: 1 }}>
              <div
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 900,
                  fontSize: "17px",
                  letterSpacing: "-0.02em",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  gap: "1px",
                }}
              >
                <span>Genz</span>
                <span style={{ color: "#a3e635" }}>Pakistan</span>
                <span
                  className="logo-dot"
                  style={{
                    display: "inline-block",
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    background: "#a3e635",
                    marginLeft: "3px",
                    marginBottom: "8px",
                  }}
                />
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "9px",
                  letterSpacing: "0.22em",
                  color: "rgba(163,230,53,0.6)",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  marginTop: "1px",
                }}
              >
                Indoor Arena
              </div>
            </div>
          </a>

          {/* ── DESKTOP NAV ── */}
          <nav
            style={{ display: "flex", alignItems: "center", gap: "32px" }}
            className="hidden-mobile"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link"
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "13px",
                  fontWeight: 500,
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* ── RIGHT SIDE ── */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {/* Live badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                background: "rgba(163,230,53,0.08)",
                border: "1px solid rgba(163,230,53,0.2)",
                borderRadius: "999px",
                padding: "4px 10px",
                fontSize: "11px",
                color: "#a3e635",
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                letterSpacing: "0.1em",
              }}
              className="hidden-mobile"
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#a3e635",
                  animation: "pulse-lime 1.8s ease-in-out infinite",
                  display: "inline-block",
                }}
              />
              LIVE SLOTS
            </div>

            {/* Book Now CTA */}
            <a
              href="#slot-section"
              className="book-btn hidden-mobile"
              style={{
                display: "inline-block",
                padding: "9px 20px",
                borderRadius: "10px",
                border: "1.5px solid #a3e635",
                color: "#a3e635",
                fontSize: "12px",
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                letterSpacing: "0.1em",
                textDecoration: "none",
                textTransform: "uppercase",
              }}
            >
              <span>Book Now</span>
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen((p) => !p)}
              aria-label="Toggle menu"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                padding: "4px",
              }}
              className="show-mobile"
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="hamburger-bar"
                  style={{
                    display: "block",
                    width: i === 1 ? (mobileOpen ? "22px" : "16px") : "22px",
                    height: "1.5px",
                    background: mobileOpen
                      ? "#a3e635"
                      : "rgba(255,255,255,0.7)",
                    borderRadius: "2px",
                    transform: mobileOpen
                      ? i === 0
                        ? "rotate(45deg) translate(4.5px, 4.5px)"
                        : i === 2
                          ? "rotate(-45deg) translate(4.5px, -4.5px)"
                          : "scaleX(0)"
                      : "none",
                  }}
                />
              ))}
            </button>
          </div>
        </div>

        {/* ── MOBILE MENU ── */}
        {mobileOpen && (
          <div
            className="mobile-menu"
            style={{
              background: "rgba(10,10,15,0.97)",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              padding: "1.25rem 1.5rem 1.5rem",
            }}
          >
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "block",
                  padding: "12px 0",
                  color: "rgba(255,255,255,0.7)",
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: "15px",
                  letterSpacing: "0.06em",
                  textDecoration: "none",
                  borderBottom:
                    i < navLinks.length - 1
                      ? "1px solid rgba(255,255,255,0.05)"
                      : "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#a3e635")}
                onMouseLeave={(e) =>
                  (e.target.style.color = "rgba(255,255,255,0.7)")
                }
              >
                {link.label}
              </a>
            ))}
            <a
              href="#slot-section"
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                marginTop: "16px",
                padding: "13px",
                background: "#a3e635",
                color: "#000",
                fontFamily: "'Syne', sans-serif",
                fontWeight: 900,
                fontSize: "13px",
                letterSpacing: "0.12em",
                textAlign: "center",
                textDecoration: "none",
                borderRadius: "12px",
                textTransform: "uppercase",
              }}
            >
              Book Now →
            </a>
          </div>
        )}

        {/* Responsive helpers */}
        <style>{`
          .hidden-mobile { display: flex; }
          .show-mobile   { display: none; }
          @media (max-width: 768px) {
            .hidden-mobile { display: none !important; }
            .show-mobile   { display: flex !important; }
          }
        `}</style>
      </header>

      {/* Spacer so page content starts below fixed nav */}
      <div style={{ height: "68px" }} />
    </>
  );
}
