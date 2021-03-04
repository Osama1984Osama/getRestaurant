import React from 'react';
import Kategorien_Filter from "./component/Kategorien_Filter"
import Preis from "./component/Preis"
import Ergebnisse from "./component/Ergebnisse"

import "./app.css"
function App() {
  return (
    <>
    <div className="App">
        <h1>WO / WAS ESSEN WIR DENN HEUTE ?</h1>
        <hr className="line"/>
        <h1 className="header">WO / WAS ESSEN WIR DENN HEUTE ? 🤗</h1>
    </div>
    <Kategorien_Filter />
    <Preis/>
    <Ergebnisse/>
    </>
  );
}

export default App;
