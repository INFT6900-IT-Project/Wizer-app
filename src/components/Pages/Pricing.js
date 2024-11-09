import React from "react";
import './Pricing.css';
import Footer from '../Footer';
import person from '../../ImageVideo/person.jpg';

function Pricing() {
  return (
    <div>
        <header className="pric-header">
            Learn more, spend less: Explore our plans
        </header>

        <div className="pric-plans-wrap">
            <div className="plan-card">
            <i class="best-value">Best Deal</i>
                <h2>Team</h2>
                <p>For 5-125 users</p>
                <h1>$120 <span className="pric-plan-header">per user annually</span></h1>
                <p>14-day money back guarantee</p>
                <a href='#'>Get Started</a>
                <ul>
                    <li><i class="fa-solid fa-check" style={{color: '#d67a3d'}}></i> Access catalog of 6,755+ from top universities and companies</li>
                    <li><i class="fa-solid fa-check" style={{color: '#d67a3d'}}></i> 130+ Professional Certificates and recognized credentials</li>
                    <li><i class="fa-solid fa-check" style={{color: '#d67a3d'}}></i> Interactive AI Coach for personalized learning guidance</li>
                    <li><i class="fa-solid fa-check" style={{color: '#d67a3d'}}></i> Detailed dashboards and reports to track skill progress</li>

                </ul>
            </div>
            <div className="plan-card">
                <h2>Enterprise</h2>
                <p>For 125+ users</p>
                <h1>Tailored Plan</h1>
                <p>14-day money back guarantee</p>
                <a href='/contact-us'>Contact Sales</a>
                <ul>
                    <li><i class="fa-solid fa-check" style={{color: '#d67a3d'}}></i> Access catalog of 6,755+ from top universities and companies</li>
                    <li><i class="fa-solid fa-check" style={{color: '#d67a3d'}}></i> 130+ Professional Certificates and recognized credentials</li>
                    <li><i class="fa-solid fa-check" style={{color: '#d67a3d'}}></i> Interactive AI Coach for personalized learning guidance</li>
                    <li><i class="fa-solid fa-check" style={{color: '#d67a3d'}}></i> Custom, AI-assisted course building that saves time</li>
                    <li><i class="fa-solid fa-check" style={{color: '#d67a3d'}}></i> Single sign-on, API and partner integration</li>
                    <li><i class="fa-solid fa-check" style={{color: '#d67a3d'}}></i> Ongoing support from a dedicated customer success manager to help get the most from your Coursera investment</li>
                </ul>
            </div>
        </div>

        <div className='pric-compare-wrap'>
            <h1 className="wrap-title">Find the perfect fit</h1>
           
           <div className="ad-table-wrap">
            <table cellPadding={0} className="plan-table">
                <thead className="plan-table-header">
                <tr>
                    <th className="ad-table-header">Compare benefits</th>
                    <th>
                            <h1>Team</h1>
                            <p>5-125 users</p>
                            <a href='#'>Get Started</a>                   
                    </th>
                    <th>
                        <div>
                            <h1>Enterpirse</h1>
                            <p>125+ users</p>
                            <a href='/contact-us'>Contact Sales</a>
                        </div>
                    </th>
                </tr>
                </thead>

                <tbody className="plan-table-body">
                <tr className='ad-feature-head'>
                    <td>Content</td> 
                </tr>
                <tr className="ad-row-color">
                    <td className="ad-shift-back">Catalog of 6,755+ courses from top universities and companies</td>
                    <td ><i class="fa-solid fa-check" style={{color: '#d67a3d'}}></i></td>
                    <td><i class="fa-solid fa-check" style={{color: '#d67a3d'}}></i></td>
                </tr>
                <tr>
                    <td className="ad-shift-back">Verified Certificates upon course completion</td>
                    <td><i class="fa-solid fa-check" style={{color: '#d67a3d'}}></i></td>
                    <td><i class="fa-solid fa-check" style={{color: '#d67a3d'}}></i></td>
                </tr>
                <tr className="ad-row-color">
                    <td className="ad-shift-back">Catalog of 3,500+ hands-on Guided Projects</td>
                    <td><i class="fa-solid fa-check" style={{color: '#d67a3d'}}></i></td>
                    <td><i class="fa-solid fa-check" style={{color: '#d67a3d'}}></i></td>
                </tr>
                <tr>
                    <td className="ad-shift-back">4,000+ courses with 55+ Professional Certificates fully translated in 20+ non-English languages</td>
                    <td><i class="fa-solid fa-check" style={{color: '#d67a3d'}}></i></td>
                    <td><i class="fa-solid fa-check" style={{color: '#d67a3d'}}></i></td>
                </tr>
                <tr className="ad-row-color">
                    <td className="ad-shift-back">Access to 200,000 clips: bite-sized videos and lessons</td>
                    <td><i class="fa-solid fa-check" style={{color: '#d67a3d'}}></i></td>
                    <td><i class="fa-solid fa-check" style={{color: '#d67a3d'}}></i></td>
                </tr>
                <tr className='ad-feature-head'>
                    <td>Learning Hub</td> 
                </tr>
                <tr>
                    <td className="ad-shift-back">Mobile apps (iOS & Android)</td>
                    <td><i class="fa-solid fa-check" style={{color: '#d67a3d'}}></i></td>
                    <td><i class="fa-solid fa-check" style={{color: '#d67a3d'}}></i></td>
                </tr>
                <tr className="ad-row-color">
                    <td className="ad-shift-back">Priority technical support for learners</td>
                    <td><i class="fa-solid fa-check" style={{color: '#d67a3d'}}></i></td>
                    <td><i class="fa-solid fa-check" style={{color: '#d67a3d'}}></i></td>
                </tr>
                <tr>
                    <td className="ad-shift-back">Company-branded homepage and learner communications</td>
                    <td><i class="fa-solid fa-check" style={{color: '#d67a3d'}}></i></td>
                    <td><i class="fa-solid fa-check" style={{color: '#d67a3d'}}></i></td>
                </tr>
                <tr className='ad-feature-head'>
                    <td>Skill-related Aspects</td> 
                </tr>
                <tr className="ad-row-color">
                    <td className="ad-shift-back">Industry skill insights and benchmarking</td>
                    <td><i class="fa-solid fa-check" style={{color: '#d67a3d'}}></i></td>
                    <td><i class="fa-solid fa-check" style={{color: '#d67a3d'}}></i></td>
                </tr>
                <tr>
                    <td className="ad-shift-back">Analytics for skills learned, proficiency, and time to mastery</td>
                    <td><i class="fa-solid fa-check" style={{color: '#d67a3d'}}></i></td>
                    <td><i class="fa-solid fa-check" style={{color: '#d67a3d'}}></i></td>
                </tr>
                <tr className="ad-row-color">
                    <td className="ad-shift-back">150 LevelSets: assess your organization’s skills baseline</td>
                    <td><i class="fa-solid fa-xmark" style={{color: '#d67a3d'}}></i></td>
                    <td><i class="fa-solid fa-check" style={{color: '#d67a3d'}}></i></td>
                </tr>
                <tr>
                    <td className="ad-shift-back">300+ SkillSets: job-based content recommendations</td>
                    <td><i class="fa-solid fa-xmark" style={{color: '#d67a3d'}}></i></td>
                    <td><i class="fa-solid fa-check" style={{color: '#d67a3d'}}></i></td>
                </tr>
                <tr className="ad-row-color">
                    <td className="ad-shift-back">Gen AI, Data, Tech, Leadership, Marketing, Finance, and Career Academies</td>
                    <td><i class="fa-solid fa-xmark" style={{color: '#d67a3d'}}></i></td>
                    <td><i class="fa-solid fa-check" style={{color: '#d67a3d'}}></i></td>
                </tr>
                <tr className='ad-feature-head'>
                    <td>Integrations (at additional cost)</td> 
                </tr>
                <tr>
                    <td className="ad-shift-back">Single sign-on (SSO)</td>
                    <td><i class="fa-solid fa-xmark" style={{color: '#d67a3d'}}></i></td>
                    <td><i class="fa-solid fa-check" style={{color: '#d67a3d'}}></i></td>
                </tr>
                <tr className="ad-row-color">
                    <td className="ad-shift-back">API integrations</td>
                    <td><i class="fa-solid fa-xmark" style={{color: '#d67a3d'}}></i></td>
                    <td><i class="fa-solid fa-check" style={{color: '#d67a3d'}}></i></td>
                </tr>
                <tr>
                    <td className="ad-shift-back">LMS integrations (Degreed, Cornerstone, CrossKnowledge, SuccessFactors)</td>
                    <td><i class="fa-solid fa-xmark" style={{color: '#d67a3d'}}></i></td>
                    <td><i class="fa-solid fa-check" style={{color: '#d67a3d'}}></i></td>
                </tr>
                <tr className='ad-feature-head'>
                    <td>Billing</td> 
                </tr>
                <tr className="ad-row-color">
                    <td className="ad-shift-back">Billing by Paypal or credit card</td>
                    <td><i class="fa-solid fa-check" style={{color: '#d67a3d'}}></i></td>
                    <td><i class="fa-solid fa-xmark" style={{color: '#d67a3d'}}></i></td>
                </tr>
                <tr>
                    <td className="ad-shift-back">Billing by invoice (ACH for US customers only invoicing {'>'}25 licenses)</td>
                    <td><i class="fa-solid fa-check" style={{color: '#d67a3d'}}></i></td>
                    <td><i class="fa-solid fa-check" style={{color: '#d67a3d'}}></i></td>
                </tr>
                </tbody>
            </table>
            </div>
            
        </div>
        <div className="ad-reflect">
                <div className="ad-reflect-left">
                    <h1>Join <span>5,000+</span> companies and <span>80%</span> of the Fortune 1000 who use DataCamp for their employee training</h1>
                </div>

                <div className="ad-reflect-right">
                    <div className="ad-rr-1">
                        <h1>4.5 <i class="fa-solid fa-star fa-2xs" style={{color: '#ffffff'}}/><i class="fa-solid fa-star fa-2xs" style={{color: '#ffffff'}}/><i class="fa-solid fa-star fa-2xs" style={{color: '#ffffff'}}/><i class="fa-solid fa-star fa-2xs" style={{color: '#ffffff'}}/><i class="fa-solid fa-star-half-stroke fa-2xs" style={{color: '#ffffff'}}/></h1>
                        <p>Average rating from our community of 10 million learner</p>
                    </div>
                    <div className="ad-rr-2">
                        <h1>200+</h1>
                        <p>Nations and organizations leverage DataCamp to foster skills and drive digital transformation.</p>
                    </div>
                    

                </div>
        </div>


        <div className="ad-feedback">
            <div className="ad-circle-image">
            <img src={person} alt=''/>
            </div>
            
            <h2>Already</h2>
        </div> 
        <Footer/>
    </div>
  )
}

export default Pricing
