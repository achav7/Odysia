"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const apps = [
  {
    name: "Arya",
    link: "https://arya.odysia.group",
    icon: (
      <svg viewBox="0 0 235.5 215.8" fill="#fafafa" className="w-12 h-12">
        <path d="M64.91,74.73c6.99-.15,15.63,1.28,22.27,3.39,37.46,11.93,39.69,55.9,84.53,58.38,10.64.59,28.68-7.39,35.25.48,8.79,10.53-4.68,26-11.59,34.66-35.44,44.43-97.63,54.72-149.17,33.65C-23.77,176.66-11.65,76.45,64.91,74.73Z"/>
        <path d="M149.95,0c28.04-.25,65.42,11.36,79.07,37.97,23.45,45.76-20.9,91.71-67.59,74.1-29.26-11.02-28.65-46.81-64.15-51.68-8.79-1.2-27.2,5.22-30.55-4.59-2.34-6.87,1.83-11.27,5.37-16.35C89.63,14.36,119.54.27,149.95,0Z"/>
      </svg>
    ),
  },
  {
    name: "Albert",
    link: "https://albert.odysia.group",
    icon: (
      <svg viewBox="0 0 557.36 399.58" fill="#fafafa" className="w-12 h-12">
        <path d="M379.54,370.36c-29.88-32.15-13.65-76.63-25.83-113.53-5.77-14.77-25.73-18.84-37.67-8.93-8.02,6.22-13.99,15.43-20.34,23.63-28.42,35.54-60.05,85.56-90.93,117.52-17.25,13.58-37.87,9.05-60.63,9.94-36.71-.03-83.27.14-113.5.06-17.9,1.25-38-6.61-27.96-27.74C64.89,279,202.51,112.35,272.94,18.03,285.54,1.49,306.69.4,328.28.12c18.28.15,39.32-.61,57.63.49,18.18.61,32.04,8.39,32.29,28.76.95,15.35.34,37.37.54,54.54.06,19.45-.04,40.01.14,58.39-1.76,29.65,15.17,46.86,44.99,46.67,25.2,3.74,83.11-10.21,91.18,22.14,4.04,50.24,1.62,113.33,1.14,162.16-3.52,30.73-36.45,25.32-61.52,26.12-40.75-.3-87.36,5.3-115.02-28.9l-.13-.15Z"/>
      </svg>
    ),
  },
  {
    name: "Backstage",
    link: "https://backstage.odysia.group",
    icon: (
      <svg viewBox="0 0 177.75 161.28" fill="#fafafa" className="w-12 h-12">
        <path d="M31.01,19.67c-2.22-5.23,2.23-13.59,6.44-16.88C40.76.33,44.63.14,50.22.13c26.97.42,61.88-.84,84.44.5,20.13,3.95,26.69,23.96,16.79,41.3-12.62,21.49,8.65,15.02,20.3,34.49,19.85,34.26-13.12,75.75-47.37,83.44-4.42,1.15-8,1.41-12.39,1.41-18.31-.02-69.89.02-98.17,0-6.48-.09-10.9.46-12.73-1.54-3.42-3.58,2.12-20.8,3.06-26.85,4.52-22.77,11.41-30.5,35.54-30.32,7.81-.07,15.62-.28,23.42-.41,9.38.3,21.9-1.79,29.17,5.04,6.01,6.14,5.55,16.65,11.59,23.19,11.35,12.85,31.66,2.23,30.06-14.17-5.11-34.45-50.54-26.52-76.45-27.05-18.85.26-22.72-8.78-18.38-26.08,2.7-13.95,6.28-25.65,22.59-26.76,30.99-2.04,19.6,16.02,32.7,28.79,4.11,3.73,9.65,5.4,14.85,4.32,15.6-3.32,17.84-23.94,7.58-34.31-5.75-6.11-13.32-9.45-21.07-11.13-5.47-1.06-10.25-.89-16.09-.92-10.83-.01-27.91.02-38.13-.02-3.83.09-9.4-.56-10.48-3.29l-.05-.09Z"/>
      </svg>
    ),
  },
];

export default function AppsShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll(".app-card");

      if (cards) {
        gsap.from(cards, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="products"
      className="relative py-32 px-6"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/30 mb-4">
            Products
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight">
            Our ecosystem
          </h2>
        </motion.div>

        {/* Apps grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {apps.map((app) => (
            <motion.a
              key={app.name}
              href={app.link}
              target="_blank"
              rel="noopener noreferrer"
              className="app-card group flex flex-col items-center text-center cursor-pointer"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Logo container 1:1 with border */}
              <div className="w-24 h-24 rounded-2xl border border-white/50 bg-black flex items-center justify-center mb-4 group-hover:border-white/70 transition-colors duration-300">
                {app.icon}
              </div>
              <h3 className="text-base font-medium mb-1">{app.name}</h3>
              <p className="text-xs text-white/40 group-hover:text-white/60 transition-colors duration-300">{app.link.replace('https://', '')}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
