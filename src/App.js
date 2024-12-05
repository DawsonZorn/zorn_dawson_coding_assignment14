import logo from './logo.svg';
import './App.css';

import Header from "./components/Header";
import Aboutme from "./components/Aboutme";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Resources from "./components/Resources";
import DeveloperSetup from "./components/DeveloperSetup";

function App() {
  return (
    <div className="App">
      <Header />
      <Aboutme />
      <Work />
      <Skills />
      <Resources />
      <DeveloperSetup />
    </div>
  );
}

export default App;
