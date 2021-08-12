import { NavBar, MyAvatar } from "./components";
import {
  LandingContainer,
  ServicesContainer,
  ProjectsContainer,
  ContactContainer,
} from "./containers";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <MyAvatar/> */}
      <LandingContainer />
      <ServicesContainer />
      <ProjectsContainer />
      <ContactContainer />
    </div>
  );
}

export default App;
