import React, { useState } from 'react';

const ContactSupport = () => {
  const [formData, setFormData] = useState({
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Support request submitted:', formData);
    // TODO: Send to backend / support system
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Contact Support</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="w-full border p-2"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your issue or question..."
          className="w-full border p-2"
          rows="6"
          required
        />
        <button type="submit" className="btn btn-primary w-full">
          Submit Ticket
        </button>
      </form>
    </div>
  );
};

export default ContactSupport;
