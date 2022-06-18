import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";

import useLocalStorage from "use-local-storage";

function App() {

  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');
  const [toggled, setToggled] = useLocalStorage('toggled' ? true : false);

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      setToggled(true);
    } else {
      setToggled(false);
    }
  }
  

  return (
    <div className="App" data-theme={theme}>
      <Navbar switchTheme={switchTheme} toggled={toggled} onClick={switchTheme}/>
      <Header />
      <About />
      <Projects />
      <Experience theme={theme}/>
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
