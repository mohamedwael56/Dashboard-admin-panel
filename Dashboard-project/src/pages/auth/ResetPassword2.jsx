import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import { useNavigate } from "react-router-dom";

export function ResetPassword2() {
  const [newPassword, setNewPassword] = useState("");

  const navigate=useNavigate()
  const handleReset = async (e) => {
    e.preventDefault();

    if (!newPassword) {
      alert("Please fill all the fields");
      return;
    }

    const {error}= await supabase.auth.updateUser({
      password:newPassword
    });
    if(error){
alert("Something went wrong");
console.error(error)
    }
    setNewPassword("");
    navigate('/')
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>

        <form onSubmit={handleReset} className="space-y-4">
         
          <div>
            <label className="block text-gray-700 mb-1">New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter your new password"
              className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition"
          >
            Reset Password
          </button>
          <Link to="/">HOME</Link>
        </form>
      </div>
    </div>
  );
}
