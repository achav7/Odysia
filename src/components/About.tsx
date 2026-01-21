"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const lines = textRef.current?.querySelectorAll(".reveal-line");
      
      if (lines) {
        gsap.from(lines, {
          y: 80,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
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
      id="about"
      className="relative py-40 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <div ref={textRef} className="space-y-8">
          <p className="reveal-line text-xs uppercase tracking-[0.3em] text-white/30">
            About
          </p>
          
          <h2 className="reveal-line text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1]">
            We build tools that
            <br />
            <span className="text-white/50">shape the future.</span>
          </h2>
          
          <div className="reveal-line max-w-2xl pt-8">
            <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed">
              Odysia Solutions crafts intelligent software that empowers businesses 
              and individuals. Our products are designed with precision, built for 
              performance, and created to last.
            </p>
          </div>
          
          <div className="reveal-line max-w-2xl pt-4">
            <p className="text-base md:text-lg text-white/40 font-light leading-relaxed">
              From automation to knowledge management, we're reimagining how 
              technology integrates into everyday workflows. Simple. Powerful. Elegant.
            </p>
          </div>
        </div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-3 gap-8 mt-24 pt-12 border-t border-white/[0.06]"
        >
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-light mb-2">2</p>
            <p className="text-xs text-white/40 uppercase tracking-wider">Products</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-light mb-2">∞</p>
            <p className="text-xs text-white/40 uppercase tracking-wider">Possibilities</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-light mb-2">1</p>
            <p className="text-xs text-white/40 uppercase tracking-wider">Vision</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
