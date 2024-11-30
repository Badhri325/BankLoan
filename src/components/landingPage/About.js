import "./About.css";
function About() {
  return (
    <>
      <section id="about" className="about_style">
        <h2 style={{ textAlign: "center" }}>Building a Brighter Financial Future & Good Support</h2>

        <div className="d-flex">
          <p style={{ textAlign: "justify" }}>
            In finance, a loan is the transfer of money by one party to another
            with an agreement to pay it back. The recipient, or borrower, incurs
            a debt and is usually required to pay interest for the use of the
            money.SBI, the largest Indian Bank with 1/4th market share, serves
            over 48 crore customers through its vast network of over 22,405
            branches, 65,627 ATMs/ADWMs, 76,089 BC outlets, with an undeterred
            focus on innovation, and customer centricity, which stems from the
            core values of the Bank - Service, Transparency, Ethics, Politeness
            and Sustainability.
          </p>
          {/* <img className="about_slide1 card" src={require("../../assets/slide_img.jpg")} alt="slide_img"/> */}
        </div>

        <div className="d-flex">
          {/* <img className="about_slide2 card" src={require("../../assets/slide_img1.jpg")} alt="slide_img1"/> */}
          <p style={{ textAlign: "justify" }}>
            The Bank has successfully diversified businesses through its various
            subsidiaries i.e SBI General Insurance, SBI Life Insurance, SBI
            Mutual Fund, SBI Card, etc. It has spread its presence globally and
            operates across time zones through 235 offices in 29 foreign
            countries.
          </p>
        </div>

        <div className="d-flex">
          <p style={{ textAlign: "justify" }}>
            Protean eGov has also established Service Centre network across the
            country which serve as access points for the general public and are
            efficiently used by Governments to deliver quality services in a
            user friendly and transparent manner to the citizens. Contact us
            today to learn more and start turning your web page vision into
            reality!
          </p>
          {/* <img className="about_slide3 card" src={require("../../assets/slide_img4.jpg")} alt="slide_img4"/> */}
        </div>
      </section>
    </>
  );
}
export default About;
