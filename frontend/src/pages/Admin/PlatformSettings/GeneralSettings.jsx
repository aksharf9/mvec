import React, { useState } from 'react';
import AdminSidebar from '../../../components/AdminSidebar';
import '../../../styles/PlatformSettings.css';

const GeneralSettings = () => {
  const [platformName, setPlatformName] = useState('SnapBasket');
  const [supportEmail, setSupportEmail] = useState('support@snapbasket.com');
  const [logoPreview, setLogoPreview] = useState('/logo192.png');

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setLogoPreview(preview);
    }
  };

  const handleSave = () => {
    console.log('Saving settings:', { platformName, supportEmail });
    alert('Settings saved (mock)');
  };

  return (
    <div className="admin-page d-flex">
      <AdminSidebar />
      <div className="admin-content p-4">
        <h2>General Platform Settings</h2>

        <div className="form-section mt-4">
          <label className="form-label">Platform Name</label>
          <input
            type="text"
            className="form-control"
            value={platformName}
            onChange={(e) => setPlatformName(e.target.value)}
          />

          <label className="form-label mt-3">Support Email</label>
          <input
            type="email"
            className="form-control"
            value={supportEmail}
            onChange={(e) => setSupportEmail(e.target.value)}
          />

          <label className="form-label mt-3">Upload Logo</label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={handleLogoUpload}
          />

          <div className="mt-3">
            <p>Preview:</p>
            <img src={logoPreview} alt="Logo" height="80" />
          </div>

          <button onClick={handleSave} className="btn btn-primary mt-4">Save Settings</button>
        </div>
      </div>
    </div>
  );
};

export default GeneralSettings;
