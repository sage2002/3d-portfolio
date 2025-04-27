import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import NavBar from "./components/NavBar"
import LogoSection from "./sections/LogoSection"
import FeatureCards from "./sections/FeatureCards"
import ExperienceSection from "./sections/QualificationSection"
import TechStack from "./sections/TechStack"
const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeatureCards />
      <ExperienceSection />
      <TechStack />
      
    </>
  )
}

export default App
