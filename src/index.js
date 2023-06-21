import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<App />} />
        <Route path={'/login'} element={<Login />} />
        <Route path='/signup' element={<></>} />
        <Route path='/behelper' element={<></>} />
        <Route path='/apply' element={<></>} />
        <Route path='/profile' element={<></>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
