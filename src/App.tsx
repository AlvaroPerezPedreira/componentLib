import { useState } from "react";
import "./App.css";
import { Input } from "./components/Input";

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
      <form onSubmit={handleSubmit}>
        <Input
          label="Name"
          variant="info"
          sizeStyle="md"
          theme="dark"
          placeholder=""
          value={value}
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
