import './App.css';
import BtnDemo from './components/btn-demo/btn-demo';
import MutliNumber from './components/multi-number/multi-number';
import MutliNumberClass from './components/multi-number/multi-number-class';

function App() {
  return (
    <div className="App">
      <h1>Demo 04 - Event</h1>

      <BtnDemo />
      <MutliNumber />
      <MutliNumberClass multiplier={3} />

    </div>
  );
}

export default App;
