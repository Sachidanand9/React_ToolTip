import ReactTooltip from 'react-tooltip'
import './App.css';

function App() {
  return (
    <div className="App">
         <button data-tip data-for="hoverTips">
           Hover over me!
         </button>
         <ReactTooltip id="hoverTips" place='right' effect="solid">
          Thanks for hovering! i'm a Tooltip
         </ReactTooltip>
    </div>
  );
}

export default App;
