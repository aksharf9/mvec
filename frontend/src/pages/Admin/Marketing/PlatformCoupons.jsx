import React, { useState } from 'react';
import AdminSidebar from '../../../components/AdminSidebar';
import '../../../styles/Marketing.css';

const initialCoupons = [
  { id: 1, code: 'WELCOME10', discount: 10, type: 'percent', expires: '2025-08-01', active: true },
  { id: 2, code: 'SNAP50', discount: 50, type: 'flat', expires: '2025-06-30', active: false },
];

const PlatformCoupons = () => {
  const [coupons, setCoupons] = useState(initialCoupons);
  const [code, setCode] = useState('');
  const [discount, setDiscount] = useState('');
  const [type, setType] = useState('percent');
  const [expires, setExpires] = useState('');

  const handleCreate = () => {
    const newCoupon = {
      id: Date.now(),
      code,
      discount: parseFloat(discount),
      type,
      expires,
      active: true,
    };
    setCoupons([...coupons, newCoupon]);
    setCode('');
    setDiscount('');
    setType('percent');
    setExpires('');
  };

  const handleDelete = (id) => {
    setCoupons(coupons.filter((c) => c.id !== id));
  };

  return (
    <div className="admin-page d-flex">
      <AdminSidebar />
      <div className="admin-content p-4">
        <h2>Platform Coupons</h2>

        <div className="row mt-4">
          <div className="col-md-6">
            <h5>Create New Coupon</h5>
            <div className="mb-3">
              <label className="form-label">Coupon Code</label>
              <input type="text" className="form-control" value={code} onChange={(e) => setCode(e.target.value)} />
            </div>

            <div className="mb-3">
              <label className="form-label">Discount</label>
              <input type="number" className="form-control" value={discount} onChange={(e) => setDiscount(e.target.value)} />
            </div>

            <div className="mb-3">
              <label className="form-label">Type</label>
              <select className="form-select" value={type} onChange={(e) => setType(e.target.value)}>
                <option value="percent">Percent (%)</option>
                <option value="flat">Flat Amount (AED)</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Expiry Date</label>
              <input type="date" className="form-control" value={expires} onChange={(e) => setExpires(e.target.value)} />
            </div>

            <button className="btn btn-primary" onClick={handleCreate}>
              Create Coupon
            </button>
          </div>

          <div className="col-md-6">
            <h5>Existing Coupons</h5>
            <table className="table table-bordered mt-3">
              <thead className="table-dark">
                <tr>
                  <th>Code</th>
                  <th>Discount</th>
                  <th>Type</th>
                  <th>Expires</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {coupons.map((c) => (
                  <tr key={c.id}>
                    <td>{c.code}</td>
                    <td>{c.discount} {c.type === 'percent' ? '%' : 'AED'}</td>
                    <td>{c.type}</td>
                    <td>{c.expires}</td>
                    <td>
                      <span className={`badge bg-${c.active ? 'success' : 'secondary'}`}>
                        {c.active ? 'Active' : 'Expired'}
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-sm btn-danger" onClick={() => handleDelete(c.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformCoupons;
