import { LuFacebook, LuGithub, LuInstagram, LuLinkedin } from "react-icons/lu";
import Container from "../../../utils/container";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="neo-box footer">
      <Container display="flex" direction="column">
        <div className="col-container">
          <div className="col-1">
            <h2>FlashMaster</h2>
            <p>
              Master any subject with our innovative flashcard learning
              platform.
            </p>
          </div>
          <div className="col-2">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-of-service">Terms of Service</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h4>Connect With Us</h4>
            <div className="social-media-icons">
              <a href="https://facebook.com" target="_blank">
                <LuFacebook size={22} />
              </a>
              <a href="https://www.instagram.com/ankvrvatss" target="_blank">
                <LuInstagram size={22} />
              </a>
              <a href="https://in.linkedin.com/in/vats-ankur" target="_blank">
                <LuLinkedin size={22} />
              </a>
              <a href="https://github.com/ankurvats987" target="_blank">
                <LuGithub size={22} />
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className="copyright">
          <span>© 2024 FlashMaster. All rights reserved.</span>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
