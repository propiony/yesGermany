import ButtonPrimary from "./common/ButtonPrimary";
import Dubai from "../assets/images/dubai.png";
import India from "../assets/images/india.png";
const Header = () => (
  <div className="d-flex py-2 home-container">
    <div>
      <img src={India} alt="india contact" />
    </div>
    <div>
      <img src={Dubai} alt="dubai-contact" />
    </div>
    <div className="ms-auto align-self-center">
      <ButtonPrimary text="Arrange a Callback" />
    </div>
  </div>
);
export default Header;
