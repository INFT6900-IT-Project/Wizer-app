import React from 'react';
import './CourseDetail.css';

const PriceCourseCard = ({ course, onGetNow }) => {
  if (!course) return null;

  const { img = '', price = 'Original Price', sale = 'Discounted Price' } = course;

  return (
    <div className="promo-card">
      <div className="promo-image">
        <img src={img} alt="Course Thumbnail" />
      </div>
      <div className="promo-content">
        <div className="promo-pricing">
          <span className="original-price">{price}</span>
          <span className="discount-price">{sale}</span>
        </div>
        <button
          className="start-now-button"
          onClick={onGetNow}
          aria-label="Start the course now"
        >
          Start Now
        </button>
      </div>
    </div>
  );
};

export default PriceCourseCard;
