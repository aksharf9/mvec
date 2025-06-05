import React, { useState } from 'react';
import AdminSidebar from '../../../components/AdminSidebar';
import '../../../styles/CMS.css';

const initialPages = {
  about: {
    title: 'About Us',
    content: `Welcome to SnapBasket — your trusted multi-vendor marketplace!`,
  },
  privacy: {
    title: 'Privacy Policy',
    content: `We respect your privacy and are committed to protecting your data.`,
  },
  terms: {
    title: 'Terms & Conditions',
    content: `By using this platform, you agree to the following terms...`,
  },
};

const PagesCMS = () => {
  const [selectedPage, setSelectedPage] = useState('about');
  const [title, setTitle] = useState(initialPages['about'].title);
  const [content, setContent] = useState(initialPages['about'].content);

  const handlePageChange = (e) => {
    const key = e.target.value;
    setSelectedPage(key);
    setTitle(initialPages[key].title);
    setContent(initialPages[key].content);
  };

  const handleSave = () => {
    console.log('Saved page:', { selectedPage, title, content });
    alert(`"${title}" page saved (mock)`);
  };

  return (
    <div className="admin-page d-flex">
      <AdminSidebar />
      <div className="admin-content p-4">
        <h2>Static Page Management</h2>

        <div className="mt-4">
          <label className="form-label">Select Page</label>
          <select
            className="form-select"
            value={selectedPage}
            onChange={handlePageChange}
          >
            <option value="about">About Us</option>
            <option value="privacy">Privacy Policy</option>
            <option value="terms">Terms & Conditions</option>
          </select>
        </div>

        <div className="mt-4">
          <label className="form-label">Page Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mt-4">
          <label className="form-label">Page Content</label>
          <textarea
            className="form-control"
            rows="10"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <button className="btn btn-primary mt-4" onClick={handleSave}>
          Save Page
        </button>
      </div>
    </div>
  );
};

export default PagesCMS;
