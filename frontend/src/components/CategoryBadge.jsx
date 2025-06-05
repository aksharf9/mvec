import React from 'react';

const CategoryBadge = ({ category }) => {
  return (
    <span className="badge bg-light text-dark rounded-pill me-2">{category}</span>
  );
};

export default CategoryBadge;
