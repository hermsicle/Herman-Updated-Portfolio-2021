import { NavBar } from "./components";
import {
  LandingContainer,
  ServicesContainer,
  ProjectsContainer,
  ContactContainer,
  AboutContainer,
} from "./containers";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingContainer />
      <AboutContainer />
      <ServicesContainer />
      <ProjectsContainer />
      <ContactContainer />
    </div>
  );
}

export default App;
