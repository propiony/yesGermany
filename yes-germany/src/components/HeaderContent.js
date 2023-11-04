import "../styles/home.scss";
import Navbar from "../components/Navbar";
import Tag from "../assets/images/germanyTag.png";
import Header from "../components/Header";
const HeaderContent = () => (
  <>
    <header className="bg-light ">
      <Header />
    </header>
    <Navbar />
    <div className="banner d-flex">
      <img src={Tag} alt="germany tag" />
      <div className="align-self-center scrolling-text">
        <p>
          Join German Education Fair - In MUMBAI 6th March / BANGALORE
          8th-9th-10th March
        </p>
      </div>
    </div>
  </>
);
export default HeaderContent;
