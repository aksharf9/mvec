import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const OrderSuccess = () => {
  return (
    <div className="container text-center my-5">
      <h2 className="text-success mb-4">🎉 Thank You!</h2>
      <p>Your order has been placed successfully. We’ll notify you once it’s on the way.</p>

      <div className="mt-4">
        <Link to="/CustomerDashboard">
          <Button variant="primary" className="me-3">Go to Dashboard</Button>
        </Link>
        <Link to="/">
          <Button variant="outline-secondary">Continue Shopping</Button>
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
