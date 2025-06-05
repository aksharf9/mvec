import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Row, Col, Card, Button, Spinner, Alert, ListGroup } from 'react-bootstrap';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartMessage, setCartMessage] = useState('');

  useEffect(() => {
    fetchProductDetails();
    fetchReviews();
  }, [id]);

  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(`/api/products/${id}`);
      setProduct(response.data);
    } catch (err) {
      console.error('Failed to fetch product:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchReviews = async () => {
    try {
      const response = await axios.get(`/api/reviews/${id}`);
      setReviews(response.data);
    } catch (err) {
      console.error('Failed to fetch reviews:', err);
    }
  };

  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const exists = cart.find(item => item.id === product.id);
    if (exists) {
      exists.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    setCartMessage('Added to cart!');
    setTimeout(() => setCartMessage(''), 3000);
  };

  if (loading) {
    return <div className="text-center mt-5"><Spinner animation="border" /></div>;
  }

  if (!product) {
    return <Alert variant="danger">Product not found</Alert>;
  }

  return (
    <div className="container my-4">
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={product.image} />
          </Card>
        </Col>

        <Col md={6}>
          <h3>{product.name}</h3>
          <p className="text-muted">Category: {product.category}</p>
          <h4>AED {product.price}</h4>
          <p>{product.description}</p>

          <Button variant="success" onClick={handleAddToCart}>Add to Cart</Button>

          {cartMessage && <Alert variant="success" className="mt-3">{cartMessage}</Alert>}
        </Col>
      </Row>

      {/* Reviews */}
      <div className="mt-5">
        <h5>Customer Reviews</h5>
        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          <ListGroup>
            {reviews.map((review) => (
              <ListGroup.Item key={review.id}>
                <strong>{review.user_name}</strong> ({review.rating}/5)
                <p>{review.comment}</p>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
