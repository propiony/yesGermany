import "../../styles/cardPrim.scss";
export const Card = ({ head, content, key }) => (
  <>
    <div className="hero-card mt-2 d-flex flex-column" key={key}>
      <h3>{head}</h3>
      <p>{content}</p>
    </div>
  </>
);
