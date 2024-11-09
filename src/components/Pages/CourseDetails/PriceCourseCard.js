import React from 'react';
import './CourseDetail.css';

const PriceCourseCard = ({ course, onGetNow }) => {
  if (!course) return null;

  // Setting default values for price and sale
  const { price = '$25', sale = 'Free (0$)' } = course;

  return (
    <div className="promo-card">
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
