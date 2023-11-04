export const Card = ({ head, content }) => (
  <>
    <div className="hero-card d-flex flex-column">
      <h3>{head}</h3>
      <p>{content}</p>
    </div>
  </>
);
