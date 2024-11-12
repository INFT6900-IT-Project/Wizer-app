import React from 'react';
import './Reviews.css';
import Reply from './image/reply.png';
import Avatar from './image/avatar.png';

const Reviews = ({ reviewsData }) => {
    return (
        <div className="reviews-container">
            <h3>Comments</h3>
            <div className="rating-summary">
                <div className="average-rating">
                    <h1>4.0</h1>
                    <div className="stars">
                        <span>★★★★☆</span>
                        <p>based on 100 ratings</p>
                    </div>
                </div>
                <div className="rating-distribution">
                    {[
                        { stars: "★★★★★", percent: "90%", width: "90%" },
                        { stars: "★★★★☆", percent: "5%", width: "5%" },
                        { stars: "★★★☆☆", percent: "2%", width: "2%" },
                        { stars: "★★☆☆☆", percent: "2%", width: "2%" },
                        { stars: "★☆☆☆☆", percent: "1%", width: "1%" },
                    ].map((rating, index) => (
                        <div className="rating-bar" key={index}>
                            <p>{rating.stars}</p>
                            <span className="percent">{rating.percent}</span>
                            <div className="bar">
                                <div className="bar-fill" style={{ width: rating.width }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="comments-list">
                {reviewsData.map((review, index) => (
                    <div className="comment" key={index}>
                        <div className="author-info">
                            <img src={Avatar} alt="Author Avatar" className="author-avatar" />
                            <div className="name-date">
                                <p className="author-name">{review.author}</p>
                                <p className="comment-date">{review.date}</p>
                            </div>
                        </div>
                        <p className="comment-text">{review.comment}</p>
                        <div className="comment-actions">
                            <button className="reply-button">
                                <img src={Reply} alt="Reply Icon" /> Reply
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
// console.log("Reviews:", Reviews);
export default Reviews;
