import { useState } from "react";
import "./App.css";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import InfoIcon from "./assets/InfoIcon";
import { Accordion, AccordionItem } from "./components/Accordion";
import { TextArea } from "./components/TextArea/TextArea";
import { DatePicker } from "./components/DatePicker";

function App() {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // evitar recarga
    console.log("Form submitted with value:", value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const itemsSet1: AccordionItem[] = [
    {
      id: "1",
      title: "Languages Used",
      content: "This UI was written in HTML and CSS.",
      disabled: false,
    },
    {
      id: "2",
      title: "How it Works",
      content:
        "Using sibling and checked selectors, we can style siblings based on checked state.",
      disabled: false,
    },
    {
      id: "3",
      title: "Accessibility",
      content:
        "Keyboard navigation and ARIA attributes improve usability for all users.",
      disabled: false,
    },
    {
      id: "4",
      title: "Customization",
      icon: <InfoIcon />,
      content:
        "Easily customize the accordion's styles and behavior with props like size, theme, and variant.",
      disabled: false,
    },
    {
      id: "5",
      title: "Disabled Item",
      content: "This item is disabled and cannot be opened.",
      disabled: true,
    },
  ];

  return (
    <div className="app-container">
      {/* <form onSubmit={handleSubmit} className="app-form">
        <Input
          label="Name"
          variant="info"
          sizeStyle="md"
          theme="dark"
          placeholder=""
          value={value}
          onChange={handleChange}
          type="text"
          iconEnd={<InfoIcon />}
        />
        <Button label="Submit" type="submit" theme="dark" icon={<InfoIcon />} />
      </form> */}
      {/* <Accordion
        items={itemsSet1}
        defaultOpenItems={["1", "2", "5"]}
        variant="danger"
        sizeStyle="lg"
        theme="dark"
      /> */}
      <TextArea
        variant="default"
        sizeStyle="md"
        theme="dark"
        placeholder="Escribe algo..."
        maxLength={200}
        value={value}
        onChange={handleChange}
      />
      <DatePicker
        variant="default"
        sizeStyle="md"
        theme="dark"
        onChange={setValue}
        value={value} // normalmente DatePicker también recibe el value
      />{" "}
    </div>
  );
}

export default App;
