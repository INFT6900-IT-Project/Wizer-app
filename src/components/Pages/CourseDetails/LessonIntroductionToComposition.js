// LessonWhatIsBusiness.js
import React from 'react';
import './LessonDetail.css';
import QuizComponent16 from './QuizComponent16';

const LessonIntroductionToComposition = () => {
    return (
        <div className="lesson-detail-container">
            <h1>Introduction to Composition</h1>
            
            {/* Composition Basics */}
            <section>
                <h2>What is Composition?</h2>
                <p className="lesson-content">
                    Composition is the arrangement of elements within a photograph. A well-composed image can effectively draw the viewer’s eye, 
                    convey emotion, and tell a story. In this lesson, we'll cover key composition techniques that will enhance your photography skills.
                </p>
            </section>

            {/* Rule of Thirds */}
            <section>
                <h2>Rule of Thirds</h2>
                <p className="lesson-content">
                    The rule of thirds is a fundamental composition technique. Imagine dividing your frame into a 3x3 grid. Placing your subject along 
                    these lines or at their intersections can create a more balanced and visually appealing image.
                </p>
                <div className="image-container">
                    <img
                        src="/ImageVideo/ruleofthirds.jpg"
                        alt="Rule of Thirds Example"
                        className="lesson-image"
                    />
                </div>
            </section>

            {/* Leading Lines */}
            <section>
                <h2>Leading Lines</h2>
                <p className="lesson-content">
                    Leading lines guide the viewer’s eye through an image. These lines can be roads, rivers, fences, or any element that naturally 
                    leads toward the subject. This technique is effective in drawing attention to key parts of the composition.
                </p>
                <div className="image-container">
                    <img
                        src="/ImageVideo/leadinglines.jpg"
                        alt="Leading Lines Example"
                        className="lesson-image"
                    />
                </div>
            </section>

            {/* Framing */}
            <section>
                <h2>Framing</h2>
                <p className="lesson-content">
                    Framing involves using elements within the scene to create a "frame" around the subject. This can be achieved by using doorways, 
                    windows, or natural elements like trees. Framing helps to isolate the subject and adds depth to the photo.
                </p>
                <div className="image-container">
                    <img
                        src="/ImageVideo/framing.jpg"
                        alt="Framing Example"
                        className="lesson-image"
                    />
                </div>
            </section>

            {/* Negative Space */}
            <section>
                <h2>Negative Space</h2>
                <p className="lesson-content">
                    Negative space refers to the empty or open space around the subject. It provides breathing room, emphasizes the subject, 
                    and can create a minimalist aesthetic. Negative space is particularly effective in portraits and still-life photography.
                </p>
                <div className="image-container">
                    <img
                        src="/ImageVideo/negativespace.jpg"
                        alt="Negative Space Example"
                        className="lesson-image"
                    />
                </div>
            </section>

            {/* Quiz Section */}
            <h3>Quiz: Test Your Knowledge</h3>
            <QuizComponent16 />
        </div>
    );
};

export default LessonIntroductionToComposition;
