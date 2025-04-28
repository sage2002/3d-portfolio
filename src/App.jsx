import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import NavBar from "./components/NavBar"
import LogoSection from "./sections/LogoSection"
import FeatureCards from "./sections/FeatureCards"
import ExperienceSection from "./sections/QualificationSection"
import TechStack from "./sections/TechStack"
import Testimonials from "./sections/Testimonials"
import Contact from "./sections/Contact"
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
      <Testimonials />
      <Contact />
      
    </>
  )
}

export default App
