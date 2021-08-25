import { NavBar } from "./components";
import {
  LandingContainer,
  ServicesContainer,
  ProjectsContainer,
  ContactContainer,
  AboutContainer,
  QuoteContainer,
  FooterContainer,
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
      <QuoteContainer />
      <ContactContainer />
      <FooterContainer />
    </div>
  );
}

export default App;
