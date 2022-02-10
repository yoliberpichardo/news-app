import {BrowserRouter as Router } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import '../src/components/style.css'

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
