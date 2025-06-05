import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FilterSidebar from '../components/FilterSidebar';
import StoreCard from '../components/StoreCard';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import '../pages/StoresPage.css';

const StoresPage = () => {
  // Example markers (you can load this from backend later)
  const storeMarkers = [
    { id: 1, name: 'Sweet Treats', lat: 25.2049, lng: 55.2710 },
    { id: 2, name: 'Tech Hub', lat: 25.2075, lng: 55.2728 },
    { id: 3, name: 'Fresh Mart', lat: 25.2101, lng: 55.2733 },
    { id: 4, name: 'Style Corner', lat: 25.2115, lng: 55.2705 },
  ];

  return (
    <div className="stores-page">
      <Navbar />

      <header className="page-header text-center py-5">
        <h1>Find Stores Near You</h1>
        <p className="subtitle">Discover and explore physical retail stores near</p>
      </header>

      <div className="search-bar-container container mb-4">
        <div className="row g-2 justify-content-center">
          <div className="col-md-4">
            <input type="text" className="form-control" placeholder="Search stores or items" />
          </div>
          <div className="col-md-3">
            <button className="btn btn-outline-secondary w-100">📍 Use My Location</button>
          </div>
          <div className="col-md-3">
            <input type="text" className="form-control" placeholder="Enter City/Area" />
          </div>
        </div>
      </div>

      <div className="main-content container d-flex gap-4">
        <div className="col-md-3">
          <FilterSidebar />
        </div>

        <div className="map-and-stores flex-fill">
          {/* ✅ Integrated Leaflet Map */}
          <div className="map-container mb-4">
            <MapContainer
              center={[25.2048, 55.2708]}
              zoom={12}
              scrollWheelZoom={false}
              style={{ height: '400px', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
              />

              {storeMarkers.map((store) => (
                <Marker key={store.id} position={[store.lat, store.lng]}>
                  <Popup>
                    <strong>{store.name}</strong><br />
                    {store.lat}, {store.lng}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>

          {/* ✅ Store Cards */}
          <div className="row">
            {storeMarkers.map((store) => (
              <div className="col-md-6 mb-4" key={store.id}>
                <StoreCard
                  name={store.name}
                  description="Sample store description."
                  category="Category"
                  distance="3 km"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default StoresPage;
