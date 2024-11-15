
import React from 'react';
import './LessonDetail.css';
import QuizComponent18 from './QuizComponent18';





const LessonUnderstandingNaturalAndArtificialLight = () => {
    return (
        <div className="lesson-detail-container">
            <h1>Understanding Natural and Artificial Light</h1>
            
            {/* Introduction to Light Types */}
            <section>
                <h2>Natural vs. Artificial Light</h2>
                <p className="lesson-content">
                    Lighting is one of the most essential elements in photography. There are two primary sources of light: 
                    natural light, which comes from the sun, and artificial light, which includes any man-made light source 
                    like lamps, LEDs, or flash. Understanding these light sources and their qualities helps in creating 
                    impactful images.
                </p>
            </section>

            {/* Natural Light Section */}
            <section>
                <h2>Natural Light</h2>
                <p className="lesson-content">
                    Natural light varies depending on the time of day and weather conditions. It is often preferred by photographers 
                    for its softness and the natural look it brings to images. Golden hour (just after sunrise or before sunset) 
                    provides warm, soft light, while midday light tends to be harsher and more direct.
                </p>
                <div className="image-container">
                    <img
                        src="/ImageVideo/naturallightexample.jpg"
                        alt="Natural Light Example"
                        className="lesson-image"
                    />
                </div>
            </section>

            {/* Artificial Light Section */}
            <section>
                <h2>Artificial Light</h2>
                <p className="lesson-content">
                    Artificial light sources include studio lights, lamps, and on-camera flash. Artificial light offers more control, 
                    allowing you to shape the light, adjust intensity, and create different moods. It can be useful in low-light 
                    settings and for achieving consistent lighting in controlled environments.
                </p>
                <div className="image-container">
                    <img
                        src="/ImageVideo/artificiallightexample.jpg"
                        alt="Artificial Light Example"
                        className="lesson-image"
                    />
                </div>
            </section>

            {/* Qualities of Light Section */}
            <section>
                <h2>Qualities of Light</h2>
                <p className="lesson-content">
                    Light has various qualities that affect how your images look:
                </p>
                <ul>
                    <li><strong>Soft Light:</strong> Light that creates minimal shadows and soft edges, often seen during golden hour or with diffused artificial light.</li>
                    <li><strong>Hard Light:</strong> Light that produces strong shadows and contrast, typically from direct sunlight or an unmodified flash.</li>
                    <li><strong>Color Temperature:</strong> The warmth or coolness of light, measured in Kelvin. Natural light can range from warm (sunrise/sunset) to cool (shade), while artificial light can be adjusted to achieve various color temperatures.</li>
                </ul>
            </section>

            {/* Practical Tips for Using Light */}
            <section>
                <h2>Practical Tips for Using Light</h2>
                <p className="lesson-content">
                    - Using Natural Light: Try photographing during golden hour for soft, warm tones or use shade to avoid harsh midday light.<br />
                    - Controlling Artificial Light: Use diffusers to soften the light, adjust light placement to control shadows, and experiment with color temperature for mood.
                </p>
            </section>

            {/* Quiz Section */}
            <h3>Quiz: Test Your Knowledge</h3>
            <QuizComponent18 />
        </div>
    );
};

export default LessonUnderstandingNaturalAndArtificialLight;
