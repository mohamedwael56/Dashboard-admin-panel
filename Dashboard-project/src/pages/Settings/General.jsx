import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { supabase } from "../../supabaseClient"
export function General(){
   const loggedInUser=JSON.parse(localStorage.getItem('user'))
     const [changeName,setChangeName]=useState(loggedInUser.name)
const [changeEmail,setChangeEmail]=useState(loggedInUser.email)
   const [emailButton,setEmailButton]=useState(false) 
const [selectedImage,setSelectedImage]=useState()
const [loading,setLoading]=useState(false)


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
   setLoading(true)

if (loggedInUser.name===changeName
   &&
   loggedInUser.email===changeEmail
   &&
   !selectedImage)return alert('nothing has been changed to be updated')

   const {error:nameError}=await supabase
  .from('userss')
  .update({ name:changeName })
  .eq('id', loggedInUser.id);
  if(nameError){
   setLoading(false)
   console.error(nameError)
   alert('something went wrong regarding the name')
   return;
  }


  if (changeEmail !== loggedInUser.email){
   await supabase.auth.updateUser({email:changeEmail})
   alert('Check your email to confirm the new address')
  }
let imageUrl=loggedInUser.image
 if(selectedImage){
   const fileName=`${loggedInUser.id}.png`;
   const { data: uploadData, error: uploadError }= await supabase.storage
   .from('avatars')
   .upload(fileName,selectedImage,{upsert:true})
console.log("Upload Data:", uploadData);
console.log("Upload Error:", uploadError);

   const {data}= supabase.storage
   .from('avatars')
   .getPublicUrl(fileName)
imageUrl=`${data.publicUrl}?t=${Date.now()}`
console.log("Public URL:", data.publicUrl)

   await supabase
   .from('userss')
   .update({image:imageUrl})
   .eq('id',loggedInUser.id)

 }
 console.log(imageUrl)
    alert('Profile updated')
const updatedUser={...loggedInUser,name:changeName,email:changeEmail,image:imageUrl}
      localStorage.setItem("user", JSON.stringify(updatedUser));
    navigate("/home");
   setLoading(false)

};
   return(
         <div className="flex flex-col items-start">
                <div className="flex flex-col items-start justify-start my-5 mx-3">
                <img src={loggedInUser.image} alt="" className="general-image rounded-full w-45 h-45 object-cover" />
               <input type="file" accept="image/*" hidden  id="upload-photo" onChange={(e)=>{
                  setSelectedImage(e.target.files[0])
                  } } />
                <button onClick={()=>{document.getElementById("upload-photo").click()}} className="border general-change-photo mt-2 bg-gray-400 text-white ml-5 mb-3"> Change Photo</button>
             </div>
             <div className="general-name flex mx-5 gap-4 text-xl">
                <label htmlFor="">Full name</label>
                <input type="text" onChange={changingName} value={changeName} className="border mb-5 ml-6 rounded-lg px-2 "/>
             </div>
             <div className="general-username flex mx-5 my-2 gap-2 text-xl">
                <label htmlFor="">User name</label>
                <input type="text" value={loggedInUser.userName} readOnly className={`border mb-5 ml-6 select-none bg-gray-300 cursor-not-allowed rounded-lg px-2 `}/>
             </div>
             <div className="general-email flex mx-5 my-2 gap-2 text-xl">
                <label htmlFor="">Email address</label>
                <input type="text" value={changeEmail} onChange={changingEmail}  readOnly={emailButton===false} className={`border  mb-5 select-none ${!emailButton?'bg-gray-300 cursor-not-allowed':'bg-gray-100'}  rounded-lg px-2 `}/>
                <button onClick={clickedEmailButton} className=" h-8 flex text-[5px] items-center email-button">Change Email</button>
             </div>
            <button onClick={saveProfile} className="flex mx-5 save-button text-white bg-blue-500"> {loading?'Loading...':'Save Changes'}</button>
              </div>
    )
}