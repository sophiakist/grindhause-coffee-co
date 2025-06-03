import { Link } from 'react-router-dom';
import './home.css';

function Home() {
  return (
    <>
    <div className="hero">
      <div className="heading-image"></div>
      <div className="heading">
        <img src="src/assets/gcc_full_logo.png" alt="Grindhaus Coffee Co. Logo" className="logo" />
        <h3>Fuel Your Day, Stay a While</h3>
        <div className="hero-buttons">
          <button>Order Online</button>
         <Link to="/menu" className="btn">View Menu</Link>
        </div>
      </div>
    </div>
    <div className="about">
      <div className="row">
        <div className="col">
          <div className="about-image">
            <img src="src/assets/brooke-cagle-WfV4KscvvBQ-unsplash.jpg" alt="Owner" />
          </div>
        </div>
        <div className="col">
          <div className="about-text">
            <h2>Greetings from the Founder</h2>
            <p>Hi, I’m Marcos — and I started Grindhaus Coffee Co. in 2021 with a single grinder, a passion for good coffee, and a dream to build a gathering place for the neighborhood.</p>
            <p>I’ve always believed coffee shops should be more than just a stop on your way somewhere else. Grindhaus is a space where people come together — to work, to create, to connect. With its modern industrial feel and warm energy, it’s a place where you can fuel up and feel at home.</p>
            <p>We serve ethically sourced beans, use compostable cups, and partner with local makers who care about craft as much as we do. From open mic nights to pop-up art shows, everything we do is about building community.</p>
            <p>Whether you're dropping in for a quick espresso or staying awhile with your sketchbook, you're always welcome here.</p>         
          </div>
          <Link to="/contact" className="btn">Contact Us</Link>
        </div>
      </div>
    </div>
    <div className="weekly-events">
      <h2>Events on the Grind</h2>
        <div className="events-carousel">
          <div className="event-card">
            <h3>Open Mic Nights</h3>
            <p>Join us on the first and third Friday of each month for live performances from local talent.</p>
          </div>
          <div className="event-card">
            <h3>Trivia Nights</h3>
            <p>Test your knowledge every second Friday of the month with fun trivia challenges.</p>
          </div>
          <div className="event-card">
            <h3>Local Artist Exhibits</h3>
            <p>See new art installations every other Saturday showcasing local creativity.</p>
          </div>
          <div className="event-card">
            <h3>Community Meetups</h3>
            <p>Gather with neighbors on Sunday once a month for community discussions.</p>
          </div>
        </div>
        <Link to="/events" className="btn">More Details</Link>
    </div>
    <div className="newsletter-signup">
      <h2>Let’s Stay Connected</h2>
      <p>Sign up & get a free espresso shot!</p>
      <form className="signup-form">
        <input type="email" placeholder="Enter your email" className="signup-input" />
        <button type="submit" className="btn">Sign Up</button>
      </form>
    </div>
    </>
  );
}

export default Home;