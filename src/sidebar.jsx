// Sidebar.js

const Sidebar = ({ onEscape }) => {
  return (
    <div className="fixed top-0 left-0 w-64 h-full bg-gray-800 text-white p-4 shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Virtual Garden Instructions</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Movement:</strong> Use W/A/S/D or arrow keys to move around.</li>
        <li><strong>Look Around:</strong> Move your mouse to look around.</li>
        <li><strong>Interaction:</strong> Click to lock the pointer and start exploring.</li>
        <li><strong>Exit Pointer Lock:</strong> Press <strong>ESC</strong> to bring back the cursor.</li>
      </ul>
      <button
        onClick={onEscape}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Exit Pointer Lock
      </button>
    </div>
  );
};

export default Sidebar;
