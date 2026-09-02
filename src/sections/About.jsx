import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { fadeUp, stagger } from '../lib/animations'

const skills = [
  'JavaScript',
  'React',
  'Tailwind CSS',
  'Framer Motion',
  'Three.js',
  'Node.js',
]

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading eyebrow="About" title="A bit about me" />
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="grid gap-12 sm:grid-cols-2"
      >
        <motion.p variants={fadeUp} className="text-lg leading-relaxed text-text-muted">
          Replace this with your own story: your background, what you focus
          on, and what kind of projects you enjoy building. Keep it short and
          specific — two or three sentences is plenty.
        </motion.p>
        <motion.div variants={fadeUp}>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent-soft">
            Tools I use
          </p>
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-border px-4 py-1.5 text-sm text-text"
              >
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  )
}
