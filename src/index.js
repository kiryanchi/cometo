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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<App />} />
        <Route path={'/login'} element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signup/email' element={<SignupEmail />} />
        <Route path='/behelper' element={<Behelper />} />
        <Route path='/apply' element={<Apply />} />
        <Route path='/waiting' element={<Waiting />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/symptom' element={<Symptom />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
