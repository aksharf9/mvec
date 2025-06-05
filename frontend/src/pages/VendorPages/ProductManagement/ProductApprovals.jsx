import React from 'react';

const ProductApprovals = () => {
  // Replace this with data fetched from backend later
  const approvals = [
    { id: 1, name: 'Olive Oil 500ml', status: 'Approved', remarks: '' },
    { id: 2, name: 'Dry Figs 1kg', status: 'Pending', remarks: '' },
    { id: 3, name: 'Organic Honey', status: 'Rejected', remarks: 'Incorrect labeling' }
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Product Approval Status</h2>

      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Product</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Remarks</th>
          </tr>
        </thead>
        <tbody>
          {approvals.map(product => (
            <tr key={product.id}>
              <td className="border px-4 py-2">{product.name}</td>
              <td className="border px-4 py-2">
                <span
                  className={`px-2 py-1 rounded-full text-white text-sm ${
                    product.status === 'Approved'
                      ? 'bg-green-500'
                      : product.status === 'Rejected'
                      ? 'bg-red-500'
                      : 'bg-yellow-500'
                  }`}
                >
                  {product.status}
                </span>
              </td>
              <td className="border px-4 py-2">{product.remarks || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductApprovals;
