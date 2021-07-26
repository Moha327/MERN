import './App.css';
import {Router} from '@reach/router';
import Index1 from './components/Index1';
import Index2 from './components/Index2';


function App() {
  return (
    <div>
      <Router>
          <Index1 path='/home' /> 
           <Index2 path='/:Id'/> 
           
          
      </Router>
    </div>
  );
}

export default App;
