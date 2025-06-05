import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Checkout = () => {
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('COD');
  const [cartItems, setCartItems] = useState([]);
  const [placingOrder, setPlacingOrder] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    if (storedCart.length === 0) {
      navigate('/Cart');
    }
    setCartItems(storedCart);
  }, [navigate]);

  const handlePlaceOrder = async () => {
    if (!address.trim()) {
      setError('Address is required.');
      return;
    }

    setError('');
    setPlacingOrder(true);

    try {
      const orderData = {
        user_id: 1, // Replace with auth-based user ID
        address,
        payment_method: paymentMethod,
        items: cartItems.map(item => ({
          product_id: item.id,
          quantity: item.quantity
        })),
      };

      await axios.post('/api/orders', orderData);

      // Clear cart
      localStorage.removeItem('cart');

      navigate('/OrderSuccess');
    } catch (err) {
      setError('Failed to place order. Please try again.');
      console.error(err);
    } finally {
      setPlacingOrder(false);
    }
  };

  return (
    <div className="container my-4" style={{ maxWidth: '600px' }}>
      <h3 className="mb-4">Checkout</h3>

      {error && <Alert variant="danger">{error}</Alert>}

      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Shipping Address</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={address}
            onChange={e => setAddress(e.target.value)}
            placeholder="Enter delivery address"
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Payment Method</Form.Label>
          <Form.Select
            value={paymentMethod}
            onChange={e => setPaymentMethod(e.target.value)}
          >
            <option value="COD">Cash on Delivery</option>
            <option value="Stripe" disabled>Stripe (coming soon)</option>
          </Form.Select>
        </Form.Group>

        <Button
          variant="primary"
          onClick={handlePlaceOrder}
          disabled={placingOrder}
        >
          {placingOrder ? 'Placing Order...' : 'Place Order'}
        </Button>
      </Form>
    </div>
  );
};

export default Checkout;
