import { useState } from "react";
import "./App.css";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import InfoIcon from "./icons/InfoIcon";
import { Accordion, AccordionItem } from "./components/Accordion";
import { TextArea } from "./components/TextArea/TextArea";
import { DatePicker } from "./components/DatePicker";

function App() {
  const [value, setValue] = useState("");

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="app-container">
      <DatePicker variant="default" sizeStyle="md" theme="dark" />
      <span>{value}</span>
    </div>
  );
}

export default App;
