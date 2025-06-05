import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="text-center py-5">
        <h1>Welcome to SnapBasket 🧺</h1>
        <p className="text-muted">The fastest way to find stores near you</p>
        <a className="btn btn-warning px-4 mt-3" href="/stores-near-you">Explore Stores</a>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
