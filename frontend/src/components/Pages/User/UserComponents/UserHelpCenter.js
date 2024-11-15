import React from 'react';
import './UserHelpCenter.css';
import { useState } from 'react';
import UserHelpCard from './UserHelpCard';

function UserHelpCenter() {

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };


  const helpCards = [
    {
      id: 1,
      icon: <span><i class="fa-solid fa-bullhorn"></i></span>,
      title: 'Announcement',
      description: "Here's what you need to know"
    },
    {
      id: 2,
      icon: <span><i class="fa-solid fa-toggle-on"></i></span>,
      title: 'Interface',
      description: "What does this button do?"
    },
    {
      id: 3,
      icon: <span><i class="fa-solid fa-hourglass-start"></i></span>,
      title: 'Getting Started',
      description: "Start off on the right foot"
    },
    {
      id: 4,
      icon: <span><i class="fa-solid fa-wrench"></i></span>,
      title: 'Server Setup',
      description: "Almost as axciting as interior decorating"
    },
    {
      id: 5,
      icon: <span><i class="fa-solid fa-wand-sparkles"></i></span>,
      title: 'Automations',
      description: "Almost as axciting as interior decorating"
    },
    {
      id: 6,
      icon: <span><i class="fa-solid fa-money-bill-wave"></i></span>,
      title: 'Payment',
      description: "Almost as axciting as interior decorating"
    },
    {
      id: 7,
      icon: <span><i class="fa-solid fa-circle-info"></i></span>,
      title: 'FAQs',
      description: "All your queries are cleared here"
    },
    {
      id: 8,
      icon: <span><i class="fa-solid fa-people-group"></i></span>,
      title: 'Collaborations',
      description: "We encourage teamwork and colab"
    },
    {
      id: 9,
      icon: <span><i class="fa-solid fa-file-invoice"></i></span>,
      title: 'Account',
      description: "Your private settings queries are welcomed"
    },
    {
      id: 10,
      icon: <span><i class="fa-solid fa-street-view"></i></span>,
      title: 'Navigation',
      description: "The navigation actions should work"
    },
    {
      id: 11,
      icon: <span><i class="fa-solid fa-plug-circle-exclamation"></i></span>,
      title: 'Activities',
      description: "You struggle in finding right courses"
    },
    {
      id: 12,
      icon: <span><i class="fa-solid fa-pen-nib"></i></span>,
      title: 'Release',
      description: "We encourage teamwork and colab"
    },
  ];

  return (
    <div>
      <h1 className='ad-user-pages-title'>Help Center</h1>
      <div className='ad-user-help-center-wrap'>
        <div className='ad-help-center-header'>
          <h2>How can we help?</h2>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="ad-user-help-search"
          />
        </div>
        <div className='ad-user-help-card-container'>
          {helpCards.map((card) => (
            <UserHelpCard
              key={card.id}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default UserHelpCenter
