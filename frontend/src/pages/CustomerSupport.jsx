import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Accordion, Table, Form, Button, Alert } from 'react-bootstrap';

const CustomerSupport = () => {
  const userId = 1; // Replace with logged-in user ID

  const [faqs, setFaqs] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [form, setForm] = useState({ subject: '', message: '' });
  const [message, setMessage] = useState('');
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetchFAQs();
    fetchTickets();
  }, [refresh]);

  const fetchFAQs = async () => {
    try {
      const res = await axios.get('/api/support/faqs');
      setFaqs(res.data);
    } catch (err) {
      console.error('Failed to load FAQs:', err);
    }
  };

  const fetchTickets = async () => {
    try {
      const res = await axios.get(`/api/support/customer/${userId}`);
      setTickets(res.data);
    } catch (err) {
      console.error('Failed to load tickets:', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    if (!form.subject || !form.message) {
      setMessage('Please fill in both subject and message.');
      return;
    }

    try {
      await axios.post('/api/support', { ...form, user_id: userId });
      setMessage('Your support request has been submitted.');
      setForm({ subject: '', message: '' });
      setRefresh(prev => !prev); // refresh ticket list
    } catch (err) {
      console.error(err);
      setMessage('Error submitting request.');
    }
  };

  return (
    <div className="container my-4">
      <h3 className="mb-4">Customer Support</h3>

      {/* FAQ */}
      <h5>Frequently Asked Questions</h5>
      <Accordion className="mb-4">
        {faqs.map((faq, idx) => (
          <Accordion.Item key={faq.id} eventKey={idx.toString()}>
            <Accordion.Header>{faq.question}</Accordion.Header>
            <Accordion.Body>{faq.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>

      {/* Ticket History */}
      <h5>My Support History</h5>
      {tickets.length === 0 ? (
        <Alert variant="info">You haven’t contacted support yet.</Alert>
      ) : (
        <Table striped bordered responsive className="mb-4">
          <thead>
            <tr>
              <th>Ticket ID</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id}>
                <td>{ticket.id}</td>
                <td>{ticket.subject}</td>
                <td>{ticket.message}</td>
                <td>{ticket.status}</td>
                <td>{new Date(ticket.created_at).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {/* New Ticket Form */}
      <h5>Submit a New Request</h5>
      {message && <Alert variant={message.includes('error') ? 'danger' : 'success'}>{message}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            name="subject"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            placeholder="Enter subject"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Describe your issue"
          />
        </Form.Group>

        <Button type="submit" variant="primary">Send Request</Button>
      </Form>
    </div>
  );
};

export default CustomerSupport;
