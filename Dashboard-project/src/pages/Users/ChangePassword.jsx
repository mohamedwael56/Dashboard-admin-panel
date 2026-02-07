import './Profile.css'
import { useState } from 'react';
import { supabase } from '../../supabaseClient';
export function ChangePassword() {
  

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
    e.preventDefault();
    if(!currentPassword || !newPassword || !confirmNewPassword) {
        alert('Please fill all the fields.');
        return;
    }
            if (newPassword !== confirmNewPassword) {
        alert('New password and confirmation password do not match.');
        return;
       }

        setLoading(true);

        const user=await supabase.auth.getUser()
        if(!user){
          setLoading(false)
          alert('You must be logged in to change your password.')
        }
        console.log(user)
        const userEmail=user.data.user.email

        const {error:userError}= await supabase.auth.signInWithPassword({
          email:userEmail,
          password:currentPassword
        })
        if(userError){
          setLoading(false)
          alert('Old password is incorrect!')
          return;
        }
       const { error} = await supabase.auth.updateUser({
      password: newPassword
    });
        setLoading(false);
if(error){
        console.error(error);
      alert("Failed to change password: " + error.message);

}else{
        alert("Password updated successfully!");
        setCurrentPassword('');
        setNewPassword('');
        setConfirmNewPassword('');

}
   
    
    

   
}
return (
  <div className="change-password-page select-none">
    <h2 className="change-password-title mt-5 mb-3 mx-3 text-xl font-bold text-black flex">Change Password</h2>

    <form className="change-password-form" onSubmit={handleSubmit}>
      <div className=" form-group flex mx-3 items-center">
        <label>Current Password</label>
        <input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} className="current-password border-1 ml-13  rounded-xl mx-3 p-1" placeholder="Enter current password" />
      </div>

      <div className="form-group flex mx-3  items-center">
        <label>New Password</label>
        <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="border-1 ml-18 my-5 rounded-xl mx-3 p-1" placeholder="Enter new password" />
      </div>

      <div className=" form-group flex mx-3 items-center">
        <label>Confirm New Password</label>
        <input type="password" value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} className="confirm-New-Password border-1 rounded-xl mx-3 p-1" placeholder="Confirm new password" />
      </div>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl m-5" type="submit">{loading?'Loading...':'Update Password'}</button>
    </form>
  </div>
);
}