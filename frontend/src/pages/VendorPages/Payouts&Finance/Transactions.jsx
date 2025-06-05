import React from 'react';

const VendorTransactions = () => {
  // Replace with backend API data later
  const transactions = [
    {
      id: 'TXN-20250527-001',
      method: 'Bank Transfer',
      amount: 1225.50,
      status: 'Success',
      date: '2025-05-27'
    },
    {
      id: 'TXN-20250525-002',
      method: 'Bank Transfer',
      amount: 875.00,
      status: 'Pending',
      date: '2025-05-25'
    },
    {
      id: 'TXN-20250520-003',
      method: 'Stripe',
      amount: 1340.75,
      status: 'Success',
      date: '2025-05-20'
    }
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Transaction History</h2>

      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Transaction ID</th>
            <th className="border px-4 py-2">Method</th>
            <th className="border px-4 py-2">Amount (AED)</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((txn) => (
            <tr key={txn.id}>
              <td className="border px-4 py-2">{txn.id}</td>
              <td className="border px-4 py-2">{txn.method}</td>
              <td className="border px-4 py-2">{txn.amount.toFixed(2)}</td>
              <td className="border px-4 py-2">
                <span
                  className={`px-2 py-1 rounded-full text-white text-sm ${
                    txn.status === 'Success' ? 'bg-green-500' : 'bg-yellow-500'
                  }`}
                >
                  {txn.status}
                </span>
              </td>
              <td className="border px-4 py-2">{txn.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VendorTransactions;
