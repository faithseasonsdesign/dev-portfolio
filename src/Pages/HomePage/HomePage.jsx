import AboutSection from '../../Sections/AboutSection/AboutSection';
import HeroSection from '../../Sections/HeroSection/HeroSection';
import ProjectSection from '../../Sections/ProjectsSection/ProjectSection';
import SkillsSection from '../../Sections/SkillsSection/SkillsSection';
import TechnologiesSection from '../../Sections/TechnologiesSection/TechnologiesSection';
import './HomePage.css';
export default function HomePage(){
    return(
        <div>
          <HeroSection/>
          <ProjectSection/>
          <SkillsSection/>
          <TechnologiesSection/>
        </div>
    );
}