import { motion } from 'framer-motion'
import AnimatedCounter from '../components/AnimatedCounter'
import AnimatedText from '../components/AnimatedText'
import SectionHeading from '../components/SectionHeading'
import { stats } from '../data/stats'
import { fadeUp, stagger } from '../lib/animations'

const bio =
  "Crafting pixel-perfect, high-performance UIs with React.js and Next.js. Proven in Agile environments as both builder and mentor — boosting efficiency, reducing complexity, and delivering seamless user experiences that drive measurable business growth. Aspiring to lead frontend teams and build industry-defining products."

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading eyebrow="About" title="A bit about me" index="01" />
      <AnimatedText text={bio} className="max-w-2xl text-lg leading-relaxed text-text-muted" />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4"
      >
        {stats.map((stat) => (
          <motion.div key={stat.label} variants={fadeUp}>
            <p className="font-mono text-4xl font-semibold text-accent-soft sm:text-5xl">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-sm text-text-muted">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
