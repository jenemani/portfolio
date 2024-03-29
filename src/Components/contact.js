import "../CSS/Body.css";
import Pdf from "../isaacjenemann.pdf";
function Contact() {
  return (
    <div className="body">
      <div className="contact">
        <div className="contact-card">
          <p className="contact-text">
            <br/>
            GENERAL INQUIRIES: &nbsp;
            <a href="mailto:isaac.jenemann@gmail.com" className="contact-link">
              isaac.jenemann@gmail.com
            </a>
            <br/>
            PHONE: &nbsp;
            <a className="contact-link" href="tel:+18028817144">
              +1-(802)-881-7144
            </a>{" "}
          </p>
        </div>
        <img className="contact-image" src="./Assets/contact.png" />
      </div>
    </div>
  );
}

export default Contact;
