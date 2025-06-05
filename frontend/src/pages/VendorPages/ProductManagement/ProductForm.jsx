import React from 'react';

const ProductForm = ({ formData, onChange, onSubmit, submitLabel }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={formData.name}
        onChange={onChange}
        className="w-full border p-2"
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Price (AED)"
        value={formData.price}
        onChange={onChange}
        className="w-full border p-2"
        required
      />
      <input
        type="number"
        name="stock"
        placeholder="Stock Quantity"
        value={formData.stock}
        onChange={onChange}
        className="w-full border p-2"
        required
      />
      <textarea
        name="description"
        placeholder="Product Description"
        value={formData.description}
        onChange={onChange}
        className="w-full border p-2"
        required
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={onChange}
        className="w-full border p-2"
        required
      />
      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={onChange}
        className="w-full border p-2"
      />
      <button type="submit" className="btn btn-primary w-full">
        {submitLabel}
      </button>
    </form>
  );
};

export default ProductForm;
