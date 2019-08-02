import React from 'react';
import './App.css';
import Header from "./Components/header";
import Carousel from "./Components/Carousel";
import SmartPhone from "./Components/SmartPhone";

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <SmartPhone />
    </div>
  );
}

export default App;
