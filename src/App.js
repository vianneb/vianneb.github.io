import { Header } from "./components/Header";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";


function App() {
  return (
    <div className="App">
      <Header/>
      <About />
      <Projects />
      <Experience />
    </div>
  );
}

export default App;
