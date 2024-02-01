import React, { useState } from "react";
import PageTitle from "../PageTitle";
import Header from "./classicresume/Header";

const Classic = () => {
 
  return (
    <>
      <PageTitle pageTitle="Classic Resume" />
      <div className="classic-resume-container">
        {/* classic resume header section*/}
        <Header />
        {/* classic resume Summery section */}
        <div className="classic-resume-summery">
          <div className="summery-title">Summery</div>
          <hr />
          <div className="summery-content">
            As a dedicated Front-End Developer at Adova Soft, I played a pivotal
            role in crafting immersive and user-centric web experiences. Adova
            Soft, a cutting-edge technology company, thrives on innovation and
            excellence in software solutions.
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
          <div className="experience-title">Education</div>
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
          <div className="experience-title">Course Title</div>
          <hr />
          <div className="course-institutions-name">
            course institutions name
          </div>
        </div>
        {/* passion section */}
        <div className="passions">
          <div className="experience-title">Passions</div>
          <hr />
          <div className="passion-content">Content</div>
        </div>
      </div>
    </>
  );
};

export default Classic;
