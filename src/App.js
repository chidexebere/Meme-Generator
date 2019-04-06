import React from "react";
import "./App.css";
import Header from "./components/Header";
import MemeGenerator from "./components/MemeGenerator";

function App() {
  return (
    <div className="App">
      <Header className="App-logo" />
      <MemeGenerator className="App-header" />
    </div>
  );
}

export default App;
