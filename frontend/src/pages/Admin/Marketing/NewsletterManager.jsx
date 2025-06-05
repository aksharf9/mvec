import React, { useState } from 'react';
import AdminSidebar from '../../../components/AdminSidebar';
import '../../../styles/Marketing.css';

const NewsletterManager = () => {
  const [subscribers, setSubscribers] = useState([
    { id: 1, name: 'Fatima Ali', email: 'fatima@example.com' },
    { id: 2, name: 'John Doe', email: 'john@example.com' },
  ]);

  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const addSubscriber = () => {
    if (newName && newEmail) {
      setSubscribers([
        ...subscribers,
        { id: Date.now(), name: newName, email: newEmail },
      ]);
      setNewName('');
      setNewEmail('');
    }
  };

  const removeSubscriber = (id) => {
    setSubscribers(subscribers.filter((s) => s.id !== id));
  };

  const sendNewsletter = () => {
    if (subject && message) {
      console.log('Sending newsletter:', { subject, message });
      alert('Newsletter sent to subscribers (mock)');
      setSubject('');
      setMessage('');
    }
  };

  return (
    <div className="admin-page d-flex">
      <AdminSidebar />
      <div className="admin-content p-4">
        <h2>Newsletter Management</h2>

        <div className="row mt-4">
          <div className="col-md-6">
            <h5>Subscribers</h5>
            <ul className="list-group">
              {subscribers.map((s) => (
                <li key={s.id} className="list-group-item d-flex justify-content-between align-items-center">
                  <span>{s.name} ({s.email})</span>
                  <button className="btn btn-sm btn-outline-danger" onClick={() => removeSubscriber(s.id)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-3">
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
              <input
                type="email"
                className="form-control mb-2"
                placeholder="Email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
              <button className="btn btn-primary w-100" onClick={addSubscriber}>
                Add Subscriber
              </button>
            </div>
          </div>

          <div className="col-md-6">
            <h5>Send Newsletter</h5>
            <div className="mb-3">
              <label className="form-label">Subject</label>
              <input
                type="text"
                className="form-control"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                rows="6"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button className="btn btn-success w-100" onClick={sendNewsletter}>
              Send to All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterManager;
