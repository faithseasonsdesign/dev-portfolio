import './DetailedSkills.css';
import ui_img  from './images/ui.jpg';
export default function DetailedSkills(){
    return(
        <div className="detailed_skills_parent_wrapper py-4 container-fluid">
            <div className="container py-4 detailed_skills_chid_wrapper">
                <div className="row detailed_skills_row d-flex align-items-center">
                    <div className="col-12 col-sm-12 col-md-4">
                        <img src={ui_img} alt="" className="img-fluid mx-auto detailed_skills_img" />
                    </div>
                    <div className="col-12 col-sm-12 col-md-7">
                        <h3 className="detailed_skill_heading font-weight-bold">
                            UI/UX Design
                        </h3>
                        <p className="detailed_skill_description mt-3">
                            I am a proficient UI/UX designer who enjoys 
                            solving problems using design and research.
                            I design user-centric User Interfaces and Experiences. 
                            <span className='skills_description_span'>Why should this 
                            component be here ? Will it help the user archieve their goals quicker ?</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}