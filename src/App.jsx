import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import About from "./Components/about/About"
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects"
import Footer from "./Components/Footer/Footer";
function App() {
  

  return (
    <div className="bg-neutral-800 h-auto w-full overflow-hidden">
      <Navbar />
      <Home  />
      <About />
      <Experience/>
      <Projects />
      <Footer/>
    </div>
  );
}

export default App
