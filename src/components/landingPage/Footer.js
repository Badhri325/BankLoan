// import { FaFacebook, FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";
function Footer() {
  return (
    <>
      <section>
        <main className="footer">
          <section className="Quicklinks">
            <div>
              <h3>Quicklinks</h3>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </section>

          {/* address */}
          <section>
            <div className="address">
              <h3>Address</h3>
              <p>
                Vaishnavi Tech Park,<br/> 3rd & 4th Floor Sarjapur Main Road,<br/>
                Bellandur Bengaluru – 560103
              </p>
            </div>

            {/* follow us */}
            {/* <section className="follow">
              <div className="followus">
                <h3>Follow us</h3>
                <ul>
                  <li>
                    <FaWhatsapp/>-Whatsapp
                  </li>
                  <li>
                    <FaInstagram/>-Instagram
                  </li>
                  <li>
                    <FaFacebook/>-Facebook
                  </li>
                  <li>
                    <FaTelegram/>-Telegram
                  </li>
                </ul>
              </div>
            </section> */}
          </section>

          {/* location */}
          <section>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8328153466823!2d77.66843657380929!3d12.91846461604356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae130df4c8df87%3A0x687150d80297fb8f!2sVaishnavi%20Tech%20Park!5e0!3m2!1sen!2sin!4v1717088497666!5m2!1sen!2sin"
                width="600"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </section>
        </main>
      </section>
      <p id="Copyright" className="text-center">
        Copyright © 2018-2024 Online VF Loans Limited. All Rights Reserved
      </p>
    </>
  );
}
export default Footer;
