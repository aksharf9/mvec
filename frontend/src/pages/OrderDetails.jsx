import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Card, Table, Spinner, Alert, Badge } from 'react-bootstrap';

const OrderDetails = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await axios.get(`/api/orders/${id}`);
        setOrder(res.data);
      } catch (err) {
        console.error('Failed to fetch order:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id]);

  if (loading) {
    return <div className="text-center my-5"><Spinner animation="border" /></div>;
  }

  if (!order) {
    return <Alert variant="danger">Order not found</Alert>;
  }

  return (
    <div className="container my-4">
      <h3 className="mb-4">Order #{order.id}</h3>

      <Card className="mb-4">
        <Card.Body>
          <p><strong>Date:</strong> {new Date(order.created_at).toLocaleString()}</p>
          <p><strong>Status:</strong> <Badge bg="info">{order.status}</Badge></p>
          <p><strong>Payment:</strong> {order.payment_method}</p>
          <p><strong>Shipping Address:</strong><br />{order.address}</p>
          <p><strong>Total:</strong> AED {order.total.toFixed(2)}</p>
        </Card.Body>
      </Card>

      <h5>Items in this Order</h5>
      <Table striped bordered responsive>
        <thead>
          <tr>
            <th>Product</th>
            <th>Qty</th>
            <th>Price (AED)</th>
            <th>Total (AED)</th>
          </tr>
        </thead>
        <tbody>
          {order.items.map((item, idx) => (
            <tr key={idx}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price.toFixed(2)}</td>
              <td>{(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="mt-4">
        <Link to="/MyOrders" className="btn btn-outline-primary">← Back to My Orders</Link>
      </div>
    </div>
  );
};

export default OrderDetails;
