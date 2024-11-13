// LessonWhatIsBusiness.js
import React from 'react';
import './LessonDetail.css';
import QuizComponent12 from './QuizComponent12.js';

const LessonExposureTriangleBasics = () => {


    return (
        <div className="lesson-detail-container">
            <h1>Exposure Triangle Basics</h1>
            <p className="lesson-content">
                The Exposure Triangle is a fundamental concept in photography that includes three key elements: 
                aperture, shutter speed, and ISO. Together, these settings control the exposure of an image.
            </p>

            {/* Aperture Section */}
            <section>
                <h2>Aperture</h2>
                <p className="lesson-content">
                    Aperture refers to the opening in a lens through which light enters the camera. It’s measured in f-stops 
                    (e.g., f/2.8, f/5.6). A larger aperture (smaller f-stop number) lets in more light and creates a shallow 
                    depth of field, while a smaller aperture (larger f-stop number) reduces light and increases depth of field.
                </p>
                <div className="image-container">
                    <img
                        src="/ImageVideo/aperture.jpg"
                        alt="Aperture settings"
                        className="lesson-image"
                    />
                </div>
            </section>

            {/* Shutter Speed Section */}
            <section>
                <h2>Shutter Speed</h2>
                <p className="lesson-content">
                    Shutter speed is the amount of time the camera’s sensor is exposed to light. A fast shutter speed (e.g., 
                    1/1000s) freezes motion, ideal for action shots, while a slow shutter speed (e.g., 1/30s) creates motion 
                    blur, useful for low-light or creative effects.
                </p>
                <div className="image-container">
                    <img
                        src="/ImageVideo/shutterspeed.jpg"
                        alt="Shutter speed settings"
                        className="lesson-image"
                    />
                </div>
            </section>

            {/* ISO Section */}
            <section>
                <h2>ISO</h2>
                <p className="lesson-content">
                    ISO refers to the camera sensor’s sensitivity to light. A low ISO (e.g., 100) produces clear images in 
                    bright settings, while a high ISO (e.g., 1600 or higher) is useful in low-light but may introduce noise 
                    (graininess) to the image.
                </p>
                <div className="image-container">
                    <img
                        src="/ImageVideo/iso.jpg"
                        alt="ISO settings"
                        className="lesson-image"
                    />
                </div>
            </section>

            {/* Summary of the Exposure Triangle */}
            <section>
                <h2>Balancing the Exposure Triangle</h2>
                <p className="lesson-content">
                    The three elements of the exposure triangle work together to control the overall exposure of a photo. 
                    Adjusting one setting often requires compensating with another to achieve the desired brightness and 
                    image quality. Understanding this balance is key to capturing well-exposed photographs.
                </p>
            </section>


            {/* Quiz Section */}
            <h3>Quiz: Test Your Knowledge</h3>
            <QuizComponent12 />
        </div>
    );
};

export default LessonExposureTriangleBasics;
