import React from "react";
import "./App.css";
import LandingPage from "./components/landingPage";
import AboutPage from "./components/aboutPage";
import Navbar from "./components/navbar";
import SkillsPage from "./components/skillsPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="main-body">

        {/* <Navbar />
        <LandingPage />
        <AboutPage /> */}
        <SkillsPage />
        </div>
      </header>
    </div>
  );
}

export default App;
