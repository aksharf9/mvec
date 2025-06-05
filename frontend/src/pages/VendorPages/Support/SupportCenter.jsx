import React, { useState } from 'react';

const SupportCenter = () => {
  const [formData, setFormData] = useState({ subject: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Support ticket submitted!');
    // TODO: Send to backend
  };

  const faqList = [
    {
      question: 'How do I update my bank details?',
      answer: 'Go to Settings → Store & Payout Settings → Update and save your bank info.'
    },
    {
      question: 'How are payouts calculated?',
      answer: 'Payouts are based on total orders minus platform commission. Check Earnings tab.'
    },
    {
      question: 'Can I edit a product after approval?',
      answer: 'Yes, but changes may require re-approval from admin.'
    }
  ];

  const supportHistory = [
    {
      id: 'TCK-1001',
      subject: 'Unable to update product image',
      date: '2025-05-25',
      status: 'Resolved'
    },
    {
      id: 'TCK-1002',
      subject: 'Commission rate clarification',
      date: '2025-05-20',
      status: 'Pending'
    }
  ];

  return (
    <div className="p-4 max-w-5xl mx-auto space-y-8">
      <h2 className="text-2xl font-bold">Vendor Support Center</h2>

      {/* Contact Form */}
      <div className="border p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-2">Submit a Support Ticket</h3>
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
            placeholder="Describe your issue"
            className="w-full border p-2"
            rows="4"
            required
          />
          <button type="submit" className="btn btn-primary w-full">
            Submit
          </button>
        </form>
      </div>

      {/* FAQ Section */}
      <div className="border p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-3">Frequently Asked Questions</h3>
        <ul className="space-y-3">
          {faqList.map((faq, idx) => (
            <li key={idx}>
              <strong className="block">{faq.question}</strong>
              <span className="text-gray-700">{faq.answer}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Support History */}
      <div className="border p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-3">My Support History</h3>
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Ticket ID</th>
              <th className="border px-4 py-2">Subject</th>
              <th className="border px-4 py-2">Date</th>
              <th className="border px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {supportHistory.map((ticket) => (
              <tr key={ticket.id}>
                <td className="border px-4 py-2">{ticket.id}</td>
                <td className="border px-4 py-2">{ticket.subject}</td>
                <td className="border px-4 py-2">{ticket.date}</td>
                <td className="border px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded-full text-white text-sm ${
                      ticket.status === 'Resolved' ? 'bg-green-500' : 'bg-yellow-500'
                    }`}
                  >
                    {ticket.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SupportCenter;
