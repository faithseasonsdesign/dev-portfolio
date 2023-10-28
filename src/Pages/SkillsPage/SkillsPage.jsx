import DetailedSkills from '../../Sections/DetailedSkills/DetailedSkill';
import SkillsSection from '../../Sections/SkillsSection/SkillsSection';
import TechnologiesSection from '../../Sections/TechnologiesSection/TechnologiesSection';
import './SkillsPage.css';
import { BrowserRouter,Routes,Route,NavLink,Link } from 'react-router-dom';
export default function SkillsPage(){
    return(
        <>
            <SkillsSection/>
            <TechnologiesSection/>
        </>
    );
}