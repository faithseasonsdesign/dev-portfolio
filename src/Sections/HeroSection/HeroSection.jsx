import './HeroSection.css';
import { BrowserRouter,Routes,Route,NavLink,Link } from 'react-router-dom';
//assets import start here
import hero_section_img from './images/hero_image.png';
import hero_section_img2 from './images/hero_image2.png';
import hero_img3 from  './images/img.jpeg';
//assets import ended here
export default function HeroSection(){
    return(
        <div className="HeroSection hero_section container-fluid hero_section_parent_wrapper py-4">
          <div className="container hero_section_child_wrapper py-4">
            <div className="row gy-3 hero_section_row d-flex align-items-center">
              <div className="col-12 col-sm-12 col-md-6 col-lg-7">
                <h6 className='font-weight-bold hero_section_name'>
                  Hi there! I'm &nbsp;
                  <span>Rebaone</span>
                  <span>&nbsp;Matlaba</span>
                </h6>
                <h1 className='hero_section_caption font-weight-bolder mt-3'>
                  I'm a Multimedia Digital Designer and Web Developer
                </h1>
                <p className="hero_section_description mt-3">
                  I specialize in UI/UX design , Graphic Design and Web Development.
                  I can also do some 3D modelling , develop mobile applications ,
                  as well as some content creation. I consider myself flexible and 
                  don't box myself under one thing.
                </p>
                <div className="buttons_wrapper d-flex mt-4">
                    <button className="btn btn-sm hero_section_contact text-white font-weight-bold px-4 py-2">
                        <Link className='text-white' to='/contact'><span>View Projects</span></Link>
                    </button>
                    <button className="btn btn-sm hero_section_build text-white font-weight-bold px-4 py-2">
                        <Link className='hero_section_build_text' to='/contact'><span>
                            Contact</span>
                        </Link>
                    </button>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-5">
                  <img src={hero_section_img2} alt="" className="img-fluid mx-auto" />
              </div>
            </div>
          </div>
        </div>
    );
}