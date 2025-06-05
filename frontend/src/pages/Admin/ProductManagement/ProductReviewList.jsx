import React from 'react';
import AdminSidebar from '../../../components/AdminSidebar';
import '../../../styles/ProductManagement.css';

const reviews = [
  {
    id: 1,
    product: 'Organic Olive Oil',
    user: 'Fatima Ali',
    rating: 5,
    comment: 'Excellent quality and taste!',
    date: '2024-05-01',
  },
  {
    id: 2,
    product: 'Bluetooth Headphones',
    user: 'Omar Khan',
    rating: 3,
    comment: 'Good sound, but battery drains fast.',
    date: '2024-04-21',
  },
  {
    id: 3,
    product: 'Casual T-Shirt',
    user: 'Leena Joseph',
    rating: 2,
    comment: 'Color faded after one wash.',
    date: '2024-04-12',
  },
];

const ProductReviewList = () => {
  return (
    <div className="admin-page d-flex">
      <AdminSidebar />
      <div className="admin-content p-4">
        <h2>Product Reviews</h2>

        <table className="table table-bordered review-table mt-4">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>User</th>
              <th>Rating</th>
              <th>Comment</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((rev, index) => (
              <tr key={rev.id}>
                <td>{index + 1}</td>
                <td>{rev.product}</td>
                <td>{rev.user}</td>
                <td>{'⭐'.repeat(rev.rating)}</td>
                <td>{rev.comment}</td>
                <td>{rev.date}</td>
                <td>
                  <button className="btn btn-sm btn-outline-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductReviewList;
