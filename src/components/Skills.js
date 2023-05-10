import typeScriptLogo from "../assets/img/typescriptLogo.png";
import reactLogo from "../assets/img/React-icon.svg.png";
import reduxLogo from "../assets/img/reduxLogo.png";
import htmlCssJsLogo from "../assets/img/HtmlCSSJavaScriptLogos.png";
import nodejsLogo from "../assets/img/nodejslogo.png";
import javaLogo from "../assets/img/Java-Logo.png";
import pythonLogo from "../assets/img/pythonLogo.png";
import sqlLogo from "../assets/img/sqlLogo.png";
import dockerLogo from "../assets/img/dockerLogo.png";
import kubernetesLogo from "../assets/img/kubernetesLogo.png";
import postmanLogo from "../assets/img/postmanLogo.png";


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Languages, Frameworks, Libraries, and Tools.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                                <img src={typeScriptLogo} alt="Image" />
                                <h5>TypeScript</h5>
                            </div>
                            <div className="item">
                                <img src={reactLogo} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={reduxLogo} alt="Image" />
                                <h5>Redux</h5>
                            </div>
                            <div className="item">
                                <img src={htmlCssJsLogo} alt="Image" />
                                <h5>HTML5, CSS, & JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={nodejsLogo} alt="Image" />
                                <h5>Node.js</h5>
                            </div>
                            <div className="item">
                                <img src={javaLogo} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={pythonLogo} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={sqlLogo} alt="Image" />
                                <h5>SQL</h5>
                            </div>
                            <div className="item">
                                <img src={dockerLogo} alt="Image" />
                                <h5>Docker</h5>
                            </div>
                            <div className="item">
                                <img src={kubernetesLogo} alt="Image" />
                                <h5>Kubernetes</h5>
                            </div>
                            <div className="item">
                                <img src={postmanLogo} alt="Image" />
                                <h5>Postman</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}