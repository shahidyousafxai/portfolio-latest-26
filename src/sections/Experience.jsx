import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { experience } from '../data/experience'
import { fadeUp, stagger, tagStagger, word, wordStagger } from '../lib/animations'

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading eyebrow="Experience" title="Where I've worked" index="02" />
      <div className="relative pl-8">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top' }}
          className="absolute inset-y-0 left-0 w-px bg-border"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {experience.map((job) => (
            <motion.div key={`${job.company}-${job.role}`} variants={fadeUp} className="relative mb-12 last:mb-0">
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="absolute left-[-2.35rem] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg"
              />
              <p className="text-sm font-medium uppercase tracking-widest text-accent-soft">{job.period}</p>
              <h3 className="mt-1 text-xl font-semibold text-heading">
                {job.role} <span className="text-text-muted">· {job.company}</span>
              </h3>
              <p className="mt-1 text-sm text-text-muted">{job.location}</p>
              <motion.ul
                variants={wordStagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="mt-3 max-w-2xl list-disc space-y-1.5 pl-4 text-text-muted marker:text-accent-soft"
              >
                {job.bullets.map((point) => (
                  <motion.li key={point} variants={word}>
                    {point}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.ul
                variants={tagStagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                className="mt-4 flex flex-wrap gap-2"
              >
                {job.tech.map((tag) => (
                  <motion.li
                    key={tag}
                    variants={fadeUp}
                    className="rounded-full bg-accent-bg px-3 py-1 text-xs text-accent-soft"
                  >
                    {tag}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
