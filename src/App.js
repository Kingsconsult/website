import React, { useState, useEffect } from "react";
import "./App.css";
import LandingPage from "./components/landingPage";
import AboutPage from "./components/aboutPage";
import Navbar from "./components/navbar";
import SkillsPage from "./components/skillsPage";
import ContactPage from "./components/contactPage";
import WithListLoading from "./components/repos/index";
import List from "./components/repos/list";

function App() {
  const ListLoading = WithListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const user = `https://api.github.com/users/kingsconsult/repos`;
    fetch(user)
      .then((res) => res.json())
      .then((repos) => {
        setAppState({ loading: false, repos: repos });
      });
  }, [setAppState]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="main-body">
          <Navbar />
          <section id="home">
            <LandingPage />
          </section>
          <section id="about">
            <AboutPage />
          </section>
          <section id="skills">
            <SkillsPage />
          </section>
          <section id="works">
            <ListLoading isLoading={appState.loading} repos={appState.repos} />
          </section>
          <section id="contact-us">
            <ContactPage />
          </section>
        </div>
      </header>
    </div>
  );
}

export default App;
