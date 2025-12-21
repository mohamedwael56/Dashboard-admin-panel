import './App.css'
import { Home } from './pages/home/Home.jsx'
import { Routes,Route } from 'react-router-dom'
import { Login } from './pages/login/Login.jsx'
import { Register } from './pages/login/Register.jsx'
import { ResetPassword } from './pages/login/ResetPassword.jsx'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='Login' element={<Login />} />
      <Route path='Register' element={<Register />} />
      <Route path='ResetPassword' element={<ResetPassword />} />
    </Routes>
  
    </>
  )
}

export default App
