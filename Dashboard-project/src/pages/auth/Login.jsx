import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { supabase } from "../../supabaseClient";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading,setLoading]=useState(false)

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

const handleSubmit= async(e)=>{
  e.preventDefault();
  setLoading(true)
  const {data,error}=await supabase.auth.signInWithPassword({
    email,
    password
  });
  if(error){
    setLoading(false)
    alert('email or password is wrong.')
    console.error(error)
    return;
  }
  const user = data.user

const {data:userData , error:userError}=await supabase.from('userss').select('*').eq('id',user.id).single();
if(userError){
  setLoading(false)
  alert('something went wrong with the data ')
      setEmail('');
    setPassword('');
  console.error(userError)
  return;
}
  
  localStorage.setItem('user',JSON.stringify(userData))
    setLoading(false)
    setEmail('');
    setPassword('');
    navigate('home');


} 

  return (
    <>
    <div className="main-login-page flex items-center justify-center bg-gray-100 h-screen w-screen">
      <div className="bg-white p-8 rounded shadow-md w-96 flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form className="">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
            value={email}
            onChange={handleEmailChange}
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-xl"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
            value={password}
            onChange={handlePasswordChange}
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-xl"
            />
          </div>
          <button
          onClick={handleSubmit}
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
{ loading?   'Logging in...':       ' Login'}          </button>
          <Link to="/ResetPassword" className="text-blue-600 hover:underline mb-5">
            forget password
          </Link>
        </form>
        <div className="flex flex-row items-center mt-5">
          <hr className="w-full" />
          <span className="m-1 text-xl bg-gray-200 rounded-xl px-1 select-none">
            or
          </span>
          <hr className="w-full" />
        </div>

          <div className="flex flex-col items-center justify-center mt-5 gap-5">
            <button 
            onClick={()=>{alert('Google login coming soon')}}
            className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-100">
              <div>
          <img src="../../image/google.png" alt="Google" className="w-5 h-5 inline-block mr-2 " />
          <div className="inline-block">Continue with Google</div>
              </div>
            </button>
            <button
            onClick={()=>{alert('Facebook login coming soon')}}
            className="ml-3 bg-blue-800 border border-gray-300 text-white py-2 px-4 rounded hover:bg-blue-600">
            <div>
          <img src="../../image/facebook.png" alt="Facebook" className="w-5 h-5 inline-block mr-2 " />
          <div className="inline-block">Continue with Facebook    
              </div>
            </div>
  
              </button>
            <button 
            onClick={()=>{alert('Twitter login coming soon')}}
            className="ml-3 bg-black border border-gray-300 text-white py-2 px-4 rounded hover:bg-gray-900">
            <div>
              <img src="../../image/twitter.png" alt="" className="w-5 h-5 inline-block mr-2"/>
              <div className="inline-block">Continue with Twitter</div>
            </div>
            </button>
          </div>
      </div>
    </div>

    <div className="bg-gray-200 p-4 rounded-lg mt-4">
      <p className="text-center text-gray-700 select-none">don't have an account? <Link to="/Register" className="text-blue-600 hover:underline">Sign up</Link></p>
    </div>
  </>
  );
}
