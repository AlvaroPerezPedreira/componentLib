import { useState } from "react";
import "./App.css";
import { Input } from "./components/Input";
import { Button } from "./components/Button";

function App() {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // evitar recarga
    console.log("Form submitted with value:", value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleSubmit} className="app-form">
        <Input
          label="Name"
          variant="info"
          sizeStyle="md"
          theme="dark"
          placeholder=""
          value={value}
          onChange={handleChange}
          type="text"
        />
        <Button label="Submit" type="submit" theme="dark" />
      </form>
    </div>
  );
}

export default App;
