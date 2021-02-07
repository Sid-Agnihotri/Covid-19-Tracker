import "./App.css";
import React from "react";
import Home from "./pages/Home";
import GlobalStyles from "../src/components/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Home></Home>
    </div>
  );
}

export default App;
