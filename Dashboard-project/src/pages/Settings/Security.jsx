import './security.css';
import { Link } from "react-router-dom";

export function Security(){
    return(
        <div className="security-settings px-6 py-5 bg-gray-100 rounded-xl">
  <h2 className="text-xl font-bold mb-6">Security Settings</h2>

  
  <div className="change-password-section mb-8 p-4 bg-white rounded-xl shadow-sm">
    <h3 className="font-semibold mb-3">to change your password click on the button down below</h3>
     
      <Link to="/Profile/0" className=" change-password bg-blue-600  px-4 py-2 rounded-xl mt-2 hover:bg-blue-700">Update Password</Link>
  </div>

  {/* Two Factor Authentication */}
  <div className="two-factor-section mb-8 p-4 bg-white rounded-xl shadow-sm">
    <h3 className="font-semibold mb-3">Two-Factor Authentication</h3>
    <p className="text-sm text-gray-600 mb-2">Add an extra layer of security to your account.</p>
    <button className="bg-green-500 text-white py-2 rounded w-52">Enable 2FA</button>
  </div>

  {/* Login Activity / Devices */}
  <div className="login-activity-section mb-8 p-4 bg-white rounded-xl shadow-sm">
    <h3 className="font-semibold mb-3">Login Activity</h3>
    <p className="text-sm text-gray-600">Recent devices and sessions:</p>
      <div className='flex flex-col items-start select-none bg-gray-50 p-2 rounded'>
        <span className="font-semibold">🖥 Windows - Chrome</span>
        <span className="font-semibold">📍 Cairo, Egypt</span>  
        <span className="font-semibold">🕒 Last active: 2 hours ago</span>  
         <button className="text-blue-600 hover:text-blue-800">Remove Device</button>
      </div>
      <div className='flex flex-col items-start select-none bg-gray-50 p-2 rounded'>
        <span className="font-semibold">📱 iPhone - Safari</span>
        <span className="font-semibold">📍 Giza, Egypt</span>  
        <span className="font-semibold">🕒 Last active: Yesterday</span>  
         <button className="text-blue-600 hover:text-blue-800">Remove Device</button>
      </div>
   
  </div>

  <div className="delete-account-section p-4 bg-white rounded-xl shadow-sm">
    <h3 className="font-semibold mb-3 text-red-600">Delete Account</h3>
    <p className="text-sm text-gray-600 mb-3"> to delete your account click on the button down below</p>
    <Link to='/profile/0' className="delete-account  bg-red-600 hover:bg-red-700 px-3 rounded-xl  py-2 ">Delete Account</Link>
  </div>
</div>

    )
}