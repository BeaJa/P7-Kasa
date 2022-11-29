import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Apropos from './pages/Apropos';
import Error404 from './pages/Error404';
import Logement from './pages/Logements'
import { GlobalStyle } from './styles/style';
import Home from './pages/Home';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
        <GlobalStyle />
          <Header />
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/apropos' element={<Apropos />} />
              <Route path='/logement/:id' element={<Logement />} />
              <Route path='*' element={<Error404 />} />
            </Routes>
          <Footer />
    </BrowserRouter>
  );
};
export default App;