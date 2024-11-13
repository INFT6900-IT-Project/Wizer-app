// LessonWhatIsBusiness.js
import React from 'react';
import './LessonDetail.css';
import QuizComponent11 from './QuizComponent11';

const LessonUnderstandingYourCamera = () => {
    const lessonContent = `
        Understanding your camera is essential for capturing high-quality photos. Cameras come in various types, including DSLRs, mirrorless, and smartphone cameras, each offering unique features. Key parts of a camera include the lens, which focuses light onto the sensor; the viewfinder, for composing shots; the shutter button; and the mode dial for adjusting settings. Proper handling improves stability—use both hands, keep elbows close, and utilize a neck strap to avoid drops. Learning these basics, such as types, parts, and handling techniques, enables better control over your device and enhances your photography skills from the very start.
    `;

    return (
        <div className="lesson-detail-container">
            <h1>Understanding Your Camera</h1>
            <p className="lesson-content">{lessonContent}</p>

            {/* Camera Types Section */}
            <section>
                <h2>Introduction to Camera Types</h2>
                <p className="lesson-content">
                    There are various types of cameras available today, each suited for different photography needs:
                </p>
                <ul>
                    <li><strong>DSLR (Digital Single-Lens Reflex)</strong>: Offers interchangeable lenses, optical viewfinders, and manual controls for more professional use.</li>
                    <li><strong>Mirrorless</strong>: Compact and lightweight with high-quality image output, featuring electronic viewfinders.</li>
                    <li><strong>Smartphone Cameras</strong>: Convenient and accessible, often enhanced with AI-powered features.</li>
                </ul>
                <div className="image-container">
                    <img
                        src="/ImageVideo/cameratypes.jpg"
                        alt="Different Camera Types"
                        className="lesson-image"
                    />
                </div>
            </section>

            {/* Camera Parts Section */}
            <section>
                <h2>Basic Parts of a Camera</h2>
                <p className="lesson-content">
                    Understanding the basic parts of your camera helps you operate it effectively. Here are some key components:
                </p>
                <ul>
                    <li><strong>Lens</strong>: Focuses light onto the camera sensor.</li>
                    <li><strong>Viewfinder</strong>: Allows you to see and compose the shot.</li>
                    <li><strong>Shutter Button</strong>: Press to take a picture.</li>
                    <li><strong>Mode Dial</strong>: Switch between automatic, manual, and other modes.</li>
                    <li><strong>LCD Screen</strong>: Displays live view and camera settings.</li>
                    <li><strong>Battery Compartment</strong>: Holds the battery that powers the camera.</li>
                </ul>
            </section>

            {/* Handling Tips Section */}
            <section>
                <h2>How to Handle Your Camera</h2>
                <p className="lesson-content">
                    Proper handling ensures stability and reduces the risk of dropping the camera. Here are some tips:
                </p>
                <ul>
                    <li>Use a neck or wrist strap to prevent accidental drops.</li>
                    <li>Hold the camera with both hands for better control and stability.</li>
                    <li>Keep your elbows close to your body to steady the shot.</li>
                    <li>Turn off the camera before changing lenses to avoid dust exposure.</li>
                </ul>
            </section>    

            {/* Quiz Section */}
            <h3>Quiz: Test Your Knowledge</h3>
            <QuizComponent11 />
        </div>
    );
};

export default LessonUnderstandingYourCamera;
