import React, { useState } from "react";
import "./App.css";
import { RadioGroupRoot } from "./components/RadioGroup/RadioGroupRoot";
import { RadioGroupItem } from "./components/RadioGroup/RadioGroupItem";

function App() {
  const [selectedColor, setSelectedColor] = useState("");
  const [submittedColor, setSubmittedColor] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedColor(selectedColor);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleSubmit}>
        <RadioGroupRoot
          value={selectedColor}
          onValueChange={setSelectedColor}
          theme="light"
          variant="warning"
          sizeStyle="md"
          name="colors"
        >
          <RadioGroupItem value="red" disabled variant="danger">
            Red
          </RadioGroupItem>
          <RadioGroupItem value="green">Green</RadioGroupItem>
          <RadioGroupItem value="blue">Blue</RadioGroupItem>
        </RadioGroupRoot>

        <button type="submit" style={{ marginTop: "1rem" }}>
          Submit Color
        </button>
      </form>

      <p>Submitted Color: {submittedColor}</p>
    </div>
  );
}

export default App;
