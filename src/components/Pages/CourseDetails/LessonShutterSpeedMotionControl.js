// LessonWhatIsBusiness.js
import React from 'react';
import './LessonDetail.css';
import QuizComponent14 from './QuizComponent14';

const LessonShutterSpeedMotionControl = () => {
    return (
        <div className="lesson-detail-container">
            <h1>Shutter Speed for Motion Control</h1>
            
            {/* Introduction to Shutter Speed */}
            <section>
                <h2>What is Shutter Speed?</h2>
                <p className="lesson-content">
                    Shutter speed refers to the amount of time the camera’s sensor is exposed to light. It’s measured in fractions of a second, 
                    such as 1/1000 (fast) or 1/30 (slow). Shutter speed plays a key role in capturing motion and controlling exposure.
                </p>
                <div className="image-container">
                    <img
                        src="/ImageVideo/shutterspeed.jpg"
                        alt="Shutter speed settings"
                        className="lesson-image"
                    />
                </div>
            </section>

            {/* Effects of Shutter Speed on Motion */}
            <section>
                <h2>Controlling Motion with Shutter Speed</h2>
                <p className="lesson-content">
                    A fast shutter speed (e.g., 1/1000s) freezes motion, making it ideal for action shots like sports or wildlife photography. 
                    In contrast, a slow shutter speed (e.g., 1/30s or slower) creates motion blur, which can add a creative effect to photos, 
                    such as showing the flow of water or light trails from moving vehicles.
                </p>
                <div className="image-container">
                    <img
                        src="/ImageVideo/motioncontrol.jpg"
                        alt="Fast vs. slow shutter speed effects"
                        className="lesson-image"
                    />
                </div>
            </section>

            {/* Practical Tips for Shutter Speed */}
            <section>
                <h2>Practical Tips for Using Shutter Speed</h2>
                <p className="lesson-content">
                    - Fast Shutter Speeds (e.g., 1/500s or faster): Use these for freezing action in sports or wildlife photography.<br />
                    - Slow Shutter Speeds (e.g., 1/30s or slower): Use these for capturing light trails, water motion, or creative blurring.<br />
                    - Tripod for Stability: When using a slow shutter speed, a tripod is essential to prevent camera shake.
                </p>
            </section>

            {/* Quiz Section */}
            <h3>Quiz: Test Your Knowledge</h3>
            <QuizComponent14 />
        </div>
    );
};

export default LessonShutterSpeedMotionControl;
