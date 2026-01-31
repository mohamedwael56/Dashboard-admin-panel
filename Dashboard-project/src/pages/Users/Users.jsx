import { SideBar } from "../../components/SideBar";
import { Header } from "../../components/Header";
import { UsersDetails } from "./UsersDetails";
import {useState} from "react";

export function Users({users}) {

  const [gender,setGender]= useState('All')
  const [rows,setRows]= useState('All')
  const [status,setStatus]= useState('All')
const [search,setSearch]=useState('')

let results= users;
if(rows!=='All'){
  results= results.slice(0,rows);
}
if(gender!=='All'){
  results=results.filter(result=>result.Gender===gender)
}
if(status!=='All'){
  results=results.filter(result=>result.role===status)
}
if(search.trim()!==''){
  results=results.filter(result=>
    result.role.toLowerCase().includes(search.toLowerCase())||
    result.name.toLowerCase().includes(search.toLowerCase()) ||
    result.id.toString().includes(search) ||
    result.email.toLowerCase().includes(search.toLowerCase())
  )
}

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
                <div>Gender</div>
                <div>status</div>
                <div>search by</div>

                <div>
                  <select className="bg-gray-200 p-2"  onChange={(e)=>{ 
                    setRows (e.target.value)
                  }} value={rows}> 
                      <option value="All">All</option>
                      <option value="3">row 3</option>
                      <option value="5">row 5</option>
                      <option value="8">row 8</option>
                  </select>
                </div>
                <div>
                  <select className="bg-gray-200 p-2 " onChange={(e)=>{
                    setGender (e.target.value)
                  }} value={gender}>
                    <option value="All">All</option>
                    <option value="men">men</option>
                    <option value="women">women</option>
                  </select>
                </div>
                <div>
                  <select
                  className="bg-gray-200 p-2" 
                  onChange={(e)=>{setStatus (e.target.value) }} 
                  value={status}>
                    <option value="All">All</option>
                    <option value="admin">admin</option>
                    <option value="user">user</option>
                    <option value="manager">manager</option>
                    <option value="editor">editor</option>
                  </select>
                </div>
                <div>
                  <input
                  onChange={(e)=>{setSearch(e.target.value)}}
                  value={search}
                  className="bg-gray-200 p-2 border-none rounded-lg"
                    type="text"
                    name=""
                    id=""
                    placeholder="id/name/category/brand"
                  />
                </div>
              </div>
            </div>
          </div>

   <UsersDetails results={results} />

    </main>
    </div>
    </>
    )
}