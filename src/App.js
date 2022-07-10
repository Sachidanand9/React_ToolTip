import ReactTooltip from 'react-tooltip'
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <button data-for = "tool" data-tip="Thanks for hover over me <br/> i'm Tooltip!">Hover over me!</button>
        <ReactTooltip place="right" id="tool" type="dark" effect="solid" multiline={true}/>
    </div>
  );
}

export default App;
