import { Hero } from "../components/Hero";
import Carousel from "../components/Carousel";
import { WhyGermany } from "../components/WhyGermany";
import Gallery from "../components/Gallery";
import InfoSection from "../components/InfoSection";
import { Footer } from "../components/Footer";
import { Programs } from "../components/Programs";
import { AwardsComponent } from "../components/Awards";
import LeadershipComponent from "../components/Leadership";
import { TeamComponent } from "../components/TeamComponent";
const Landing = () => {
  return (
    <>
      <div className="container">
        <Hero />
        <WhyGermany />
      </div>
      <Carousel />
      <Programs />
      <InfoSection />
      <Gallery />
      <AwardsComponent />
      <LeadershipComponent />
      <TeamComponent/>
      <Footer />
    </>
  );
};

export default Landing;
