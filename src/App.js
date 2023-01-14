import './App.css';
import Header from './Components/Header';
import AllRoutes from './Components/AllRoutes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <AllRoutes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
