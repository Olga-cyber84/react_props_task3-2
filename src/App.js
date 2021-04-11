import './App.css';
import Listing from './components/Listing';
import data from './data/etsy';

function App() {
  
  return (
    <Listing items={data}/>
  );
}

export default App;
