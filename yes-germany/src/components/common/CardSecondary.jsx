import "../../styles/cardSec.scss";
import avatarImg from "../../assets/images/Avatar Image.png";
export const Card = ({ avatar, content, key }) => (
  <>
    <div className="hero-card-sec card col-md-4 col-sm-6" key={key}>
      <p>{content}</p>
      <div className="avatar row">
        <img src={avatarImg}/>
        <div className="avatar-content col">
          <p>{avatar?.name}</p>
          <p>{avatar?.content}</p>
        </div>
      </div>
    </div>
  </>
);
