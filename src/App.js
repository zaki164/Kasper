import { Navbar, Footer, Home } from './components'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Home />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;
