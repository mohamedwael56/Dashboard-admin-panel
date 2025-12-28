import { SideBar } from "../../components/SideBar";
import { Header } from "../../components/Header";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export function Users(){
    return(<>
<Header />
<div className=" flex mt-18">
    <SideBar />
 <main className="w-full">
        
<div className="bg-gray-100 mx-4 flex p-4 justify-between rounded-xl mt-8">
              <h2 className="font-bold select-none">Profile Page</h2>
              <div className="capitalize">
                <a className="profile-links" href="/">
                  home
                </a>
                <a className="profile-links1" href="Users">
                  {" "}
                  - users
                </a>
                
              </div>
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
  <div className="grid grid-cols-[1fr_3fr_2fr_2fr_2fr_2fr_2fr] 
   gap-4 font-semibold border-b p-1 border bg-blue-500 rounded-lg text-white  ">
    <div className="flex start">UID</div>
    <div className=" flex justify-start ">name</div>
    <div>email </div>
    <div>role</div>
    <div>status</div>
    <div>joined</div>
    <div>order</div>
    
  </div>
<div className="grid grid-cols-[1fr_3fr_2fr_2fr_2fr_2fr_2fr] gap-4 p-2">
  <div className="flex start">
   1
  </div>

  <div className=" flex justify-start items-center ">

<img src="../../image/eddy.png" alt="" width='50px' className="rounded-full" />

<div className=" ml-2 ">
<div > raley zukerberg</div>

</div>
  </div>
  <div>
 raley123@gmail.com
  </div>
  <div className="bg-green-700 text-white rounded-xl p-1 select-none">
  Admin
  </div>
  <div className="bg-green-500 select-none text-white rounded-xl p-1">
  Active
  </div>
  <div >
    <div className=" ">
15/06/2025
</div>
  </div>
 
  <div className="flex gap-2 justify-center" >
  <a href="Profile" className="bg-violet-400 text-white p-2 rounded-xl text-lg" ><FontAwesomeIcon icon={faEye} /></a>
 
  <a href="#" className="bg-red-500 text-white p-2 rounded-xl text-lg"><FontAwesomeIcon icon={faTrashCan} /></a>
  </div>
</div>
 
<div className="grid grid-cols-[1fr_3fr_2fr_2fr_2fr_2fr_2fr] gap-4 p-2">
  <div className="flex start">
 2
  </div>
   <div className=" flex justify-start items-center ">

<img src="../../image/eddy.png" alt="" width='50px' className="rounded-full" />

<div className="ml-2 ">
<div > raley zukerberg</div>

</div>
  </div>
   <div>
 raley123@gmail.com
  </div>
    <div className="bg-blue-700 text-white rounded-xl p-1 select-none">
  viewer
  </div>

  <div className="bg-green-500 select-none text-white rounded-xl p-1">
  Active
  </div>
  <div >
    <div className=" ">
15/06/2025
</div>
  </div>
  
  <div className="flex gap-2 justify-center" >
  <a href="Profile" className="bg-violet-400 text-white p-2 rounded-xl text-lg" ><FontAwesomeIcon icon={faEye} /></a>
 
  <a href="#" className="bg-red-500 text-white p-2 rounded-xl text-lg"><FontAwesomeIcon icon={faTrashCan} /></a>
  </div>
</div>

<div className="grid grid-cols-[1fr_3fr_2fr_2fr_2fr_2fr_2fr] gap-4 p-2">
  <div className="flex start"> 
 3
  </div>
   <div className=" flex justify-start items-center ">

<img src="../../image/eddy.png" alt="" width='50px' className="rounded-full" />

<div className="ml-2 ">
<div > raley zukerberg</div>

</div>
  </div>
   <div>
 raley123@gmail.com
  </div>
  <div className="bg-yellow-700 text-white rounded-xl p-1 select-none">
  editor
  </div>
  <div className="bg-red-600 select-none text-white rounded-xl p-1">
  Blocked
  </div>
  <div >
    <div className="">
15/06/2025
</div>
  </div>
 
  <div className="flex gap-2 justify-center" >
  <a href="Profile" className="bg-violet-400 text-white p-2 rounded-xl text-lg" ><FontAwesomeIcon icon={faEye} /></a>
 
  <a href="#" className="bg-red-500 text-white p-2 rounded-xl text-lg"><FontAwesomeIcon icon={faTrashCan} /></a>
  </div>
</div>
<div className="grid grid-cols-[1fr_3fr_2fr_2fr_2fr_2fr_2fr] gap-4 p-2">
  <div className="flex start">
 4
  </div>
  <div className=" flex justify-start items-center ">

<img src="../../image/eddy.png" alt="" width='50px' className="rounded-full" />

<div className=" ml-2 ">
<div > raley zukerberg</div>

</div>
  </div>
   <div>
 raley123@gmail.com
  </div>
  <div className="bg-green-700 text-white rounded-xl p-1 select-none">
  Admin
  </div>
  <div className="bg-green-500 select-none text-white rounded-xl p-1">
  Active
  </div>
  <div >
    <div className=" ">
15/06/2025
</div>
  </div>
  
  <div className="flex gap-2 justify-center" >
  <a href="Profile" className="bg-violet-400 text-white p-2 rounded-xl text-lg" ><FontAwesomeIcon icon={faEye} /></a>
 
  <a href="#" className="bg-red-500 text-white p-2 rounded-xl text-lg"><FontAwesomeIcon icon={faTrashCan} /></a>
  </div>
</div>
<div className="grid grid-cols-[1fr_3fr_2fr_2fr_2fr_2fr_2fr] gap-4 p-2">
  <div className="flex start">
   5
  </div>
   <div className=" flex justify-start items-center ">

<img src="../../image/eddy.png" alt="" width='50px' className="rounded-full"  />

<div className=" ml-2 ">
<div > raley zukerberg</div>

</div>
  </div>
  <div>
 raley123@gmail.com
  </div>
      <div className="bg-blue-700 text-white rounded-xl p-1 select-none">
  viewer
  </div>
  <div className="bg-red-600 select-none text-white rounded-xl p-1">
  Blocked
  </div>
  <div >
    <div className=" ">
15/06/2025
</div>
  </div>
 
  <div className="flex gap-2 justify-center" >
  <a href="Profile" className="bg-violet-400 text-white p-2 rounded-xl text-lg" ><FontAwesomeIcon icon={faEye} /></a>
  <a href="#" className="bg-red-500 text-white p-2 rounded-xl text-lg"><FontAwesomeIcon icon={faTrashCan} /></a>
  </div>
</div>


</div>

    </main>
    </div>
    </>
    )
}