import "../styles/gallery.scss";
import { Card } from "./common/CardPrimary";
const Gallery = () => {
  const YoutubeEmbed = ({ embedId }) => (
    <div className="video-responsive">
      <iframe
        width="100%"
        height="760"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
  const galleryCards = [
    {
      head: "Counselling",
      content:
        "Our counseling services go beyond advice. Our expert consultants provide personalized guidance, ensuring you get the right directions for preparations and arrangements.",
    },
    {
      head: "Counselling",
      content:
        "Our counseling services go beyond advice. Our expert consultants provide personalized guidance, ensuring you get the right directions for preparations and arrangements.",
    },
    {
      head: "Counselling",
      content:
        "Our counseling services go beyond advice. Our expert consultants provide personalized guidance, ensuring you get the right directions for preparations and arrangements.",
    },
    {
      head: "Counselling",
      content:
        "Our counseling services go beyond advice. Our expert consultants provide personalized guidance, ensuring you get the right directions for preparations and arrangements.",
    },
    {
      head: "Counselling",
      content:
        "Our counseling services go beyond advice. Our expert consultants provide personalized guidance, ensuring you get the right directions for preparations and arrangements.",
    },
    {
      head: "Counselling",
      content:
        "Our counseling services go beyond advice. Our expert consultants provide personalized guidance, ensuring you get the right directions for preparations and arrangements.",
    },
  ];
  return (
    <div className="gallery-container home-container">
      <h2>
        Why should one consider <span>YesGermany?</span>
      </h2>
      <div className="video-section"><YoutubeEmbed  embedId="SWdrlWwjI30"/></div>
      <p>
        One-Stop Solution with YesGermany{" "}
        <span>: Your Educational Journey Simplified</span>
      </p>
      <div className="gallery-cards row">
        {galleryCards.map((item) => (
          <div className="col-12 col-sm-6 col-md-4" key={item.head}>
            <Card head={item.head} content={item.content} />
          </div>
        ))}
      </div>
      <div className="free-consultation">
        <h2>Let's Connect and Make Your Dreams a Reality</h2>
        <p>
          Schedule a FREE consultation with one of our specialists to learn
          about German Education.
        </p>
        <div className="gallery-btns row justify-content-center">
          <button className="btn btn-primary col-sm-12 col-md-auto">
            Schedule Free Profile Evaluation
          </button>
          <button className="btn btn-secondary col-sm-12 col-md-auto">Talk to an Expert</button>
        </div>
      </div>
    </div>
  );
};
export default Gallery;
