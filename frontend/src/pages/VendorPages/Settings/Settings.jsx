import React, { useState } from 'react';

const VendorSettings = () => {
  const [formData, setFormData] = useState({
    storeName: 'Healthy Roots UAE',
    email: 'vendor@example.com',
    phone: '+971-50-1234567',
    address: 'Dubai, UAE',
    bankName: 'Emirates NBD',
    accountNumber: 'AE123456789012345678901',
    iban: 'AE560026000000001234567',
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
    console.log('Settings updated:', formData);
    // TODO: Save to backend
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Store & Payout Settings</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="storeName"
          value={formData.storeName}
          onChange={handleChange}
          placeholder="Store Name"
          className="w-full border p-2"
          required
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full border p-2"
          required
        />

        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="w-full border p-2"
        />

        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          className="w-full border p-2"
        />

        <hr className="my-4" />

        <h3 className="text-lg font-semibold">Bank Details</h3>

        <input
          type="text"
          name="bankName"
          value={formData.bankName}
          onChange={handleChange}
          placeholder="Bank Name"
          className="w-full border p-2"
        />

        <input
          type="text"
          name="accountNumber"
          value={formData.accountNumber}
          onChange={handleChange}
          placeholder="Account Number"
          className="w-full border p-2"
        />

        <input
          type="text"
          name="iban"
          value={formData.iban}
          onChange={handleChange}
          placeholder="IBAN"
          className="w-full border p-2"
        />

        <button type="submit" className="btn btn-primary w-full">
          Save Settings
        </button>
      </form>
    </div>
  );
};

export default VendorSettings;
