import React from 'react';
import './UserAchievement.css';
import { Link } from 'react-router-dom';
import achievement from '../../../../ImageVideo/achievement.png';
import Badge from './Badge';
import badge1 from '../../../../ImageVideo/badge1.jpg';
import badge2 from '../../../../ImageVideo/badge2.jpg';
import badge3 from '../../../../ImageVideo/badge3.jpg';
import badge4 from '../../../../ImageVideo/badge4.jpg';
import badge5 from '../../../../ImageVideo/badge5.jpg';
import badge6 from '../../../../ImageVideo/badge6.jpg';
import badge7 from '../../../../ImageVideo/badge7.jpg';
import badge8 from '../../../../ImageVideo/badge8.jpg';


function UserAchievement() {
    return (
        <div>
            <h1 className='ad-user-pages-title'>My Achievements & Badges</h1>
            <div className='ad-achieve-wrap'>
                <div className='ad-achieve-header'>
                    <div className='ad-achieve-header-left'>
                        <p>Where you can track your progress, reflect on the milestones you've reached, and celebrate your hard-earned success. Whether you’re completing courses, acing quizzes, or engaging with the community, each achievement represents a unique accomplishment that brings you closer to mastering new skills.</p>
                        <p>As you progress, you'll <span>unlock badges</span> that showcase your dedication, consistency, and growth. These badges are not just symbols—they’re proof of your commitment to learning, problem-solving, and personal development. Every achievement is a reflection of your passion for growth and your drive to succeed</p>
                        <Link to='/user-screen/my-learning' className='ad-gain-badge'>Gain badges</Link>
                        
                    </div>
                    <div className='ad-achieve-header-right'>
                        <img src={achievement} />
                    </div>
                </div>
                


                <div className='ad-achieve-content'>
                    <h3 className='ad-achieve-certi-head'><i class="fa-solid fa-graduation-cap"></i></h3>
                    <h2> YOUR BADGES</h2>
                    <div className='ad-badge-container'>
                        <Badge
                            src={badge1}
                            badge_name='First Course Completed'
                        />
                        <Badge
                            src={badge2}
                            badge_name='Quiz Pro'
                        />
                        <Badge
                            src={badge4}
                            badge_name='Feedback Champion'
                        />
                        <Badge
                            src={badge3}
                            badge_name='Rapid Learner'
                        />
                        <Badge
                            src={badge6}
                            badge_name='Feedback Champion'
                        />
                        <Badge
                            src={badge5}
                            badge_name='High Achiever'
                        />
                        <Badge
                            src={badge7}
                            badge_name='Knowledge Sharer'
                        />
                        <Badge
                            src={badge8}
                            badge_name='Consistency is Key'
                        />


                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserAchievement
