import React from "react";
import useTitle from "../../hooks/useTitle";
import PageTitle from "../../components/resumeapp/PageTitle";
import ClassicResume from '../../assets/images/classic-resume.PNG'
import { NavLink } from "react-router-dom";
const Home = () => {
  useTitle("Home");
  return (
    <div>
      <PageTitle pageTitle="select your template" />
      <div className="home-container">
        <div className="templates">
          <NavLink to="/classic">
          <img src={ClassicResume} alt="" title="Classic" />
          </NavLink>
          <NavLink to="/modern">
          <img src={ClassicResume} alt="" title="Modern" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
