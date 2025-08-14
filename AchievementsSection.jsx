import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const achievements = [
  {
    title: "Xiaomi Community Growth",
    description: "Led the expansion of Xiaomi Vietnam's community from 10K to 500K+ active members",
    metric: "50x Growth",
    icon: "📱"
  },
  {
    title: "Digital Campaign Excellence",
    description: "Orchestrated award-winning digital campaigns reaching millions of users",
    metric: "5+ Awards",
    icon: "🏆"
  },
  {
    title: "Innovation Leadership",
    description: "Pioneered digital transformation initiatives across multiple sectors",
    metric: "10+ Projects",
    icon: "💡"
  }
]

const AchievementsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display font-bold mb-16 text-center">
          Key Achievements
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl mb-4">{achievement.icon}</div>
              <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
              <p className="text-gray-600 mb-4">{achievement.description}</p>
              <div className="text-primary-600 font-bold">{achievement.metric}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AchievementsSection