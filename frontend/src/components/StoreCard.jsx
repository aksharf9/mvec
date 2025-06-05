import React from 'react';
import CategoryBadge from './CategoryBadge';

const StoreCard = ({ name, description, category, distance }) => {
  return (
    <div className="card shadow-sm p-3 mb-3">
      <div className="d-flex align-items-start">
        <div className="rounded-circle bg-light p-3 me-3">
          <i className="bi bi-shop fs-4 text-secondary"></i>
        </div>
        <div>
          <h6 className="fw-bold mb-1">{name}</h6>
          <p className="mb-1 small text-muted">{description}</p>
          <p className="mb-1 small">{distance}</p>
          <div className="d-flex align-items-center justify-content-between">
            <CategoryBadge category={category} />
            <button className="btn btn-sm btn-outline-primary">View Store</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreCard;
