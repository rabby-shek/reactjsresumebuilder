import React from "react";
import PageTitle from "../PageTitle";

const Classic = () => {
  return (
    <>
      <PageTitle pageTitle="Classic Resume" />
      <div className="classic-resume-container">
        {/* classic resume header section*/}
        <div className="classic-resume-header">
          <div className="user-name">MD Rabby Shek Suvo</div>
          <div className="role">ReactJs Developer</div>
          <ul>
            <li>01724707680</li>
            <li>/rabbyhshek1998@gmail.com</li>
            <li>/Linkedin/Portfolio</li>
            <li>/Matuail,Demra,Dhaka</li>
          </ul>
        </div>
        {/* classic resume Summery section */}
        <div className="classic-resume-summery">
          <div className="summery-title">Summery</div>
          <hr />
          <div className="summery-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            cupiditate ad quae temporibus nam deserunt molestias consequuntur
            architecto, magnam earum omnis eos maxime deleniti quod atque
            doloribus est, corrupti voluptatem.
          </div>
        </div>
        {/* classic resume skills section */}
        <div className="classic-resume-skills">
          <div className="skill-title">Skills</div>
          <hr />
          <div className="skill-content">
            <div className="skill-group">Skill Group : </div>
            <div>
              <ul>
                <li>Css,</li>
                <li>HTML,</li>
                <li>js</li>
              </ul>
            </div>
          </div>
        </div>
        {/* classic resume experience section */}
        <div className="classic-resume-experience">
          <div className="experience-title">Experience</div>
          <hr />
          <div className="company-details">
            <div className="company-name">Adovasoft</div>
            <div className="company-location">Matual, Jatrabari, Dhaka</div>
          </div>
          <div className="working-details">
            <div className="working-title">Working Title</div>
            <div className="working-date-period">From to date</div>
          </div>
          <ul>
            <li>a</li>
            <li>b</li>
            <li>c</li>
          </ul>
        </div>
        {/* classic resume education section */}
        <div className="classic-resume-education">
          <div className="education-title">Education</div>
          <hr />
          <div className="institutions-details">
            <div className="institutions-name">institutions name</div>
            <div className="institutions-location">Institution location</div>
          </div>
          <div className="degree-details">
            <div className="degree-title">Degree Title</div>
            <div className="degree-date-period">Date period</div>
          </div>
        </div>
        {/* training courses section */}
        <div className="training-courses">
          <div className="training-course-title">Course Title</div>
          <hr />
          <div className="course-institutions-name">
            course institutions name
          </div>
        </div>
        {/* passion section */}
        <div className="passions">
          <div className="passion-title">Passions</div>
          <hr />
          <div className="passion-content">Content</div>
        </div>
      </div>
    </>
  );
};

export default Classic;
