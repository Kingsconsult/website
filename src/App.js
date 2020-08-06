import React from "react";
import "./App.css";
import LandingPage from "./components/landingPage";
import AboutPage from "./components/aboutPage";
import Navbar from "./components/navbar"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <LandingPage />
        <AboutPage />
      </header>
    </div>
  );
}

export default App;
