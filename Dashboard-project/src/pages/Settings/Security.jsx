import './security.css';
import { Link } from "react-router-dom";

const user = JSON.parse(localStorage.getItem('user'))
export function Security(){
    return(
        <div className=" security-settings px-6 py-5 bg-gray-100 rounded-xl">
  <h2 className="text-xl font-bold mb-6">Security Settings</h2>

  
  <div className="change-password-section mb-8 p-4 bg-white rounded-xl shadow-sm">
    <h3 className="font-semibold mb-3">to change your password click on the button down below</h3>
     
      <Link to={`/profile/${user.id}`} className=" change-password bg-blue-600  px-4 py-2 rounded-xl mt-2 hover:bg-blue-700">Update Password</Link>
  </div>



  <div className="delete-account-section p-4 bg-white rounded-xl shadow-sm">
    <h3 className="font-semibold mb-3 text-red-600">Delete Account</h3>
    <p className="text-sm text-gray-600 mb-3"> to delete your account click on the button down below</p>
    <Link to={`/profile/${user.id}`} className="delete-account  bg-red-600 hover:bg-red-700 px-3 rounded-xl  py-2 ">Delete Account</Link>
  </div>
</div>

    )
}