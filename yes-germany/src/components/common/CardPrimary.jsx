import "../../styles/cardPrim.scss";
export const Card = ({ head, content, key }) => (
  <>
    <div className="hero-card d-flex flex-column col" key={key}>
      <h3>{head}</h3>
      <p>{content}</p>
    </div>
  </>
);
