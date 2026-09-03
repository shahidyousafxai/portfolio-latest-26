import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { skillGroups, spokenLanguages } from '../data/skills'
import { fadeUp, stagger } from '../lib/animations'

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading eyebrow="Skills" title="What I work with" />
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skillGroups.map((group) => (
          <motion.div
            key={group.category}
            variants={fadeUp}
            className="rounded-2xl border border-border bg-surface p-6"
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent-soft">
              {group.category}
            </p>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className="rounded-full border border-border px-3 py-1 text-sm text-text">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}

        <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-surface p-6">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent-soft">
            Spoken Languages
          </p>
          <ul className="flex flex-col gap-2">
            {spokenLanguages.map((lang) => (
              <li key={lang.name} className="flex flex-col text-sm text-text sm:flex-row sm:items-center sm:justify-between">
                <span>{lang.name}</span>
                <span className="text-text-muted">{lang.level}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  )
}
