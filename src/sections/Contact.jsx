import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { socials } from '../data/socials'
import { fadeUp, stagger } from '../lib/animations'

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-28 text-center">
      <SectionHeading eyebrow="Contact" title="Let's work together" index="06" />
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="flex flex-col items-center gap-6"
      >
        <motion.p variants={fadeUp} className="max-w-md text-text-muted">
          Have a project in mind or an opportunity to discuss? I'm always
          open to hearing about new ideas and collaborations.
        </motion.p>
        <motion.div variants={fadeUp} className="flex items-center gap-2 text-sm text-text">
          <MapPin size={18} className="text-accent-soft" />
          Lahore, Pakistan
        </motion.div>
        <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-3">
          {socials.map(({ icon: Icon, href, label, display }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              className="flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-text transition-colors hover:border-accent-soft hover:text-heading"
            >
              <Icon size={18} className="text-accent-soft" />
              {display ?? label}
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
