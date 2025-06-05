import React from 'react';
import AdminSidebar from '../../../components/AdminSidebar';
import '../../../styles/FinancePayouts.css';

const transactions = [
  {
    id: 1,
    date: '2024-05-02',
    ref: 'TXN-1023',
    type: 'Payout',
    amount: -4500,
    party: 'Treelogy',
  },
  {
    id: 2,
    date: '2024-05-01',
    ref: 'TXN-1022',
    type: 'Monthly Fee',
    amount: 500,
    party: 'PalmFoods',
  },
  {
    id: 3,
    date: '2024-04-30',
    ref: 'TXN-1021',
    type: 'Commission',
    amount: 1800,
    party: 'Style Corner',
  },
];

const TransactionLogs = () => {
  return (
    <div className="admin-page d-flex">
      <AdminSidebar />
      <div className="admin-content p-4">
        <h2>Transaction Logs</h2>

        <table className="table table-bordered logs-table mt-4">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Reference</th>
              <th>Type</th>
              <th>Party</th>
              <th>Amount (AED)</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn, index) => (
              <tr key={txn.id}>
                <td>{index + 1}</td>
                <td>{txn.date}</td>
                <td>{txn.ref}</td>
                <td>{txn.type}</td>
                <td>{txn.party}</td>
                <td className={txn.amount < 0 ? 'text-danger' : 'text-success'}>
                  {txn.amount < 0 ? '-' : '+'}AED {Math.abs(txn.amount).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionLogs;
