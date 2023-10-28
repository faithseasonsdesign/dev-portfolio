import './AboutSection.css';
import about_img from './images/hero_image2.png';
export default function AboutSection(){
    return(
        <div className="AboutSection about_section_parent_wrapper container-fluid py-5">
            <div className="about_section_child_wrapper container py-4">
                <div className="row about_section_row">
                    <div className="col-12 col-sm-12 col-md-5 col-lg-5">
                        <img src={about_img} alt="" className="img-fluid mx-auto" />
                    </div>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-7'>
                        <h2 className="about_heading">
                            About Me ?
                        </h2>
                        
                        <p className="about_description mt-3">
                            <span className='name_span'>
                                Web Developer and Mobile Developer
                            </span>
                            &nbsp;
                            I can develop front-end and back-end websites/web applications
                            using popular and on demand technologies & frameworks such as &nbsp;
                            <span className="">
                            HTML , CSS , JavaScript , Bootstrap , PHP , SQL and React JavaScript
                            </span>
                            &nbsp;. I can also develop front-end mobile applications using popular and on demand 
                            mobile application frameworks such as Flutter which is written in Dart and 
                            React Native which is an extension of a popular web development framework React Javascript
                        </p>
                        <p className="about_description mt-3">
                            <span className='surname_span'>
                                Multimedia Digital Designer
                            </span>
                            &nbsp;
                            As a designer I can design for digital platforms and print media 
                            I am a visual story teller who uses visually appealing designs to tell a story 
                            of brands and products. I also use Design to solve problems.
                            &nbsp;
                            <span className="">
                            My designs are always user-centric based. I use tools such as Adobe Photoshop 
                            Adobe Illustrator , Adobe XD, Adobe After-effects and Figma to tell a story 
                            and solve problems
                            </span>
                            &nbsp;
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}