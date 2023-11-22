import ThreeDCarousel from "./ThreeDCarousel";
import "../styles/carousel.scss";
import { Card } from "./common/CardSecondary";

const Carousel = () => {
  const avatar = [
    {
      name: "Bessie Cooper",
      content: "Position, Company name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    },
    {
      name: "Bessie Cooper",
      content: "Position, Company name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    },
    {
      name: "Bessie Cooper",
      content: "Position, Company name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    },{
      name: "Bessie Cooper",
      content: "Position, Company name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    },
    {
      name: "Bessie Cooper",
      content: "Position, Company name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    },
    
    {
      name: "Bessie Cooper",
      content: "Position, Company name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    },{
      name: "Bessie Cooper",
      content: "Position, Company name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    },
    
    {
      name: "Bessie Cooper",
      content: "Position, Company name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    },{
      name: "Bessie Cooper",
      content: "Position, Company name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    },
    
    {
      name: "Bessie Cooper",
      content: "Position, Company name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    },
    {
      name: "Bessie Cooper",
      content: "Position, Company name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    },
    {
      name: "Bessie Cooper",
      content: "Position, Company name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    },
    {
      name: "Bessie Cooper",
      content: "Position, Company name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    },
  ];
  return (
    <div className="middle-container">
      <h2>
        Success stories of Our <span>Students in Germany</span>
        </h2>
        <div className="thanks">#ThanksYesGermany</div>
      <ThreeDCarousel />
      <h2 className="feedback-header">Our Student Community Feedbacks and Testimonials</h2>
      
      <div className="cards-section row home-container">
        {avatar.map((i) => (
          <div className="col-lg-4 col-md-6 col-sm-12 ">
            <Card avatar={i} content={i.text} />
          </div>
        ))}
      </div>
      <button className="review-btn btn btn-primary">View All Reviews</button>
    </div>
  );
};
export default Carousel;
