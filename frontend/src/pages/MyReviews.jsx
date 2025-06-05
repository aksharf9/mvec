import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button, Modal, Form, Alert } from 'react-bootstrap';

const MyReviews = () => {
  const userId = 1; // Replace with auth context
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null); // review object
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ rating: 5, comment: '' });
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const res = await axios.get(`/api/reviews/user/${userId}`);
      setReviews(res.data);
    } catch (err) {
      console.error('Error fetching reviews:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (review) => {
    setEditing(review);
    setForm({ rating: review.rating, comment: review.comment });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this review?')) return;
    await axios.delete(`/api/reviews/${id}`);
    fetchReviews();
  };

  const handleSave = async () => {
    try {
      await axios.put(`/api/reviews/${editing.id}`, {
        rating: form.rating,
        comment: form.comment,
      });
      setMessage('Review updated.');
      setShowModal(false);
      fetchReviews();
    } catch (err) {
      setMessage('Error updating review.');
      console.error(err);
    }
  };

  return (
    <div className="container my-4">
      <h3 className="mb-4">My Reviews</h3>

      {message && <Alert variant="info">{message}</Alert>}

      {loading ? (
        <p>Loading...</p>
      ) : reviews.length === 0 ? (
        <Alert variant="info">You haven’t reviewed any products yet.</Alert>
      ) : (
        <Table striped bordered responsive>
          <thead>
            <tr>
              <th>Product</th>
              <th>Rating</th>
              <th>Comment</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <tr key={review.id}>
                <td>{review.product_name}</td>
                <td>{review.rating}/5</td>
                <td>{review.comment}</td>
                <td>
                  <Button
                    variant="warning"
                    size="sm"
                    onClick={() => handleEdit(review)}
                    className="me-2"
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(review.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {/* Modal for editing */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Rating</Form.Label>
              <Form.Select
                value={form.rating}
                onChange={(e) => setForm({ ...form, rating: e.target.value })}
              >
                {[1, 2, 3, 4, 5].map((val) => (
                  <option key={val} value={val}>{val}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Label>Comment</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={form.comment}
                onChange={(e) => setForm({ ...form, comment: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MyReviews;
