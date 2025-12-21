import './App.css'
import { Home } from './pages/home/Home.jsx'
import { Routes,Route } from 'react-router-dom'
import { Login } from './pages/auth/Login.jsx'
import { Register } from './pages/auth/Register.jsx'
import { ResetPassword } from './pages/auth/ResetPassword.jsx'
import { ProductsDetails } from './pages/ProductsDetails/ProductsDetails.jsx'
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='Login' element={<Login />} />
      <Route path='Register' element={<Register />} />
      <Route path='ResetPassword' element={<ResetPassword />} />
      <Route path='ProductsDetails' element={<ProductsDetails />} />
    </Routes>
  
    </>
  )
}

export default App
