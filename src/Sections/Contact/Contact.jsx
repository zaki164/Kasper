import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id='contact'>
      <div className="container">
        <div className="main-heading">
          <h3>Contact Us</h3>
          <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget
            tincidunt.</p>
        </div>
        <div className="content">
          <form action="">
            <input className="main-input" type="text" name="name" placeholder="Your Name" />
            <input className="main-input" type="email" name="email" placeholder="Your Email" />
            <textarea className="main-input" name="message" placeholder="Your Message"></textarea>
            <input type="submit" value="Send Message" />
          </form>
          <div className="info">
            <h4>GET IN TOUCH</h4>
            <span className="phone">+00 123.456.789</span>
            <span className="phone">+00 123.456.789</span>
            <h4>WHERE WE ARE</h4>
            <address>Awesome Address 17<br />New York, NYC<br />123-4567-890<br />USA</address>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact