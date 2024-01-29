import { useState } from "react";

// Write your Color component here
const Color = ({ color, selectedColor, setSelectedColor }) => {
  const isSelected = selectedColor === color;

  return (
  <div onClick={() => setSelectedColor(color)} 
  className={`color ${isSelected ? 'selected' : ''}`}
  style={{ backgroundColor: color }}
  >
    {isSelected && <span className="color-name">{color}</span>}
  </div> 
  );
};


const App = () => {
  const [selectedColor, setSelectedColor] = useState("");
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="violet" selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
        <Color color="red"  selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
        <Color color="blue" selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
      </div>
    </div>
  );
};

export default App;
