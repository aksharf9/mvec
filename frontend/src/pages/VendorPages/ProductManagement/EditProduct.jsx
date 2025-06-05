import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductForm from './ProductForm';

const VendorEditProduct = () => {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    stock: '',
    description: '',
    category: '',
    image: null
  });

  useEffect(() => {
    // Simulate fetching product by ID
    const fetchProduct = async () => {
      // Replace this mock with API call later
      const mockProduct = {
        name: 'Mock Product',
        price: 99,
        stock: 25,
        description: 'Edit this product',
        category: 'Grocery'
      };
      setFormData(mockProduct);
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Product ${id} updated:`, formData);
    // TODO: Submit updated product to backend
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
      <ProductForm
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        submitLabel="Update Product"
      />
    </div>
  );
};

export default VendorEditProduct;
