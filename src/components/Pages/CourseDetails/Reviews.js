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
                    <h1>4.3</h1>
                    <div className="stars">
                        <span>★★★★☆</span>
                        <p>(261 reviews)</p>
                    </div>
                </div>
                <div className="rating-distribution">
                    {[
                        { stars: "★★★★★", percent: "90%", width: "90%" },
                        { stars: "★★★★☆", percent: "8%", width: "8%" },
                        { stars: "★★★☆☆", percent: "3%", width: "3%" },
                        { stars: "★★☆☆☆", percent: "0%", width: "0%" },
                        { stars: "★☆☆☆☆", percent: "0%", width: "0%" },
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
