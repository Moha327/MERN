import './App.css';
import {Router} from '@reach/router';
import Index1 from './components/Index1';
import Index2 from './components/Index2';
import Index3 from './components/Index3';
// import Index4 from './components/Index4';
function App() {
  return (
    <div>
      <Router>
          <Index1 path='/home' /> 
           <Index2 path='/:Id'/> 
           <Index3 path="/:str"/>
          {/* <Index4 path="/:Id/:color1/:color2"/> */}
      </Router>
    </div>
  );
}

export default App;
