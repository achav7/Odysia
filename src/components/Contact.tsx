"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section
      id="contact"
      className="relative py-40 px-6"
    >
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/30 mb-6">
            Contact
          </p>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] mb-6">
            Let's build
            <br />
            <span className="text-white/50">something great.</span>
          </h2>
          
          <p className="text-lg text-white/40 font-light mb-16 max-w-md mx-auto">
            Have a project in mind? We'd love to hear from you.
          </p>
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full px-5 py-4 bg-white/[0.03] border border-white/10 rounded-xl text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors duration-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full px-5 py-4 bg-white/[0.03] border border-white/10 rounded-xl text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors duration-300"
            />
          </div>
          
          <textarea
            name="message"
            placeholder="Tell us about your project..."
            rows={5}
            required
            className="w-full px-5 py-4 bg-white/[0.03] border border-white/10 rounded-xl text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors duration-300 resize-none"
          />
          
          <motion.button
            type="submit"
            className="w-full sm:w-auto px-8 py-4 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition-colors duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 pt-12 border-t border-white/[0.06]"
        >
          <p className="text-sm text-white/30 mb-4">Or reach us directly</p>
          <a 
            href="mailto:contact@odysia.group" 
            className="text-lg text-white/60 hover:text-white transition-colors duration-300"
          >
            contact@odysia.group
          </a>
        </motion.div>
      </div>
    </section>
  );
}
