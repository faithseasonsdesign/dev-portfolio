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
                <div className="row gy-2 skills_row mt-4">
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                        <div className="card skills_card py-4">
                            <div className="card-body skills_card_body">
                                <h5 className="card_title">
                                    User Experience Design
                                </h5>
                                <p className='skills_description mt-4'>
                                   I'm a proficient designer who is profficient at converting briefs and problems into 
                                   solutions and deliverable. User Centric Design
                                </p>
                                <Link className='skills_learn_text' to='/contact'><span>
                                    Learn&nbsp;More</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                        <div className="card skills_card py-4">
                            <div className="card-body skills_card_body">
                                <h5 className="card_title">
                                    Web Development
                                </h5>
                                <p className="skills_description mt-4">
                                I'm a proficient web developer who is good at converting design prototypes into 
                                complete usable product.
                                </p>
                                <Link className='skills_learn_text' to='/contact'><span>
                                    Learn&nbsp;More</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                        <div className="card skills_card py-4">
                            <div className="card-body skills_card_body">
                                <h5 className="card_title">
                                    Graphic Design
                                </h5>
                                <p className='skills_description mt-4'>
                                   I'm a proficient designer who is profficient at converting briefs and problems into 
                                   design and deliverable. User Centric Design
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