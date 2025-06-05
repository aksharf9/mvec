import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/AboutPage.css';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="about-page container py-5">
        <h2 className="text-center mb-4">About SnapBasket</h2>

        {/* 🧭 Intro Section */}
        <section className="intro text-center mb-5">
          <p className="lead">
            SnapBasket is not just a marketplace — it’s a mission to bring your neighborhood closer.
          </p>
          <p>
            Whether it’s fresh groceries, fashionable finds, or your favorite bites, we connect users with local vendors in a seamless and trusted way. 
            We believe convenience should never come at the cost of community.
          </p>
        </section>

        {/* 🎥 Video Section */}
        <section className="video-section text-center mb-5">
          <h3 className="mb-3">SnapBasket in Action</h3>
          <video controls className="about-video">
            <source src="/videos/about-us.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>

        {/* 💎 Values Section */}
        <section className="values row text-center gy-4">
          <div className="col-md-4">
            <div className="value-card">
              <h4>🌍 Local First</h4>
              <p>We empower neighborhood stores by giving them a digital voice and platform.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="value-card">
              <h4>⚡ Speed with Trust</h4>
              <p>Quick access to reliable stores around you with real-time data and maps.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="value-card">
              <h4>💼 Vendor-Centric</h4>
              <p>From store discovery to POS — we help vendors grow online & offline.</p>
            </div>
          </div>
        </section>

        {/* 🌟 Vision Section */}
        <section className="vision text-center mt-5">
          <h3 className="mb-3">Our Vision</h3>
          <p className="mb-0">
            We aim to be the UAE's go-to platform for local commerce by blending smart tech, human trust, and neighborhood power.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
