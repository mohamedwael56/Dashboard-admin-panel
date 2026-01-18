import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import { OrdersDetails } from "./OrdersDetails";
export function OrderList() {
return(
    <>
    <div >
    <Header />
    <div className="mt-20 flex">
    <SideBar />
    <main >
        
<div className="grid grid-cols-4 my-4 gap-4 mx-4">
               
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

      <OrdersDetails />

    </main>
    </div>
    </div>
   </>
)
}