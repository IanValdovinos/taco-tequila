import './App.css';

// Import routing (multi-page naviation)
// Router
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// Import application pages
import Home from './pages/Home';
import Menu from './pages/Menu';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';

// Import components

function App() {
  return (
    <div className="App">
      {/* ------------- FONTS ------------ */}
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Sedan:ital@0;1&display=swap" rel="stylesheet"></link>

      <Router>
        {/* ----- Heading ----- */}
        {/* <Navbar /> */}

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>

        {/* ----- Footer ----- */}

      </Router>
    </div>
  );
}

export default App;
