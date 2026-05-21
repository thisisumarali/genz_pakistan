"use client";
import React, { useState } from "react";
import {
  FiCalendar,
  FiMapPin,
  FiUsers,
  FiChevronRight,
  FiClock,
} from "react-icons/fi";

const events = [
  {
    id: 1,
    title: "Padel Tournament",
    category: "Padel",
    date: "Jun 14, 2025",
    time: "09:00 AM",
    location: "Court Alpha",
    spots: 8,
    total: 16,
    tag: "OPEN",
    color: "violet",
    thumb:
      "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=600&q=80",
  },
  {
    id: 2,
    title: "Badminton League",
    category: "Badminton",
    date: "Jun 20, 2025",
    time: "06:00 PM",
    location: "Court Beta",
    spots: 4,
    total: 12,
    tag: "CLOSING",
    color: "rose",
    thumb:
      "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=600&q=80",
  },
  {
    id: 3,
    title: "Futsal Cup",
    category: "Futsal",
    date: "Jul 5, 2025",
    time: "04:00 PM",
    location: "Court Gamma",
    spots: 20,
    total: 20,
    tag: "NEW",
    color: "lime",
    thumb:
      "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=600&q=80",
  },
  {
    id: 4,
    title: "Cricket Gala",
    category: "Cricket",
    date: "Jul 12, 2025",
    time: "08:00 AM",
    location: "Court Delta",
    spots: 2,
    total: 22,
    tag: "HOT",
    color: "amber",
    thumb:
      "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?w=600&q=80",
  },
];

const colorMap = {
  violet: {
    bar: "bg-violet-400",
    text: "text-violet-300",
    border: "border-violet-500/30",
    badge: "bg-violet-500/20 text-violet-300 border-violet-500/40",
  },
  rose: {
    bar: "bg-rose-400",
    text: "text-rose-300",
    border: "border-rose-500/30",
    badge: "bg-rose-500/20 text-rose-300 border-rose-500/40",
  },
  lime: {
    bar: "bg-lime-400",
    text: "text-lime-300",
    border: "border-lime-500/30",
    badge: "bg-lime-500/20 text-lime-300 border-lime-500/40",
  },
  amber: {
    bar: "bg-amber-400",
    text: "text-amber-300",
    border: "border-amber-500/30",
    badge: "bg-amber-500/20 text-amber-300 border-amber-500/40",
  },
};

export default function EventsPage() {
  const [filter, setFilter] = useState("All");
  const cats = ["All", "Padel", "Badminton", "Futsal", "Cricket"];
  const filtered =
    filter === "All" ? events : events.filter((e) => e.category === filter);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white px-4 pt-24 pb-20 relative">
      <div className="absolute top-0 right-0 w-80 h-80 bg-violet-600/8 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime-400/4 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <p className="text-lime-400 text-xs font-semibold tracking-[0.25em] uppercase mb-2">
            What's On
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white leading-none mb-3">
            Upcoming <span className="text-lime-400">Events</span>
          </h1>
          <p className="text-zinc-100 text-sm max-w-md">
            Join tournaments, leagues & community games. Compete, connect, win.
          </p>
        </div>

        {/* Filter */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-1">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold border transition-all font-display tracking-wide ${
                filter === c
                  ? "bg-lime-400 text-black border-lime-400"
                  : "bg-white/5 text-zinc-100 border-white/10 hover:border-lime-400/40 hover:text-lime-300"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Events List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filtered.map((ev) => {
            const c = colorMap[ev.color];
            const pct = Math.round(((ev.total - ev.spots) / ev.total) * 100);
            return (
              <div
                key={ev.id}
                className={`rounded-2xl overflow-hidden bg-white/[0.04] border border-white/10 hover:${c.border} transition-all group`}
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={ev.thumb}
                    alt={ev.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <span
                    className={`absolute top-3 left-3 text-[10px] font-bold tracking-widest border px-2 py-0.5 rounded-md font-display ${c.badge}`}
                  >
                    {ev.tag}
                  </span>
                  <div className="absolute bottom-3 left-4">
                    <h3 className="font-display font-bold text-white text-lg leading-none">
                      {ev.title}
                    </h3>
                    <p
                      className={`text-xs font-semibold font-display tracking-widest mt-0.5 ${c.text}`}
                    >
                      {ev.category.toUpperCase()}
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex flex-wrap gap-3 mb-4 text-xs text-zinc-100">
                    <span className="flex items-center gap-1">
                      <FiCalendar size={12} className="text-lime-400" />
                      {ev.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiClock size={12} className="text-lime-400" />
                      {ev.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiMapPin size={12} className="text-lime-400" />
                      {ev.location}
                    </span>
                  </div>
                  {/* Spots bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-zinc-500">Spots filled</span>
                      <span className={`font-bold font-display ${c.text}`}>
                        {ev.total - ev.spots}/{ev.total}
                      </span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${c.bar}`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                  <button className="w-full py-2 rounded-xl bg-lime-400/10 border border-lime-400/30 text-lime-400 text-xs font-bold hover:bg-lime-400 hover:text-black transition-all font-display tracking-wider flex items-center justify-center gap-1">
                    REGISTER NOW <FiChevronRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
