import axios from "axios";
import { useNavigate } from "react-router-dom";

export function DeleteAccount() {

const user =JSON.parse(localStorage.getItem('user'))
  const navigate=useNavigate()


  const deleteAccount= async ()=>{
if (!user)return;
const confirm = window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
)
if(!confirm)return;
try{
const response = await axios.delete(`/api/account/delete-account`,{
  data: {
    userId:user.id
  }}
)

localStorage.clear()

response&&navigate('/')
}catch(error){
  alert('something went wrong ')
  console.error(error?.response?.data.message)
}
}



  
  return (
    <div className="delete-account-page my-5 ">   
        <h2 className="text-xl">Delete Account</h2>
        <p className="text-xl">Are you sure you want to delete your account? This action cannot be undone.</p>
        <button onClick={deleteAccount} className="delete-account-button my-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl ">Delete My Account</button>
    </div>
  );
}