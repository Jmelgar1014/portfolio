import "./index.css";
import Navbar from "./Components/Navbar";
import MainCard from "./Components/MainCard";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import ProjectContainer from "./Components/ProjectContainer";
import SkillsContainer from "./Components/SkillsContainer";

function App() {
  return (
    <>
      <Navbar />
      <MainCard />
      <AboutMe />
      <ProjectContainer />
      <SkillsContainer />
    </>
  );
}

export default App;
