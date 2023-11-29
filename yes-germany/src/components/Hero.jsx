import "../styles/hero.scss";
import { Card } from "./common/CardPrimary";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";
import image5 from "../assets/images/image5.png";
import image6 from "../assets/images/image6.png";
import google from "../assets/images/googleReview.png";
import justDial from "../assets/images/justDialReview.png";
import rightArrow from "../assets/images/right.svg"
// import {image1,image2,image3,image4} from "..3assets/images"
export const Hero = () => {
  const cardContent = [
    { head: "30k+", text: "Students Counselled" },
    { head: "15k+", text: "Students Counselled" },
    { head: "10+", text: "Offices All Over India " }
  ];
  return (
    <div className="hero-container row">
      <div className="intro-section flex-fill col-md-12 col-lg-6">
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
            <div className="hero-buttons d-flex mb-3">
              {/* <ButtonPrimary text="Schedule Free Profile Evaluation" />
              <ButtonSecondary text="Talk to an Expert" />
               */}
              <button className="btn btn-primary px-4 me-2">
                Schedule Free Profile Evaluation
              </button>
              <button className="btn btn-secondary d-flex px-4">
                Chat with Expert <img src={rightArrow} alt="rightArrow"/>
              </button>
            </div>
            <p>Ready to embark on this exciting journey?</p>
            <div className="card-content row">
              {cardContent?.map(({ head, text }, index) => (
                <div className="col-6 col-lg-4">
                  <Card head={head} content={text} key={`card ${index}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-sec col-md-12 col-lg-6">
        <div className="d-flex flex-row">
          <div className="scroll-banner-section flex-fill ">
            <div class="collage">
              <img className="first" src={image1} alt="scrollImage" />
              <img src={image2} alt="scrollImage" />
              <img src={image3} alt="scrollImage" />
              <img src={image4} alt="scrollImage" />
              <img src={image5} alt="scrollImage" />
              <img src={image6} alt="scrollImage" />
            </div>
            <div class="collage">
              <img className="first" src={image1} alt="scrollImage" />
              <img src={image2} alt="scrollImage" />
              <img src={image3} alt="scrollImage" />
              <img src={image4} alt="scrollImage" />
              <img src={image5} alt="scrollImage" />
              <img src={image6} alt="scrollImage" />
            </div>
          </div>
          <div className="scroll-banner-section  flex-fill">
            <div class="collage-2">
              <img className="first" src={image1} alt="scrollImage" />
              <img src={image2} alt="scrollImage" />
              <img src={image3} alt="scrollImage" />
              <img src={image4} alt="scrollImage" />
              <img src={image5} alt="scrollImage" />
              <img src={image6} alt="scrollImage" />
            </div>
            <div class="collage-2">
              <img className="first" src={image1} alt="scrollImage" />
              <img src={image2} alt="scrollImage" />
              <img src={image3} alt="scrollImage" />
              <img src={image4} alt="scrollImage" />
              <img src={image5} alt="scrollImage" />
              <img src={image6} alt="scrollImage" />
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <img className="col-6" src={justDial} alt="review" />
          <img className="col-6" src={google} alt="review" />
        </div>
      </div>
    </div>
  );
};
