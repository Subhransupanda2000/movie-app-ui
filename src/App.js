import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CreateMovie from './components/CreateMovie';
import { MovieList } from './components/MovieList';
import UpdateMovie from './components/UpdateMovie';
import DeleteMovie from './components/DeleteMovie';

function App() {
  return (
    <>
<Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/create">CreateMovie</Link>
            </li>
            <li>
              <Link to="/list">List of movie</Link>
            </li>
            <li>
              <Link to="/update">update movie</Link>
            </li>
            <li>
              <Link to="/delete">deletemovie</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/create" element={<CreateMovie />} />
          <Route path="/list" element={<MovieList />} />
          <Route path="/update" element={<UpdateMovie />} />
          <Route path="/delete" element={<DeleteMovie />} />
        </Routes>
      </div>
    </Router>    
    </>
  );
}

export default App;
