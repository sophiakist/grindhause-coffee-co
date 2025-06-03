import { Routes, Route, Link } from 'react-router-dom';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Home from './home';
import Menu from './menu';
import Events from './events';
import Contact from './contact';
import './App.css';

function App() {
  return (
    <>
      {/* Main container fills available vertical space */}
      <div className="app-content">
        <nav className="navbar">
          <div className="nav-logo">
            <Link to="/"><h2>GrindHaus Coffee Co.</h2></Link>
          </div>
          <ul className="nav-list">
            <li className="nav-item"><Link to="/menu">Menu</Link></li>
            <li className="nav-item"><Link to="/events">Events</Link></li>
            <li className="nav-item"><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <footer className="footer">
        <div className="footer-hours">
          <h2>Hours</h2>
          <div className="hours-list">
            <div className="hours-item">
              <h3>Monday - Thursday</h3>
              <p>7:00 AM - 6:00 PM</p>
            </div>
            <div className="hours-item">
              <h3>Friday</h3>
              <p>7:00 AM - 9:00 PM</p>
            </div>
            <div className="hours-item">
              <h3>Saturday and Sunday</h3>
              <p>8:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>
        <div className="footer-content">
          <div className="footer-logo">
            <h2>GrindHaus Coffee Co.</h2>
            <p className="footer-details">
              123 Brew St<br />
              Portland, OR 97201<br />
              (555) 123-4567<br />
              hello@grindhauscoffee.com
            </p>
          </div>
          <div className="footer-social">
            <a href="https://www.instagram.com/yourinsta" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} color="var(--color-secondary)" />
            </a>
            <a href="https://www.facebook.com/yourfacebook" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} color="var(--color-secondary)" />
            </a>
          </div>
        </div>
        <p className="footer-text">© 2025 GrindHaus Coffee Co. All rights reserved.</p>
      </footer>
      <SpeedInsights />
    </>
  );
}

export default App;