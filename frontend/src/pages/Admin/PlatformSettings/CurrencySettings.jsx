import React, { useState } from 'react';
import AdminSidebar from '../../../components/AdminSidebar';
import '../../../styles/PlatformSettings.css';

const allCurrencies = ['AED', 'USD', 'EUR', 'INR', 'GBP', 'SAR'];

const CurrencySettings = () => {
  const [defaultCurrency, setDefaultCurrency] = useState('AED');
  const [allowedCurrencies, setAllowedCurrencies] = useState(['AED', 'USD']);

  const toggleCurrency = (code) => {
    setAllowedCurrencies((prev) =>
      prev.includes(code)
        ? prev.filter((c) => c !== code)
        : [...prev, code]
    );
  };

  const handleSave = () => {
    console.log('Saving currency settings:', {
      defaultCurrency,
      allowedCurrencies,
    });
    alert('Currency settings saved (mock)');
  };

  return (
    <div className="admin-page d-flex">
      <AdminSidebar />
      <div className="admin-content p-4">
        <h2>Currency Settings</h2>

        <div className="mt-4">
          <label className="form-label">Default Currency</label>
          <select
            className="form-select"
            value={defaultCurrency}
            onChange={(e) => setDefaultCurrency(e.target.value)}
          >
            {allCurrencies.map((code) => (
              <option key={code} value={code}>
                {code}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-4">
          <label className="form-label">Allowed Currencies</label>
          <div className="row">
            {allCurrencies.map((code) => (
              <div key={code} className="col-md-4 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={allowedCurrencies.includes(code)}
                  onChange={() => toggleCurrency(code)}
                  id={`currency-${code}`}
                />
                <label className="form-check-label" htmlFor={`currency-${code}`}>
                  {code}
                </label>
              </div>
            ))}
          </div>
        </div>

        <button className="btn btn-primary mt-4" onClick={handleSave}>
          Save Currency Settings
        </button>
      </div>
    </div>
  );
};

export default CurrencySettings;
