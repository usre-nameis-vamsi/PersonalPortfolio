import AboutMe from "./_components/AboutMe"
import Banner from "./_components/Banner"
import Certifications from "./_components/Certifications"
import Contact from "./_components/Contact"
import ProjectList from "./_components/ProjectList"
import TechStack from "./_components/TechStack"


export default function Home() {
  return (
    <div className="page-">
      <Banner />
      <AboutMe />
      <TechStack />
      <Certifications />
      <ProjectList />
      <Contact />
    </div>
  )
}
