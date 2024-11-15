// LessonWhatIsBusiness.js
import React from 'react';
import './LessonDetail.css';
import QuizComponent17 from './QuizComponent17';

const LessonLeadingLinesAndFramingTechniques = () => {
    return (
        <div className="lesson-detail-container">
            <h1>Leading Lines and Framing Techniques</h1>
            
            {/* Leading Lines Section */}
            <section>
                <h2>Leading Lines</h2>
                <p className="lesson-content">
                    Leading lines are visual elements in a photograph that guide the viewer's eye toward the subject or focal point. 
                    These lines can be natural or man-made, like roads, rivers, fences, or pathways, and they add depth and direction 
                    to an image, making it more engaging.
                </p>
                <div className="image-container">
                    <img
                        src="/ImageVideo/leadinglinesexample.jpg"
                        alt="Leading Lines Example"
                        className="lesson-image"
                    />
                </div>
            </section>

            {/* Framing Section */}
            <section>
                <h2>Framing</h2>
                <p className="lesson-content">
                    Framing is a technique where elements within the scene are used to "frame" the main subject. Frames can be 
                    created by objects like doorways, windows, trees, or arches, and they help to isolate the subject, draw 
                    attention to it, and add depth to the composition.
                </p>
                <div className="image-container">
                    <img
                        src="/ImageVideo/framingexample.jpg"
                        alt="Framing Example"
                        className="lesson-image"
                    />
                </div>
            </section>

            {/* Practical Tips for Leading Lines and Framing */}
            <section>
                <h2>Practical Tips for Using Leading Lines and Framing</h2>
                <p className="lesson-content">
                    - Using Leading Lines: Look for natural lines in the environment, like roads, rivers, or buildings, to guide the viewer's eye towards the subject.<br />
                    - Creating Frames: Use objects in the foreground, like branches, windows, or doorways, to create a frame around the subject and add depth to the image.
                </p>
            </section>

            {/* Quiz Section */}
            <h3>Quiz: Test Your Knowledge</h3>
            <QuizComponent17 />
        </div>
    );
};

export default LessonLeadingLinesAndFramingTechniques;
