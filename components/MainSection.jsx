"use client";
import React, { useState } from "react";
import {
  FiCheckCircle,
  FiCalendar,
  FiClock,
  FiMapPin,
  FiUsers,
  FiX,
  FiChevronRight,
  FiLock,
  FiTool,
  FiSun,
  FiWind,
  FiPackage,
  FiBookOpen,
} from "react-icons/fi";

const courts = [
  {
    id: 1,
    name: "Court Alpha",
    category: "Padel",
    tag: "PREMIUM",
    thumb:
      "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=900&q=80",
      "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=900&q=80",
      "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=900&q=80",
      "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?w=900&q=80",
    ],
    price: "PKR 2,500/hr",
    capacity: "4 Players",
  },
  {
    id: 2,
    name: "Court Beta",
    category: "Badminton",
    tag: "HOT",
    thumb:
      "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=900&q=80",
      "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=900&q=80",
      "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?w=900&q=80",
      "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=900&q=80",
    ],
    price: "PKR 1,800/hr",
    capacity: "2 Players",
  },
  {
    id: 3,
    name: "Court Gamma",
    category: "Futsal",
    tag: "NEW",
    thumb:
      "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=900&q=80",
      "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=900&q=80",
      "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=900&q=80",
      "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?w=900&q=80",
    ],
    price: "PKR 3,200/hr",
    capacity: "10 Players",
  },
  {
    id: 4,
    name: "Court Delta",
    category: "Cricket",
    tag: "POPULAR",
    thumb:
      "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?w=900&q=80",
      "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=900&q=80",
      "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=900&q=80",
      "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=900&q=80",
    ],
    price: "PKR 4,000/hr",
    capacity: "22 Players",
  },
];

const categories = ["All", "Padel", "Badminton", "Futsal", "Cricket"];

const slots = [
  { time: "06:00 AM", booked: false },
  { time: "07:00 AM", booked: true },
  { time: "08:00 AM", booked: false },
  { time: "09:00 AM", booked: true },
  { time: "10:00 AM", booked: false },
  { time: "11:00 AM", booked: false },
  { time: "12:00 PM", booked: true },
  { time: "01:00 PM", booked: false },
  { time: "02:00 PM", booked: true },
  { time: "03:00 PM", booked: false },
  { time: "04:00 PM", booked: false },
  { time: "05:00 PM", booked: true },
  { time: "06:00 PM", booked: false },
  { time: "07:00 PM", booked: false },
  { time: "08:00 PM", booked: true },
  { time: "09:00 PM", booked: false },
  { time: "10:00 PM", booked: false },
  { time: "11:00 PM", booked: true },
];

const tagColors = {
  PREMIUM: "bg-violet-500/20 text-violet-300 border-violet-500/40",
  HOT: "bg-rose-500/20 text-rose-300 border-rose-500/40",
  NEW: "bg-lime-500/20 text-lime-300 border-lime-500/40",
  POPULAR: "bg-amber-500/20 text-amber-300 border-amber-500/40",
};

const amenityIcons = {
  "Locker Room": <FiLock size={14} />,
  Parking: <FiMapPin size={14} />,
  Lighting: <FiSun size={14} />,
  "AC Zone": <FiWind size={14} />,
  Equipment: <FiPackage size={14} />,
  Coaching: <FiBookOpen size={14} />,
};

export default function MainSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedCourt, setSelectedCourt] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeImg, setActiveImg] = useState(0);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [bookedCourt, setBookedCourt] = useState(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [confirmedDetails, setConfirmedDetails] = useState(null);

  const filtered =
    activeCategory === "All"
      ? courts
      : courts.filter((c) => c.category === activeCategory);

  const openModal = (court, e) => {
    e.stopPropagation();
    setSelectedCourt(court);
    setActiveImg(0);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedCourt(null), 300);
  };

  const selectCourtForSlot = (court) => {
    setBookedCourt(court);
    setSelectedSlots([]);
    setBookingConfirmed(false);
    document
      .getElementById("slot-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleSlot = (time) => {
    setSelectedSlots((prev) =>
      prev.includes(time) ? prev.filter((s) => s !== time) : [...prev, time],
    );
  };

  const handleConfirmBooking = () => {
    setConfirmedDetails({
      court: bookedCourt,
      date: selectedDate,
      slots: [...selectedSlots],
    });
    setBookingConfirmed(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAnother = () => {
    setBookingConfirmed(false);
    setConfirmedDetails(null);
    setBookedCourt(null);
    setSelectedSlots([]);
    setSelectedDate("");
  };

  const today = new Date().toISOString().split("T")[0];

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const d = new Date(dateStr + "T00:00:00");
    return d.toLocaleDateString("en-PK", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-body" id="court">
{/* ── SUCCESS STATE ── */}
      {bookingConfirmed && confirmedDetails && (
        <section className="relative px-4 pt-16 pb-20 font-body flex items-center justify-center min-h-screen">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-lime-400/8 blur-[120px] rounded-full pointer-events-none" />

          <div className="success-box w-full max-w-lg mx-auto">
            {/* Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-full bg-lime-400/15 border border-lime-400/30 flex items-center justify-center pulse-lime">
                <FiCheckCircle size={40} className="text-lime-400" />
              </div>
            </div>

            {/* Heading */}
            <div className="text-center mb-8">
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-3">
                Booking <span className="text-lime-400">Confirmed!</span>
              </h2>
              <p className="text-zinc-400 text-sm">
                Your court has been reserved. See you on the court!
              </p>
            </div>

            {/* Booking details card */}
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl overflow-hidden mb-6">
              {/* Court image strip */}
              <div className="relative h-32 overflow-hidden">
                <img
                  src={confirmedDetails.court.thumb}
                  alt={confirmedDetails.court.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <p className="font-display font-bold text-white text-lg leading-none">
                    {confirmedDetails.court.name}
                  </p>
                  <p className="text-lime-400 text-xs font-semibold font-display tracking-widest mt-0.5">
                    {confirmedDetails.court.category.toUpperCase()}
                  </p>
                </div>
                <div className="absolute bottom-3 right-4 text-right">
                  <p className="text-lime-400 font-display font-bold text-base">
                    {confirmedDetails.court.price}
                  </p>
                </div>
              </div>

              {/* Details */}
              <div className="p-5 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-lime-400/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FiCalendar size={15} className="text-lime-400" />
                  </div>
                  <div>
                    <p className="text-zinc-500 text-xs mb-0.5">Date</p>
                    <p className="text-white text-sm font-semibold font-display">
                      {formatDate(confirmedDetails.date)}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-lime-400/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FiClock size={15} className="text-lime-400" />
                  </div>
                  <div>
                    <p className="text-zinc-500 text-xs mb-1">
                      Time Slot{confirmedDetails.slots.length > 1 ? "s" : ""}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {confirmedDetails.slots.map((s) => (
                        <span
                          key={s}
                          className="bg-lime-400/10 border border-lime-400/25 text-lime-300 text-xs font-bold px-2.5 py-1 rounded-lg font-display"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-lime-400/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FiUsers size={15} className="text-lime-400" />
                  </div>
                  <div>
                    <p className="text-zinc-500 text-xs mb-0.5">Capacity</p>
                    <p className="text-white text-sm font-semibold font-display">
                      {confirmedDetails.court.capacity}
                    </p>
                  </div>
                </div>
              </div>

              {/* Reference number */}
              <div className="mx-5 mb-5 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/8 flex items-center justify-between">
                <span className="text-zinc-500 text-xs">Booking Ref.</span>
                <span className="text-zinc-300 text-xs font-mono font-bold tracking-widest">
                  #{Math.random().toString(36).slice(2, 10).toUpperCase()}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleBookAnother}
                className="flex-1 py-3 rounded-xl bg-white/[0.06] border border-white/15 text-white text-sm font-display font-bold tracking-wide hover:bg-white/10 transition-colors"
              >
                Book Another Court
              </button>
              <button className="flex-1 py-3 rounded-xl bg-lime-400 text-black font-display font-extrabold text-sm tracking-wide hover:bg-lime-300 transition-colors glow-lime flex items-center justify-center gap-2">
                View My Bookings <FiChevronRight size={16} />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ── MAIN BOOKING UI (hidden when confirmed) ── */}
      {!bookingConfirmed && (
        <>
          {/* ── SECTION 1: SELECT COURT ── */}
          <section className="relative px-4 pt-16 pb-20 overflow-hidden font-body">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-lime-400/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/8 blur-[90px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto">
              <div className="mb-10">
                <p className="text-lime-400 text-xs font-semibold tracking-[0.25em] uppercase mb-2 font-display">
                  Step 01
                </p>
                <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white leading-none mb-3">
                  Pick Your <span className="text-lime-400">Court</span>
                </h2>
                <p className="text-zinc-400 text-sm max-w-md">
                  Tap any court to explore photos, then select for booking.
                </p>
              </div>

              {/* Category Pills */}
              <div className="flex gap-2 mb-8 overflow-x-auto scrollbar-hide pb-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 font-display tracking-wide ${
                      activeCategory === cat
                        ? "bg-lime-400 text-black border-lime-400 glow-lime-sm"
                        : "bg-white/5 text-zinc-400 border-white/10 hover:border-lime-400/40 hover:text-lime-300"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Court Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {filtered.map((court) => (
                  <div
                    key={court.id}
                    className="card-hover rounded-2xl overflow-hidden bg-white/[0.04] border border-white/10 cursor-pointer group"
                    onClick={(e) => openModal(court, e)}
                  >
                    <div className="relative h-44 sm:h-48 overflow-hidden">
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
                      <span className="absolute top-3 right-3 text-[10px] bg-black/50 border border-white/20 text-zinc-300 px-2 py-0.5 rounded-md font-display tracking-wider">
                        {court.category}
                      </span>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <span className="bg-lime-400 text-black text-xs font-bold px-3 py-1.5 rounded-full font-display">
                          View Photos →
                        </span>
                      </div>
                    </div>

                    <div className="p-4">
                      <h3 className="font-display font-bold text-white text-base mb-1">
                        {court.name}
                      </h3>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-lime-400 text-sm font-semibold">
                          {court.price}
                        </span>
                        <span className="text-zinc-500 text-xs flex items-center gap-1">
                          <FiUsers size={12} /> {court.capacity}
                        </span>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          selectCourtForSlot(court);
                        }}
                        className="w-full py-2 rounded-xl bg-lime-400/10 border border-lime-400/30 text-lime-400 text-xs font-bold hover:bg-lime-400 hover:text-black transition-all duration-200 font-display tracking-wider"
                      >
                        SELECT COURT
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── SECTION 2: SELECT SLOT ── */}
          <section
            id="slot-section"
            className="relative px-4 py-20 font-body border-t border-white/5"
          >
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime-400/4 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto">
              <div className="mb-10">
                <p className="text-lime-400 text-xs font-semibold tracking-[0.25em] uppercase mb-2 font-display">
                  Step 02
                </p>
                <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white leading-none mb-3">
                  Book Your <span className="text-lime-400">Slot</span>
                </h2>
                <p className="text-zinc-400 text-sm max-w-md">
                  {bookedCourt
                    ? `Booking for: ${bookedCourt.name} · ${bookedCourt.category}`
                    : "Select a court above to get started."}
                </p>
              </div>

              {/* Date Picker */}
              <div className="mb-8 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                <label className="text-zinc-400 text-sm font-semibold font-display tracking-wide whitespace-nowrap flex items-center gap-2">
                  <FiCalendar size={15} className="text-lime-400" />
                  Choose Date
                </label>
                <input
                  type="date"
                  min={today}
                  value={selectedDate}
                  onChange={(e) => {
                    setSelectedDate(e.target.value);
                    setSelectedSlots([]);
                  }}
                  disabled={!bookedCourt}
                  className="bg-white/[0.06] border border-white/15 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-lime-400/60 focus:ring-1 focus:ring-lime-400/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all w-full sm:w-52"
                />
                {!bookedCourt && (
                  <span className="text-xs text-zinc-600 italic">
                    ← Select a court first
                  </span>
                )}
              </div>

              {/* Slots Grid */}
              {selectedDate && bookedCourt ? (
                <>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 sm:gap-3 mb-8">
                    {slots.map((slot) => {
                      const isSelected = selectedSlots.includes(slot.time);
                      return (
                        <button
                          key={slot.time}
                          disabled={slot.booked}
                          onClick={() => toggleSlot(slot.time)}
                          className={`slot-btn relative rounded-xl py-2.5 sm:py-3 px-1 sm:px-2 text-center text-[11px] sm:text-xs font-bold border font-display tracking-wide
                            ${
                              slot.booked
                                ? "bg-white/[0.02] border-white/8 text-zinc-700 cursor-not-allowed line-through"
                                : isSelected
                                  ? "bg-lime-400 border-lime-400 text-black glow-lime"
                                  : "bg-white/[0.05] border-white/12 text-zinc-300 hover:border-lime-400/50 hover:bg-lime-400/10 hover:text-lime-300"
                            }`}
                        >
                          {slot.booked && (
                            <span className="block text-[9px] text-zinc-600 mb-0.5 font-normal no-underline not-italic">
                              BOOKED
                            </span>
                          )}
                          {slot.time}
                        </button>
                      );
                    })}
                  </div>

                  {/* Legend */}
                  <div className="flex gap-4 sm:gap-5 mb-8 flex-wrap">
                    {[
                      { color: "bg-lime-400", label: "Selected" },
                      { color: "bg-white/10", label: "Available" },
                      { color: "bg-white/[0.02]", label: "Booked" },
                    ].map((l) => (
                      <div key={l.label} className="flex items-center gap-2">
                        <span
                          className={`w-3 h-3 rounded ${l.color} border border-white/10`}
                        />
                        <span className="text-zinc-500 text-xs">{l.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Confirm CTA */}
                  {selectedSlots.length > 0 && (
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center p-4 sm:p-5 rounded-2xl bg-lime-400/8 border border-lime-400/25">
                      <div className="flex-1">
                        <p className="text-lime-400 font-display font-bold text-sm mb-1">
                          {selectedSlots.length} slot
                          {selectedSlots.length > 1 ? "s" : ""} selected
                        </p>
                        <p className="text-zinc-400 text-xs leading-relaxed break-words">
                          {selectedSlots.join(" · ")}
                        </p>
                      </div>
                      <button
                        onClick={handleConfirmBooking}
                        className="w-full sm:w-auto flex-shrink-0 px-6 py-3 rounded-xl bg-lime-400 text-black font-display font-extrabold text-sm tracking-wide hover:bg-lime-300 transition-colors glow-lime flex items-center justify-center gap-2"
                      >
                        Confirm Booking <FiChevronRight size={16} />
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="flex flex-col items-center justify-center h-40 sm:h-48 rounded-2xl border border-dashed border-white/10 text-zinc-600">
                  <FiMapPin size={32} className="mb-3 opacity-40" />
                  <p className="text-sm text-center px-4">
                    {!bookedCourt
                      ? "Select a court above to see available slots"
                      : "Pick a date to view slots"}
                  </p>
                </div>
              )}
            </div>
          </section>
        </>
      )}

      {/* ── MODAL ── */}
      {modalOpen && selectedCourt && (
        <div
          className="modal-overlay fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4"
          onClick={closeModal}
          style={{ minHeight: "100vh" }}
        >
          <div
            className="modal-box bg-[#111118] border border-white/12 rounded-t-3xl sm:rounded-3xl overflow-hidden w-full sm:max-w-2xl max-h-[92vh] overflow-y-auto scrollbar-hide"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Main Image */}
            <div className="relative h-56 sm:h-80">
              <img
                src={selectedCourt.gallery[activeImg]}
                alt={`${selectedCourt.name} photo ${activeImg + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111118] via-transparent to-transparent" />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <FiX size={18} />
              </button>
              <span
                className={`absolute top-4 left-4 text-[10px] font-bold tracking-widest border px-2 py-0.5 rounded-md font-display ${tagColors[selectedCourt.tag]}`}
              >
                {selectedCourt.tag}
              </span>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 px-4 sm:px-5 -mt-5 mb-4 relative z-10 overflow-x-auto scrollbar-hide">
              {selectedCourt.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className="img-thumb w-14 sm:w-16 h-12 sm:h-14 rounded-lg overflow-hidden border-2 flex-shrink-0"
                  style={{
                    borderColor:
                      activeImg === i ? "#a3e635" : "rgba(255,255,255,0.1)",
                  }}
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Info */}
            <div className="px-4 sm:px-5 pb-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white mb-1">
                    {selectedCourt.name}
                  </h3>
                  <span className="text-xs text-lime-400 font-display tracking-widest font-semibold">
                    {selectedCourt.category.toUpperCase()}
                  </span>
                </div>
                <div className="text-right">
                  <p className="text-lime-400 font-display font-bold text-lg sm:text-xl">
                    {selectedCourt.price}
                  </p>
                  <p className="text-zinc-500 text-xs mt-0.5 flex items-center gap-1 justify-end">
                    <FiUsers size={11} /> {selectedCourt.capacity}
                  </p>
                </div>
              </div>

              {/* Amenities */}
              <div className="grid grid-cols-3 gap-2 mb-5">
                {[
                  "Locker Room",
                  "Parking",
                  "Lighting",
                  "AC Zone",
                  "Equipment",
                  "Coaching",
                ].map((a) => (
                  <div
                    key={a}
                    className="bg-white/[0.04] border border-white/8 rounded-xl py-2 px-2 sm:px-3 text-center text-xs text-zinc-400 flex flex-col items-center gap-1"
                  >
                    <span className="text-lime-400/70">{amenityIcons[a]}</span>
                    <span className="leading-tight">{a}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  selectCourtForSlot(selectedCourt);
                  closeModal();
                }}
                className="w-full py-3.5 rounded-xl bg-lime-400 text-black font-display font-extrabold tracking-wider hover:bg-lime-300 transition-colors glow-lime text-sm flex items-center justify-center gap-2"
              >
                SELECT THIS COURT <FiChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
