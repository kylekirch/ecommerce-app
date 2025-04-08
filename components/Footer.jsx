// Footer.js
import './component_src/css/footer.css'; // We'll create this CSS file next

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section: Branding */}
        <div className="footer-section footer-brand">
          <h3 className="footer-title">Funky Fruits</h3>
          <p>Bringing the fun to your fruit bowl!</p>
        </div>

        {/* Middle Section: Links */}
        <div className="footer-section footer-links">
          <h4>Explore</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/recipes">Careers</a></li>
          </ul>
        </div>

        {/* Right Section: Social Media */}
        <div className="footer-section footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="social-icon" id="x">
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" id="instagram">
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" id="facebook">
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="footer-bottom">
        <p>&copy; 2025 Funky Fruits. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;