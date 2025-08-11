import React, { useState } from "react";
import "./App.css";
import { Card } from "./components/Card";

function App() {
  return (
    <div className="app-container">
      <Card.Root variant="danger">
        <Card.Image
          src="https://rvb-img.reverb.com/image/upload/s--s0lmRIU3--/f_auto,t_large/v1707330068/xy6mjqgi3ikpkfhxcvib.jpg"
          alt="Sample Product"
          onClick={() => {
            console.log("Image clicked");
          }}
        />
        <Card.Content>
          <Card.Tag>New</Card.Tag>
          <Card.Category>Electronics</Card.Category>
          <Card.Title>Wireless Headphones</Card.Title>
          <Card.Description>
            Experience high-quality sound without the wires. Perfect for travel,
            workouts, and everyday use.
          </Card.Description>
          <Card.Features>
            <Card.Feature variant="default">Bluetooth 5.0</Card.Feature>
            <Card.Feature>Noise Cancelling</Card.Feature>
            <Card.Feature>20h Battery</Card.Feature>
          </Card.Features>
          <Card.Bottom>
            <Card.Price oldPrice="$199.99" newPrice="$129.99" />
            <Card.Button
              onClick={() => {
                console.log("HHola");
              }}
            >
              Add to Cart
            </Card.Button>
          </Card.Bottom>
        </Card.Content>
      </Card.Root>
    </div>
  );
}

export default App;
