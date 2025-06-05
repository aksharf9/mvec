import React, { useState } from 'react';
import AdminSidebar from '../../../components/AdminSidebar';
import '../../../styles/PlatformSettings.css';

const ShippingMethods = () => {
  const [methods, setMethods] = useState([
    { id: 1, name: 'Standard Delivery', fee: 15, enabled: true },
    { id: 2, name: 'Express Delivery', fee: 30, enabled: false },
  ]);

  const toggleMethod = (id) => {
    setMethods((prev) =>
      prev.map((m) =>
        m.id === id ? { ...m, enabled: !m.enabled } : m
      )
    );
  };

  const handleSave = () => {
    console.log('Saving shipping methods:', methods);
    alert('Shipping methods saved (mock)');
  };

  return (
    <div className="admin-page d-flex">
      <AdminSidebar />
      <div className="admin-content p-4">
        <h2>Shipping Methods</h2>

        <table className="table table-bordered mt-4 shipping-table">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Method</th>
              <th>Fee (AED)</th>
              <th>Status</th>
              <th>Toggle</th>
            </tr>
          </thead>
          <tbody>
            {methods.map((m, index) => (
              <tr key={m.id}>
                <td>{index + 1}</td>
                <td>{m.name}</td>
                <td>{m.fee.toFixed(2)}</td>
                <td>
                  <span className={`badge bg-${m.enabled ? 'success' : 'secondary'}`}>
                    {m.enabled ? 'Enabled' : 'Disabled'}
                  </span>
                </td>
                <td>
                  <div className="form-check form-switch">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={m.enabled}
                      onChange={() => toggleMethod(m.id)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="btn btn-primary mt-3" onClick={handleSave}>
          Save Shipping Settings
        </button>
      </div>
    </div>
  );
};

export default ShippingMethods;
