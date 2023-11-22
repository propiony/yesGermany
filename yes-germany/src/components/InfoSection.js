import "../styles/infoSection.scss";
const InfoSection = () => {
  return (
    <div className="info-section">
      <div className="home-container">
        <h1>Study in Germany</h1>
        <p className="para-1">Discover the Land of Educational Excellence</p>
        <p className="para-2">
          Germany is the best option where they magnify the candidates area of
          strength to make them productive enough to stand stern not only
          representing their country, but to also be an asset for the entire
          globe. By saying this there is a very valid reason, as Germans believe
          only in producing the best, whether bringing up the perfection in
          Humans, or the technology they implement on, following the development
          and innovation. And they believe completely in quality, dividing equal
          opportunities of Studying in Germany even to the International
          candidates.
        </p>
        <div className="statistics row">
          <div className="col-3">
            <h1>17,000+</h1>
            <p>Programs Available to Choose</p>
          </div>
          <div className="col-3">
            <h1>5.25 M +</h1>
            <p>Return on investment</p>
          </div>
          <div className="col-3">
            <h1>17 Lakh +</h1>
            <p>German Vacant Jobs</p>
          </div>
          <div className="col-3">
            <h1>18 Month</h1>
            <p>Return on investment</p>
          </div>
        </div>
        <div className="statistics-cards row">
          <div className="card col-4">
            <h3>Quality Education & Global Recognition</h3>
            <p>
              Benefit from Germany's renowned education system and earn a degree
              recognized worldwide, boosting your career prospects.
            </p>
          </div>
          <div className="card col-4">
            <h3>Quality Education & Global Recognition</h3>
            <p>
              Benefit from Germany's renowned education system and earn a degree
              recognized worldwide, boosting your career prospects.
            </p>
          </div>
          <div className="card col-4">
            <h3>Quality Education & Global Recognition</h3>
            <p>
              Benefit from Germany's renowned education system and earn a degree
              recognized worldwide, boosting your career prospects.
            </p>
          </div>
        </div>
        <button className="btn btn-primary">Study In Germany</button>
      </div>
    </div>
  );
};
export default InfoSection;
