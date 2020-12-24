import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import imgProfile from "../images/1.jpg"

const About = () => {
  return (
    <div className="secion" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>About Me</h1>
            </Fade>
            <p>
              {data.aboutParaOne}
              <br></br>
              <br></br>
            </p>
          </div>
          <div className="image-wrapper">
            <Fade bottom cascade>
              <img src={imgProfile} width="300" height="480" alt="about" />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
