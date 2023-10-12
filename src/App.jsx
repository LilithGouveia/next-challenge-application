import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard'
import Home from './pages/Home';
import Login from './pages/Login';
import NoPage from './pages/NoPage';
import './style/pages/main.scss';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route exact path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
