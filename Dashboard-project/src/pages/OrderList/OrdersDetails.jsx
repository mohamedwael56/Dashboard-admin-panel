import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect,useState } from "react";
import axios from "axios";


export function OrdersDetails(){
    const [orders,setOrders]=useState([])

    useEffect(()=>{
    const fetchOrders=async()=>{
        try{
            const response=await axios("/api/orders")
            setOrders(response.data.data)
            console.log(response.data.data)
        }catch(error){
            console.error("error fetching orders",error)
        }
    }
    fetchOrders()
    },[])

    return(
        <>
  <div className="w-full mx-5 flex flex-col justify-start ">
  <div className="grid grid-cols-[1fr_3fr_2fr_2fr_2fr_2fr_2fr_2fr] 
   gap-4 font-semibold border-b p-1 border bg-blue-500 rounded-lg text-white  ">
    <div className="flex start">UID</div>
    <div className=" flex justify-start ">client</div>
    <div>items </div>
    <div>amount</div>
    <div>payment</div>
    <div>status</div>
    <div>order date</div>
    <div>order</div>
    
  </div>
  {
orders.map((order)=>{
  return(
    <div className="grid grid-cols-[1fr_3fr_2fr_2fr_2fr_2fr_2fr_2fr] gap-4 p-2">
  <div className="flex start">
   {order.id}
  </div>

  <div className=" flex justify-start items-center ">

<img src={`${order.image}`} alt="" width='25px'  className="rounded-full " />

<div className="text-sm ml-2 ">
<div > {order.customerName}</div>

</div>
  </div>
  <div>
({order.itemsCount}) items
  </div>
  <div>
  ${order.totalPrice}
  </div>
  <div>
  {order.paymentMethod}
  </div>
  <div className="bg-fuchsia-500 text-white rounded-xl p-1">
  {order.status}
  </div>
  <div >
    <div className="flex items-center ">
{order.orderDate}
</div>
  </div>
 
  <div className="flex items-center gap-1" >
  <a href="#" className="bg-violet-400 text-white p-2 rounded-xl text-lg" ><FontAwesomeIcon icon={faEye} /></a>
  <a href="#" className="bg-green-300 text-white p-2 rounded-xl text-lg"><FontAwesomeIcon icon={faPen} /></a>
  <a href="#" className="bg-red-500 text-white p-2 rounded-xl text-lg"><FontAwesomeIcon icon={faTrashCan} /></a>
  </div>
</div>
    
  )
  })
}

 


</div>
        </>
        )
    }