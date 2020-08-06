import React from "react";
import "./App.css";
import LandingPage from "./components/landingPage"
import Navbar from "./components/navbar"

function App() {
  return (
    <div className="App">
      <header className="App-header">
          {/* <h1>Hello kings</h1> */}
          <Navbar/>
        <LandingPage /> 
        <LandingPage /> 
        <LandingPage /> 
      </header>
    </div>
  );
}

export default App;
