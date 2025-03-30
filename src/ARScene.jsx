
import './ARScene.jsx.css'; // Import custom CSS for AR

const ARScene = () => {
  return (
    <a-scene embedded arjs='sourceType: webcam;'>
      {/* Define the AR marker */}
      <a-marker preset="hiro">
        <a-box position='0 0.5 0' material='color: red;'></a-box>
        <a-text value='This is a plant!' align='center' position='0 1 0'></a-text>
      </a-marker>
      
      {/* Define the AR background */}
      <a-entity camera></a-entity>
    </a-scene>
  );
};

export default ARScene;
