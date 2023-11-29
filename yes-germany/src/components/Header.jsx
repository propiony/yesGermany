import Dubai from "../assets/images/ger.png";
import India from "../assets/images/india.png";
import whatsappIcon from "../assets/images/whatsapp.png";
const Header = () => (
  <div className="d-flex py-2 header-sec container ">
    <div className="country-contacts d-flex flex-row">
      {" "}
      <div className="header-contact d-flex">
        <img src={India} alt="india contact" />
        <div className="contact-details d-flex flex-row ms-2">
          <div className="country me-2">India</div>
          <a className="contact-link" href="tel:+91-8070606070">
            +91-8070606070
          </a>
        </div>
      </div>
      <div className="header-contact d-flex ms-2">
        <img src={Dubai} alt="india contact" />
        <div className="contact-details d-flex flex-row ms-2">
          <div className="country me-2">Dubai</div>
          <a className="contact-link" href="tel:+971506071022">
            +971506071022
          </a>
        </div>
      </div>
    </div>

    <div className="chat-btn ms-auto align-self-center">
      <btn className="btn d-flex px-5 btn-primary">
        <img className="me-2" src={whatsappIcon} alt="whatsapp" />
        <a
          class="qlwapp-toggle"
          data-action="open"
          data-phone="918070606070"
          data-message="Hi"
          role="button"
          tabindex="0"
          target="_blank"
          href="https://web.whatsapp.com/send?phone=918070606070&amp;text=Hi" rel="noreferrer"
        >
          Chat with Expert
        </a>
      </btn>
    </div>
  </div>
);
export default Header;
