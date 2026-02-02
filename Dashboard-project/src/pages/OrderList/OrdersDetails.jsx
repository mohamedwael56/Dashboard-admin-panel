
export function OrdersDetails({orders}){
   

    return(
        <>
  <div className="w-full mx-5 flex flex-col justify-start ">
  <div className="grid grid-cols-[1fr_3fr_2fr_2fr_2fr_2fr_2fr] 
   gap-4 font-semibold border-b p-1 border bg-blue-500 rounded-lg text-white  ">
    <div className="flex start">UID</div>
    <div className=" flex justify-start ">client</div>
    <div>items </div>
    <div>amount</div>
    <div>payment</div>
    <div>status</div>
    <div>order date</div>
    
  </div>
  {
orders.map((order)=>{
  return(
    <div className="grid grid-cols-[1fr_3fr_2fr_2fr_2fr_2fr_2fr] gap-4 p-2">
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
  <div className={`${order.status==='completed'&& 'bg-green-600'||order.status==='pending'&&'bg-yellow-600'||order.status==='cancelled'&& 'bg-red-600'} text-white rounded-xl p-1`}>
  {order.status}
  </div>
  <div >
    <div className="flex items-center ml-6">
{order.orderDate}
</div>
  </div>
 
</div>
    
  )
  })
}

 


</div>
        </>
        )
    }