import React from 'react';

const ProductReviews = () => {
  // Replace with backend API later
  const reviews = [
    {
      id: 1,
      product: 'Olive Oil 500ml',
      customer: 'Ahmed',
      rating: 5,
      comment: 'Excellent quality!',
      date: '2025-05-28'
    },
    {
      id: 2,
      product: 'Dry Figs',
      customer: 'Sara',
      rating: 4,
      comment: 'Very fresh and tasty',
      date: '2025-05-26'
    },
    {
      id: 3,
      product: 'Organic Honey',
      customer: 'Hassan',
      rating: 2,
      comment: 'Packaging was leaking',
      date: '2025-05-25'
    }
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Product Reviews</h2>

      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Product</th>
            <th className="border px-4 py-2">Customer</th>
            <th className="border px-4 py-2">Rating</th>
            <th className="border px-4 py-2">Comment</th>
            <th className="border px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((r) => (
            <tr key={r.id}>
              <td className="border px-4 py-2">{r.product}</td>
              <td className="border px-4 py-2">{r.customer}</td>
              <td className="border px-4 py-2">{'⭐'.repeat(r.rating)}</td>
              <td className="border px-4 py-2">{r.comment}</td>
              <td className="border px-4 py-2">{r.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductReviews;
