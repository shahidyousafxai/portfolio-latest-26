import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { lazy, Suspense, useRef } from 'react'
import { fadeUp, stagger } from '../lib/animations'

const HeroScene = lazy(() => import('../components/HeroScene'))

export default function Hero() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const blobScale = useTransform(scrollYProgress, [0, 1], [1, 1.25])
  const blobOpacity = useTransform(scrollYProgress, [0, 1], [0.9, 0.25])

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative isolate flex min-h-screen items-center overflow-hidden pt-24"
    >
      <motion.div
        style={{ scale: blobScale, opacity: blobOpacity }}
        className="pointer-events-none absolute inset-0"
      >
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </motion.div>

      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="relative z-10 w-full">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="mx-auto w-full max-w-6xl px-6"
        >
          <motion.p variants={fadeUp} className="mb-4 text-sm font-medium uppercase tracking-widest text-accent-soft">
            Hi, I'm Shahid Bahadur · Lahore, Pakistan
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="max-w-3xl text-5xl font-semibold leading-tight text-heading sm:text-6xl"
          >
            Crafting <span className="text-gradient">pixel-perfect</span>,
            high-performance UIs.
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg text-text-muted">
            Frontend Engineer specializing in React.js and Next.js — building
            scalable, seamless user experiences that drive measurable business
            growth.
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
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-text-muted"
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  )
}
