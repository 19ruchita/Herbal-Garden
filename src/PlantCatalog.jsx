// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PlantCatalog = () => {
  const [plants, setPlants] = useState([]); // State to hold plant data

  // Function to fetch plants from the backend
  const fetchPlants = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/plants');
      setPlants(response.data); // Set fetched data to state
    } catch (error) {
      console.error('Error fetching plants:', error);
    }
  };

  // Use useEffect to fetch plants when component mounts
  useEffect(() => {
    fetchPlants();
  }, []); // Empty dependency array to run this only once

  return (
    <div>
      <h1>Plant Catalog</h1>
      <ul>
        {plants.map(plant => (
          <li key={plant._id}>{plant.name}</li> // Render each plant's name
        ))}
      </ul>
    </div>
  );
};

export default PlantCatalog;
