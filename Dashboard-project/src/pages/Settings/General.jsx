import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
export function General(){
   const loggedInUser=JSON.parse(localStorage.getItem('user'))
     const [changeName,setChangeName]=useState(loggedInUser.name)
const [changeEmail,setChangeEmail]=useState(loggedInUser.email)
   const [emailButton,setEmailButton]=useState(false) 
const [selectedImage,setSelectedImage]=useState()
console.log(loggedInUser.image)
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

  const navigate = useNavigate()
const saveProfile = async () => {

if (loggedInUser.name===changeName
   &&
   loggedInUser.email===changeEmail
   &&
   !selectedImage)return alert('nothing has been changed to be updated')

  const formData = new FormData();
  formData.append("userId", loggedInUser.id);
  formData.append("newName", changeName);
  formData.append("newEmail", changeEmail);
  if (selectedImage) formData.append("image", selectedImage);

  try {
    const response = await axios.post("/api/account/update-profile", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    const updatedUser = response.data.user;
    localStorage.setItem("user", JSON.stringify(updatedUser));
    navigate("/home");
  } catch (error) {
    alert("Something went wrong");
    console.error(error.response?.data?.message || error.message);
  }
};
   return(
         <div className="flex flex-col items-start">
                <div className="flex flex-col items-start justify-start my-5 mx-3">
                <img src={loggedInUser.image} alt="" className="rounded-full w-45 h-45 object-cover" />
               <input type="file" accept="image/*" hidden  id="upload-photo" onChange={(e)=>{
                  setSelectedImage(e.target.files[0])
                  } } />
                <button onClick={()=>{document.getElementById("upload-photo").click()}} className="border mt-2 bg-gray-400 text-white ml-5 mb-3"> Change Photo</button>
             </div>
             <div className="flex mx-5 gap-4 text-xl">
                <label htmlFor="">Full name</label>
                <input type="text" onChange={changingName} value={changeName} className="border mb-5 ml-6 rounded-lg px-2 "/>
             </div>
             <div className="flex mx-5 my-2 gap-2 text-xl">
                <label htmlFor="">User name</label>
                <input type="text" value={loggedInUser.username} readOnly className={`border mb-5 ml-6 select-none bg-gray-300 cursor-not-allowed rounded-lg px-2 `}/>
             </div>
             <div className="flex mx-5 my-2 gap-2 text-xl">
                <label htmlFor="">Email address</label>
                <input type="text" value={changeEmail} onChange={changingEmail}  readOnly={emailButton===false} className={`border mb-5 select-none ${!emailButton?'bg-gray-300 cursor-not-allowed':'bg-gray-100'}  rounded-lg px-2 `}/>
                <button onClick={clickedEmailButton} className=" h-8 flex text-[5px] items-center email-button">Change Email</button>
             </div>
            <button onClick={saveProfile} className="flex mx-5 text-white bg-blue-500"> Save Changes</button>
              </div>
    )
}