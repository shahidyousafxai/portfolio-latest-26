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
        Crafting pixel-perfect, high-performance UIs with React.js and
        Next.js. Proven in Agile environments as both builder and mentor —
        boosting efficiency, reducing complexity, and delivering seamless
        user experiences that drive measurable business growth. Aspiring to
        lead frontend teams and build industry-defining products.
      </motion.p>
    </section>
  )
}
