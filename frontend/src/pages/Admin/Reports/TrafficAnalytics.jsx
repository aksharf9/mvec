import React, { useState } from 'react';
import AdminSidebar from '../../../components/AdminSidebar';
import '../../../styles/Reports.css';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const TrafficAnalytics = () => {
  const [timeframe, setTimeframe] = useState('weekly');

  const data = {
    labels: timeframe === 'weekly'
      ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      : ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Visits',
        data: timeframe === 'weekly' ? [400, 500, 600, 750, 800, 650, 580] : [2800, 3200, 3100, 3400],
        fill: false,
        borderColor: '#f6c000',
        tension: 0.4,
        pointBackgroundColor: '#2c2c2c',
      },
    ],
  };

  return (
    <div className="admin-page d-flex">
      <AdminSidebar />
      <div className="admin-content p-4">
        <h2>Traffic Analytics</h2>

        <div className="d-flex align-items-center gap-3 mt-3">
          <label className="form-label m-0">View:</label>
          <select
            className="form-select w-auto"
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
          >
            <option value="weekly">This Week</option>
            <option value="monthly">This Month</option>
          </select>
        </div>

        <div className="row mt-4">
          <div className="col-md-4">
            <div className="stat-box bg-light rounded p-3 mb-3">
              <h5>Visitors</h5>
              <h3>8,930</h3>
            </div>
          </div>
          <div className="col-md-4">
            <div className="stat-box bg-light rounded p-3 mb-3">
              <h5>Sessions</h5>
              <h3>10,520</h3>
            </div>
          </div>
          <div className="col-md-4">
            <div className="stat-box bg-light rounded p-3 mb-3">
              <h5>Page Views</h5>
              <h3>24,300</h3>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h5>{timeframe === 'weekly' ? 'Weekly' : 'Monthly'} Traffic Trend</h5>
          <Line data={data} />
        </div>
      </div>
    </div>
  );
};

export default TrafficAnalytics;
