import React from 'react';
import './UserHome.css';
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
import { Link } from 'react-router-dom';


function UserHome() {
    return (
        <div>
            <h1 className='ad-user-home-welcome'>Welcome back, Cua! <span>Time to dive back in</span></h1>
            <div className='ad-user-home'>
                <div>
                    <h2>Recently Viewed Courses</h2>

                    <div className='ad-user-cards-wrap'>
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

                    <div className='ad-user-category-wrap'>




                        <div className='ad-user-category'>
                            <Link href='' style={{ textDecoration: 'none' }} className='ad-user-cat'>
                                <i class="fa-solid fa-language" style={{ color: '#d67a3d' }}></i>
                                <h3>Languages learning</h3>
                                <p>31 Courses</p>
                            </Link>
                        </div>

                        <div className='ad-user-category'>
                            <Link href='' style={{ textDecoration: 'none' }} className='ad-user-cat'>
                                <i class="fa-solid fa-file-code" style={{ color: '#d67a3d' }} />
                                <h3>Development</h3>
                                <p>23 Courses</p>
                            </Link>
                        </div>

                        <div className='ad-user-category'>
                            <Link href='' style={{ textDecoration: 'none' }} className='ad-user-cat'>
                                <i class="fa-solid fa-chart-simple" style={{ color: '#d67a3d' }} />
                                <h3>Marketing</h3>
                                <p>62 Courses</p>
                            </Link>
                        </div>

                        <div className='ad-user-category'>
                            <Link href='' style={{ textDecoration: 'none' }} className='ad-user-cat'>
                                <i class="fa-solid fa-palette" style={{ color: '#d67a3d' }} />
                                <h3>Art & Humanities</h3>
                                <p>42 Courses</p>
                            </Link>
                        </div>

                        <div className='ad-user-category'>
                            <Link href='' style={{ textDecoration: 'none' }} className='ad-user-cat'>
                                <i class="fa-solid fa-heart-pulse" style={{ color: '#d67a3d' }} />
                                <h3>Health</h3>
                                <p>79 Courses</p>
                            </Link>
                        </div>

                        <div className='ad-user-category'>
                            <Link href='' style={{ textDecoration: 'none' }} className='ad-user-cat'>
                                <i class="fa-solid fa-flask" style={{ color: '#d67a3d' }} />
                                <h3>Science</h3>
                                <p>19 Courses</p>
                            </Link>
                        </div>

                        <div className='ad-user-category'>
                            <Link href='' style={{ textDecoration: 'none' }} className='ad-user-cat'>
                                <i class="fa-solid fa-object-ungroup" style={{ color: '#d67a3d' }} />
                                <h3>Design</h3>
                                <p>12 Courses</p>
                            </Link>
                        </div>

                        <div className='ad-user-category'>
                            <Link href='' style={{ textDecoration: 'none' }} className='ad-user-cat'>
                                <i class="fa-solid fa-square-root-variable" style={{ color: '#d67a3d' }} />
                                <h3>Math & Logic</h3>
                                <p>21 Courses</p>
                            </Link>
                        </div>
                        <div className='ad-user-category'>
                            <Link href='' style={{ textDecoration: 'none' }} className='ad-user-cat'>
                                <i class="fa-solid fa-business-time" style={{ color: '#d67a3d' }} />
                                <h3>Business</h3>
                                <p>16 Courses</p>
                            </Link>
                        </div>



                    </div>

                </div>

            </div>
        </div>
    )
}

export default UserHome
