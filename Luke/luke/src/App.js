import './App.css';
import Index1 from './components/index1';
import Index2 from './components/index2';
import Index3 from './components/index3';
import { Router } from '@reach/router';
function App() {
  return (
    <div className="App">
      <Router>
      <Index1 path="/"/>
      <Index2 path="/Planets/:id"/>
      <Index3 path="/People/:id"/>
     </Router>
    </div>
         
  );
}

export default App;
