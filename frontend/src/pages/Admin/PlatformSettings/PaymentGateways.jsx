import React, { useState } from 'react';
import AdminSidebar from '../../../components/AdminSidebar';
import '../../../styles/PlatformSettings.css';

const PaymentGateways = () => {
  const [codEnabled, setCodEnabled] = useState(true);
  const [stripeEnabled, setStripeEnabled] = useState(false);
  const [paypalEnabled, setPaypalEnabled] = useState(true);

  const handleSave = () => {
    console.log('Saving payment gateway settings:', {
      codEnabled,
      stripeEnabled,
      paypalEnabled,
    });
    alert('Payment gateway settings saved (mock)');
  };

  return (
    <div className="admin-page d-flex">
      <AdminSidebar />
      <div className="admin-content p-4">
        <h2>Payment Gateway Settings</h2>

        <div className="form-check form-switch mt-4">
          <input
            className="form-check-input"
            type="checkbox"
            checked={codEnabled}
            onChange={() => setCodEnabled(!codEnabled)}
          />
          <label className="form-check-label">Cash on Delivery (COD)</label>
        </div>

        <div className="form-check form-switch mt-3">
          <input
            className="form-check-input"
            type="checkbox"
            checked={stripeEnabled}
            onChange={() => setStripeEnabled(!stripeEnabled)}
          />
          <label className="form-check-label">Stripe</label>
        </div>

        <div className="form-check form-switch mt-3">
          <input
            className="form-check-input"
            type="checkbox"
            checked={paypalEnabled}
            onChange={() => setPaypalEnabled(!paypalEnabled)}
          />
          <label className="form-check-label">PayPal</label>
        </div>

        <button className="btn btn-primary mt-4" onClick={handleSave}>
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default PaymentGateways;

