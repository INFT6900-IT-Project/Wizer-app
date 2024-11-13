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


  const greetingsLines = basicGreetingsContent
    .split('\n') // Split by line
    .map(line => line.trim()) // Remove any extra whitespace
    .filter(line => line.startsWith('- ')) // Filter out non-list lines
    .map(line => line.substring(2).trim()); // Remove the '- ' from each line
    
  return (
    <div className="lesson-detail-container">
      <h2>Basic Greetings in Japanese</h2>
      <p>{greetingsLines.map((greeting, index) => (
          <li key={index}>{greeting}</li>
        ))}</p>

      <h3><i class="fa-solid fa-flag-checkered"></i> Quiz Section</h3>
      <BasicGreetingsQuiz /> {/* Using the BasicGreetingsQuiz component */}
    </div>
  );
};

export default BasicGreetingsLesson;
