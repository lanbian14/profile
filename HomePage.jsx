import HeroSection from '../components/home/HeroSection'
import AchievementsSection from '../components/home/AchievementsSection'
import IntroductionSection from '../components/home/IntroductionSection'

const HomePage = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <IntroductionSection />
      <AchievementsSection />
    </main>
  )
}

export default HomePage