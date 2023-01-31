import React from 'react';
import Home from './routes/home/Home';

import { Routes, Route } from 'react-router-dom';
import Nav from './routes/nav/Nav';
import SignIn from './routes/SignIn/SignIn';

const Shop = () => {
  return <h1>I am the SHOP</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Nav />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
