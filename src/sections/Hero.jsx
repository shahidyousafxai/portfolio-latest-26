import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import HeroScene from '../components/HeroScene'
import { fadeUp, stagger } from '../lib/animations'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="absolute inset-0 -z-10 opacity-80">
        <HeroScene />
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-6xl px-6"
      >
        <motion.p variants={fadeUp} className="mb-4 text-sm font-medium uppercase tracking-widest text-accent-soft">
          Hi, I'm Your Name
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="max-w-3xl text-5xl font-semibold leading-tight text-heading sm:text-6xl"
        >
          I build <span className="text-gradient">fast, animated</span> web
          experiences.
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg text-text-muted">
          Frontend developer specializing in React, motion design, and
          performant interfaces.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-10 flex items-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium text-text transition-colors hover:border-accent-soft hover:text-heading"
          >
            Get in touch
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-muted"
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  )
}
