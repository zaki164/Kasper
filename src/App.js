import { Navbar, Footer, Home } from './components'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Home />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
