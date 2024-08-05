import logo from './logo.svg';
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
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
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
