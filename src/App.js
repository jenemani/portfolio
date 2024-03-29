import "./CSS/App.css";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import About from "./Components/About";
import Contact from "./Components/contact";
import Portfolio from "./Components/Portfolio";
import StupidFkingBird from "./Components/Projects/StupidFkingBird";
import Psycho from "./Components/Projects/psychopsychotic";
import Sic from "./Components/Projects/[sic]";
import IntoTheWoods from "./Components/Projects/IntoTheWoods";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
//import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/portfolio"
            element={<Portfolio/>}
          />
          <Route path="*" element={<Navigate to="/" />} />

          <Route path="/portfolio/[sic]" element={<Sic />} />
          <Route path="/portfolio/psychopsychotic" element={<Psycho />} />
          <Route path="/portfolio/intothewoods" element={<IntoTheWoods />} />
          <Route path="/portfolio/stupidfkingbird" element={<StupidFkingBird />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
