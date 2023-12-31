import './ProjectsSection.css';
import img_one from './images/1.png';import img_two from './images/2.png';
import img_three from './images/3.png';import img_four from './images/4.png';
import img_five from './images/5.png'; import img_six from './images/6.png';

import web_one from './images/web2.jpg';
import web_two from './images/web3.jpg';

export default function ProjectSection(){
    return(
        <div className="ProjectSection project_section_parent_wrapper container-fluid py-4">
            <div className="container project_section_child_wrapper py-4">
                <h4 className="project_heading font-weight-bold">
                    My Projects
                </h4>
                <h5 className="project_sub_heading">
                    Design Projects
                </h5>
                <p className="project_description2">
                    kindly check Linkedin for more side projects : Faith Matlaba on linkedin
                </p>
                <div className="row g-2 project_row mt-5">
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                        <img src={img_one} alt="" className="img-fluid mx-auto" />
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                        <img src={img_two} alt="" className="img-fluid mx-auto" />
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                        <img src={img_three} alt="" className="img-fluid mx-auto" />
                    </div>
                </div>
                <div className="row gy-2 project_row mt-5">
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                        <img src={img_four} alt="" className="img-fluid mx-auto" />
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                        <img src={img_five} alt="" className="img-fluid mx-auto" />
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                        <img src={img_six} alt="" className="img-fluid mx-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
}