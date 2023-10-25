import "./App.css";
import Navbar from "./Navigation/Navbar.js";
import Home from "./Body/Home.js";
import About from "./Body/About.js";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;