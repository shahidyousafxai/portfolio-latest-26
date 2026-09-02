import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from '../components/icons'
import SectionHeading from '../components/SectionHeading'
import { projects } from '../data/projects'
import { fadeUp, stagger } from '../lib/animations'

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading eyebrow="Work" title="Selected projects" />
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
            className="flex flex-col rounded-2xl border border-border bg-surface p-6"
          >
            <h3 className="text-lg font-semibold text-heading">{project.title}</h3>
            <p className="mt-2 flex-1 text-sm text-text-muted">{project.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-accent-bg px-3 py-1 text-xs text-accent-soft"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-4 text-sm">
              <a
                href={project.link}
                className="inline-flex items-center gap-1 text-heading transition-colors hover:text-accent-soft"
              >
                Live site <ArrowUpRight size={16} />
              </a>
              <a
                href={project.repo}
                className="inline-flex items-center gap-1 text-text-muted transition-colors hover:text-accent-soft"
              >
                <GithubIcon size={16} /> Code
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
