import React, { useEffect, useState } from 'react';
import { Card, Button, Row, Col, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(storedWishlist);
  }, []);

  const removeFromWishlist = (id) => {
    const updated = wishlist.filter(item => item.id !== id);
    setWishlist(updated);
    localStorage.setItem('wishlist', JSON.stringify(updated));
  };

  return (
    <div className="container my-4">
      <h3 className="mb-4">My Wishlist</h3>

      {wishlist.length === 0 ? (
        <Alert variant="info">Your wishlist is empty.</Alert>
      ) : (
        <Row>
          {wishlist.map((item) => (
            <Col key={item.id} md={3} className="mb-4">
              <Card>
                <Card.Img variant="top" src={item.image} height="180px" />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>AED {item.price}</Card.Text>
                  <div className="d-flex justify-content-between">
                    <Link to={`/ProductDetails/${item.id}`} className="btn btn-sm btn-primary">
                      View
                    </Link>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      Remove
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default Wishlist;
