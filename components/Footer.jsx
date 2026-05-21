"use client";
import Link from "next/link";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const footerLinks = {
  Play: [
    { label: "Book a Court",  href: "#slot-section" },
    { label: "All Courts",    href: "#courts" },
    { label: "Pricing",       href: "#pricing" },
    { label: "Tournaments",   href: "#events" },
  ],
  Sports: [
    { label: "Padel",      href: "#" },
    { label: "Badminton",  href: "#" },
    { label: "Futsal",     href: "#" },
    { label: "Cricket",    href: "#" },
  ],
  Company: [
    { label: "About Us",  href: "#" },
    { label: "Careers",   href: "#" },
    { label: "Press Kit", href: "#" },
    { label: "Contact",   href: "#" },
  ],
};

const socials = [
  { label: "Instagram",   href: "#", icon: FaInstagram },
  { label: "TikTok",      href: "#", icon: FaTiktok },
  { label: "Twitter / X", href: "#", icon: FaXTwitter },
  { label: "WhatsApp",    href: "#", icon: FaWhatsapp },
];

const stats = [
  { value: "12+", label: "Courts" },
  { value: "4",   label: "Sports" },
  { value: "5K+", label: "Bookings" },
  { value: "24/7",label: "Support" },
];

export default function Footer() {
  return (
    <footer className="bg-[#07070b] border-t border-white/[0.06] font-body relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-lime-400/[0.04] blur-[80px] rounded-full pointer-events-none" />

      {/* Stats Bar */}
      <div className="border-b border-white/[0.06] grid grid-cols-2 sm:grid-cols-4">
        {stats.map((s, idx) => (
          <div
            key={s.label}
            className={`text-center py-6 px-4 sm:px-8 ${
              idx < 2 ? "border-b sm:border-b-0" : ""
            } ${idx % 2 === 0 ? "border-r" : ""} sm:border-r sm:last:border-r-0 border-white/[0.06]`}
          >
            <div className="font-display font-black text-2xl sm:text-[28px] text-lime-400 leading-none mb-1">
              {s.value}
            </div>
            <div className="text-xs text-zinc-300 tracking-[0.08em] uppercase font-body">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Main Footer Content */}
      <div className="max-w-[1200px] mx-auto px-6 pt-12 sm:pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-10 sm:mb-14">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-[38px] h-[38px] rounded-[10px] bg-lime-400/10 border border-lime-400/30 flex items-center justify-center flex-shrink-0">
                <div className="grid grid-cols-2 gap-1 w-[18px] h-[18px]">
                  <div className="w-[7px] h-[7px] rounded-sm bg-lime-400" />
                  <div className="w-[7px] h-[7px] rounded-sm bg-lime-400 opacity-50" />
                  <div className="w-[7px] h-[7px] rounded-sm bg-lime-400 opacity-50" />
                  <div className="w-[7px] h-[7px] rounded-sm bg-lime-400" />
                </div>
              </div>
              <div>
                <div className="font-display font-black text-lg tracking-tight text-white leading-none">
                  Genz<span className="text-lime-400">Pakistan</span>
                </div>
                <div className="text-[9px] tracking-[0.22em] text-lime-400/55 font-medium uppercase mt-0.5 font-body">
                  Indoor Arena
                </div>
              </div>
            </div>

            <p className="text-zinc-300 text-[13.5px] leading-7 max-w-[260px] mb-6 font-body">
              Pakistan's freshest indoor sports arena, built for the next
              generation. Book, play, repeat.
            </p>

            <div className="flex gap-2">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    className="w-[38px] h-[38px] rounded-[10px] bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/50 no-underline transition-all duration-200 hover:bg-lime-400/[0.12] hover:border-lime-400/40 hover:text-lime-400 hover:-translate-y-0.5 flex-shrink-0"
                    aria-label={s.label}
                  >
                    <Icon className="text-base" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="lg:col-span-2">
              <h4 className="font-display font-extrabold text-[11px] tracking-[0.18em] uppercase text-zinc-200 mb-4">
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
        <div className="bg-lime-400/[0.05] border border-lime-400/[0.15] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-10">
          <div className="flex-1">
            <div className="font-display font-extrabold text-[15px] text-white mb-1">
              Never miss a slot 🏏
            </div>
            <div className="text-[12.5px] text-zinc-300 font-body">
              Get early access to flash deals and tournament announcements.
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto flex-shrink-0">
            <input
              type="email"
              placeholder="your@email.com"
              className="bg-white/[0.06] border border-white/[0.12] rounded-[10px] px-3.5 py-2.5 text-white text-[13px] outline-none w-full sm:w-[200px] font-body focus:border-lime-400/40 transition-colors"
            />
            <button className="bg-lime-400 border-none rounded-[10px] px-4 sm:px-[18px] py-2.5 text-black text-xs font-display font-extrabold tracking-[0.08em] cursor-pointer whitespace-nowrap transition-colors hover:bg-lime-300">
              NOTIFY ME
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-white/[0.06] pt-6 gap-4 sm:gap-4 text-center sm:text-left">
          <p className="text-xs text-zinc-200 m-0 order-2 sm:order-1 font-body">
            © {new Date().getFullYear()} GenzPakistan Indoor Arena. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-5 order-1 sm:order-2">
            {["Privacy Policy", "Terms of Use", "Refund Policy"].map((t) => (
              <a
                key={t}
                href="#"
                className="text-xs text-zinc-200 no-underline transition-colors hover:text-lime-400 font-body"
              >
                {t}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-zinc-100 tracking-[0.05em] order-3 font-body">
            <span>Powered By </span>
            <Link href="https://atmoclaw.com/" className="text-lime-400 font-bold">AtmoClaw</Link>
            <span>in Pakistan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
