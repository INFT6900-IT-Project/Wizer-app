//Introduction to Business

import React, { useState } from 'react';
import Curriculum from './Curriculum';
import Instructor from './Instructor';
import Reviews from './Reviews';
import FAQs from './FAQs';
import './TabNavigation.css';

const curriculumData = [
    {
        title: "Week 1: Photography Basics",
        lessons: [
            { 
                name: "Understanding Your Camera", 
                content: "Introduction to camera types (DSLR, mirrorless, smartphone cameras), basic parts of the camera, and how to handle the camera.", 
                preview: true 
            },
            { 
                name: "Exposure Triangle Basics", 
                content: "Overview of the exposure triangle: aperture, shutter speed, and ISO. Explanation of how each element affects exposure and image quality.", 
                preview: true 
            },
            { 
                name: "Aperture and Depth of Field", 
                content: "Explanation of aperture (f-stops), how it controls the amount of light and depth of field. Examples of wide vs. narrow apertures and their effect on images." 
            },
            { 
                name: "Shutter Speed for Motion Control", 
                content: "Explanation of shutter speed, effects on capturing motion (freeze vs. blur), and examples of situations that require different shutter speeds." 
            },
            { 
                name: "ISO and Noise", 
                content: "Explanation of ISO settings, how they impact exposure and image noise, examples of high vs. low ISO images." 
            },
            { 
                name: "Practical Assignment – Exposure Triangle in Action", 
                content: "Instructions for a practical assignment to take photos experimenting with aperture, shutter speed, and ISO." 
            },
        ],
        totalLessons: 6,
        quizzes: [
            {
                title: "Quiz: Photography Basics",
                questions: [
                    { question: "What are the three elements of the exposure triangle?", options: ["a) ISO, aperture, focal length", "b) ISO, shutter speed, aperture", "c) Focal length, ISO, exposure", "d) Exposure, shutter speed, focal length"], answer: "b" },
                    { question: "Which setting affects depth of field?", options: ["a) ISO", "b) Aperture", "c) Shutter speed", "d) White balance"], answer: "b" },
                    { question: "What does a fast shutter speed do?", options: ["a) Blurs motion", "b) Freezes motion", "c) Increases ISO", "d) Decreases ISO"], answer: "b" },
                    { question: "Which ISO setting is best for low light?", options: ["a) 100", "b) 200", "c) 800", "d) 3200"], answer: "d" },
                    { question: "What effect does high ISO have on photos?", options: ["a) Less noise", "b) More noise", "c) More blur", "d) Less depth of field"], answer: "b" }
                ]
            }
        ]
    },
    {
        title: "Week 2: Composition and Lighting Essentials",
        lessons: [
            { 
                name: "Introduction to Composition", 
                content: "Basics of composition, including the rule of thirds, leading lines, framing, and negative space. How composition affects storytelling in photography.", 
                preview: true 
            },
            { 
                name: "Leading Lines and Framing Techniques", 
                content: "How leading lines guide the viewer’s eye, examples of framing techniques to enhance composition." 
            },
            { 
                name: "Understanding Natural and Artificial Light", 
                content: "Overview of light sources (natural vs. artificial), qualities of light (hard, soft), and how to position the subject relative to the light." 
            },
            { 
                name: "Golden Hour and Blue Hour Photography", 
                content: "Explanation of golden and blue hours, why they are ideal for outdoor photography, how to make the most of these times." 
            },
            { 
                name: "Using Shadows and Contrast", 
                content: "How shadows and contrast can add depth and drama to images, techniques to control shadows." 
            },
            { 
                name: "Practical Assignment – Composition and Lighting", 
                content: "Assignment to capture three photos that emphasize different composition techniques and lighting styles." 
            },
        ],
        totalLessons: 6,
        quizzes: [
            {
                title: "Quiz: Composition and Lighting",
                questions: [
                    { question: "What is the rule of thirds?", options: ["a) Splitting image into three layers", "b) Placing subjects at intersections of a 3x3 grid", "c) Using three subjects", "d) Three lighting sources"], answer: "b" },
                    { question: "What are leading lines?", options: ["a) Lines that direct viewer's gaze", "b) Background lines", "c) Foreground shadows", "d) Main subject outlines"], answer: "a" },
                    { question: "When is golden hour?", options: ["a) Midday", "b) Sunrise and sunset", "c) Noon", "d) Midnight"], answer: "b" },
                    { question: "What does soft light do?", options: ["a) Creates harsh shadows", "b) Softens shadows", "c) Increases contrast", "d) Adds saturation"], answer: "b" },
                    { question: "What effect does using shadows add?", options: ["a) Flatness", "b) Depth and drama", "c) Sharpness", "d) Blur"], answer: "b" }
                ]
            }
        ]
    }
];


// Define the Overview component inline within TabNavigation1
const Overview = () => (
    <div>
        <p>
        The Learn Photography Course offers a foundational, two-week introduction to essential photography concepts. In Week 1, students explore the basics of handling a camera, the exposure triangle (aperture, shutter speed, ISO), and how these settings impact image quality. Through daily quizzes and a practical assignment, students gain hands-on experience with adjusting exposure to capture their desired results.

        Week 2 focuses on composition and lighting, crucial for creating visually appealing photos. Topics include the rule of thirds, leading lines, framing, and using natural and artificial light effectively. Students learn about golden and blue hours, as well as using shadows and contrast to add depth to their images. By the end of the course, students complete practical assignments and quizzes, applying what they’ve learned to capture well-composed and well-lit photos. This beginner-friendly course provides a solid foundation, preparing students for more advanced photography skills.
        </p>
    </div>
);

const TabNavigation2 = ({ reviewsData }) => {
    const [activeTab, setActiveTab] = useState('overview');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'overview':
                return <Overview />;
            case 'curriculum':
                return <Curriculum data={curriculumData} />;
            case 'instructor':
                return <Instructor />;
            case 'reviews':
                return <Reviews reviewsData={reviewsData} />;
            case 'faqs':
                return <FAQs />;
            default:
                return null;
        }
    };

    return (
        <div className="tab-container">
            <div className="tabs">
                {['overview', 'curriculum', 'instructor', 'faqs', 'reviews'].map(tab => (
                    <button
                        key={tab}
                        className={activeTab === tab ? 'active' : ''}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                ))}
            </div>
            <div className="tab-content">
                {renderTabContent()}
            </div>
        </div>
    );
};

export default TabNavigation2;


