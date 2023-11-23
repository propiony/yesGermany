import ButtonPrimary from "./common/ButtonPrimary";
import Dubai from "../assets/images/ger.png";
import India from "../assets/images/india.png";
const Header = () => (
  <div className="d-flex py-2 header-sec home-container ">
    <div className="country-contacts d-flex flex-row">    <div className="header-contact d-flex">
      <img src={India} alt="india contact" />
      <div className="contact-details d-flex flex-column ms-2">
        <div className="country">India</div>
        <a className="contact-link" href="tel:+91-8070606070">+91-8070606070</a>
      </div>
    </div>
    <div className="header-contact d-flex ms-2">
      <img src={Dubai} alt="india contact" />
      <div className="contact-details d-flex flex-column ms-2">
        <div className="country">Dubai</div>
        <a className="contact-link" href="tel:+971506071022">+971506071022</a>
      </div>
    </div></div>

    <div className="ms-auto align-self-center">
      <ButtonPrimary text="Arrange a Callback" />
    </div>
  </div>
);
export default Header;
