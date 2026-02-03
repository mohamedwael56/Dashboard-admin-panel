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
import { EachProduct } from './pages/ProductsDetails/EachProduct.jsx'
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [collapsed, setCollapsed] = useState(false);
const collapsingButton=()=>{
  setCollapsed(!collapsed)
}
    const [products, setProducts] = useState([]);
useEffect(()=>{

const fetchBrandsDetails = async ()=>{
  try{
const response= await axios.get('/api/products')
setProducts(response.data.data)
} catch(error){
  console.error('Error fetching brands details:',error)}
}
fetchBrandsDetails()
},[])


    const [users,setUsers]=useState([])
useEffect(()=>{
const fetchUsers=async()=>{
    try{
        const response=await axios("/api/users")
        setUsers(response.data.data)
    }catch(error){
        console.error("error fetching users",error)
    }
}
fetchUsers()
},[])


  return (
    <>
    <Routes>
      <Route path='/home' element={<Home products={products} users={users} collapsingButton={collapsingButton} collapsed={collapsed} />} />
      <Route path='/' element={<Login />} />
      <Route path='/Register' element={<Register />} />
      <Route path='/ResetPassword' element={<ResetPassword />} />
      <Route path='/ResetPassword2' element={<ResetPassword2 />} />
      <Route path='/ProductsDetails' element={<ProductsDetails products={products} collapsingButton={collapsingButton} collapsed={collapsed} />} />
      <Route path='/OrdersList' element={<OrderList collapsingButton={collapsingButton} collapsed={collapsed} />} />
      <Route path='/Profile/:userId' element={<Profile users={users} collapsingButton={collapsingButton} collapsed={collapsed} />} />
      <Route path='/Users' element={<Users users={users} collapsingButton={collapsingButton} collapsed={collapsed} />} />
      <Route path='/Settings' element={<Settings collapsingButton={collapsingButton} collapsed={collapsed} />} />
      <Route path='/EachProduct/:orderId' element={<EachProduct products={products} />} />
    </Routes>
  
    </>
  )
}

export default App
