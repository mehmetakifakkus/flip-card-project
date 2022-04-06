import './App.css';
import CardManager from './components/CardManager';
import data from "./assets/data.json";
import data3 from "./assets/data3.json";

function App() {
  return (
    <div className="App">
      <h1>English Cards Project</h1>
      <CardManager data={data3}/>
    </div>
  );
}

export default App;
