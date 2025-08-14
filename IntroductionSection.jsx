import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const IntroductionSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-display font-bold mb-8 text-center">
            Professional Journey
          </h2>
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-600 leading-relaxed mb-6">
              With over a decade of experience in digital innovation and community building, 
              I&apos;ve led transformative initiatives across various sectors. My journey includes 
              spearheading the growth of Xiaomi Vietnam&apos;s community and orchestrating 
              award-winning digital campaigns that have redefined industry standards.
            </p>
            <p className="text-gray-600 leading-relaxed">
              As a strategic thinker and innovation catalyst, I combine technical expertise 
              with creative vision to deliver exceptional results. My approach focuses on 
              creating meaningful digital experiences that drive engagement and foster 
              sustainable growth.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default IntroductionSection