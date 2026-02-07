import './Profile.css'
import { supabase } from '../../supabaseClient'
import { useState } from 'react'
import { useParams } from "react-router-dom"
export function GeneralInfo({users}) {
      const loggedInUser=JSON.parse(localStorage.getItem('user'))

      const {userId}=useParams()

      const userDetails= users.find((data)=>{
      return data.id===userId
    })
    const [role,setRole]=useState(userDetails?userDetails.role:'')
    const [status,setStatus]=useState(userDetails?userDetails.status:'')
    if(!userDetails){
      return(<div>nothing found</div>)
    }

const changeUserAccessability= async (newRole,newStatus)=>{
  
const {data,error}= await supabase.from('userss').update({role:newRole,status:newStatus}).eq('id',userDetails.id)
if(error){
  alert('something went wrong.')
  console.error(error)
}else{
  alert('profile has changed successfully')
    console.log(data)

}
}

    console.log(loggedInUser)
  return (
  <div className="flex main-generalInfo flex-col">
                <div className="flex items-center m-3 mt-5">
                  <h2 className="font-bold text-black opacity-85 whitespace-nowrap ">
                    public information
                  </h2>
                </div>
                
                <div className="flex justify-start gap-5">
                  <div className="flex flex-col items-start mt-5 mb-5  ml-2">
                    <img
                      src={`${userDetails.image}`}
                      className="general-pic rounded-full w-32 h-32 object-cover border"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3 m-3 h-30 self-center w-3/4">
                    <div className=" flex relative ">
                      <input
                      readOnly
                      value={userDetails.name}
                      className="border px-2 cursor-not-allowed rounded-xl h-10 w-full"
                      type="text "
                      />
                      <span className="absolute bottom-7  bg-gray-100">
                        Fullname
                      </span>
                    </div>
                    <div className=" flex relative ">
                      <input
                      readOnly
                      value={userDetails.userName}
                        type="text"
                        className="px-2 cursor-not-allowed  rounded-xl h-10 w-full border"
                      />
                      <span className="absolute bottom-7 select-none bg-gray-100">
                        Username
                      </span>
                    </div>
                    <div className=" flex relative  col-span-2 ">
                      <textarea
                      readOnly
                      value="."
                        type="text"
                        className="h-30 cursor-not-allowed rounded-xl border px-2 py-3 w-full"
                      />
                      <span className="absolute  bottom-26 bg-gray-100 ">
                        Biography
                      </span>
                    </div>
                  </div>
                </div>
                <h2 className="flex mt-8 items-start font-bold text-black opacity-85 m-3">
                  private information
                </h2>
                <div className="grid grid-cols-3 gap-3 mb-3 mx-3">
                  <div className=" flex relative">
                    <input
                    readOnly
                    value={userDetails.id}
                      type="text"
                      className="border cursor-not-allowed px-5 py-2 rounded-xl w-full"
                    />
                    <span className="absolute bottom-7 bg-gray-100">
                      Unique id
                    </span>
                  </div>
                  <div className=" flex relative ">
                    <select
                      name=""
                      id=""
                      className="w-full px-5 py-2 border rounded-xl"
                    value={role} disabled={loggedInUser.role.toLowerCase()!=="admin"&& loggedInUser.role.toLowerCase()!=='manager'}
                    onChange={async(e)=>{
                      const newRole= e.target.value
                      setRole(newRole)
                    await changeUserAccessability(newRole,status)
                  }}
                  >
                      <option value="Admin">Admin</option>
                      <option value="viewer">Viewer</option>
                      <option value="editor">Editor</option>
                      <option value="manager">manager</option>
                    </select>
                    <span className="absolute bottom-7 bg-gray-100">Role </span>
                  </div>
                  <div className="flex relative">
                    <select
                      name=""
                      id=""
                      className="w-full px-5 py-2 border rounded-xl"
                   value={status} disabled={loggedInUser.role!=='Admin'&& loggedInUser.role!=='manager'}
                   onChange={async(e)=>{
                    const newStatus= e.target.value
                    setStatus(newStatus)
                   await changeUserAccessability(role,newStatus)
                    }}                  >
                      <option value="Active">Active</option>
                      <option value="blocked">blocked</option>
                    </select>
                    <span className="absolute bottom-7 bg-gray-100">
                      status
                    </span>
                  </div>
                  <div className=" flex relative">
                    <input
                    readOnly
                    value={userDetails.email}
                      type="text"
                      className="border cursor-not-allowed px-5 py-2 rounded-xl w-full"
                    />
                    <span className="absolute bottom-7 bg-gray-100">
                      Email{" "}
                    </span>
                  </div>
                  <div className=" flex relative">
                    <input
                    readOnly
                    value="123456789"
                      type="text"
                      className="border cursor-not-allowed px-5 py-2 rounded-xl w-full"
                    />
                    <span className="absolute bottom-7 bg-gray-100">Phone</span>
                  </div>
                  <div className=" flex relative">
                    <input
                    readOnly
                    value=".net"
                      type="text"
                      className="border cursor-not-allowed px-5 py-2 rounded-xl w-full"
                    />
                    <span className="absolute bottom-7 bg-gray-100">
                      Website
                    </span>
                  </div>
                  <div className=" flex relative col-span-3">
                    <textarea
                    readOnly
                    value="123street"
                      type="text"
                      className="border cursor-not-allowed px-5 py-2 h-64  rounded-xl w-full"
                    />
                    <span className="absolute bottom-60 bg-gray-100">
                      address
                    </span>
                  </div>{" "}
                </div>
                <h2 className="flex items-start mx-6 font-bold text-black opacity-85 m-3">
                  {" "}
                  social information{" "}
                </h2>
                <div className="grid grid-cols-2 mx-5 gap-3  justify-content w-[50vw] mb-5">
                  <div className=" flex relative">
                    <input
                    readOnly
                    value="Coming soon"
                      type="text"
                      className="border cursor-not-allowed px-5 py-2 rounded-xl w-full"
                    />
                    <span className="absolute bottom-7 bg-gray-100">
                      Facebook{" "}
                    </span>
                  </div>
                  <div className=" flex relative">
                    <input
                    readOnly
                    value="Coming soon"
                      type="text"
                      className="border cursor-not-allowed px-5 py-2 rounded-xl w-full"
                    />
                    <span className="absolute bottom-7 bg-gray-100">
                      Twitter{" "}
                    </span>
                  </div>
                  <div className=" flex relative">
                    <input
                    readOnly
                    value="Coming soon"
                      type="text"
                      className="border cursor-not-allowed px-5 py-2 rounded-xl w-full"
                    />
                    <span className="absolute bottom-7 bg-gray-100">
                      Linkedin{" "}
                    </span>
                  </div>
                  <div className=" flex relative">
                    <input
                    readOnly
                    value="Coming soon"
                      type="text"
                      className="border cursor-not-allowed px-5 py-2 rounded-xl w-full"
                    />
                    <span className="absolute bottom-7 bg-gray-100">
                      Instagram{" "}
                    </span>
                  </div>
                  <div className=" flex relative">
                    <input
                    readOnly
                    value="Coming soon"
                      type="text"
                      className="border cursor-not-allowed px-5 py-2 rounded-xl w-full"
                    />
                    <span className="absolute bottom-7 bg-gray-100">
                      Youtube{" "}
                    </span>
                  </div>
                  <div className=" flex relative">
                    <input
                    readOnly
                    value="Coming soon"
                      type="text"
                      className="border cursor-not-allowed px-5 py-2 rounded-xl w-full"
                    />
                    <span className="absolute bottom-7 bg-gray-100">
                      Pinterest{" "}
                    </span>
                  </div>{" "}
                </div>
              </div>
  );
}