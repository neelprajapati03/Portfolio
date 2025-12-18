import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar />
        <main>
          <Home />
          <About />
          <Projects />
          <Skills />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
