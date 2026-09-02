import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { education } from '../data/education'
import { fadeUp, stagger } from '../lib/animations'

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading eyebrow="Education" title="Academic background" />
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="grid gap-6 sm:grid-cols-2"
      >
        {education.map((item) => (
          <motion.div
            key={item.degree}
            variants={fadeUp}
            className="rounded-2xl border border-border bg-surface p-6"
          >
            <p className="text-sm font-medium uppercase tracking-widest text-accent-soft">{item.period}</p>
            <h3 className="mt-1 text-lg font-semibold text-heading">{item.degree}</h3>
            <p className="mt-1 text-sm text-text-muted">{item.institution}</p>
            {item.description && <p className="mt-3 text-sm text-text-muted">{item.description}</p>}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
