import React from 'react';
import './UserHome.css';
import HomeCourseCard from './UserHomeCard';
import communication from '../../../../ImageVideo/communication.jpg';
import data from '../../../../ImageVideo/data.jpg';
import powerbi from '../../../../ImageVideo/powerbi.jpg';
import coding from '../../../../ImageVideo/coding.jpg';
import ai from '../../../../ImageVideo/ai.jpg';
import data_science from '../../../../ImageVideo/data_science.jpg';
import data_analytics from '../../../../ImageVideo/data_analytics.jpg';
import project_mana from '../../../../ImageVideo/project-mana.jpg';
import UserHomeCard from './UserHomeCard';
import UserCertificate from './UserCertificate';


function UserHome() {
    return (
        <div>
            <div className='ad-user-home'>
                <div>
                    <h2>Recently Viewed Courses</h2>
                    
                        <div className='ad-cards-wrap'>
                            <UserHomeCard
                                src={coding}
                                text='Introduction to Coding: HTML, CSS, and JavaScript Basics'
                                teacher='By Adoria Duong '
                                duration=' 8 weeks'
                                student=' 14 students'
                                price={<span style={{ textDecoration: 'line-through', color: 'gray' }}>$70.00</span>}
                                newPrice={<span style={{ color: '#b8973e' }}> $39.99</span>}
                                path=''
                            />
                            <UserHomeCard
                                src={communication}
                                text='Effective Communication: Unlock Your Potential'
                                teacher='By Adoria Duong '
                                duration=' 2 weeks'
                                student=' 16 students'
                                price={<span style={{ textDecoration: 'line-through', color: 'gray' }}>$29.99</span>}
                                newPrice={<span style={{ color: '#18a52b' }}> Free</span>}
                                path=''
                            />

                            <UserHomeCard
                                src={powerbi}
                                text='Automating Reports with Power BI: Power Query and DAX'
                                teacher='By Adoria Duong '
                                duration=' 7 weeks'
                                student=' 3 students'
                                price='$82.00'
                                path=''
                            />
                            <UserHomeCard
                                src={data}
                                text='Predictive Analytics & Machine Learning'
                                teacher='By Adoria Duong '
                                duration=' 4 weeks'
                                student=' 31 students'
                                price='$49.00'
                                path=''
                            />
                        </div>
                
                </div>

                <div>
                    <h2>Most Popular Certificates</h2>
                    
                        <div className='ad-user-certi-wrap'>
                            <UserCertificate
                                src={ai}
                                text='IBM Artificial Intelligence'
                                teacher='Powered by IBM'
                                duration=' 8 weeks'
                                student=' 14 students'
                                price={<span style={{ textDecoration: 'line-through', color: 'gray' }}>$70.00</span>}
                                newPrice={<span style={{ color: '#b8973e' }}> $39.99</span>}
                                path=''
                            />
                            <UserCertificate
                                src={data_analytics}
                                text='Microsoft Data Analytics'
                                teacher='Powered by Microsoft'
                                duration=' 2 weeks'
                                student=' 16 students'
                                price={<span style={{ textDecoration: 'line-through', color: 'gray' }}>$29.99</span>}
                                newPrice={<span style={{ color: '#18a52b' }}> Free</span>}
                                path=''
                            />

                            <UserCertificate
                                src={project_mana}
                                text='IBM Project Management'
                                teacher='Powered by IBM'
                                duration=' 7 weeks'
                                student=' 3 students'
                                price='$82.00'
                                path=''
                            />
                            <UserCertificate
                                src={data_science}
                                text='Google Data Science'
                                teacher='Powered by Google'
                                duration=' 4 weeks'
                                student=' 31 students'
                                price='$49.00'
                                path=''
                            />
                        </div>
                
                </div>

                <div>
                    <h2>Categories</h2>
                    
                        <div className='ad-user-category'>
                            

                            
                        </div>
                
                </div>

            </div>
        </div>
    )
}

export default UserHome
