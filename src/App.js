import {BrowserRouter as Router } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={ <Home /> }/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
