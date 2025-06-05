import React from 'react';

const VendorPayouts = () => {
  // Replace with API data later
  const payouts = [
    { id: 1, amount: 1225.50, status: 'Paid', date: '2025-05-27' },
    { id: 2, amount: 875.00, status: 'Pending', date: '2025-05-25' },
    { id: 3, amount: 1340.75, status: 'Paid', date: '2025-05-20' }
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">My Payouts</h2>

      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Payout ID</th>
            <th className="border px-4 py-2">Amount (AED)</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {payouts.map((p) => (
            <tr key={p.id}>
              <td className="border px-4 py-2">#{p.id}</td>
              <td className="border px-4 py-2">{p.amount.toFixed(2)}</td>
              <td className="border px-4 py-2">
                <span
                  className={`px-2 py-1 rounded-full text-white text-sm ${
                    p.status === 'Paid' ? 'bg-green-500' : 'bg-yellow-500'
                  }`}
                >
                  {p.status}
                </span>
              </td>
              <td className="border px-4 py-2">{p.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VendorPayouts;
