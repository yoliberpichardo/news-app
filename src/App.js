import {BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import '../src/components/style.css'

const App = () => {
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
