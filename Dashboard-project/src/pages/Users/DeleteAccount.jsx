import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";

export function DeleteAccount() {

const user =JSON.parse(localStorage.getItem('user'))
  const navigate=useNavigate()


  const deleteAccount= async ()=>{
if (!user)return;
const confirm = window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
)
if(!confirm)return;

const {error}=await supabase.from('userss').delete().eq('id',user.id)
if(error){
  console.error(error)
  alert('something went wrong!')
}
localStorage.removeItem('user');

      await supabase.auth.signOut();

navigate('/')

}



  
  return (
    <div className="delete-account-page my-5 ">   
        <h2 className="text-xl">Delete Account</h2>
        <p className="text-xl">Are you sure you want to delete your account? This action cannot be undone.</p>
        <button onClick={deleteAccount} className="delete-account-button my-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl ">Delete My Account</button>
    </div>
  );
}