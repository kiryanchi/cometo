import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/page';
import SignupEmail from './pages/signup/signupEmail/page';
import Signup from './pages/signup/page';
import Apply from './pages/apply/page';
import Behelper from './pages/behelper/page';
import Waiting from './pages/waiting/page';
import Symptom from './pages/symptom/page';
import Profile from './pages/profile/page';

const url = 'https://helper.mysql.database.azure.com';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<App url={url} />} />
        <Route path={'/login'} element={<Login url={url} />} />
        <Route path='/signup' element={<Signup url={url} />} />
        <Route path='/signup/email' element={<SignupEmail url={url} />} />
        <Route path='/behelper' element={<Behelper />} />
        <Route path='/apply' element={<Apply url={url} />} />
        <Route path='/waiting' element={<Waiting url={url} />} />
        <Route path='/profile' element={<Profile url={url} />} />
        <Route path='/symptom' element={<Symptom url={url} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
