import React,{useState, useEffect} from "react";
import "./App.css";
import LandingPage from "./components/landingPage"
import Navbar from "./components/navbar"
import WithListLoading from "./components/repos/index"
import List from "./components/repos/list"

function App() {
  const ListLoading = WithListLoading(List);
  const [appState, setAppState] = useState({
    loading:false,
    repos:null,
  })

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
          {/* <h1>Hello kings</h1> */}
          <Navbar/>
        <LandingPage /> 
        <LandingPage /> 
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </header>
    </div>
  );
}

export default App;
