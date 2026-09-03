import { motion } from 'framer-motion'
import { word, wordStagger } from '../lib/animations'

export default function AnimatedText({ text, className }) {
  return (
    <motion.p
      variants={wordStagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
      className={className}
    >
      {text.split(' ').map((chunk, index) => (
        <motion.span key={`${chunk}-${index}`} variants={word} className="mr-[0.28em] inline-block">
          {chunk}
        </motion.span>
      ))}
    </motion.p>
  )
}
