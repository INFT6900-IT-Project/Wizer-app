// LessonWhatIsBusiness.js
import React from 'react';
import './LessonDetail.css';
import QuizComponent13 from './QuizComponent13';

const LessonApertureDepthOfField = () => {
    return (
        <div className="lesson-detail-container">
            <h1>Aperture and Depth of Field</h1>
            
            {/* Introduction to Aperture */}
            <section>
                <h2>What is Aperture?</h2>
                <p className="lesson-content">
                    Aperture refers to the opening in a camera lens that controls the amount of light reaching the sensor. 
                    It is measured in f-stops (e.g., f/1.8, f/5.6). A lower f-stop number (e.g., f/1.8) means a larger aperture, 
                    allowing more light in, while a higher f-stop number (e.g., f/16) means a smaller aperture, reducing the 
                    amount of light.
                </p>
                <div className="image-container">
                    <img
                        src="/ImageVideo/aperture.jpg"
                        alt="Aperture settings"
                        className="lesson-image"
                    />
                </div>
            </section>

            {/* Depth of Field Explanation */}
            <section>
                <h2>How Aperture Affects Depth of Field</h2>
                <p className="lesson-content">
                    Depth of field refers to the area in an image that appears sharp or in focus. A large aperture (e.g., f/1.8) 
                    creates a shallow depth of field, making the subject stand out against a blurred background. Conversely, a 
                    small aperture (e.g., f/16) produces a deep depth of field, where most of the scene is in focus, making it 
                    ideal for landscapes.
                </p>
                <div className="image-container">
                    <img
                        src="/ImageVideo/depthoffield.jpg"
                        alt="Shallow vs. deep depth of field"
                        className="lesson-image"
                    />
                </div>
            </section>

            {/* Practical Examples Section */}
            <section>
                <h2>Examples of Aperture Settings</h2>
                <p className="lesson-content">
                    - **Portrait Photography**: Use a wide aperture (e.g., f/2.8) to create a shallow depth of field and blur the background.<br />
                    - **Landscape Photography**: Use a narrow aperture (e.g., f/11 or f/16) to achieve a deep depth of field, keeping most of the scene in focus.
                </p>
            </section>

            {/* Quiz Section */}
            <h3>Quiz: Test Your Knowledge</h3>
            <QuizComponent13 />
        </div>
    );
};

export default LessonApertureDepthOfField;
