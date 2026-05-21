"use client";
import React, { useState } from "react";
import { FiUsers, FiChevronRight, FiStar, FiMapPin } from "react-icons/fi";

const courts = [
  {
    id: 1,
    name: "Court Alpha",
    category: "Padel",
    tag: "PREMIUM",
    price: "PKR 2,500/hr",
    capacity: "4 Players",
    rating: 4.9,
    thumb:
      "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=600&q=80",
  },
  {
    id: 2,
    name: "Court Beta",
    category: "Badminton",
    tag: "HOT",
    price: "PKR 1,800/hr",
    capacity: "2 Players",
    rating: 4.7,
    thumb:
      "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=600&q=80",
  },
  {
    id: 3,
    name: "Court Gamma",
    category: "Futsal",
    tag: "NEW",
    price: "PKR 3,200/hr",
    capacity: "10 Players",
    rating: 4.8,
    thumb:
      "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=600&q=80",
  },
  {
    id: 4,
    name: "Court Delta",
    category: "Cricket",
    tag: "POPULAR",
    price: "PKR 4,000/hr",
    capacity: "22 Players",
    rating: 4.9,
    thumb:
      "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?w=600&q=80",
  },
  {
    id: 5,
    name: "Court Epsilon",
    category: "Padel",
    tag: "PREMIUM",
    price: "PKR 2,800/hr",
    capacity: "4 Players",
    rating: 4.6,
    thumb:
      "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=600&q=80",
  },
  {
    id: 6,
    name: "Court Zeta",
    category: "Badminton",
    tag: "HOT",
    price: "PKR 1,600/hr",
    capacity: "2 Players",
    rating: 4.5,
    thumb:
      "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=600&q=80",
  },
];

const categories = ["All", "Padel", "Badminton", "Futsal", "Cricket"];

const tagColors = {
  PREMIUM: "bg-violet-500/20 text-violet-300 border-violet-500/40",
  HOT: "bg-rose-500/20 text-rose-300 border-rose-500/40",
  NEW: "bg-lime-500/20 text-lime-300 border-lime-500/40",
  POPULAR: "bg-amber-500/20 text-amber-300 border-amber-500/40",
};

export default function CourtsPage() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? courts : courts.filter((c) => c.category === active);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white px-4 pt-24 pb-20">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-lime-400/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <p className="text-lime-400 text-xs font-semibold tracking-[0.25em] uppercase mb-2">
            Our Facilities
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white leading-none mb-3">
            All <span className="text-lime-400">Courts</span>
          </h1>
          <p className="text-zinc-400 text-sm max-w-md">
            Premium sports courts in Karachi. Pick your game, book your slot.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold border transition-all font-display tracking-wide ${
                active === cat
                  ? "bg-lime-400 text-black border-lime-400"
                  : "bg-white/5 text-zinc-400 border-white/10 hover:border-lime-400/40 hover:text-lime-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((court) => (
            <div
              key={court.id}
              className="rounded-2xl overflow-hidden bg-white/[0.04] border border-white/10 group hover:border-lime-400/30 transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={court.thumb}
                  alt={court.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span
                  className={`absolute top-3 left-3 text-[10px] font-bold tracking-widest border px-2 py-0.5 rounded-md font-display ${tagColors[court.tag]}`}
                >
                  {court.tag}
                </span>
                <span className="absolute top-3 right-3 text-[10px] bg-black/50 border border-white/20 text-zinc-300 px-2 py-0.5 rounded-md font-display">
                  {court.category}
                </span>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-display font-bold text-white text-base">
                    {court.name}
                  </h3>
                  <span className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                    <FiStar size={11} />
                    {court.rating}
                  </span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lime-400 text-sm font-semibold">
                    {court.price}
                  </span>
                  <span className="text-zinc-500 text-xs flex items-center gap-1">
                    <FiUsers size={12} />
                    {court.capacity}
                  </span>
                </div>
                <button className="w-full py-2 rounded-xl bg-lime-400/10 border border-lime-400/30 text-lime-400 text-xs font-bold hover:bg-lime-400 hover:text-black transition-all font-display tracking-wider flex items-center justify-center gap-1">
                  BOOK NOW <FiChevronRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Location note */}
        <div className="mt-12 flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 w-fit">
          <FiMapPin size={16} className="text-lime-400" />
          <p className="text-zinc-400 text-sm">
            All courts located in{" "}
            <span className="text-white font-semibold">Karachi, Pakistan</span>
          </p>
        </div>
      </div>
    </div>
  );
}
