import star from "../assets/images/star.png";
import phoneImage from "../assets/images/phone.png";
import mailImage from "../assets/images/Mail.png";
import addressImage from "../assets/images/address.png";
import githubImage from "../assets/images/github.png";
import linkedInImage from "../assets/images/linkedin.png";

// STAR
function Star() {
  return (
    <>
      <img src={star} className="star"></img>
    </>
  );
}

// STAR
function Phone() {
  return (
    <>
      <img src={phoneImage} className="star"></img>
    </>
  );
}

// STAR
function Mail() {
  return (
    <>
      <img src={mailImage} className="star"></img>
    </>
  );
}

// STAR
function Address() {
  return (
    <>
      <img src={addressImage} className="star"></img>
    </>
  );
}

// STAR
function Github() {
  return (
    <>
      <img src={githubImage} className="star"></img>
    </>
  );
}

// STAR
function Linkedin() {
  return (
    <>
      <img src={linkedInImage} className="star"></img>
    </>
  );
}

function Education() {
  return (
    <>
      <div className="backgroundContainer">
        <p className="backgroundText">{Star()}Education</p>
        <div className="infoContainer">
          <p className="pBold">BS Computer Engineering</p>
          <p>Rizal Technological University</p>
          <p>2019-2014</p>
          <p className="pBold">Information Communication Technology</p>
          <p>Sumulong Colleges of Arts and Sciences</p>
          <p>2017-2019</p>
        </div>
      </div>
    </>
  );
}

function Skills() {
  return (
    <>
      <div className="backgroundContainer">
        <p className="backgroundText">{Star()}Skills</p>
        <div className="infoContainer">
          <p>Web Development (HTML, CSS, Javascript)</p>
          <p>Python</p>
          <p>C++</p>
          <p>MySQL</p>
          <p>Php</p>
          <p>Microcontroller (Arduino & Raspberry Pi)</p>
        </div>
      </div>
    </>
  );
}

function Reference() {
  return (
    <>
      <div className="backgroundContainer">
        <p className="backgroundText">{Star()}Reference</p>
        <div className="infoContainer">
          <p className="pBold">Rangelo Reyes Merchado</p>
          <p>First Line Manager - Manila Digital Solutions, HCL Software</p>
          <p>
            <strong>Phone:</strong> +639178638661
          </p>
        </div>
      </div>
    </>
  );
}

function ShortDetaials() {
  return (
    <>
      <div className="paddingTop"></div>
      <div className="backgroundContainer">
        <p className="hello">HELLO,</p>
        <p className="infoRight">
          I am a Computer Engineering graduate with a passion for programming
          and an interest in gaming. I am also a gamer and an artist.
        </p>
      </div>
    </>
  );
}

function LineSeparation() {
  return (
    <>
      <div className="backgroundContainer">
        <div className="separator">{Star()}</div>
        <div className="lineSeparator"></div>
      </div>
    </>
  );
}

function Contacts() {
  return (
    <>
      <div className="contactContainer">
        <div className="contactLeft">
          <div className="contactItem">
            {Phone()} <p>09261166709</p>
          </div>
          <div className="contactItem">
            {Mail()} <p>j.vincentd35@gmail.com</p>
          </div>
          <div className="contactItem">
            {Address()}
            <a href="https://maps.app.goo.gl/hLRQopXNDusrKi95A">
              40F. Dimanlig St. Brgy San Roque Antipolo City
            </a>
          </div>
        </div>
        <div className="contactRight">
          <div className="contactItem">
            {Github()}
            <a href="https://github.com/boinsent">
              https://github.com/boinsent
            </a>
          </div>
          <div className="contactItem">
            {Linkedin()}
            <a href="https://www.linkedin.com/in/delacruz-john-vincent-20b140333/">
              https://www.linkedin.com/in/delacruz-john-vincent-20b140333/
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function WorkExperience() {
  return (
    <>
      <div className="titleRight">
        <p className="backgroundText">{Star()}Work Experience</p>
      </div>
      <div className="workContainer">
        <div className="workLeft">
          <p>
            August<br></br>
            2023<br></br>-<br></br>
            October<br></br>
            2023
          </p>
        </div>
        <div className="workRight">
          <p className="pBold">Baytech BPO Corporation</p>
          <p>Quality Assurance (QA) tester - Intern</p>
          <ul>
            <li>
              <a>Working with the development team</a>
            </li>
            <li>
              <a>Test and ensure the quality of the website</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

function WorkProject() {
  return (
    <>
      <div className="titleRight">
        <p className="backgroundText">{Star()}Work Projects</p>
      </div>
      {/* Freelance */}
      <div className="workContainer">
        <div className="workLeft">
          <p>
            October<br></br>
            2024<br></br>-<br></br>
            November<br></br>
            2023
          </p>
        </div>
        <div className="workRight">
          <p className="pBold">Freelance</p>
          <p>Freelance</p>
          <ul>
            <li>
              <a>Working with ecommerce website</a>
            </li>
            <li>
              <a>Manage Ecommerce functionality and developed ChatBot</a>
            </li>
          </ul>
        </div>
      </div>
      {/* Thesis */}
      <div className="workContainer">
        <div className="workLeft">
          <p>
            October<br></br>
            2023<br></br>-<br></br>
            September<br></br>
            2024
          </p>
        </div>
        <div className="workRight">
          <p className="pBold">Thesis</p>
          <p>AIoT Rainwater Harvesting System</p>
          <ul>
            <li>
              <a>Working with ecommerce website</a>
            </li>
            <li>
              <a>
                Developed a fully functional Automated Rain Harvesting system
                with AI and IoT.
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* School project */}
      <div className="workContainer">
        <div className="workLeft">
          <p>
            July<br></br>
            2023<br></br>-<br></br>
            October<br></br>
            2023
          </p>
        </div>
        <div className="workRight">
          <p className="pBold">School Project</p>
          <ul>
            <li>
              <a>Automated Plant Watering System (C++ and Arduino UNO)</a>
            </li>
            <li>
              <a>
                Developed a fully functional Automated Plant Watering system
                with user control
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

function Quote() {
  return (
    <>
      <div className="quoteContainer">
        <p>
          "The secret to doing anything is believing that you can do it."{" "}
          <br></br>- Bob Ross
        </p>
      </div>
    </>
  );
}
const utils = {
  Education,
  Skills,
  Reference,
  Star,
  ShortDetaials,
  LineSeparation,
  Contacts,
  WorkExperience,
  WorkProject,
  Quote,
};
export default utils;
