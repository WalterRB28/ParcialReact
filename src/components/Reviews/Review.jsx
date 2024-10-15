import './Review.css'

const Review = ({ titleReview, descReview, pfpImage, userName, score }) => {
    return (
        <article className="review">
        <div className="review-description">
        <h4>{titleReview}</h4>
          <p>{descReview}</p>
        </div>
        <div className="info-user">
          <img src={pfpImage} alt="Icono de usuario"/>
          <div className="info-review">
            <h3>{userName}</h3>
            <p><span>⭐</span> {score}/5</p>
          </div>
        </div>
      </article>
    );
};

export default Review;