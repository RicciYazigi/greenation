"use client";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Hero() {
  return (
    <section className="h-screen relative overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/paramo-cover.jpg"
        className="absolute w-full h-full object-cover"
      >
        <source src="/planting-pilot.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-green-900/50 to-green-900/80" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6"
      >
        <h1 className="text-5xl md:text-7xl font-black text-white">
          Restore <span className="text-green-400">Nature.</span>
          <br />
          Rebuild <span className="text-green-400">Tomorrow.</span>
        </h1>
        <p className="max-w-2xl mt-6 text-lg md:text-xl text-gray-200">
          Inspired by the Andean páramo, we design carbon-negative architecture & ecological restoration at scale.
        </p>
        <button
          onClick={() => document.getElementById("impact")?.scrollIntoView({ behavior: "smooth" })}
          className="mt-10 px-10 py-4 bg-green-500 hover:bg-green-400 rounded-full font-bold text-lg text-gray-900 transition-transform hover:scale-105"
        >
          Discover How ↓
        </button>
      </motion.div>

      <Player
        autoplay
        loop
        src="/scroll-down.json"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-10 h-10"
      />
    </section>
  );
}
