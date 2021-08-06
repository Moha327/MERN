
import './App.css';
import {Router} from '@reach/router';
import Main from './components/Main';
import AddAuthor from './components/AddAuthor';
import Update from './components/Update';
import AuthorDetail from './components/AuthorDetail'
function App() {
  return (
    <div className="App">
       <h1>Favorite Authors</h1>
      <Router>
        <Main path="/" />
        <AddAuthor path="/new" />
        <Update path="/:id/edit" />
        <AuthorDetail path="/:id" />
      </Router>
    </div>
  );
}

export default App;
