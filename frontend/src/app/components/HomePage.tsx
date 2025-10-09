"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

function HomePage() {
  const videoRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const scrollToVideo = () => {
    videoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // ✅ Always call hooks, but fallback to a dummy MotionValue on server
  const { scrollYProgress: rawScrollYProgress } = useScroll();
  const dummyMotionValue = new MotionValue(0);
  const scrollYProgress = isClient ? rawScrollYProgress : dummyMotionValue;

  const heroScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.7]);
  return (
    <div className="relative">
      {/* Hero Section */}
      {isClient && (
         <motion.div
        style={{ scale: heroScale, opacity: heroOpacity }}
        className="relative flex min-h-screen flex-col items-center justify-center px-4"
      >
          <h1 className="relative z-10 mx-auto max-w-5xl text-center text-3xl font-bold text-slate-700 md:text-5xl lg:text-7xl dark:text-slate-300">
            {"AI-Driven Solutions for a Smarter & Secure Future"
              .split(" ")
              .map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  }}
                  className="mr-2 inline-block"
                >
                  {word}
                </motion.span>
              ))}
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            className="relative z-10 mx-auto mt-6 max-w-2xl text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
          >
            Transforming enterprise with next-gen Artificial Intelligence,
            Cybersecurity, and IT Consulting to drive innovation, Security, and growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1 }}
            className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <button
              onClick={scrollToVideo}
              className="w-64 rounded-lg bg-black px-6 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              Explore Now
            </button>
            <button className="w-64 rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
              Contact Support
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* Video Section */}
      <motion.div
        ref={videoRef}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mx-auto mb-20 w-full overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
      >
        <div className="relative h-[70vh] w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
          <video
            src="./video_one.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute left-0 top-0 h-full w-full object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default HomePage;
