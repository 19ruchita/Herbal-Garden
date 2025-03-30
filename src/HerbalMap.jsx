import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';

// Fix for default marker icon path issue
let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const HerbalMap = () => {
  // Herb data for different regions
  const herbData = {
    India: {
      position: [20.5937, 78.9629],
      herbs: ['Tulsi', 'Ashwagandha', 'Neem'],
      description:
        'India is home to many medicinal plants used in Ayurveda, including Tulsi and Ashwagandha.',
    },
    China: {
      position: [35.8617, 104.1954],
      herbs: ['Ginseng', 'Astragalus', 'Goji Berry'],
      description:
        'Traditional Chinese Medicine incorporates herbs like Ginseng and Goji Berry for energy and immunity.',
    },
    Brazil: {
      position: [-14.235, -51.9253],
      herbs: ['Guarana', 'Jatoba', 'Catuaba'],
      description:
        'The Amazon rainforest provides medicinal plants such as Guarana, known for its stimulant properties.',
    },
    Egypt: {
      position: [26.8206, 30.8025],
      herbs: ['Chamomile', 'Fenugreek', 'Coriander'],
      description:
        'Egypt has been using herbs like Chamomile and Fenugreek since ancient times in traditional medicine for digestive and respiratory health.',
    },
    Greece: {
      position: [39.0742, 21.8243],
      herbs: ['Oregano', 'Sage', 'Thyme'],
      description:
        'Greek herbal medicine is rooted in ancient traditions, using herbs like Oregano and Sage for their healing properties and immune support.',
    },
    Mexico: {
      position: [23.6345, -102.5528],
      herbs: ['Epazote', 'Damiana', 'Passionflower'],
      description:
        'Mexican herbal medicine includes plants like Epazote and Damiana, commonly used for digestive issues and stress relief.',
    },
    Australia: {
      position: [-25.2744, 133.7751],
      herbs: ['Tea Tree', 'Eucalyptus', 'Kakadu Plum'],
      description:
        'Australia’s unique flora offers medicinal plants like Tea Tree and Eucalyptus, used for their antibacterial and anti-inflammatory properties.',
    },
    SouthAfrica: {
      position: [-30.5595, 22.9375],
      herbs: ['Rooibos', 'Buchu', 'Devil\'s Claw'],
      description:
        'South African traditional medicine includes Rooibos and Buchu, used for their antioxidant and anti-inflammatory benefits.',
    },
  };
  

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <MapContainer
        center={[20, 0]} // Centered on the equator
        zoom={2}
        style={{ height: '500px', width: '80%' }}
        className="rounded-lg border border-gray-300 shadow-md"
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {Object.keys(herbData).map((region) => (
          <Marker key={region} position={herbData[region].position}>
            <Popup>
              <strong>{region}</strong>
              <p>{herbData[region].description}</p>
              <p><strong>Herbs:</strong> {herbData[region].herbs.join(', ')}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default HerbalMap;