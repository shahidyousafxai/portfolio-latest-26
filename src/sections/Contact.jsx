import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import SectionHeading from '../components/SectionHeading'
import { fadeUp } from '../lib/animations'

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
    <section id="contact" className="mx-auto max-w-3xl px-6 py-28">
      <SectionHeading eyebrow="Contact" title="Let's work together" />
      <motion.form
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-5"
        noValidate
      >
        <div className="grid gap-5 sm:grid-cols-2">
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
        </div>
        <div>
          <textarea
            {...register('message', { required: 'Message is required' })}
            placeholder="Tell me about your project"
            rows={5}
            className="w-full resize-none rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text placeholder:text-text-muted focus:border-accent-soft focus:outline-none"
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105 disabled:opacity-60"
        >
          {isSubmitting ? 'Sending…' : 'Send message'} <Send size={16} />
        </button>
        {status === 'success' && (
          <p className="text-sm text-emerald-400">
            Thanks! Your message has been sent — I'll get back to you soon.
          </p>
        )}
        {status === 'error' && (
          <p className="text-sm text-red-400">
            Something went wrong. Please try again or email me directly.
          </p>
        )}
      </motion.form>
    </section>
  )
}
