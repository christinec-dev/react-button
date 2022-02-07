import React, { useState } from "react";
import Button from "./components/Button.js";

export default function App() {
  return (
    <div className="App">
       
        <h2 className="pa-color-highlight">This is a reusable button</h2>
        <Button variant="danger" size={"sm"} >Small Button</Button>
        <Button variant="primary" size={"lg"} >Smaller Button</Button>
        <Button variant="warning" size={"xs"} >Big Button</Button>
    </div>
  );
}