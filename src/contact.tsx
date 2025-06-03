import './contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact GrindHaus Coffee Co.</h1>
      <p>
        If you have any questions, please reach out to us using the
        form below or via our contact details.
      </p>
      <ul className="contact-details">
        <li>Email: <a href="mailto:hello@grindhauscoffee.com">hello@grindhauscoffee.com</a></li>
        <li>Phone: <a href="tel:(555)123-4567">(555) 123-4567</a></li>
        <li>
          Address:{" "}
          <a
            href="https://www.google.com/maps/search/?api=1&query=123+Brew+St,+Portland,+OR+97201"
            target="_blank"
            rel="noopener noreferrer"
          >
            123 Brew St, Portland, OR 97201
          </a>
        </li>      
      </ul>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required />
        <button type="submit" className="btn primary">Send Message</button>
      </form>
      <div className="media-kit">
        <p>For artists and musicians, download our media kit:</p>
        <a href="/media-kit.pdf" download className="btn secondary">
          Download Media Kit
        </a>
      </div>
    </div>
  );
}

export default Contact;