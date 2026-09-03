import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, index }) {
  return (
    <div className="mb-16 flex items-end justify-between gap-6 border-b border-border pb-6">
      <div>
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5 }}
          className="mb-3 flex items-center gap-3"
        >
          <span className="h-px w-8 bg-accent-soft" />
          {eyebrow && (
            <p className="font-mono text-sm uppercase tracking-widest text-accent-soft">{eyebrow}</p>
          )}
        </motion.div>
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: '110%' }}
            whileInView={{ y: '0%' }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl font-semibold text-heading sm:text-4xl"
          >
            {title}
          </motion.h2>
        </div>
      </div>
      {index && (
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="hidden select-none font-mono text-6xl font-bold text-border sm:block"
        >
          {index}
        </motion.span>
      )}
    </div>
  )
}
