import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { experience } from '../data/experience'
import { fadeUp, stagger } from '../lib/animations'

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading eyebrow="Experience" title="Where I've worked" index="02" />
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative border-l border-border pl-8"
      >
        {experience.map((job) => (
          <motion.div key={`${job.company}-${job.role}`} variants={fadeUp} className="relative mb-12 last:mb-0">
            <span className="absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg" />
            <p className="text-sm font-medium uppercase tracking-widest text-accent-soft">{job.period}</p>
            <h3 className="mt-1 text-xl font-semibold text-heading">
              {job.role} <span className="text-text-muted">· {job.company}</span>
            </h3>
            <p className="mt-1 text-sm text-text-muted">{job.location}</p>
            <ul className="mt-3 max-w-2xl list-disc space-y-1.5 pl-4 text-text-muted marker:text-accent-soft">
              {job.bullets.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <ul className="mt-4 flex flex-wrap gap-2">
              {job.tech.map((tag) => (
                <li key={tag} className="rounded-full bg-accent-bg px-3 py-1 text-xs text-accent-soft">
                  {tag}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
