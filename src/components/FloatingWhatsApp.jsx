import { motion } from 'framer-motion'
import { WhatsappIcon } from './icons'

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/923043050865"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4, ease: 'backOut' }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] motion-safe:animate-ping motion-safe:opacity-40" />
      <WhatsappIcon size={26} className="relative" />
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-surface px-3 py-1.5 text-sm text-text opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
        Chat on WhatsApp
      </span>
    </motion.a>
  )
}
