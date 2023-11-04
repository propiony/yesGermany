import "../styles/hero.scss";
import ButtonPrimary from "./common/ButtonPrimary";
import ButtonSecondary from "./common/ButtonSecondary";
import { Card } from "./common/Card";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";
import image5 from "../assets/images/image5.png";
import image6 from "../assets/images/image6.png";
// import {image1,image2,image3,image4} from "..3assets/images"
export const Hero = () => {
  const cardContent = [
    { head: "30k+", text: "Students Counselled" },
    { head: "15k+", text: "Students Counselled" },
    { head: "99.9%", text: "99.9%" },
    { head: "99.9%", text: "Offices All Over India" },
  ];
  return (
    <div className="hero-container d-flex">
      <div className="into-section d-flex flex-column flex-fill">
        <div className="tag">
          <p>German Education Consultant in India</p>
        </div>
        <div className="hero-heading text-start">
          <h1>Your gateway to a career in Germany</h1>
          <p>
            We provide 360 Degree Solution to every Student and manage all your
            application process to help you study in the Ideal German University
            .
          </p>
          <div className="hero-bg">
            <div className="hero-buttons">
              <ButtonPrimary text="Schedule Free Profile Evaluation" />
              <ButtonSecondary text="Talk to an Expert" />
            </div>
            <p>Ready to embark on this exciting journey?</p>
            <div className="card-content d-flex flex-row">
              {cardContent?.map(({ head, text }, index) => (
                <div className="px-2" key={`card ${index}`}>
                  <Card head={head} content={text} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-sec d-flex flex-row">
        <div className="scroll-banner-section flex-fill">
          <div class="collage">
            <img className="first" src={image1} alt="Image 1" />
            <img src={image2} alt="Image 1" />
            <img src={image3} alt="Image 1" />
            <img src={image4} alt="Image 1" />
            <img src={image5} alt="Image 1" />
            <img src={image6} alt="Image 1" />
          </div>
          <div class="collage">
            <img className="first" src={image1} alt="Image 1" />
            <img src={image2} alt="Image 1" />
            <img src={image3} alt="Image 1" />
            <img src={image4} alt="Image 1" />
            <img src={image5} alt="Image 1" />
            <img src={image6} alt="Image 1" />
          </div>
        </div>
        <div className="scroll-banner-section  flex-fill">
          <div class="collage-2">
            <img className="first" src={image1} alt="Image 1" />
            <img src={image2} alt="Image 1" />
            <img src={image3} alt="Image 1" />
            <img src={image4} alt="Image 1" />
            <img src={image5} alt="Image 1" />
            <img src={image6} alt="Image 1" />
          </div>
          <div class="collage-2">
            <img className="first" src={image1} alt="Image 1" />
            <img src={image2} alt="Image 1" />
            <img src={image3} alt="Image 1" />
            <img src={image4} alt="Image 1" />
            <img src={image5} alt="Image 1" />
            <img src={image6} alt="Image 1" />
          </div>
        </div>
      </div>
    </div>
  );
};
