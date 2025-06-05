import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/CategoryPage.css';

const CategoryPage = () => {
  const categories = [
    {
      title: 'Supermarkets',
      icon: '🛒',
      stores: ['Lulu Express', 'Al Maya Market', 'Zoom Mart'],
    },
    {
      title: 'Clothing Stores',
      icon: '👕',
      stores: ['Zara', 'H&M', 'Max Fashion'],
    },
    {
      title: 'Restaurants',
      icon: '🍽️',
      stores: ['Al Baik', 'PF Chang\'s', 'Shawarma House'],
    },
    {
      title: 'Other',
      icon: '📦',
      stores: ['Book World', 'Toy City', 'TechFix'],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="category-page container py-5">
        <h2 className="text-center mb-5">Explore by Category</h2>
        <div className="row gy-4">
          {categories.map((category, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="category-card p-4 h-100">
                <h4 className="category-title">{category.icon} {category.title}</h4>
                <ul className="list-unstyled mt-3">
                  {category.stores.map((store, i) => (
                    <li key={i} className="store-item">📍 {store}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CategoryPage;
