import { motion } from 'framer-motion'

export default function Logo() {
  return (
    <motion.a
      href="#top"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="group flex items-center font-mono text-lg font-semibold tracking-tight text-heading"
    >
      <motion.span
        aria-hidden="true"
        className="text-accent"
        animate={{ x: [0, -3, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        &lt;
      </motion.span>
      <span className="px-0.5">
        Shahid<span className="text-accent-soft">.</span>Bahadur
      </span>
      <motion.span
        aria-hidden="true"
        className="text-accent"
        animate={{ x: [0, 3, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        /&gt;
      </motion.span>
      <motion.span
        aria-hidden="true"
        className="ml-1 inline-block h-4 w-0.5 bg-accent-soft"
        animate={{ opacity: [1, 1, 0, 0] }}
        transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
      />
    </motion.a>
  )
}
