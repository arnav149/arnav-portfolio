import "./App.css";
import NavBar from "./NavigationBar.js";
import AboutMe from "./AboutMe";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <NavBar></NavBar>
      </div>
      <div className="aboutMe">
        <AboutMe></AboutMe>
      </div>
    </div>
  );
}

export default App;
