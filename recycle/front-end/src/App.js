import './App.css';
import { Router } from '@reach/router';
import ProductDetail from './components/ProductDetail';
import Main from './components/Main';
import Update from './components/Update';

function App() {

  return (
    <div className="App">
        <Router>
          <Main path="/"/>
          <ProductDetail path="/products/:id" />
          <Update path = "product/:id/edit"/>
        </Router>

    </div>
  );
}

export default App;