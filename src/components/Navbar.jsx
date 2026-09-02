import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { socials } from '../data/socials'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function MenuToggle({ isOpen, onClick }) {
  return (
    <button
      type="button"
      aria-label="Toggle menu"
      onClick={onClick}
      className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[6px] md:hidden"
    >
      <motion.span
        animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 7 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="h-[2px] w-6 rounded-full bg-heading"
      />
      <motion.span
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.2 }}
        className="h-[2px] w-6 rounded-full bg-heading"
      />
      <motion.span
        animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -7 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="h-[2px] w-6 rounded-full bg-heading"
      />
    </button>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 inset-x-0 z-50 border-b border-border/60 bg-bg/70 backdrop-blur-md"
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-semibold tracking-tight text-heading">
            Shahid Bahadur
          </a>
          <ul className="hidden items-center gap-6 text-sm text-text-muted md:flex lg:gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-heading">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <MenuToggle isOpen={isOpen} onClick={() => setIsOpen((open) => !open)} />
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0% at calc(100% - 2.75rem) 2.75rem)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 2.75rem) 2.75rem)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 2.75rem) 2.75rem)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-bg px-6 pb-10 pt-28 md:hidden"
          >
            <nav>
              <ul className="flex flex-col gap-1 font-mono">
                {links.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: 0.06 * index + 0.15, duration: 0.4, ease: 'easeOut' }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-baseline gap-4 border-b border-border/60 py-4 text-3xl font-semibold text-heading transition-colors hover:text-accent-soft"
                    >
                      <span className="text-sm text-accent-soft">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="flex items-center gap-5"
            >
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="text-text-muted transition-colors hover:text-heading"
                >
                  <Icon size={20} />
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
