
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HealthWellnessPage from './HealthWellnessPage';
import AyurvedaPage from './AyurvedaInformationPage';
import AboutPage from './About';
import SupportPage from './Support';
import PlantCatalog from './PlantCatalog';
import SkinCarePage from './SkinCare';
import HairCarePage from './HairCare';
import AyurvedicDietPage from './Nutrition';
import FitnessPage from './Fitness';
import HerbalRemediesPage from './HerbalRemedies';
import HerbalMap from './components/HerbalMap';
import PlantSearch from './components/PlantSearch';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Layout darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)}>
            <HealthWellnessPage darkMode={darkMode} setDarkMode={setDarkMode} />
          </Layout>
        } />
        <Route path="/ayurveda-information" element={
          <Layout darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)}>
            <AyurvedaPage darkMode={darkMode} />
          </Layout>
        } />
        <Route path="/about" element={
          <Layout darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)}>
            <AboutPage darkMode={darkMode} />
          </Layout>
        } />
        <Route path="/support" element={
          <Layout darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)}>
            <SupportPage darkMode={darkMode} />
          </Layout>
        } />
        <Route path="/plant-catalog" element={
          <Layout darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)}>
            <PlantCatalog darkMode={darkMode} />
          </Layout>
        } />
        <Route path="/skin-care" element={
          <Layout darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)}>
            <SkinCarePage darkMode={darkMode} />
          </Layout>
        } />
        <Route path="/hair-care" element={
          <Layout darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)}>
            <HairCarePage darkMode={darkMode} />
          </Layout>
        } />
        <Route path="/nutrition" element={
          <Layout darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)}>
            <AyurvedicDietPage darkMode={darkMode} />
          </Layout>
        } />
        <Route path="/fitness" element={
          <Layout darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)}>
            <FitnessPage darkMode={darkMode} />
          </Layout>
        } />
        <Route path="/herbal-practices" element={
          <Layout darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)}>
            <HerbalRemediesPage darkMode={darkMode} />
          </Layout>
        } />
        <Route path="/herbal-map" element={<HerbalMap darkMode={darkMode} />} />
      </Routes>
    </Router>
  );
};

export default App;
