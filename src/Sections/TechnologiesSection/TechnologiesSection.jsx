import './TechnologiesSection.css';

export default function TechnologiesSection(){
    return(
        <div className="container-fluid technologies_parent_section py-4">
            <div className="container technologies_child_section py-4">
                <div className="d-flex technology_icons_wrapper">
                    <li className="">
                        <i class="devicon-html5-plain-wordmark colored technology_icon"></i>
                    </li>
                    <li>
                        <i class="devicon-css3-plain-wordmark colored technology_icon"></i>
                    </li>
                    <li>
                        <i class="devicon-javascript-plain colored technology_icon"></i>
                    </li>
                    <li>
                        <i class="devicon-bootstrap-plain-wordmark colored technology_icon"></i>
                    </li>
                    <li>
                        <i class="devicon-wordpress-plain-wordmark colored technology_icon"></i>
                    </li>
                    <li>
                        <i class="devicon-php-plain colored technology_icon"></i>
                    </li>
                    <li>
                        <i class="devicon-mysql-plain-wordmark colored technology_icon"></i>
                    </li>
                    <li>
                        <i class="devicon-react-original-wordmark colored technology_icon"></i>
                    </li>
                    <li>
                        <i class="devicon-flutter-plain colored technology_icon"></i>
                    </li>
                </div>
                <div className="d-flex technology_icons_wrapper mt-4">
                    <li>
                        <i class="devicon-photoshop-line colored technology_icon"></i>
                    </li>
                    <li>
                        <i class="devicon-illustrator-line colored technology_icon"></i>
                    </li>
                    <li>
                        <i class="devicon-aftereffects-plain colored technology_icon"></i>
                    </li>
                    <li>
                        <i class="devicon-figma-plain colored technology_icon"></i>
                    </li>
                </div>
            </div>
        </div>
    );
}