"use client";
import CountUp from "react-countup";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { label: "Liters of water restored", end: 4_700_000_000 },
  { label: "Native seedlings planted", end: 2_000_000 },
  { label: "Tonnes of CO₂ sequestered", end: 120_000 },
];

export default function Impact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="impact" className="py-24 bg-gray-50">
      <div ref={ref} className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-green-800 mb-12">
          Live Impact
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {stats.map(({ label, end }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <p className="text-4xl md:text-6xl font-black text-green-600">
                {inView && <CountUp end={end} duration={2.5} separator="," />}
              </p>
              <p className="mt-2 text-gray-700">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
