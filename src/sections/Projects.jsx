import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { projects } from '../data/projects'
import { fadeUp, popIn, stagger, tagStagger } from '../lib/animations'

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading eyebrow="Work" title="Selected projects" index="05" />
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <motion.article
            key={project.title}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="flex flex-col rounded-2xl border border-border bg-surface p-6 transition-shadow duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10"
          >
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-lg font-semibold text-heading">{project.title}</h3>
              <span className="shrink-0 text-xs text-text-muted">{project.period}</span>
            </div>
            <p className="mt-2 flex-1 text-sm text-text-muted">{project.description}</p>
            <motion.ul
              variants={tagStagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              className="mt-4 flex flex-wrap gap-2"
            >
              {project.tags.map((tag) => (
                <motion.li
                  key={tag}
                  variants={popIn}
                  className="rounded-full bg-accent-bg px-3 py-1 text-xs text-accent-soft"
                >
                  {tag}
                </motion.li>
              ))}
            </motion.ul>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
