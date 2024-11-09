import React, { useState, useEffect } from 'react';
import Curriculum from './Curriculum';
import Instructor from './Instructor';
import Reviews from './Reviews';
import Overview from './Overview';
import FAQs from './FAQs';
import './TabNavigation.css'; 

const curriculumData = [
    {
        title: "Module 1: Introduction to Japanese",
        lessons: [
            { name: "Japanese Alphabets – Hiragana", time: "12:30", preview: true },
            { name: "Japanese Alphabets – Katakana", time: "10:05", preview: true }
        ],
        totalLessons: 2,
        totalTime: "22:35 Mins",
        quizzes: [
            {
                title: "Quiz: Japanese Alphabets – Hiragana",
                questions: [
                    { question: "Which of the following is the correct hiragana for the sound 'e'?", options: ["あ", "い", "う", "え", "お"], answer: "え" },
                    { question: "Which of the following is the correct hiragana for the sound 'ka'?", options: ["き", "く", "け", "か"], answer: "か" },
                    { question: "What is the hiragana character for the sound 'su'?", options: ["さ", "し", "す", "せ"], answer: "す" },
                    { question: "How do you write the word 'neko' (cat) in hiragana?", options: ["ねき", "ぬこ", "ねこ", "さこ"], answer: "ねこ" },
                    { question: "Which of the following is the correct sequence for the vowels 'a, i, u, e, o' in hiragana?", options: ["あ, い, う, え, お", "お, い, え, う, あ", "い, あ, え, う, お", "う, え, あ, い, お"], answer: "あ, い, う, え, お" }
                ]
            },
            {
                title: "Quiz: Japanese Alphabets – Katakana",
                questions: [
                    { question: "What is the hiragana character for the sound 'o'?", options: ["ア", "イ", "ウ", "エ", "オ"], answer: "オ" },
                    { question: "Which of the following is the correct katakana for the sound 'ka'?", options: ["ケ", "コ", "カ", "キ"], answer: "カ" },
                    { question: "What is the katakana character for the sound 'su'?", options: ["サ", "シ", "ス", "セ"], answer: "ス" },
                    { question: "How do you write the word 'sushi' in katakana?", options: ["スシ", "サシ", "スヒ", "ソシ"], answer: "スシ" },
                    { question: "Which of the following is the correct sequence for the vowels 'a, i, u, e, o' in katakana?", options: ["ア, イ, ウ, エ, オ", "オ, イ, エ, ウ, ア", "イ, ア, エ, ウ, オ", "ウ, エ, ア, イ, オ"], answer: "ア, イ, ウ, エ, オ" }
                ]
            }
        ]
    },
    {
        title: "Module 2: Building Conversational Skills",
        lessons: [
            { name: "Basic Greetings", time: "15:00", preview: true },
            { name: "Numbers and Counting", time: "20:00", preview: true }
        ],
        totalLessons: 2,
        totalTime: "35:00 Mins",
        quizzes: [
            {
                title: "Quiz: Basic Greetings",
                questions: [
                    { question: "What is the correct Japanese phrase for 'Good morning'?", options: ["こんばんは", "こんにちは", "おはよう", "さようなら"], answer: "おはよう" },
                    { question: "How do you say 'Good night' in Japanese?", options: ["おやすみなさい", "こんにちは", "ありがとう", "はい"], answer: "おやすみなさい" },
                    { question: "Which of the following greetings would you use to say 'Goodbye' in Japanese?", options: ["おはようございます", "さようなら", "ありがとう", "すみません"], answer: "さようなら" },
                    { question: "What does 'こんにちは' mean?", options: ["Good evening", "Good afternoon / Hello", "Thank you", "I'm sorry"], answer: "Good afternoon / Hello" },
                    { question: "Which of the following is the polite version of 'Thank you'?", options: ["すみません", "ありがとう", "ありがとうございます", "おはよう"], answer: "ありがとうございます" }
                ]
            },
            {
                title: "Quiz: Numbers and Counting",
                questions: [
                    { question: "What is the Japanese word for the number '5'?", options: ["よん (yon)", "ろく (roku)", "ご (go)", "しち (shichi)"], answer: "ご (go)" },
                    { question: "How do you say the number '10' in Japanese?", options: ["じゅう (juu)", "なな (nana)", "はち (hachi)", "きゅう (kyuu)"], answer: "じゅう (juu)" },
                    { question: "Which of the following is the correct way to count two people in Japanese?", options: ["いちにん (ichinin)", "ふたり (futari)", "さんにん (sannin)", "ひとつ (hitotsu)"], answer: "ふたり (futari)" },
                    { question: "What is the correct counter for objects when counting three items in Japanese?", options: ["ふたつ (futatsu)", "みっつ (mittsu)", "よっつ (yottsu)", "いつつ (itsutsu)"], answer: "みっつ (mittsu)" },
                    { question: "How do you count five people in Japanese?", options: ["ごにん (gonin)", "よんにん (yonin)", "ふたり (futari)", "いちにん (ichinin)"], answer: "ごにん (gonin)" }
                ]
            }
        ]
    }
];

const TabNavigation = ({ reviewsData }) => {
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

export default TabNavigation;
