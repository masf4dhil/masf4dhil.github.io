import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
// import imgProfile from "../images/1.jpg"
import imgProfile from "../images/profile.jpg"
const About = () => {
  return (
    <div className="secion" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom>
              <h1>About Me</h1>
              <p>{data.aboutParaOne}</p>
            </Fade>
          </div>
          <div className="image-wrapper">
            <Fade bottom cascade>
              <img src={imgProfile} alt="about" />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
