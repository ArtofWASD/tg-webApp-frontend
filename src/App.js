import './App.css';
import { useEffect } from 'REACT'
import TG_API from './utils/api-constants'
import Header from './components/Header/Header'
function App() {

  useEffect(() => {
    TG_API.ready()
  }, []);

  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
