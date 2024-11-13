// LessonWhatIsBusiness.js
import React from 'react';
import './LessonDetail.css';
import QuizComponent15 from './QuizComponent15.js';

const LessonISONoise = () => {


    return (
        <div className="lesson-detail-container">
            <h1>ISO and Noise</h1>
            
            {/* Introduction to ISO */}
            <section>
                <h2>What is ISO?</h2>
                <p className="lesson-content">
                    ISO refers to the sensitivity of your camera's sensor to light. Lower ISO values (e.g., ISO 100) make the sensor 
                    less sensitive to light, ideal for bright conditions, while higher ISO values (e.g., ISO 1600) increase sensitivity, 
                    useful in low-light situations.
                </p>
                <div className="image-container">
                    <img
                        src="/ImageVideo/isosettings.jpg"
                        alt="ISO settings"
                        className="lesson-image"
                    />
                </div>
            </section>

            {/* ISO and Noise Relationship */}
            <section>
                <h2>How ISO Affects Noise</h2>
                <p className="lesson-content">
                    Increasing the ISO can brighten an image in low-light conditions, but it also introduces noise (graininess) to the photo. 
                    Lower ISO settings result in clearer images, while higher ISO settings can make the image appear grainy, especially in 
                    darker areas.
                </p>
                <div className="image-container">
                    <img
                        src="/ImageVideo/isonoise.jpg"
                        alt="High ISO vs. Low ISO noise"
                        className="lesson-image"
                    />
                </div>
            </section>

            {/* Practical Tips for ISO Usage */}
            <section>
                <h2>Practical Tips for Using ISO</h2>
                <p className="lesson-content">
                    - Use Low ISO (e.g., 100-200): Ideal for bright, daylight settings where noise should be minimized.<br />
                    - Increase ISO in Low-Light: Use higher ISO (e.g., 800 or above) in low-light conditions, such as indoor or night photography, but be mindful of noise.<br />
                    - Find a Balance: Adjust ISO based on lighting and the amount of noise you’re willing to accept for a well-exposed image.
                </p>
            </section>

            {/* Quiz Section */}
            <h3>Quiz: Test Your Knowledge</h3>
            <QuizComponent15 />
        </div>
    );
};

export default LessonISONoise;
