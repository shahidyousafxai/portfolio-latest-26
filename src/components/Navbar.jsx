import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { socials } from '../data/socials'
import Logo from './Logo'

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
      className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
    >
      <motion.span
        animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 7 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="h-0.5 w-6 rounded-full bg-heading"
      />
      <motion.span
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.2 }}
        className="h-0.5 w-6 rounded-full bg-heading"
      />
      <motion.span
        animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -7 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="h-0.5 w-6 rounded-full bg-heading"
      />
    </button>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hovered, setHovered] = useState(null)

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 inset-x-0 z-50 border-b border-border/60 bg-bg/70 backdrop-blur-md"
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Logo />
          <ul
            onMouseLeave={() => setHovered(null)}
            className="hidden items-center gap-1 font-mono text-sm text-text-muted md:flex"
          >
            {links.map((link, index) => (
              <li key={link.href} className="relative">
                {hovered === link.href && (
                  <motion.span
                    layoutId="nav-hover-pill"
                    transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                    className="absolute inset-0 rounded-full border border-accent/40 bg-accent-bg"
                  />
                )}
                <a
                  href={link.href}
                  onMouseEnter={() => setHovered(link.href)}
                  className={`relative z-10 flex items-center gap-1.5 rounded-full px-4 py-2 transition-colors ${
                    hovered === link.href ? 'text-heading' : ''
                  }`}
                >
                  <span
                    className={`text-xs text-accent-soft transition-opacity duration-200 ${
                      hovered === link.href ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
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
