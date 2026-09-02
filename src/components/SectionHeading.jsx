import { motion } from 'framer-motion'
import { fadeUp } from '../lib/animations'

export default function SectionHeading({ eyebrow, title }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
      className="mb-12"
    >
      {eyebrow && (
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent-soft">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold text-heading sm:text-4xl">{title}</h2>
    </motion.div>
  )
}
