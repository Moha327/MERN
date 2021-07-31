import './App.css';
import { Router } from '@reach/router';
import ProductDetail from './components/ProductDetail';
import Main from './components/Main';

function App() {

  return (
    <div className="App">
        <Router>
          <Main path="/"/>
          <ProductDetail path="/products/:id" />
        </Router>

    </div>
  );
}

export default App;