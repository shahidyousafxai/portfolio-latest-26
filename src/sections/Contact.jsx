import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { MapPin, Send } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import SectionHeading from '../components/SectionHeading'
import { socials } from '../data/socials'
import { fadeUp, stagger, tagStagger } from '../lib/animations'

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()
  const [status, setStatus] = useState(null)

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
      )
      setStatus('success')
      reset()
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading eyebrow="Contact" title="Let's work together" index="06" />
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]"
      >
        <motion.div variants={fadeUp} className="flex flex-col gap-6">
          <p className="max-w-sm text-text-muted">
            Have a project in mind or an opportunity to discuss? I'm always
            open to hearing about new ideas and collaborations.
          </p>
          <div className="flex items-center gap-3 text-sm text-text">
            <MapPin size={18} className="text-accent-soft" />
            Lahore, Pakistan
          </div>
          <motion.ul
            variants={tagStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col gap-3"
          >
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.li key={label} variants={fadeUp}>
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex items-center gap-3 text-sm text-text transition-colors hover:text-accent-soft"
                >
                  <Icon size={18} className="text-accent-soft" />
                  {label}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.form
          variants={stagger}
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-5"
          noValidate
        >
          <motion.div variants={fadeUp} className="grid gap-5 sm:grid-cols-2">
            <div>
              <input
                {...register('name', { required: 'Name is required' })}
                placeholder="Your name"
                className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text placeholder:text-text-muted focus:border-accent-soft focus:outline-none"
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
              )}
            </div>
            <div>
              <input
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: { value: /^\S+@\S+$/i, message: 'Enter a valid email' },
                })}
                placeholder="Your email"
                className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text placeholder:text-text-muted focus:border-accent-soft focus:outline-none"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
              )}
            </div>
          </motion.div>
          <motion.div variants={fadeUp}>
            <textarea
              {...register('message', { required: 'Message is required' })}
              placeholder="Tell me about your project"
              rows={5}
              className="w-full resize-none rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text placeholder:text-text-muted focus:border-accent-soft focus:outline-none"
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
            )}
          </motion.div>
          <motion.button
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white disabled:opacity-60"
          >
            {isSubmitting ? 'Sending…' : 'Send message'} <Send size={16} />
          </motion.button>
          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-emerald-400"
            >
              Thanks! Your message has been sent — I'll get back to you soon.
            </motion.p>
          )}
          {status === 'error' && (
            <motion.p
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-red-400"
            >
              Something went wrong. Please try again or email me directly.
            </motion.p>
          )}
        </motion.form>
      </motion.div>
    </section>
  )
}
