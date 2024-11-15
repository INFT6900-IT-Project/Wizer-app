import React from 'react';
import './UserProgress.css';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { Link } from 'react-router-dom';





function UserProgress() {

  const hourSpentOverAWeek = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Hours (hrs)',
        data: [8, 2, 5, 1, 6],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const totalModules = 8;
  const completedModules = 4;
  const modulesCompletionPercentage = `${Math.round((4 / 8) * 100)}`;


  const totalTrainings = 20;
  const completedTrainings = 20;
  const trainingCompletionPercentage = `${Math.round((20 / 20) * 100)}`;

  const totalfeedback = 7;
  const completedfeedback = 10;
  const feedbackCompletionPercentage = `${Math.round((7 / 10) * 100)}`;


  const goal = 100; // Goal (100%)
  const currentProgress = 69; // Progress (75%)
  const doughnutData = {
    labels: ["Current skill", "Gap"],
    datasets: [
      {
        data: [currentProgress, goal - currentProgress],
        backgroundColor: ["rgba(54, 163, 235, 0.664)", "lightgray"],
        hoverBackgroundColor: ["rgba(54, 163, 235, 0.486)", "#D1D3D8"],
      },
    ],
  };

  const goal2 = 100; // Goal (100%)
  const currentProgress2 = 32; // Progress (75%)
  const doughnutData2 = {
    labels: ["Completed modules", "Incompleted"],
    datasets: [
      {
        data: [currentProgress2, goal2 - currentProgress2],
        backgroundColor: ["rgba(54, 163, 235, 0.664)", "lightgray"],
        hoverBackgroundColor: ["rgba(54, 163, 235, 0.486)", "#D1D3D8"],
      },
    ],
  };



  return (
    <div>
      <h1 className='ad-user-pages-title'>Progress</h1>
      <div className='ad-user-progress-wrap'>
        <h3 className='ad-user-progress-heading'><i class="fa-solid fa-calendar-week"></i> Overall Engagement</h3>
        <div className='ad-progress-performance'>

          <Bar
            data={hourSpentOverAWeek}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "Hours Spent Over A Week"
                },
                legend: {
                  display: true
                }
              }
            }}
          />
        </div>
        <h3 className='ad-user-progress-heading'><i class="fa-solid fa-thumbtack"></i> Task Completion & Milestones</h3>
        <div className='ad-progress-performance'>

          <p>
            You have completed <strong>{completedModules}</strong> out of active <strong>{totalModules}</strong>  modules!
          </p>
          <div className="ad-progress-bar-container">
            <div
              className="ad-progress-bar-fill"
              style={{
                width: `${modulesCompletionPercentage}%`,
                backgroundColor: modulesCompletionPercentage < 50 ? "hsl(0, 76%, 69%)" : modulesCompletionPercentage < 75 ? "hsla(54, 76%, 69%, 0.596)" : "hsla(103, 76%, 69%, 0.596)",
              }}
            ></div>
          </div>
          <div className='ad-progress-bar-footer'>
            <p>{modulesCompletionPercentage}% completed</p>
            <p><Link to='/user-screen/my-learning' style={{ textDecoration: 'none' }} className='ad-bar-footer-link'> See remaining modules</Link></p>
          </div>
        </div>
        <div className='ad-progress-performance'>

          <p>
            Congratulations! 🎉 You've completed <strong>{completedTrainings}</strong> training sections! You're now a Trainings Killer</p>
          <div className="ad-progress-bar-container">
            <div
              className="ad-progress-bar-fill"
              style={{
                width: `${trainingCompletionPercentage}%`,
                backgroundColor: trainingCompletionPercentage < 50 ? "hsl(0, 76%, 69%)" : trainingCompletionPercentage < 75 ? "hsla(54, 76%, 69%, 0.596)" : "hsla(103, 76%, 69%, 0.596)",
              }}
            ></div>
          </div>
          <div className='ad-progress-bar-footer'>
            <p>{trainingCompletionPercentage}% completed</p>
            <p><Link to='/user-screen/my-learning' style={{ textDecoration: 'none' }} className='ad-bar-footer-link earn'> Earn Badge</Link></p>
          </div>
        </div>
        <div className='ad-progress-performance'>

          <p>
            <strong>{completedModules}</strong> more feedback to get the badge </p>
          <div className="ad-progress-bar-container">
            <div
              className="ad-progress-bar-fill"
              style={{
                width: `${feedbackCompletionPercentage}%`,
                backgroundColor: feedbackCompletionPercentage < 50 ? "hsl(0, 76%, 69%)" : feedbackCompletionPercentage < 75 ? "hsla(54, 76%, 69%, 0.596)" : "hsla(103, 76%, 69%, 0.596)",
              }}
            ></div>
          </div>
          <div className='ad-progress-bar-footer'>
            <p>{feedbackCompletionPercentage}% completed</p>
            <p><Link to='/user-screen/my-learning' style={{ textDecoration: 'none' }} className='ad-bar-footer-link'> Give more feedback</Link></p>
          </div>
        </div>
        <h3 className='ad-user-progress-heading'><i class="fa-solid fa-mountain"></i> Upcoming Goals</h3>
        <div className='ad-progress-performance doughnut'>
          <div className='ad-progress-doughnut'>

            <Doughnut
              data={doughnutData}
              options={{
                responsive: true,
                plugins: {
                  title: {
                    display: true,
                    text: "Python Coding - Advanced Level Acquired",
                  },
                  legend: {
                    position: "top",
                  },
                },
              }}
            />
          </div>
          <div className='ad-progress-doughnut'>

            <Doughnut
              data={doughnutData2}
              options={{
                responsive: true,
                plugins: {
                  title: {
                    display: true,
                    text: "Achieve Strategic Business Planning Certificate",
                  },
                  legend: {
                    position: "top",
                  },
                },
              }}
            />
          </div>



        </div>
      </div>
    </div>
  )
}

export default UserProgress
