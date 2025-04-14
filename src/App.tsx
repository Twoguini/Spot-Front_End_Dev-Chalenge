import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { LandingPage } from './pages/LandingPage'
import { DashBoard } from './pages/Dashboard';
import { Login } from './pages/Login';

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
