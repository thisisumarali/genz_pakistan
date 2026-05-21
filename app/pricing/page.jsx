"use client";
import React, { useState } from "react";
import { FiCheck, FiChevronRight, FiZap } from "react-icons/fi";

const plans = [
  {
    name: "Basic",
    tag: null,
    price: { monthly: "PKR 2,999", yearly: "PKR 1,999" },
    desc: "Perfect for casual players.",
    color: "white",
    features: [
      "5 bookings/month",
      "All court types",
      "Standard hours only",
      "Email support",
      "Mobile app access",
    ],
  },
  {
    name: "Pro",
    tag: "MOST POPULAR",
    price: { monthly: "PKR 5,999", yearly: "PKR 3,999" },
    desc: "For the serious athlete.",
    color: "lime",
    features: [
      "15 bookings/month",
      "All court types",
      "Priority booking",
      "24/7 support",
      "Guest passes (2/mo)",
      "Event discounts 20%",
    ],
  },
  {
    name: "Elite",
    tag: "BEST VALUE",
    price: { monthly: "PKR 9,999", yearly: "PKR 6,999" },
    desc: "Unlimited access, maximum perks.",
    color: "violet",
    features: [
      "Unlimited bookings",
      "All court types",
      "Instant booking",
      "Dedicated manager",
      "Guest passes (5/mo)",
      "Free event entry",
      "Locker reserved",
    ],
  },
];

export default function PricingPage() {
  const [yearly, setYearly] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white px-4 pt-24 pb-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-lime-400/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-violet-600/8 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-lime-400 text-xs font-semibold tracking-[0.25em] uppercase mb-2">
            Membership Plans
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white leading-none mb-3">
            Simple <span className="text-lime-400">Pricing</span>
          </h1>
          <p className="text-zinc-100 text-sm max-w-md mx-auto">
            Flexible plans for every kind of player. No hidden fees, ever.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <span
              className={`text-sm font-display font-semibold ${!yearly ? "text-white" : "text-zinc-500"}`}
            >
              Monthly
            </span>
            <button
              onClick={() => setYearly(!yearly)}
              className={`relative w-12 h-6 rounded-full border transition-all ${yearly ? "bg-lime-400 border-lime-400" : "bg-white/10 border-white/20"}`}
            >
              <span
                className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-all ${yearly ? "left-6" : "left-0.5"}`}
              />
            </button>
            <span
              className={`text-sm font-display font-semibold ${yearly ? "text-white" : "text-zinc-500"}`}
            >
              Yearly <span className="text-lime-400 text-xs ml-1">–33%</span>
            </span>
          </div>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {plans.map((plan) => {
            const isLime = plan.color === "lime";
            const isViolet = plan.color === "violet";
            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-6 border transition-all flex flex-col ${
                  isLime
                    ? "bg-lime-400/8 border-lime-400/40"
                    : isViolet
                      ? "bg-violet-500/8 border-violet-500/30"
                      : "bg-white/[0.04] border-white/10"
                }`}
              >
                {plan.tag && (
                  <span
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold tracking-widest border px-3 py-1 rounded-full font-display ${
                      isLime
                        ? "bg-lime-400 text-black border-lime-400"
                        : "bg-violet-500/20 text-violet-300 border-violet-500/40"
                    }`}
                  >
                    {plan.tag}
                  </span>
                )}
                <div className="mb-5">
                  <h3
                    className={`font-display font-extrabold text-xl mb-1 ${isLime ? "text-lime-400" : isViolet ? "text-violet-300" : "text-white"}`}
                  >
                    {plan.name}
                  </h3>
                  <p className="text-zinc-500 text-xs mb-3">{plan.desc}</p>
                  <div className="flex items-end gap-1">
                    <span className="font-display font-extrabold text-3xl text-white">
                      {yearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    <span className="text-zinc-500 text-xs mb-1">/mo</span>
                  </div>
                </div>

                <ul className="space-y-2.5 mb-6 flex-1">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-zinc-300"
                    >
                      <FiCheck
                        size={14}
                        className={
                          isLime
                            ? "text-lime-400"
                            : isViolet
                              ? "text-violet-400"
                              : "text-zinc-100"
                        }
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-2.5 rounded-xl font-display font-extrabold text-sm tracking-wide transition-all flex items-center justify-center gap-2 ${
                    isLime
                      ? "bg-lime-400 text-black hover:bg-lime-300"
                      : isViolet
                        ? "bg-violet-500/20 border border-violet-500/40 text-violet-300 hover:bg-violet-500/30"
                        : "bg-white/[0.06] border border-white/15 text-white hover:bg-white/10"
                  }`}
                >
                  {isLime && <FiZap size={14} />} Get Started{" "}
                  <FiChevronRight size={14} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Pay-per-use note */}
        <p className="text-center text-zinc-600 text-xs mt-8">
          Prefer to pay per booking?{" "}
          <span className="text-lime-400 font-semibold cursor-pointer hover:underline">
            Book a single slot →
          </span>
        </p>
      </div>
    </div>
  );
}
