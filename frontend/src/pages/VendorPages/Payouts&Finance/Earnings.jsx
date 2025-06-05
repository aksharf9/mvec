import React from 'react';

const VendorEarnings = () => {
  // Replace with real data later
  const totalEarnings = 9750.25;
  const commissionRate = 10; // %
  const monthly = [
    { month: 'May 2025', earned: 2450.50 },
    { month: 'April 2025', earned: 3700.00 },
    { month: 'March 2025', earned: 3599.75 }
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">My Earnings</h2>

      <div className="bg-white border rounded p-4 shadow mb-6">
        <p><strong>Total Earnings:</strong> AED {totalEarnings.toFixed(2)}</p>
        <p><strong>Commission Rate:</strong> {commissionRate}%</p>
        <p><strong>Net After Commission:</strong> AED {(totalEarnings * (1 - commissionRate / 100)).toFixed(2)}</p>
      </div>

      <h3 className="text-lg font-semibold mb-2">Monthly Breakdown</h3>
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Month</th>
            <th className="border px-4 py-2">Gross Earnings (AED)</th>
            <th className="border px-4 py-2">Net After Commission</th>
          </tr>
        </thead>
        <tbody>
          {monthly.map((m, idx) => (
            <tr key={idx}>
              <td className="border px-4 py-2">{m.month}</td>
              <td className="border px-4 py-2">{m.earned.toFixed(2)}</td>
              <td className="border px-4 py-2">
                {(m.earned * (1 - commissionRate / 100)).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VendorEarnings;
