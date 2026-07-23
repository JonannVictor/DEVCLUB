import { motion } from 'framer-motion'
import { professores } from '@/constants/content'
import { Section } from '@/components/Section'
import { InstructorCard } from './InstructorCard'

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

export function Professores() {
  return (
    <Section id="professores" eyebrow={professores.eyebrow} title={professores.title}>
      <motion.div
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10% 0px' }}
        className="flex flex-wrap justify-center gap-6"
      >
        {professores.instructors.map((instructor, i) => (
          <div
            key={instructor.name}
            className="w-[calc(50%-0.75rem)] sm:w-[calc(33.333%-1rem)] md:w-[calc(25%-1.125rem)]"
          >
            <InstructorCard instructor={instructor} featured={i === 0} />
          </div>
        ))}
      </motion.div>
    </Section>
  )
}
