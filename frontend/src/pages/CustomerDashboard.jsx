import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomerDashboard = () => {
  // Optional: Replace with actual user session data
  const userName = "Customer";

  return (
    <div className="container my-4">
      <h3 className="mb-4">Welcome, {userName} 👋</h3>

      <Row className="g-4">
        <Col md={4}>
          <Card className="h-100 text-center">
            <Card.Body>
              <Card.Title>🛒 My Orders</Card.Title>
              <Card.Text>Track and manage your order history</Card.Text>
              <Link to="/MyOrders">
                <Button variant="primary">View Orders</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100 text-center">
            <Card.Body>
              <Card.Title>👤 Edit Profile</Card.Title>
              <Card.Text>Manage your personal details</Card.Text>
              <Link to="/EditProfile">
                <Button variant="secondary">Edit Profile</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100 text-center">
            <Card.Body>
              <Card.Title>⭐ My Reviews</Card.Title>
              <Card.Text>Submit and manage product reviews</Card.Text>
              <Link to="/MyReviews">
                <Button variant="warning">My Reviews</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CustomerDashboard;
