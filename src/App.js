import './App.css';
// import styles from './App.css';


// Import routing (multi-page naviation)
// Router
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

// Import application pages
import Home from './pages/Home';
import Menu from './pages/Menu';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';

// Import components
import WelcomeScreen from './components/WelcomeScreen';
import BaseButton from './components/BaseButton';

// Import media
import FacebookLogo from './assets/icons/facebook_white.webp';
import InstagramLogo from './assets/icons/instagram_white.webp';


function App() {

  /* Close when someone clicks on the "x" symbol inside the overlay */
  function handleCloseClick() {
    document.getElementById("overlayNav").style.width = "0%";
    document.body.style.overflow = 'auto';
  }

  function handleOptionSelect() {
    document.getElementById("overlayNav").style.width = "0%";
    document.body.style.overflow = 'auto';

    window.scrollTo({
        top: 0
    });
  }

  return (
    <div className="App">
      {/* ------------- FONTS ------------ */}
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Sedan:ital@0;1&display=swap" rel="stylesheet"></link>

      <Router>
        
        {/* ########## OVERLYAING NAVIGATION SCREEN ########## */}
        <div id="overlayNav" className="overlay">
          <p className='closeButton' onClick={handleCloseClick}>&times;</p>

          <div className='overlayContent'>
              <NavLink className='navbarLink' onClick={handleOptionSelect} to="/">
                  <p className='overlayOption'>Home</p>
              </NavLink>

              <NavLink className='navbarLink' onClick={handleOptionSelect} to="/menu">
                  <p className='overlayOption'>Menu</p>
              </NavLink>

              <NavLink className='navbarLink' onClick={handleOptionSelect} to="/gallery">
                  <p className='overlayOption'>Gallery</p>
              </NavLink>

              <NavLink className='navbarLink' onClick={handleOptionSelect} to="/about">
                  <p className='overlayOption'>About Us</p>
              </NavLink>

              <NavLink className='navbarLink' onClick={handleOptionSelect} to="/contact">
                  <p className='overlayOption'>Contact Us</p>
              </NavLink>

              <BaseButton text={'ORDER NOW'}/>

              <div className="overlayIconContainer">
                <a className='overlayIconLink' href='https://www.facebook.com/profile.php?id=100092913590205' target='blank'><img className="overlayIcon" src={FacebookLogo} alt='Facebook logo'/></a>

                <a className='overlayIconLink' href='https://www.instagram.com/tacotequilaymas/' target='blank'><img className="overlayIcon" src={InstagramLogo} alt='Instagram logo'/></a>
                
              </div>
          </div>
        </div>

        {/* ########## WELCOME SCREEN ########## */}
        <WelcomeScreen/>

        {/* ########## PAGE CONTENT ########## */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
