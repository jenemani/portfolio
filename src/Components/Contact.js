import '../CSS/App.css'
import Pdf from "../resume.pdf";
function Contact() {
    return (
      <div className="contact">
        <div className="contact-box" id="contact">
          <a href="mailto:isaac_jenemann@brown.edu" className="contact-text">
            email
          </a>
          <br />

          <a
            href="https://www.linkedin.com/in/isaac-jenemann-842b85220/"
            className="contact-text"
            rel="noreferrer noopener"
            target="_blank"
          >
            connect
          </a>
          <br />
          <a
            href="https://open.spotify.com/playlist/7nPbJTYakbr1rnL5qYnMMW?si=5c0d67d7f3394904"
            className="contact-text"
            rel="noreferrer noopener"
            target="_blank"
          >
            listen
          </a>
          <br />
          <a href={Pdf} className="contact-text">
            resume
          </a>
        </div>
        <a className="anchor" id="contact" href="#contact">
          <h3 className="header">CONTACT</h3>
        </a>
      </div>
    );
    }

export default Contact;