"use client";
import React, { useState, useEffect } from "react";
import {
  FiMapPin,
  FiClock,
  FiChevronRight,
  FiPlay,
  FiStar,
  FiTrendingUp,
} from "react-icons/fi";

const stats = [
  { icon: <FiStar size={18} />, value: "4.9", label: "Rating" },
  { icon: <FiTrendingUp size={18} />, value: "2,500+", label: "Bookings" },
  { icon: <FiClock size={18} />, value: "24/7", label: "Support" },
];

const sports = [
  { name: "Padel", count: "2 Courts", color: "violet" },
  { name: "Badminton", count: "3 Courts", color: "rose" },
  { name: "Futsal", count: "1 Court", color: "lime" },
  { name: "Cricket", count: "2 Courts", color: "amber" },
];

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const heroImages = [
    "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1600&q=80",
    "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=1600&q=80",
    "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=1600&q=80",
    "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?w=1600&q=80",
  ];

  useEffect(() => {
    if (!isVideoPlaying) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % heroImages.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isVideoPlaying, heroImages.length]);

  const handleBookNow = () => {
    scrollToSection("court");
  };

  return (
    <section className="relative min-h-screen bg-[#0a0a0f] text-white font-body overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {heroImages.map((img, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{
              opacity: activeIndex === i ? 1 : 0,
            }}
          >
            <img
              src={img}
              alt={`Hero ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
      </div>

      {/* Animated Glow Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-lime-400/10 blur-[140px] rounded-full pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-violet-600/8 blur-[120px] rounded-full pointer-events-none animate-pulse-slower" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        {/* Main Content */}
        <div className="max-w-7xl mx-auto w-full flex-1 flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 w-full items-center">
            {/* Left: Text Content */}
            <div className="space-y-6 sm:space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-400/10 border border-lime-400/30 backdrop-blur-sm">
                <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
                <span className="text-lime-400 text-xs sm:text-sm font-display font-bold tracking-wide">
                  PREMIUM COURTS AVAILABLE
                </span>
              </div>

              {/* Heading */}
              <div>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] mb-4 sm:mb-6">
                  Book Your{" "}
                  <span className="text-lime-400 inline-block animate-gradient">
                    Game,
                  </span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">
                    Own the Court
                  </span>
                </h1>
                <p className="text-zinc-100 text-base sm:text-lg lg:text-xl max-w-xl leading-relaxed">
                  Reserve premium sports facilities in Karachi. From padel to
                  cricket, book your favorite court in seconds.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={handleBookNow}
                  className="group px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-lime-400 text-black font-display font-extrabold text-sm sm:text-base tracking-wide hover:bg-lime-300 transition-all duration-300 glow-lime flex items-center justify-center gap-2"
                  
                >
                  Book a Court Now
                  <FiChevronRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
                <button
                  onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                  className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/15 text-white font-display font-bold text-sm sm:text-base tracking-wide hover:bg-white/10 hover:border-lime-400/40 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <span className="w-10 h-10 rounded-full bg-lime-400/20 border border-lime-400/40 flex items-center justify-center">
                    <FiPlay size={16} className="text-lime-400 ml-0.5" />
                  </span>
                  Watch Video Tour
                </button>
              </div>

              {/* Stats */}
              <div className="flex gap-6 sm:gap-8 pt-4">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 sm:gap-3 group"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-lime-400/10 border border-lime-400/20 flex items-center justify-center text-lime-400 group-hover:bg-lime-400/20 transition-colors">
                      {stat.icon}
                    </div>
                    <div>
                      <p className="font-display font-bold text-lg sm:text-xl text-white">
                        {stat.value}
                      </p>
                      <p className="text-zinc-500 text-xs sm:text-sm">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Interactive Sports Cards */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                {sports.map((sport, i) => {
                  const colorMap = {
                    violet: {
                      bg: "bg-violet-500/10",
                      border: "border-violet-500/30",
                      text: "text-violet-300",
                      glow: "hover:shadow-violet-500/20",
                    },
                    rose: {
                      bg: "bg-rose-500/10",
                      border: "border-rose-500/30",
                      text: "text-rose-300",
                      glow: "hover:shadow-rose-500/20",
                    },
                    lime: {
                      bg: "bg-lime-500/10",
                      border: "border-lime-500/30",
                      text: "text-lime-300",
                      glow: "hover:shadow-lime-500/20",
                    },
                    amber: {
                      bg: "bg-amber-500/10",
                      border: "border-amber-500/30",
                      text: "text-amber-300",
                      glow: "hover:shadow-amber-500/20",
                    },
                  };

                  const colors = colorMap[sport.color];

                  return (
                    <button
                      key={i}
                      onClick={handleBookNow}
                      className={`group p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${colors.bg} ${colors.border} ${colors.glow}`}
                      style={{
                        animationDelay: `${i * 100}ms`,
                      }}
                    >
                      <div className="text-left">
                        <h3
                          className={`font-display font-bold text-xl mb-2 ${colors.text}`}
                        >
                          {sport.name}
                        </h3>
                        <p className="text-zinc-100 text-sm mb-4">
                          {sport.count}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-zinc-500 group-hover:text-lime-400 transition-colors">
                          <span>View Courts</span>
                          <FiChevronRight
                            size={14}
                            className="group-hover:translate-x-1 transition-transform"
                          />
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Location & Image Dots */}
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
            {/* Location */}
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-10 h-10 rounded-lg bg-lime-400/10 flex items-center justify-center">
                <FiMapPin size={18} className="text-lime-400" />
              </div>
              <div>
                <p className="text-white text-sm font-display font-bold">
                  Karachi, Pakistan
                </p>
                <p className="text-zinc-500 text-xs">Multiple Locations</p>
              </div>
            </div>

            {/* Image Slider Dots */}
            <div className="flex gap-2">
              {heroImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className="relative group"
                >
                  <span
                    className={`block h-1.5 rounded-full transition-all duration-300 ${
                      activeIndex === i
                        ? "w-12 bg-lime-400"
                        : "w-1.5 bg-white/20 group-hover:bg-white/40"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsVideoPlaying(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <FiChevronRight size={20} className="rotate-90" />
            </button>
            <div className="w-full h-full flex items-center justify-center text-zinc-500">
              {/* Replace with actual video embed */}
              <p className="text-sm">Video player would go here</p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background: linear-gradient(
            90deg,
            #a3e635,
            #84cc16,
            #a3e635
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          animation: gradient 3s ease infinite;
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes pulse-slower {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-pulse-slower {
          animation: pulse-slower 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}