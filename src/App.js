import logo from './logo.svg';
import './App.css';
import ProductsPage from './FirstPage/ProductsPage';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <ProductsPage/>
    </div>
  );
}

export default App;
