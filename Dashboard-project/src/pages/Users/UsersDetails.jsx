import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export function UsersDetails({results}){
    return(
    <>
     <div className="w-full users-box mx-5 flex flex-col justify-start ">
  <div className="box-header grid grid-cols-[2fr_3fr_3fr_2fr_2fr_2fr_1fr] 
   gap-4 font-semibold border-b p-1 border bg-blue-500 rounded-lg text-white  ">
    <div className="flex justify-start ">UID</div>
    <div className=" flex items-start justify-start ">name</div>
    <div>email </div>
    <div>role</div>
    <div>status</div>
    <div>joined</div>
    <div>order</div>
    
  </div>
  {
results.map((user)=>{
  console.log('a8a',user.image)
  return(
<div className="grid users-details grid-cols-[2fr_3fr_3fr_2fr_2fr_2fr_1fr] gap-4 p-2">
  <div className="flex justify-start items-start user-id ">
   {user.id}
  </div>

  <div className=" flex justify-start items-center ">

<img src={`${user.image}`} alt="" width='25px' className="rounded-full users-pics" />

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
 
  <div className=" mt-2  " >
  <Link to={`/Profile/${user.id}`} className="action-button bg-violet-400 text-white p-4  rounded-xl text-lg" ><FontAwesomeIcon icon={faEye} /></Link>
 
  </div>
</div>

  )
})
  }
 


</div>    </>
    )
}