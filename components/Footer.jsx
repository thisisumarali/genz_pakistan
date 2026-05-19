"use client";
const footerLinks = {
  Play: [
    { label: "Book a Court", href: "#slot-section" },
    { label: "All Courts", href: "#courts" },
    { label: "Pricing", href: "#pricing" },
    { label: "Tournaments", href: "#events" },
  ],
  Sports: [
    { label: "Padel", href: "#" },
    { label: "Badminton", href: "#" },
    { label: "Futsal", href: "#" },
    { label: "Cricket", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press Kit", href: "#" },
    { label: "Contact", href: "#" },
  ],
};

const socials = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.53V6.79a4.85 4.85 0 01-1.02-.1z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "12+", label: "Courts" },
  { value: "4", label: "Sports" },
  { value: "5K+", label: "Bookings" },
  { value: "24/7", label: "Support" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#07070b",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800;900&family=DM+Sans:wght@300;400;500&display=swap');
        .footer-link {
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          font-size: 13px;
          transition: color 0.2s;
          line-height: 2;
          display: block;
        }
        .footer-link:hover { color: #a3e635; }
        .social-btn {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }
        .social-btn:hover {
          background: rgba(163,230,53,0.12);
          border-color: rgba(163,230,53,0.4);
          color: #a3e635;
          transform: translateY(-2px);
        }
        .stat-card {
          border-right: 1px solid rgba(255,255,255,0.06);
          padding: 1.5rem 2rem;
          flex: 1;
        }
        .stat-card:last-child { border-right: none; }
        @media (max-width: 640px) {
          .stat-card { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.06); }
          .stat-card:last-child { border-bottom: none; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
          .stats-row { flex-direction: column !important; }
          .footer-bottom { flex-direction: column !important; gap: 12px !important; text-align: center; }
        }
      `}</style>

      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          bottom: "-80px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "200px",
          background: "rgba(163,230,53,0.04)",
          filter: "blur(80px)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      {/* Stats Bar */}
      <div
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          flexWrap: "wrap",
        }}
        className="stats-row"
      >
        {stats.map((s) => (
          <div
            key={s.label}
            className="stat-card"
            style={{ textAlign: "center" }}
          >
            <div
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 900,
                fontSize: "28px",
                color: "#a3e635",
                lineHeight: 1,
                marginBottom: "4px",
              }}
            >
              {s.value}
            </div>
            <div
              style={{
                fontSize: "12px",
                color: "rgba(255,255,255,0.4)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Main Footer Content */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "4rem 1.5rem 2rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "3rem",
            marginBottom: "3.5rem",
          }}
          className="footer-grid"
        >
          {/* Brand Column */}
          <div>
            {/* Logo */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "1.25rem",
              }}
            >
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "10px",
                  background: "rgba(163,230,53,0.1)",
                  border: "1px solid rgba(163,230,53,0.3)",
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
              <div>
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 900,
                    fontSize: "18px",
                    letterSpacing: "-0.02em",
                    color: "#fff",
                    lineHeight: 1,
                  }}
                >
                  Genz<span style={{ color: "#a3e635" }}>Pakistan</span>
                </div>
                <div
                  style={{
                    fontSize: "9px",
                    letterSpacing: "0.22em",
                    color: "rgba(163,230,53,0.55)",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    marginTop: "2px",
                  }}
                >
                  Indoor Arena
                </div>
              </div>
            </div>

            <p
              style={{
                color: "rgba(255,255,255,0.4)",
                fontSize: "13.5px",
                lineHeight: 1.75,
                maxWidth: "260px",
                marginBottom: "1.5rem",
              }}
            >
              Pakistan's freshest indoor sports arena, built for the next
              generation. Book, play, repeat.
            </p>

            {/* Socials */}
            <div style={{ display: "flex", gap: "8px" }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="social-btn"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: "11px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.25)",
                  marginBottom: "1rem",
                }}
              >
                {group}
              </h4>
              {links.map((l) => (
                <a key={l.label} href={l.href} className="footer-link">
                  {l.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Newsletter Strip */}
        <div
          style={{
            background: "rgba(163,230,53,0.05)",
            border: "1px solid rgba(163,230,53,0.15)",
            borderRadius: "16px",
            padding: "1.5rem 2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem",
            flexWrap: "wrap",
            marginBottom: "2.5rem",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: "15px",
                color: "#fff",
                marginBottom: "3px",
              }}
            >
              Never miss a slot 🏏
            </div>
            <div style={{ fontSize: "12.5px", color: "rgba(255,255,255,0.4)" }}>
              Get early access to flash deals and tournament announcements.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "8px",
              flexShrink: 0,
            }}
          >
            <input
              type="email"
              placeholder="your@email.com"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "10px",
                padding: "10px 14px",
                color: "#fff",
                fontSize: "13px",
                outline: "none",
                width: "200px",
                fontFamily: "'DM Sans', sans-serif",
              }}
              onFocus={(e) =>
                (e.target.style.borderColor = "rgba(163,230,53,0.4)")
              }
              onBlur={(e) =>
                (e.target.style.borderColor = "rgba(255,255,255,0.12)")
              }
            />
            <button
              style={{
                background: "#a3e635",
                border: "none",
                borderRadius: "10px",
                padding: "10px 18px",
                color: "#000",
                fontSize: "12px",
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                letterSpacing: "0.08em",
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.background = "#bef264")}
              onMouseLeave={(e) => (e.target.style.background = "#a3e635")}
            >
              NOTIFY ME
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="footer-bottom"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "1.5rem",
            gap: "1rem",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              color: "rgba(255,255,255,0.25)",
              margin: 0,
            }}
          >
            © {new Date().getFullYear()} GenzPakistan Indoor Arena. All rights
            reserved.
          </p>

          <div style={{ display: "flex", gap: "20px" }}>
            {["Privacy Policy", "Terms of Use", "Refund Policy"].map((t) => (
              <a
                key={t}
                href="#"
                style={{
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.25)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#a3e635")}
                onMouseLeave={(e) =>
                  (e.target.style.color = "rgba(255,255,255,0.25)")
                }
              >
                {t}
              </a>
            ))}
          </div>

          {/* Made in PK badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "11px",
              color: "rgba(255,255,255,0.2)",
              letterSpacing: "0.05em",
            }}
          >
            <span>Made with</span>
            <span style={{ color: "#a3e635" }}>♥</span>
            <span>in Pakistan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
