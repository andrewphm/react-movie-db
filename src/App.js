import React from 'react';

// Routing
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom'; 

// Components
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';



// Styles
import { GlobalStyle } from './GlobalStyle';


const App = () => (
    <HashRouter basename='/'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:movieId' element={<Movie/>} />
        <Route path='/*' element={<NotFound/>} />

      </Routes>
      <GlobalStyle />
    </HashRouter>
);


export default App;
