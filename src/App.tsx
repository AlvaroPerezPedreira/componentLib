import { useState } from "react";
import "./App.css";
import { Checkbox } from "./components/Checkbox";

function App() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="app-container">
      <Checkbox
        variant="danger"
        label="hola"
        theme="light"
        sizeStyle="lg"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <p>Checked: {checked ? "Sí" : "No"}</p>
    </div>
  );
}

export default App;
