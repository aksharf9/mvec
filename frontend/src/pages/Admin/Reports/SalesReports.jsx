import React, { useState } from 'react';
import AdminSidebar from '../../../components/AdminSidebar';
import '../../../styles/Reports.css';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const salesData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Sales (AED)',
      data: [4200, 5800, 6300, 7000, 6700, 7500],
      backgroundColor: '#f6c000',
      borderRadius: 8,
    },
  ],
};

const SalesReports = () => {
  const [selectedYear, setSelectedYear] = useState('2025');

  return (
    <div className="admin-page d-flex">
      <AdminSidebar />
      <div className="admin-content p-4">
        <h2>Sales Reports</h2>

        <div className="d-flex align-items-center gap-3 mt-3">
          <label className="form-label m-0">Select Year:</label>
          <select
            className="form-select w-auto"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
          </select>
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
            <div className="stat-box bg-light rounded p-3 mb-3">
              <h5>Total Orders</h5>
              <h3>1,240</h3>
            </div>
          </div>
          <div className="col-md-6">
            <div className="stat-box bg-light rounded p-3 mb-3">
              <h5>Total Revenue (AED)</h5>
              <h3>39,000</h3>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h5>Monthly Sales Overview</h5>
          <Bar data={salesData} />
        </div>
      </div>
    </div>
  );
};

export default SalesReports;
