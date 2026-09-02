import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { fadeUp } from '../lib/animations'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading eyebrow="About" title="A bit about me" />
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        className="max-w-2xl text-lg leading-relaxed text-text-muted"
      >
        Replace this with your own story: your background, what you focus
        on, and what kind of projects you enjoy building. Keep it short and
        specific — two or three sentences is plenty.
      </motion.p>
    </section>
  )
}
