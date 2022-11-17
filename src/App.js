import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Apropos from './pages/Apropos';
import Error404 from './pages/Error404';
import FicheLoc from './pages/Ficheloc';
import { GlobalStyle } from './styles/style';
import datas from './assets/data/data.json'
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
    <GlobalStyle></GlobalStyle>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/apropos' element={<Apropos />}></Route>
      <Route path='/ficheloc/:id' data={datas} element={<FicheLoc />}> 
      </Route>
      <Route path='*' element={<Error404 />}></Route>
    </Routes>
    </BrowserRouter>
  );
};
export default App;