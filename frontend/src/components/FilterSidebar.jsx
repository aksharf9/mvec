import React from 'react';

const FiltersSidebar = () => {
  return (
    <div className="border rounded p-3 shadow-sm mb-4 bg-white">
      <h5>Filters</h5>
      <div className="mt-3">
        <strong>Categories</strong>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="bakery" />
          <label className="form-check-label" htmlFor="bakery">Bakery</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="electronics" />
          <label className="form-check-label" htmlFor="electronics">Electronics</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="groceries" />
          <label className="form-check-label" htmlFor="groceries">Groceries</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="clothing" />
          <label className="form-check-label" htmlFor="clothing">Clothing</label>
        </div>
      </div>

      <div className="mt-4">
        <strong>Distance</strong>
        <input type="range" className="form-range" min="1" max="50" defaultValue="25" />
        <p className="text-muted small">25 km</p>
      </div>

      <button className="btn btn-link p-0">Reset Filters</button>
    </div>
  );
};

export default FiltersSidebar;
