import axios from "axios"
import { useState } from "react"
export function General(){
   const loggedInUser=JSON.parse(localStorage.getItem('user'))
     const [changeName,setChangeName]=useState(loggedInUser.name)
const [changeEmail,setChangeEmail]=useState(loggedInUser.email)
   const [emailButton,setEmailButton]=useState(false) 


const changingName=(e)=>{
      setChangeName(e.target.value)
   }

const changingEmail=(e)=>{
setChangeEmail(e.target.value)
}
  const clickedEmailButton=()=>{
   if (!emailButton){setEmailButton(true)}
else{setEmailButton(false)}
  }

  const clickSaveChanges= async()=>{
   if (!loggedInUser)return;
   const confirmMessage=window.confirm('are you sure that you would like to change your profile data')
   if(!confirmMessage)return;
   try{
   const response =  await axios.put(`/api/account/update-profile`,{
      userId:loggedInUser.id,
      newName:changeName,
      newEmail:changeEmail
   })
console.log(response.data)
   setEmailButton(false)
   }catch(error){
      alert('something went wrong')
      console.error( error.response.data.message)
   }
  }
   return(
         <div className="flex flex-col items-start">
                <div className="flex flex-col items-start justify-start my-5 mx-3">
                <img src={loggedInUser.image} alt="" className="rounded-full w-45 h-45 object-cover" />
                <button className="border mt-2 bg-gray-400 text-white ml-5 mb-3"> Change Photo</button>
             </div>
             <div className="flex mx-5 gap-4 text-xl">
                <label htmlFor="">Full name</label>
                <input type="text" onChange={changingName} value={changeName} className="border mb-5 ml-6 rounded-lg px-2 "/>
             </div>
             <div className="flex mx-5 my-2 gap-2 text-xl">
                <label htmlFor="">User name</label>
                <input type="text" value={loggedInUser.userName} readOnly className={`border mb-5 ml-6 select-none bg-gray-300 cursor-not-allowed rounded-lg px-2 `}/>
             </div>
             <div className="flex mx-5 my-2 gap-2 text-xl">
                <label htmlFor="">Email address</label>
                <input type="text" value={changeEmail} onChange={changingEmail}  readOnly={emailButton===false} className={`border mb-5 select-none ${!emailButton?'bg-gray-300 cursor-not-allowed':'bg-gray-100'}  rounded-lg px-2 `}/>
                <button onClick={clickedEmailButton} className=" h-8 flex text-[5px] items-center email-button">Change Email</button>
             </div>
            <button onClick={clickSaveChanges} className="flex mx-5 text-white bg-blue-500"> Save Changes</button>
              </div>
    )
}