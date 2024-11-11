import React from 'react';
import { useState } from 'react';
import './QaA.css';

function QaA() {

  const [selected, setSelected] = useState(null)  

  const toggle = (i) => {
    if (selected === i) {
        return setSelected(null)
    }

    setSelected(i)
  }


  return (
    <div className='ad-qa-wrap'>
        <h1 className='ad-qa-title'>Frequently Asked Questions</h1>
        <div className='ad-accordion'>
            {QaAQuestion.map((item, i) => ( /*the i represents the index of the current item in the QaAQuestion array*/ 
                <div className='ad-a-item'>
                    <div className={selected === i ? 'ad-question-expand' : 'ad-question' } onClick={() => toggle(i)}>
                        <h2>{item.question}</h2>
                        <span>{selected === i ? '-' : '+' }</span>
                    </div>
                    <div className={selected === i ? 'ad-answer-show' : 'ad-answer-close' }>{item.answer}</div>

                </div>
            ))}
        </div>
    </div>
  )
}

const QaAQuestion = [
    {
        question: 'Who is Wizer intended for, and what types of users benefit the most?',
        answer: "Wizer is ideal for educational institutions, training providers, companies, and individuals interested in delivering or receiving structured, interactive content. Teachers, corporate trainers, HR teams, and personal development enthusiasts can all benefit from Wizer's flexible platform, as it allows them to tailor training to diverse learning objectives and preferences."
    },
    {
        question:'What specific types of content can be integrated into a Wizer module, and how does this help learning?',
        answer: "Wizer supports a variety of content types to create engaging modules, including text explanations, embedded videos, interactive quizzes, PDF downloads, and other assessments. By combining these elements, users can create layered and comprehensive modules that allow learners to absorb information in multiple ways, boosting retention and accommodating different learning preferences."
    },
    {
        question: 'Can I create an unlimited number of modules on Wizer, or are there specific limits?',
        answer:"While Wizer allows users to create multiple modules, certain subscription plans may include limitations on storage or restrict the number of active modules per account. Check your plan details in the Wizer dashboard to confirm your specific limits, or contact support for further clarification."
    },
    {
        question: 'Can I customize Wizer modules to align with specific learning outcomes or corporate goals?',
        answer: "Yes, Wizer offers a high degree of customization, allowing creators to align each module with their specific objectives. You can set difficulty levels, choose relevant content types, and design quizzes that match the desired outcomes of each training session, ensuring the learning experience is closely tied to your goals."

    },
    {
        question: 'How does Wizer ensure the security of my data and privacy of my information?',
        answer: "Wizer employs robust data security measures, including encryption protocols to secure data storage and transfer. The platform also adheres to strict privacy policies, protecting your personal information and ensuring that only you and authorized personnel can access sensitive data associated with your account."
    },
    {
        question: 'What sets Wizer apart from traditional online learning tools?',
        answer: "Wizer provides a unique level of customization, allowing creators to design modules with adaptable content formats and interactive assessments, all within a secure environment. Unlike many platforms that rely on static content, Wizer lets users create dynamic modules that engage learners with quizzes, feedback, and progress tracking, catering to a wide range of learning styles and needs."
    },
    {
        question: 'What types of reports and dashboards are available for tracking progress?',
        answer: "Both the Team and Enterprise plans include detailed dashboards and reports that allow administrators and team leads to monitor skill progress, completion rates, and individual performance. These tools provide insights into team development, highlight areas for improvement, and help tailor learning paths according to group needs."
    },
    {
        question: 'What is the refund policy for the Team and Enterprise plans?',
        answer: "Wizer offers a 14-day money-back guarantee for both the Team and Enterprise plans, giving organizations the flexibility to explore the platform risk-free. If the plan does not meet expectations within the first 14 days, you can request a full refund."
    },
    {
        question: 'How can I get started with the Team plan, and what support is available during setup?',
        answer: "To start with the Team plan, click on “Get Started” on Wizer’s pricing page. Once registered, you’ll have immediate access to the course catalog and features. For additional setup guidance, the Wizer support team is available to assist with onboarding and initial configuration."
    }
]

export default QaA
