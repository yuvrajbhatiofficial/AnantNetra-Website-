"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Cpu, Lock, Globe2, LineChart, Brain } from "lucide-react";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import { CardSpotlight } from "@/components/ui/card-spotlight"; // ✅ your installed components

export default function BentoGrids() {
  return (
    <section className="w-full py-20 bg-neutral-50 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center text-neutral-800 dark:text-neutral-100"
        >
          Explore Our Intelligent Ecosystem
        </motion.h2>

        {/* ✅ Responsive Bento Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[220px] gap-4 md:gap-6">
          {/* 🟦 Evervault Interactive Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2"
          >
            <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start p-4 relative h-full rounded-xl bg-white dark:bg-neutral-900 hover:shadow-xl transition-all duration-500 overflow-hidden">
              {/* Corner icons */}
              <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
              <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
              <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
              <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

              {/* Evervault hover effect */}
              <div className="w-full h-1/2 flex justify-center items-center">
                <EvervaultCard text="Security" />
              </div>

              <h2 className="dark:text-white text-black mt-6 text-sm font-light leading-relaxed">
                Experience immersive visuals and subtle micro-interactions designed for the future.
              </h2>

              <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
                Watch me hover
              </p>
            </div>
          </motion.div>

          {/* 🟩 AI Architecture */}
          <motion.div whileHover={{ y: -5 }} className="col-span-1 lg:col-span-2">
            <Card className="h-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:shadow-lg transition-all duration-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg font-semibold text-neutral-800 dark:text-neutral-100">
                  <Cpu className="text-blue-600 dark:text-cyan-400" />
                  AI Architecture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Our systems think, adapt, and evolve — powered by modular AI infrastructure.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* 🟣 Cognitive Edge */}
          <motion.div whileHover={{ scale: 1.05 }} className="col-span-1 sm:col-span-1 lg:row-span-2">
            <CardSpotlight className="h-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 hover:shadow-xl transition-all duration-500 flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="flex z-20 items-center gap-2 text-neutral-800 dark:text-neutral-100">
                  <Brain className="text-purple-600 dark:text-purple-400" />
                  Cognitive Edge
                </CardTitle>
              </CardHeader>
              <CardContent className="z-20">
                <p className="text-neutral-600  dark:text-neutral-400">
                  AI meets human intuition to unlock transformative possibilities.
                </p>
              </CardContent>
            </CardSpotlight>
          </motion.div>

          {/* 🟢 Zero Trust Security */}
          <motion.div whileHover={{ rotate: 0.5 }} className="col-span-1 lg:col-span-1">
            <Card className="h-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:shadow-lg transition-all duration-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neutral-800 dark:text-neutral-100">
                  <Lock className="text-green-600 dark:text-green-400" />
                  Zero Trust Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Security by design — AI-backed, encrypted, and constantly evolving.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* 🌍 Global Impact */}
          <motion.div whileHover={{ scale: 1.02 }} className="col-span-1 sm:col-span-2 lg:col-span-2">
            <Card className="h-full relative border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden hover:shadow-xl transition-all duration-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neutral-800 dark:text-neutral-100">
                  <Globe2 className="text-blue-500 dark:text-cyan-400" />
                  Global Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Transforming industries across the globe with secure, intelligent technology.
                </p>
              </CardContent>
            {/* Flashy gradient motion sweep */}
<motion.div
  initial={{ x: "-120%", scale: 1, opacity: 0.8 }}
  animate={{ x: "120%", scale: 1.1, opacity: [0.8, 1, 0.8] }}
  transition={{
    repeat: Infinity,
    duration: 6,
    ease: "easeInOut",
  }}
  className="absolute inset-y-0 w-[100px]
             bg-gradient-to-r from-transparent 
             via-cyan-400/60 to-transparent
             dark:via-cyan-300/60 
             blur-2xl opacity-90
             mix-blend-screen"
/>

{/* Optional glowing tail for depth */}
<motion.div
  initial={{ x: "-130%", scale: 1 }}
  animate={{ x: "130%", scale: 1 }}
  transition={{
    repeat: Infinity,
    duration: 6,
    ease: "easeInOut",
    delay: 0.3,
  }}
  className="absolute inset-y-0 w-[140px]
             bg-gradient-to-r from-transparent 
             via-blue-500/30 to-transparent 
             dark:via-blue-400/30
             blur-3xl opacity-70
             mix-blend-overlay"
/>
            </Card>
          </motion.div>

          {/* 📊 Minimal Chart */}
          <motion.div whileHover={{ scale: 1.05, rotate: 1 }} className="col-span-1">
            <Card className="h-full flex items-center justify-center border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 hover:shadow-lg transition-all duration-500">
              <LineChart className="w-10 h-10 text-blue-500 dark:text-cyan-400" />
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
