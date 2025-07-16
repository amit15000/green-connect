import { useState } from "react";
import "./index.css";
import { BiSolidImageAdd } from "react-icons/bi";
import { MdAttachFile } from "react-icons/md";
import Navbar from "../../Components/Navbar";
import SocialIcons from "../../Components/Social_Icons";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Navbar />
      <div className="contact-page">
        <div className="hero-section">
          <h1>CONTACT US</h1>
          <p>HAVE A QUESTION? WANT TO LEARN MORE ABOUT WHAT WE DO?</p>
        </div>
        <header>
          <SocialIcons />
          <hr
            style={{
              width: "90%",
              margin: "0 auto",
              borderTop: "1px solid grey",
            }}
          />
        </header>
        <main>
          <section className="contact-info">
            <h2>Get In Touch</h2>
            <p>
              We want to make it simple for anyone to help the environment by
              planting trees. Together we can restore forests, create habitat
              for biodiversity, and make a positive social impact around the
              world.
            </p>
            <br />
            <h3>Call Us</h3>
            <p>For immediate assistance, call our office at +91 6387436851.</p>
            <p>Our office hours are Monday - Friday, 9 AM - 5 PM GMT +05:30.</p>
            <br />
            <h3>Mailing Address</h3>
            <address>
              Sector 126, Noida , Uttar Pradesh
              <br />
              India
              <br />
              Gmail - 15000amitkumar@gmail.com
            </address>
          </section>

          <section className="contact-form">
            <h2>Get in Touch !</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  className="text_ct"
                  placeholder="Name*"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email id*"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject*"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Hey tree lover! How can we help you?"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <div className="form-actions">
                <div className="file-actions">
                  <button type="button" className="button">
                    <MdAttachFile className="icon" /> Attach file
                  </button>
                  <button type="button" className="button">
                    <BiSolidImageAdd className="icon" />
                    Add an image
                  </button>
                </div>
                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </div>
            </form>
          </section>
        </main>
      </div>
      {/* <Footer/> */}
    </>
  );
};

export default ContactPage;
