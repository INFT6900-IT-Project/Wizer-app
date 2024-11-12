import React from 'react';
import BasicGreetingsQuiz from './BasicGreetingsQuiz';
import './LessonDetail.css';

const basicGreetingsContent = `
  This lesson introduces you to some of the most common greetings in Japanese.
  Learning these greetings will help you start conversations and be polite in various situations.
  Below are some basic greetings:

  - おはよう (Ohayou): Good morning (informal)
  - おはようございます (Ohayou gozaimasu): Good morning (polite)
  - こんにちは (Konnichiwa): Good afternoon / Hello
  - こんばんは (Konbanwa): Good evening
  - おやすみなさい (Oyasuminasai): Good night
  - さようなら (Sayounara): Goodbye
  - ありがとう (Arigatou): Thank you (informal)
  - ありがとうございます (Arigatou gozaimasu): Thank you (polite)
`;

const BasicGreetingsLesson = () => {
  console.log("BasicGreetingsLesson component rendered"); // Debugging line

  return (
    <div className="lesson-detail-container">
      <h2>Basic Greetings in Japanese</h2>
      <p className="lesson-content">{basicGreetingsContent}</p>

      <h3>Quiz: Test Your Knowledge of Basic Greetings</h3>
      <BasicGreetingsQuiz /> {/* Using the BasicGreetingsQuiz component */}
    </div>
  );
};

export default BasicGreetingsLesson;
