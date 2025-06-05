import React, { useState } from 'react';
import AdminSidebar from '../../../components/AdminSidebar';
import '../../../styles/PlatformSettings.css';

const templates = {
  orderConfirmation: {
    subject: 'Your SnapBasket Order Confirmation',
    body: `Hi {{customerName}},\n\nThank you for your order #{{orderId}}. We'll notify you once it's shipped.\n\n- SnapBasket Team`,
  },
  passwordReset: {
    subject: 'Password Reset Request',
    body: `Hi {{customerName}},\n\nClick the link below to reset your password:\n{{resetLink}}\n\nIf you didn’t request this, ignore this email.`,
  },
};

const EmailTemplates = () => {
  const [selected, setSelected] = useState('orderConfirmation');
  const [subject, setSubject] = useState(templates[selected].subject);
  const [body, setBody] = useState(templates[selected].body);

  const handleTemplateChange = (e) => {
    const templateKey = e.target.value;
    setSelected(templateKey);
    setSubject(templates[templateKey].subject);
    setBody(templates[templateKey].body);
  };

  const handleSave = () => {
    console.log('Saved:', { template: selected, subject, body });
    alert(`Template "${selected}" saved (mock)`);
  };

  return (
    <div className="admin-page d-flex">
      <AdminSidebar />
      <div className="admin-content p-4">
        <h2>Email Templates</h2>

        <div className="mt-4">
          <label className="form-label">Select Template</label>
          <select
            className="form-select"
            value={selected}
            onChange={handleTemplateChange}
          >
            <option value="orderConfirmation">Order Confirmation</option>
            <option value="passwordReset">Password Reset</option>
          </select>
        </div>

        <div className="mt-4">
          <label className="form-label">Subject</label>
          <input
            type="text"
            className="form-control"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        <div className="mt-4">
          <label className="form-label">Email Body</label>
          <textarea
            className="form-control"
            rows="8"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        <button className="btn btn-primary mt-4" onClick={handleSave}>
          Save Template
        </button>
      </div>
    </div>
  );
};

export default EmailTemplates;
