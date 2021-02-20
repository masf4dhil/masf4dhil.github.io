import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
const imgProfile = "https://user-images.githubusercontent.com/23058601/108582879-744e1780-7368-11eb-94e3-27204fc70dd3.jpg"
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
