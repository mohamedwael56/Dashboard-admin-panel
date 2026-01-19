import './App.css'
import { Home } from './pages/home/Home.jsx'
import { Routes,Route } from 'react-router-dom'
import { Login } from './pages/auth/Login.jsx'
import { Register } from './pages/auth/Register.jsx'
import { ResetPassword } from './pages/auth/ResetPassword.jsx'
import { ProductsDetails } from './pages/ProductsDetails/ProductsDetails.jsx'
import { OrderList } from './pages/OrderList/OrderList.jsx'
import { Profile } from './pages/Users/Profile.jsx'
import { Users } from './pages/Users/Users.jsx'
import { Settings } from './pages/Settings/Settings.jsx'
import { ResetPassword2 } from './pages/auth/ResetPassword2.jsx'
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='Login' element={<Login />} />
      <Route path='Register' element={<Register />} />
      <Route path='ResetPassword' element={<ResetPassword />} />
      <Route path='ResetPassword2' element={<ResetPassword2 />} />
      <Route path='ProductsDetails' element={<ProductsDetails />} />
      <Route path='OrdersList' element={<OrderList />} />
      <Route path='Profile' element={<Profile />} />
      <Route path='Users' element={<Users />} />
      <Route path='Settings' element={<Settings />} />
    </Routes>
  
    </>
  )
}

export default App
