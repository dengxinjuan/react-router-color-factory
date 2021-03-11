import "./App.css";
import { useState } from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import Color from "./Color";
import Form from "./Form";

import Colors from "./Colors";
function App() {
  const initialColors = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF",
  };

  const [colors, setColors] = useState(initialColors);

  function addColor(newColor) {
    setColors((prevColors) => ({ ...prevColors, ...newColor }));
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <Colors colors={colors} />
        </Route>
        <Route exact path="/colors/:color">
          <Color />
        </Route>
        <Route exact path="/color/new">
          <Form addColor={addColor} />
        </Route>
        <Redirect to="/" />
      </BrowserRouter>
    </div>
  );
}

export default App;
