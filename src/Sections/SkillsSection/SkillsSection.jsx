import './SkillsSection.css';
import { BrowserRouter,Routes,Route,NavLink,Link } from 'react-router-dom';
export default function SkillsSection(){
    return(
        <div className="SkillsSection skills_section_parent_wrapper container-fluid py-4">
            <div className="container skills-section_child_wrapper py-4">
                <p className='skills_sub_heading'>What do I bring to the team?</p>
                <h4 className="skills_heading font-weight-bold">
                    My Expertise & Skills
                </h4>
                <div className="row gy-2 skills_row mt-4 d-flex">
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                        <div className="card skills_card py-4 h-100">
                            <div className="card-body skills_card_body">
                                <h5 className="card_title">
                                    User Experience Design
                                </h5>
                                <p className='skills_description mt-4'>
                                    I am a skilled UI/UX designer, who excel in transforming abstract briefs and complex problems 
                                    into innovative solutions and engaging user experiences
                                </p>
                                <Link className='skills_learn_text' to='/contact'><span>
                                    Learn&nbsp;More</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                        <div className="card skills_card py-4 h-100">
                            <div className="card-body skills_card_body">
                                <h5 className="card_title">
                                    Web Development
                                </h5>
                                <p className="skills_description mt-4">
                                    I'm a proficient web developer who is good at converting design prototypes into 
                                    complete user-friendly and usable product.
                                </p>
                                <Link className='skills_learn_text' to='/contact'><span>
                                    Learn&nbsp;More</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                        <div className="card skills_card py-4 h-100">
                            <div className="card-body skills_card_body">
                                <h5 className="card_title">
                                    Graphic Design
                                </h5>
                                <p className='skills_description mt-4'>
                                As a proficient designer, I excel at translating complex briefs and challenges 
                                into well-crafted designs and deliverables. 
                                <span className='d-none'>
                                    My expertise lies in practicing 
                                    User-Centric Design, where my focus is on creating solutions that not only address 
                                    the given problems 
                                    but also prioritize the needs and experiences of the end use
                                </span>
                                </p>
                                <Link className='skills_learn_text' to='/contact'><span>
                                    Learn&nbsp;More</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}