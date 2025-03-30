
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HealthWellnessPage from './HealthWellnessPage';
import HomePage from './Homepage';
import VirtualGarden from './VirtualGarden';
import AyurvedaPage from './AyurvedaInformationPage';
import AboutPage from './About';
import SupportPage from './Support';
import PlantCatalog from './PlantCatalog';
import SkinCarePage from './SkinCare';
import HairCarePage from './HairCare';
import AyurvedicDietPage from './Nutrition';
import FitnessPage from './Fitness';
import HerbalRemediesPage from './HerbalRemedies';
import ARScene from './ARScene';
import HerbalMap from './HerbalMap';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/health-wellness" element={<HealthWellnessPage />} />
        <Route path="/virtual-garden" element={<VirtualGarden />} />
        <Route path="/ayurveda-information" element={<AyurvedaPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/plant-catalog" element={<PlantCatalog />} /> 
        <Route path="/ar" element={<ARScene />} />
        <Route path="/skin-care" element={<SkinCarePage />} />
        <Route path="/hair-care" element={<HairCarePage />} />
        <Route path="/nutrition" element={<AyurvedicDietPage />} />
        <Route path="/fitness" element={<FitnessPage />} />
        <Route path="/herbal-practices" element={<HerbalRemediesPage />} />
        <Route path="/herbal-map" element={<HerbalMap />} />
      </Routes>
    </Router>
  );
};

export default App;
