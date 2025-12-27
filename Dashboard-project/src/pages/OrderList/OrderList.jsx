import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function OrderList() {
return(
    <>
    <div >
    <Header />
    <div className="mt-15 flex">
    <SideBar />
    <main >
        
<div className="grid grid-cols-4 my-4 gap-4 mx-4">
               
 <button class="flex justify-between  row-span-1 bg-gradient-to-r from-pink-500 to-pink-300 p-4 text-white">
              <div className="flex flex-col justify-between h-full items-start">
                  
                   <div>547</div>
                <div>Pending_orders</div>
              </div>
            </button>
              
             <button class=" flex justify-between capitalize row-span-1 bg-gradient-to-r from-blue-500 to-blue-200 p-6 text-white flex flex-col gap-2 items-start">
               <div>398</div>
                  <div>Shipped_orders</div>
            
            </button>
           
             <button className="flex justify-between h-24 bg-gradient-to-r from-green-700 to-green-300 p-4 text-white border-none">
              <div className="flex flex-col justify-between items-start"> 
                 <div>605</div>
                  <div>reviewed_Orders</div>
                   
              </div>
            </button>
            <button class="flex justify-between  row-span-1 bg-gradient-to-r from-red-500 to-red-300 p-4 text-white">
              <div className="flex flex-col justify-between h-full items-start">
                  <div>249</div>
                  <div>canceled_Orders</div>
              </div>
            </button>
</div>
         <div className="capitalize mt-8 bg-gray-100 rounded-2xl  ">
            <div className="flex flex-col items-start p-5">
                <h2 className="font-bold text-lg mb-5">order information</h2>
              <div className="w-full grid grid-cols-4 gap-4  ">
                <div>showed by</div>
                <div>status by</div>
                <div>issued by</div>
                <div>search by</div>

                <div>
                  <select className="bg-gray-200 p-2">
                      <option value="10">row 10</option>
                      <option value="20">row 20</option>
                      <option value="50">row 50</option>
                      <option value="100">row 100</option>
                  </select>
                </div>
                <div>
                  <select className="bg-gray-200 p-2">
                    <option value="men">men</option>
                    <option value="women">women</option>
                  </select>
                </div>
                <div>
                  <input className="bg-gray-200 p-2 border-none rounded-lg"
                    type="date"
                    name=""
                    id=""
                    placeholder="id/name/category/brand"
                  />
                </div>
                <div>
                  <input className="bg-gray-200 p-2 border-none rounded-lg"
                    type="text"
                    name=""
                    id=""
                    placeholder="id/name/category/brand"
                  />
                </div>
              </div>
            </div>
          </div>

        <div className="w-full mx-5 flex flex-col justify-start ">
  <div className="grid grid-cols-[1fr_3fr_2fr_2fr_2fr_2fr_2fr_2fr] 
   gap-4 font-semibold border-b p-1 border bg-blue-500 rounded-lg text-white  ">
    <div className="flex start">UID</div>
    <div className=" flex justify-start ">clint</div>
    <div>items </div>
    <div>amount</div>
    <div>payment</div>
    <div>status</div>
    <div>order date</div>
    <div>order</div>
    
  </div>
<div className="grid grid-cols-[1fr_3fr_2fr_2fr_2fr_2fr_2fr_2fr] gap-4 p-2">
  <div className="flex start">
   1
  </div>

  <div className=" flex justify-start items-center ">

<img src="../../image/eddy.png" alt="" width='40px' className="rounded-full" />

<div className="text-sm ml-2 ">
<div > raley zukerberg</div>

</div>
  </div>
  <div>
(2) items
  </div>
  <div>
  $56.00
  </div>
  <div>
  cash
  </div>
  <div className="bg-fuchsia-500 text-white rounded-xl p-1">
  pending
  </div>
  <div >
    <div className="flex items-center ">
15/06/2025
</div>
  </div>
 
  <div className="flex items-center gap-1" >
  <a href="#" className="bg-violet-400 text-white p-2 rounded-xl text-lg" ><FontAwesomeIcon icon={faEye} /></a>
  <a href="#" className="bg-green-300 text-white p-2 rounded-xl text-lg"><FontAwesomeIcon icon={faPen} /></a>
  <a href="#" className="bg-red-500 text-white p-2 rounded-xl text-lg"><FontAwesomeIcon icon={faTrashCan} /></a>
  </div>
</div>
 
<div className="grid grid-cols-[1fr_3fr_2fr_2fr_2fr_2fr_2fr_2fr] gap-4 p-2">
  <div className="flex start">
 2
  </div>
   <div className=" flex justify-start items-center ">

<img src="../../image/eddy.png" alt="" width='40px' className="rounded-full" />

<div className="text-sm ml-2 ">
<div > raley zukerberg</div>

</div>
  </div>
   <div>
(2) items
  </div>
  <div>
  $56.00
  </div>
  <div>
  visa
  </div>
  <div className="bg-green-500 text-white rounded-xl p-1">
  shipped
  </div>
  <div >
    <div className="flex items-center ">
15/06/2025
</div>
  </div>
  
  <div className="flex items-center gap-1" >
  <a href="#" className="bg-violet-400 text-white p-2 rounded-xl text-lg" ><FontAwesomeIcon icon={faEye} /></a>
  <a href="#" className="bg-green-300 text-white p-2 rounded-xl text-lg"><FontAwesomeIcon icon={faPen} /></a>
  <a href="#" className="bg-red-500 text-white p-2 rounded-xl text-lg"><FontAwesomeIcon icon={faTrashCan} /></a>
  </div>
</div>

<div className="grid grid-cols-[1fr_3fr_2fr_2fr_2fr_2fr_2fr_2fr] gap-4 p-2">
  <div className="flex start"> 
 3
  </div>
   <div className=" flex justify-start items-center ">

<img src="../../image/eddy.png" alt="" width='40px' className="rounded-full" />

<div className="text-sm ml-2 ">
<div > raley zukerberg</div>

</div>
  </div>
   <div>
(2) items
  </div>
  <div>
  $56.00
  </div>
  <div>
  visa
  </div>
  <div className="bg-red-600 text-white rounded-xl p-1">
  canceled
  </div>
  <div >
    <div className="flex items-center ">
15/06/2025
</div>
  </div>
 
  <div className="flex items-center gap-1" >
  <a href="#" className="bg-violet-400 text-white p-2 rounded-xl text-lg" ><FontAwesomeIcon icon={faEye} /></a>
  <a href="#" className="bg-green-300 text-white p-2 rounded-xl text-lg"><FontAwesomeIcon icon={faPen} /></a>
  <a href="#" className="bg-red-500 text-white p-2 rounded-xl text-lg"><FontAwesomeIcon icon={faTrashCan} /></a>
  </div>
</div>
<div className="grid grid-cols-[1fr_3fr_2fr_2fr_2fr_2fr_2fr_2fr] gap-4 p-2">
  <div className="flex start">
 4
  </div>
  <div className=" flex justify-start items-center ">

<img src="../../image/eddy.png" alt="" width='40px' className="rounded-full" />

<div className="text-sm ml-2 ">
<div > raley zukerberg</div>

</div>
  </div>
   <div>
(2) items
  </div>
  <div>
  $56.00
  </div>
  <div>
  paypal
  </div>
  <div className="bg-fuchsia-500 text-white rounded-xl p-1">
  pending
  </div>
  <div >
    <div className="flex items-center ">
15/06/2025
</div>
  </div>
  
  <div className="flex items-center gap-1" >
  <a href="#" className="bg-violet-400 text-white p-2 rounded-xl text-lg" ><FontAwesomeIcon icon={faEye} /></a>
  <a href="#" className="bg-green-300 text-white p-2 rounded-xl text-lg"><FontAwesomeIcon icon={faPen} /></a>
  <a href="#" className="bg-red-500 text-white p-2 rounded-xl text-lg"><FontAwesomeIcon icon={faTrashCan} /></a>
  </div>
</div>
<div className="grid grid-cols-[1fr_3fr_2fr_2fr_2fr_2fr_2fr_2fr] gap-4 p-2">
  <div className="flex start">
   5
  </div>
   <div className=" flex justify-start items-center ">

<img src="../../image/eddy.png" alt="" width='40px' className="rounded-full"  />

<div className="text-sm ml-2 ">
<div > raley zukerberg</div>

</div>
  </div>
  <div>
(2) items
  </div>
  <div>
  $56.00
  </div>
  <div>
  cash
  </div>
  <div className="bg-fuchsia-500 text-white rounded-xl p-1">
  pending
  </div>
  <div >
    <div className="flex items-center ">
15/06/2025
</div>
  </div>
 
  <div className="flex items-center gap-1" >
  <a href="#" className="bg-violet-400 text-white p-2 rounded-xl text-lg" ><FontAwesomeIcon icon={faEye} /></a>
  <a href="#" className="bg-green-300 text-white p-2 rounded-xl text-lg"><FontAwesomeIcon icon={faPen} /></a>
  <a href="#" className="bg-red-500 text-white p-2 rounded-xl text-lg"><FontAwesomeIcon icon={faTrashCan} /></a>
  </div>
</div>


</div>

    </main>
    </div>
    </div>
   </>
)
}