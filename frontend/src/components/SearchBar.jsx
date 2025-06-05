import React from 'react';

const SearchBar = () => {
  return (
    <div className="d-flex flex-wrap gap-3 my-4">
      <input
        type="text"
        className="form-control flex-grow-1"
        placeholder="Search stores or items"
      />
      <button className="btn btn-outline-secondary">
        <i className="bi bi-geo-alt"></i> Use My Location
      </button>
      <input
        type="text"
        className="form-control"
        placeholder="Enter City/Area"
      />
    </div>
  );
};

export default SearchBar;
