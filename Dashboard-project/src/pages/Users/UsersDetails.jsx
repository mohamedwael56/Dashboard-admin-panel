import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { use, useEffect,useState } from "react";
import axios from "axios";

export function UsersDetails(){
  const [users,setUsers]=useState([])
useEffect(()=>{
const fetchUsers=async()=>{
    try{
        const response=await axios("/api/users")
        setUsers(response.data.data)
        console.log(response.data.data)
    }catch(error){
        console.error("error fetching users",error)
    }
}
fetchUsers()
},[])
    return(
    <>
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
  {
users.map((user)=>{
  return(
<div className="grid grid-cols-[1fr_3fr_2fr_2fr_2fr_2fr_2fr] gap-4 p-2">
  <div className="flex start">
   {user.id}
  </div>

  <div className=" flex justify-start items-center ">

<img src="../../image/eddy.png" alt="" width='50px' className="rounded-full" />

<div className=" ml-2 ">
<div > {user.name}</div>

</div>
  </div>
  <div>
{user.email}
  </div>
  <div className="bg-green-700 text-white rounded-xl p-1 select-none">
  {user.role}
  </div>
  <div className="bg-green-500 select-none text-white rounded-xl p-1">
  {user.status}
  </div>
  <div >
    <div className=" ">
{user.registeredAt}
</div>
  </div>
 
  <div className="flex gap-2 justify-center" >
  <a href="Profile" className="bg-violet-400 text-white p-2 rounded-xl text-lg" ><FontAwesomeIcon icon={faEye} /></a>
 
  <a href="#" className="bg-red-500 text-white p-2 rounded-xl text-lg"><FontAwesomeIcon icon={faTrashCan} /></a>
  </div>
</div>

  )
})
  }
 


</div>    </>
    )
}