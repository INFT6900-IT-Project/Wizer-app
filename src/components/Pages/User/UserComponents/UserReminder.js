import React from 'react';
import './UserReminder.css';

function UserReminder() {
  return (
    <div>
      <h1 className='ad-user-pages-title'>Reminder</h1>
      <div className='ad-reminder-wrap'>
        <div className='ad-reminder-row'>
          <h3><i class="fa-regular fa-paper-plane"></i> Web Development Fundamentals</h3>
          <h1>Submit HTML Assignment (Zip file & Video)</h1>
          <p>Due Thursday 6 November 2024</p>
        </div>
        <div className='ad-reminder-row'>
          <h3><i class="fa-solid fa-cube"></i> Building Resilient Cybersecurity Systems and Practices</h3>
          <h1>Quiz 2: Implementing Advanced Techniques for Safeguarding Sensitive Information</h1>
          <p>Due Friday 12 December 2024</p>
        </div>
        <div className='ad-reminder-row'>
          <h3><i class="fa-regular fa-paper-plane"></i> Mastering Japnaese Grammar, Vocabulary, and Conversation Skills</h3>
          <h1>Video Presentation on Cultural Nuances in Japanese</h1>
          <p>Due Monday 25 November 2024</p>
        </div>
        <div className='ad-reminder-row'>
          <h3><i class="fa-regular fa-paper-plane"></i> Digital Marketing Strategies: Beginner Skills</h3>
          <h1>Social Media Analysis Report</h1>
          <p>Due Sunday 12 July 2025</p>
        </div>
        <div className='ad-reminder-row'>
          <h3><i class="fa-solid fa-cube"></i> Data Analytics Essentials</h3>
          <h1>Complete Module 1 Quiz Online</h1>
          <p>Due Tuesday 1 December 2024</p>
        </div>
      </div>
    </div>
  )
}

export default UserReminder
