import axios from 'axios';
import { useState } from 'react';
export function ChangePassword() {
    const user=JSON.parse(localStorage.getItem('user'))

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
function handleSubmit(e) {
    e.preventDefault();
    if(!currentPassword || !newPassword || !confirmNewPassword) {
        alert('Please fill all the fields.');
        return;
    }
        if (newPassword !== confirmNewPassword) {
        alert('New password and confirmation password do not match.');
        return;
       }
        axios.post(`/api/auth/forgot-password/`, {
          email:user.email,
            currentPassword,
            newPassword,
           

    })
    .then(response => {
        alert('Password changed successfully.');
        setCurrentPassword('');
        setNewPassword('');
        setConfirmNewPassword('');
        console.log(response);
    })
    .catch(error => {
        if (error.response){
        alert(error.response.data.message);
    } else {
        alert('An error occurred. Please try again later.');
    }});
}
return (
  <div className="change-password-page select-none">
    <h2 className="change-password-title mt-5 mb-3 mx-3 text-xl font-bold text-black flex">Change Password</h2>

    <form className="change-password-form" onSubmit={handleSubmit}>
      <div className="form-group flex mx-3 items-center">
        <label>Current Password</label>
        <input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} className="border-1 ml-13  rounded-xl mx-3 p-1" placeholder="Enter current password" />
      </div>

      <div className="form-group flex mx-3  items-center">
        <label>New Password</label>
        <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="border-1 ml-18 my-5 rounded-xl mx-3 p-1" placeholder="Enter new password" />
      </div>

      <div className="form-group flex mx-3 items-center">
        <label>Confirm New Password</label>
        <input type="password" value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} className="border-1 rounded-xl mx-3 p-1" placeholder="Confirm new password" />
      </div>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl m-5" type="submit">Update Password</button>
    </form>
  </div>
);
}