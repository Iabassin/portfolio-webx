import { Container } from "./styles";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import abouts from "../../assets/aboutme.jpeg";
import bootstrapIcon from "../../assets/bootstrap-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vscodeIcon from "../../assets/vscode-icon.svg";
import mysqlIcon from "../../assets/mysql-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";
import {
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
  faBootstrap,
  faGithub,} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export function About(){
  return(
    <Container id="sobre">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p>My name is soufian iabassin, I'm a computer technician with a great passion for programming. I am passionate about delivering solutions that add value to people's lives and at the same time challenge me. Improved my skills as a Front-End developer</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000} style={{marginTop: "2rem", marginBottom: "2rem"}}>
          <p>I develop websites and applications using HTML, CSS, JavaScript and react js . I am familiar with developing layouts that provide me. I'm always improving myself with each project they put in my hands.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>
            <p>I am a dedicated person who pursues to make his dreams come true, hardworking and results oriented, I always seek to achieve my best version.</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}> 
              <img src={htmlIcon} alt="Html" />
           </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}> 
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}> 
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
            <img src={bootstrapIcon} alt="bootstrap" />
          </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
            <img src={typescriptIcon} alt="Typescript" />
          </ScrollAnimation>
          </div>
          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
            <img src={vscodeIcon} alt="vscode" />
          </ScrollAnimation>
          </div>
          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
            <img src={mysqlIcon} alt="mysql" />
          </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
          <img src={abouts} style={{width: "414px", height: "414px"}} alt="Imagem de perfil" /> 
      </div>
      <div className="stage-cube-cont">
      <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faBootstrap} color="#4B8BBE" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGithub} color="#212121" />
            </div>
          </div>
          </ScrollAnimation>
        </div>
      
    </Container>
  )
}
