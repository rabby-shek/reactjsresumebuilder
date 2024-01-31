import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import TopNav from "./components/resumeapp/topnav/TopNav";
import Suggetions from "./pages/suggestions/Suggetions";
import Footer from "./components/resumeapp/footer/Footer";
import Classic from "./components/resumeapp/resume/Classic";
import Modern from "./components/resumeapp/resume/Modern";
const App = () => {
  return (
    <Router>
      <TopNav />
      <div className="main-container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route
            path="/suggestions"
            element={
              <>
                <Suggetions />
              </>
            }
          />
           <Route
            path="/classic"
            element={
              <>
                <Classic />
              </>
            }
          />
          <Route
            path="/modern"
            element={
              <>
                <Modern />
              </>
            }
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
