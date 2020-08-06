import React from "react";
import "./App.css";
import LandingPage from "./components/landingPage";
import AboutPage from "./components/aboutPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LandingPage />
        <AboutPage />
      </header>
    </div>
  );
}

export default App;
