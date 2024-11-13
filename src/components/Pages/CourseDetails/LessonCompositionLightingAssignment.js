
import React, { useState } from 'react';
import './LessonExposureTriangleAssignment.css';
// import QuizComponent2 from './QuizComponent2';

const LessonCompositionLightingAssignment = () => {
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
            <h1>Practical Assignment – Composition and Lighting</h1>
            
            {/* Assignment Instructions */}
            <section>
                <h2>Assignment Instructions</h2>
                <p className="lesson-content">
                    In this assignment, you will take three photos, each demonstrating a different composition technique 
                    and experimenting with natural and artificial lighting.
                </p>
                <ul>
                    <li><strong>Photo 1:</strong> Use the rule of thirds to place your subject off-center. Try capturing this photo during golden hour to observe the effect of soft natural light.</li>
                    <li><strong>Photo 2:</strong> Use leading lines to direct attention to the subject. Experiment with natural light from different angles (e.g., front or side light) to see how shadows affect the image.</li>
                    <li><strong>Photo 3:</strong> Use framing to isolate the subject within the scene. For this photo, use artificial light, such as a lamp or flashlight, to experiment with shadows and depth.</li>
                </ul>
                <p className="lesson-content">
                    After capturing your photos, upload them here with any comments on what you observed with each technique and lighting condition.
                </p>
            </section>

            {/* Example Images Section */}
            <section>
                <h2>Example Images</h2>
                <div className="image-container">
                    <img src="/ImageVideo/ruleofthirds.jpg" alt="Rule of Thirds Example" className="lesson-image" />
                    <img src="/ImageVideo/leadinglinesexample.jpg" alt="Leading Lines Example" className="lesson-image" />
                    <img src="/ImageVideo/framingexample.jpg" alt="Framing Example" className="lesson-image" />
                </div>
            </section>

            {/* Submission Form */}
            <section>
                <h2>Submit Your Assignment</h2>
                <form onSubmit={handleSubmit} className="assignment-form">
                    <label>
                        Upload Photo 1 (Rule of Thirds with Natural Light):
                        <input type="file" name="photo1" value={submission.photo1} onChange={handleChange} />
                    </label>
                    <label>
                        Upload Photo 2 (Leading Lines with Natural Light):
                        <input type="file" name="photo2" value={submission.photo2} onChange={handleChange} />
                    </label>
                    <label>
                        Upload Photo 3 (Framing with Artificial Light):
                        <input type="file" name="photo3" value={submission.photo3} onChange={handleChange} />
                    </label>
                    <label>
                        Comments on Your Observations:
                        <textarea
                            name="comments"
                            value={submission.comments}
                            onChange={handleChange}
                            placeholder="Describe your observations here"
                        />
                    </label>
                    <button type="submit">Submit Assignment</button>
                </form>
            </section>
        </div>
    );
};

export default LessonCompositionLightingAssignment;
