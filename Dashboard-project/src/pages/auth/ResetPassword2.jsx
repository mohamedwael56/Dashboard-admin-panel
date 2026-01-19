import { useState } from "react";
import axios from "axios";

export function ResetPassword2() {
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();

    if (!email || !oldPassword || !newPassword) {
      alert("Please fill all the fields");
      return;
    }

    try {
      const response = await axios.post("/api/auth/forgot-password", {
        email,
        oldPassword,
        newPassword,
      });

      alert(response.data.message);
      setEmail("");
      setOldPassword("");
      setNewPassword("");
    } catch (error) {
      if (error.response) alert(error.response.data.message);
      else alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>

        <form onSubmit={handleReset} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Old Password</label>
            <input
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              placeholder="Enter your old password"
              className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

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
          <a href="/">HOME</a>
        </form>
      </div>
    </div>
  );
}
