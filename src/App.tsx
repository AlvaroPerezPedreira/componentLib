import { useState } from "react";
import "./App.css";
import { RangeSlider } from "./components/RangeSlider";

function App() {
  const [value, setValue] = useState(Number);

  return (
    <div className="app-container">
      <RangeSlider
        variant="danger"
        theme="light"
        sizeStyle="lg"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        min={-500}
        max={500}
        step={100}
        showTicks={true}
      />
      <p>Checked: {value}</p>
    </div>
  );
}

export default App;
