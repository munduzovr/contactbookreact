import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import AddContact from './components/AddContact';
import Home from './components/Home';

const MainRoutes = () => {

    return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<AddContact/>}/>
      </Routes>
    );
};

export default MainRoutes;