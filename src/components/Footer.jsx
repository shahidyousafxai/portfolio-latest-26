import { Github, Linkedin, Mail } from 'lucide-react'

const socials = [
  { icon: Github, href: 'https://github.com/yourhandle', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/yourhandle', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:you@example.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 text-sm text-text-muted sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="flex items-center gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-heading"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
