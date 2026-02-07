import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import { OrdersDetails } from "./OrdersDetails";
import { useEffect, useState } from "react";
import './orders.css'
import { supabase } from "../../supabaseClient.js";
export function OrderList({collapsed,collapsingButton}) {

const [rows,setRows]= useState('All')
const [status,setStatus]= useState('All')
const [search,setSearch]=useState('')
const [gender,setGender]=useState('All')

 const [orders,setOrders]=useState([])

    useEffect(()=>{
    const fetchOrders=async()=>{
      const {data,error}= await supabase.from('orders').select('*');
      if(error){
                    console.error("error fetching orders",error)

      }else{
        setOrders(data)
      }
    }
    fetchOrders()
    },[])

let results= orders;
if(rows!=='All'){
  results= results.slice(0,rows);
}
if(status!=='All'){
  results=results.filter(result=>result.status===status)
}
if(gender!=='All'){
  results=results.filter(result=>result.Gender===gender)
}
if(search.trim()!==''){
  results=results.filter(result=>
    result.id.toString().includes(search) ||
    result.customerName.toLowerCase().includes(search.toLowerCase()) ||
    result.paymentMethod.toLowerCase().includes(search.toLowerCase())||
    result.status.toLowerCase().includes(search.toLowerCase())||
    result.quantity.toString().includes(search)||
    result.totalPrice.toString().includes(search)
 
  );
}

return(
    <>
    <div >
    <Header collapsingButton={collapsingButton} />
    <div className="mt-15 flex">
    <SideBar collapsed={collapsed} />
    <main >
        
<div className="orders-cards grid grid-cols-4 my-4 gap-4 mx-4">
               
 <button className="flex justify-between  row-span-1 bg-gradient-to-r from-pink-500 to-pink-300 p-4 text-white">
              <div className="flex flex-col justify-between h-full items-start">
                  
                   <div>547</div>
                <div>Pending_orders</div>
              </div>
            </button>
              
             <button className=" flex justify-between capitalize row-span-1 bg-gradient-to-r from-blue-500 to-blue-200 p-6 text-white flex flex-col gap-2 items-start">
               <div>398</div>
                  <div>Shipped_orders</div>
            
            </button>
           
             <button className="flex justify-between h-24 bg-gradient-to-r from-green-700 to-green-300 p-4 text-white border-none">
              <div className="flex flex-col justify-between items-start"> 
                 <div>605</div>
                  <div>reviewed_Orders</div>
                   
              </div>
            </button>
            <button className="flex justify-between  row-span-1 bg-gradient-to-r from-red-500 to-red-300 p-4 text-white">
              <div className="flex flex-col justify-between h-full items-start">
                  <div>249</div>
                  <div>canceled_Orders</div>
              </div>
            </button>
</div>
         <div className="filtration-box capitalize mt-8 bg-gray-100 rounded-2xl  ">
            <div className="flex flex-col items-start p-5">
                <h2 className="filtration-title font-bold text-lg mb-5">order information</h2>
              <div className="w-full grid grid-cols-4 gap-4  ">
                <div>showed by</div>
                <div>Gender</div>
                <div>status</div>
                <div>search by</div>

                <div>
                  <select className="select-options bg-gray-200 p-2"
                  onChange={(e)=>{setRows(e.target.value)}}
                  value={rows}>
                      <option value="All">All</option>
                      <option value="3">3 rows</option>
                      <option value="5">5 rows</option>
                      <option value="8">8 rows</option>
                  </select>
                </div>
                <div>
                  <select className=" select-options bg-gray-200 p-2"
                  onChange={(e)=>{setGender(e.target.value)}}
                  value={gender}>
                    <option value="All">All</option>
                    <option value="men">men</option>
                    <option value="women">women</option>
                  </select>
                </div>
                <div>
                  <select className=" select-options bg-gray-200 p-2"
                  onChange={(e)=>{setStatus(e.target.value)}}
                  value={status}>
                    <option value="All">All</option>
                    <option value="completed">completed</option>
                    <option value="pending">pending</option>
                    <option value="cancelled">canceled</option>
                  </select>
                </div>
                <div>
                  <input
                  onChange={(e)=>{setSearch(e.target.value)}}
                  value={search}
                  className="select-options bg-gray-200 p-2 border-none rounded-lg"
                    type="text"
                    name=""
                    id=""
                    placeholder="id/name/status/amount"
                  />
                </div>
              </div>
            </div>
          </div>

      <OrdersDetails orders={results} />

    </main>
    </div>
    </div>
   </>
)
}