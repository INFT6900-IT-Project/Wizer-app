

import React, { useState } from 'react';
import './LessonExposureTriangleAssignment.css';

// import QuizComponent16 from './QuizComponent16.js';

const LessonExposureTriangleAssignment = () => {
    const [submission, setSubmission] = useState({
        photo1: '',
        photo2: '',
        photo3: '',
        comments: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSubmission((prevSubmission) => ({
            ...prevSubmission,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        alert('Assignment submitted successfully!');
        setSubmission({
            photo1: '',
            photo2: '',
            photo3: '',
            comments: ''
        });
    };

    return (
        <div className="lesson-detail-container">
            <h1>Practical Assignment – Exposure Triangle in Action</h1>
            
            {/* Assignment Instructions */}
            <section>
                <h2>Assignment Instructions</h2>
                <p className="lesson-content">
                    For this assignment, you will take three photos using different settings for aperture, shutter speed, and ISO 
                    to observe their impact on the final image. Each photo should showcase a different aspect of the exposure triangle:
                </p>
                <ul>
                    <li><strong>Photo 1:</strong> Experiment with aperture. Choose a large aperture (e.g., f/2.8) for a shallow depth of field and a smaller aperture (e.g., f/16) for a deep depth of field.</li>
                    <li><strong>Photo 2:</strong> Experiment with shutter speed. Take one photo with a fast shutter speed (e.g., 1/1000s) to freeze motion and another with a slower shutter speed (e.g., 1/30s) to capture motion blur.</li>
                    <li><strong>Photo 3:</strong> Experiment with ISO. Take one photo with a low ISO (e.g., ISO 100) in a bright setting and a high ISO (e.g., ISO 1600) in a low-light setting to observe noise levels.</li>
                </ul>
                <p className="lesson-content">
                    After capturing your photos, upload them here with any comments on what you observed with each setting.
                </p>
            </section>

            {/* Example Images Section */}
            <section>
                <h2>Example Images</h2>
                <div className="image-container">
                    <img src="/ImageVideo/apertureexample.jpg" alt="Aperture Example" className="lesson-image" />
                    <img src="/ImageVideo/shutterspeedexample.jpg" alt="Shutter Speed Example" className="lesson-image" />
                    <img src="/ImageVideo/isoexample.jpg" alt="ISO Example" className="lesson-image" />
                </div>
            </section>

            {/* Submission Form */}
            <section>
                <h2>Submit Your Assignment</h2>
                <form onSubmit={handleSubmit} className="assignment-form">
                    <label>
                        Upload Photo 1 (Aperture Experiment):
                        <input type="file" name="photo1" value={submission.photo1} onChange={handleChange} />
                    </label>
                    <label>
                        Upload Photo 2 (Shutter Speed Experiment):
                        <input type="file" name="photo2" value={submission.photo2} onChange={handleChange} />
                    </label>
                    <label>
                        Upload Photo 3 (ISO Experiment):
                        <input type="file" name="photo3" value={submission.photo3} onChange={handleChange} />
                    </label>
                    <label>
                        Comments on Your Observations:
                        <textarea name="comments" value={submission.comments} onChange={handleChange} placeholder="Describe your observations here" />
                    </label>
                    <button type="submit">Submit Assignment</button>
                </form>
            </section>
        </div>
    );
};

//             {/* Quiz Section */}
//             <h3>Quiz: Test Your Knowledge</h3>
//             <QuizComponent16 />
//         </div>
//     );
// };

export default LessonExposureTriangleAssignment;
