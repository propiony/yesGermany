import "../../styles/carouselCard.scss"
export const CarousalCard = ({ data, key }) => {
  const { image, title, text } = data;
  return (
    <div key={key} className="card">
      <img src={image} alt="card-img" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p>{text}</p>
      </div>
    </div>
  );
};
