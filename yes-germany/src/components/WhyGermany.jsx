import "../styles/whyGermany.scss";
import { CarousalCard } from "./common/CarousalCard";
import personalizedGuidance from "../assets/images/personalizedGuidance.png";
export const WhyGermany = () => {
  const cardData = [
    {
      title: "Personalized Guidance",
      text: "At YesGermany, we know and understand that every Indian students journey is uniquely distinct. And we take pride in offering a personalized support that caters to the individuals needs and aspirations to craft a best suited path. ",
      image: personalizedGuidance,
    },
    {
      title: "Admission Guidance",
      text: "We'll handle your application submissions, keep you updated on progress, and secure your acceptance letter. We assure every student Gets 100% Acceptance Letter from institution with our expert guided advice to ensure your success.",
      image: personalizedGuidance,
    },
    {
      title: "Post-Admission Support",
      text: "Our visa counsellors help you get an admit with a 99.9% success rate. We provide a person who will accompany you with your airport pickup, help you reach your place of accommodation once you reach Germany. ",
      image: personalizedGuidance,
    },
  ];
  return (
    <>
      <div className="carousal-container ">
        <h2 className="carousal-header">
          Why Students Choose <span>YesGermany</span>
        </h2>
        <p>
          At YesGermany, we're not just an Education consultancy; we are your
          companions on a journey for your Future.
        </p>
        <div className="row">
          {cardData.map((item) => {
            return <CarousalCard key={item.title} data={item} />;
          })}
        </div>
      </div>
    </>
  );
};
