import { BrowserRouter,Routes,Route,NavLink,Link } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import AboutSection from './Sections/AboutSection/AboutSection';
import SkillsSection from './Sections/SkillsSection/SkillsSection';
import ProjectSection from './Sections/ProjectsSection/ProjectSection';
import TechnologiesSection from './Sections/TechnologiesSection/TechnologiesSection';
import SkillsPage from './Pages/SkillsPage/SkillsPage';
import AboutPage from './Pages/AboutPage/AboutPage';
import ProjectsPage from './Pages/ProjectsPage/ProjectsPage';

export default function App(){
  return(
    <BrowserRouter>
        

        <div className="container_fluid navigation_parent_wrapper py-4">
          <div className="container navigation_child_wrapper d-flex align-items-center">
            <div className="logo_wrapper">
              <li className='text-white'>
                <Link className='nav_link' to='/'>
                  <span className='name_span'>Faith</span> 
                  <span className='surname_span'>&nbsp;Matlaba</span>
                </Link>
              </li>
            </div>
            <div className="nav_list_items_wrapper container d-none d-sm-none d-md-flex justify-content-end">
              <li className="nav_link_item">
                <Link className='text-dark active' to='/skillsPage'><span>Skills</span></Link>
              </li>
              <li className="nav_link_item">
                <Link className='text-dark' to='/projectPage'><span>Projects</span></Link>
              </li>
              <li className="nav_link_item">
                <Link className='text-dark' to='/aboutPage'><span>About</span></Link>
              </li>
            </div>
          </div>
        </div>

        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='skillsPage' element={<SkillsPage/>} />
            <Route path='projectPage' element={<ProjectsPage/>} />
            <Route path='aboutPage' element={<AboutPage/>} />
        </Routes>

    </BrowserRouter>
  );
}

