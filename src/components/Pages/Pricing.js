import React from "react";
import './Pricing.css';
import Footer from '../Footer';

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
                <a href='#'>Contact Sales</a>
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
            <h1 className="wrap-title">Find the perfect fit!</h1>
           

            <table cellPadding={0} className="plan-table">
                <thead className="plan-table-header">
                <tr>
                    <th>World-Class Content</th>
                    <th>
                        <div>
                            <h1>Team</h1>
                            <p>5-125 users</p>
                            <div>
                                <a href='#'>Get Started</a>
                            </div>
                        </div>
                    </th>
                    <th>
                        <div>
                            <h1>Enterpirse</h1>
                            <p>125+ users</p>
                            <div>
                                <a href='#'>Contact Sales</a>
                            </div>
                        </div>
                    </th>
                </tr>
                </thead>

                <tbody className="plan-table-body">
                <tr>
                    <td>Catalog of 6,755+ courses from top universities and companies</td>
                    <td><i class="fa-solid fa-check" style={{color: '#d67a3d'}}></i></td>
                    <td><i class="fa-solid fa-check" style={{color: '#d67a3d'}}></i></td>
                </tr>
                <tr>
                    <td>Verified Certificates upon course completion</td>
                    <td><i class="fa-solid fa-check" style={{color: '#d67a3d'}}></i></td>
                    <td><i class="fa-solid fa-check" style={{color: '#d67a3d'}}></i></td>
                </tr>
                <tr>
                    <td>Catalog of 3,500+ hands-on Guided Projects</td>
                    <td><i class="fa-solid fa-check" style={{color: '#d67a3d'}}></i></td>
                    <td><i class="fa-solid fa-check" style={{color: '#d67a3d'}}></i></td>
                </tr>
                </tbody>
                
            </table>
        </div>

        <Footer/>
    </div>
  )
}

export default Pricing
