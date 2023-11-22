import { Hero } from "../components/Hero";
import Carousel from "../components/Carousel";
import { WhyGermany } from "../components/WhyGermany";
import Gallery from "../components/Gallery";
import InfoSection from "../components/InfoSection";
const Landing = () => {
  return (
    <>
      <div className="container">
        <Hero />
        <WhyGermany />
      </div>
      <Carousel />
      <Gallery />
      <InfoSection />
    </>
  );
};

export default Landing;
