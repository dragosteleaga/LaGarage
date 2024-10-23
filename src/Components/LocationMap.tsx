import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for marker icons not showing correctly in React Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const LocationMap = () => {

  // Function to open Google Maps with the specific location (La Garage)
  const openGoogleMaps = () => {
    const googleMapsUrl = `https://www.google.com/maps/place/La+Garage/@50.5081906,12.1313889,17z/data=!3m1!4b1!4m6!3m5!1s0x47a127b1bec43321:0x9333cbea2b92cb0b!8m2!3d50.5081906!4d12.1339638!16s%2Fg%2F11vy1jpd3f?entry=ttu&g_ep=EgoyMDI0MTAwNS4yIKXMDSoASAFQAw%3D%3D`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', padding: '20px' }}>
      <h2 style={{ marginBottom: '10px' }}>Our Location</h2>
      
      <MapContainer
        center={[50.5081197, 12.1335775]} 
        zoom={13}
        style={{ height: '400px', width: '100%', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[50.50819660363412, 12.133963845122864]}>
          <Popup>
            Voßstraße, 08525 Plauen, Germania
          </Popup>
        </Marker>
      </MapContainer>

      <button 
        onClick={openGoogleMaps} 
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        Open in Google Maps
      </button>
    </div>
  );
};

export default LocationMap;
