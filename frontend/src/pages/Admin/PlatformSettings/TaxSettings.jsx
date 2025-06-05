import React, { useState } from 'react';
import AdminSidebar from '../../../components/AdminSidebar';
import '../../../styles/PlatformSettings.css';

const TaxSettings = () => {
  const [vat, setVat] = useState(5);
  const [taxInclusive, setTaxInclusive] = useState(true);

  const handleSave = () => {
    console.log('Saving tax settings:', { vat, taxInclusive });
    alert('Tax settings saved (mock)');
  };

  return (
    <div className="admin-page d-flex">
      <AdminSidebar />
      <div className="admin-content p-4">
        <h2>Tax & VAT Settings</h2>

        <div className="mt-4">
          <label className="form-label">VAT Percentage</label>
          <input
            type="number"
            className="form-control"
            value={vat}
            onChange={(e) => setVat(parseFloat(e.target.value))}
            step="0.1"
            min="0"
            max="100"
          />
        </div>

        <div className="form-check form-switch mt-4">
          <input
            type="checkbox"
            className="form-check-input"
            checked={taxInclusive}
            onChange={() => setTaxInclusive(!taxInclusive)}
          />
          <label className="form-check-label">
            Prices include tax (Inclusive Pricing)
          </label>
        </div>

        <button className="btn btn-primary mt-4" onClick={handleSave}>
          Save Tax Settings
        </button>
      </div>
    </div>
  );
};

export default TaxSettings;
