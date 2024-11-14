import React from 'react';
import { Bar, Line, Pie, Radar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement, RadialLinearScale } from 'chart.js';
import './AdminDashboard.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale
);

// Dummy data for the charts
const lineData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Monthly Sales',
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: 'rgba(75,192,192,1)',
    },
  ],
};

const barData = {
  labels: ['Product A', 'Product B', 'Product C', 'Product D'],
  datasets: [
    {
      label: 'Sales per Product',
      data: [55, 75, 40, 95],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
    },
  ],
};

const pieData = {
  labels: ['Category 1', 'Category 2', 'Category 3'],
  datasets: [
    {
      label: 'User Distribution by Category',
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
};

const radarData = {
  labels: ['Metric 1', 'Metric 2', 'Metric 3', 'Metric 4', 'Metric 5'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [20, 45, 30, 75, 40],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      pointBackgroundColor: 'rgba(54, 162, 235, 1)',
    },
    {
      label: 'Dataset 2',
      data: [35, 25, 55, 45, 60],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      pointBackgroundColor: 'rgba(255, 99, 132, 1)',
    },
  ],
};

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Admin Dashboard</h2>
      <div className="chart-container">
        <div className="chart">
          <h2>Monthly Sales (Line Chart)</h2>
          <Line data={lineData} />
        </div>
        <div className="chart">
          <h2>Sales per Product (Bar Chart)</h2>
          <Bar data={barData} />
        </div>
        <div className="chart">
          <h2>User Distribution by Category (Pie Chart)</h2>
          <Pie data={pieData} />
        </div>
        <div className="chart">
          <h2>Market Segments (Rada Chart)</h2>
          <Radar data={radarData} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;