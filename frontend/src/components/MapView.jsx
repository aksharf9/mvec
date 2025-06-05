import React from 'react';

const MapView = () => {
  return (
    <div className="border rounded shadow-sm overflow-hidden" style={{ height: '300px' }}>
      <iframe
        title="Store Map"
        width="100%"
        height="100%"
        frameBorder="0"
        src="https://www.openstreetmap.org/export/embed.html?bbox=55.2708%2C25.2048%2C55.2808%2C25.2148&layer=mapnik"
      ></iframe>
    </div>
  );
};

export default MapView;
