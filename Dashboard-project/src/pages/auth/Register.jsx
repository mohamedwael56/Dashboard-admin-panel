import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export function Register(){
    const navigate=useNavigate();

    const [termsChecked,setTermsChecked]=useState(false);

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");    
   const [username,setUsername]=useState("");   
   const [name,setName]=useState('')

   const handleNameChange=(e)=>{
    setName(e.target.value)
   }
   const handleUsernameChange=(e)=>{
    setUsername (e.target.value);
   }
   const handleEmailChange=(e)=>{
    setEmail(e.target.value);
   }
   const handleCheckboxChange=(e)=>{
    setTermsChecked(e.target.checked);
   }

   const handlePasswordChange   =(e)=>{
    setPassword(e.target.value);
   }
   const handleConfirmPasswordChange =(e)=>{
    setConfirmPassword (e.target.value);
   }

   const handleRegisterClick= async (e)=>{
    e.preventDefault();
    try{
        if(!username || !email || !password ||!name){
            alert ("please fill all the fields");
            return;
        }
        if(!termsChecked){
            alert ("you must agree to the terms and conditions to register");
            return;
        }
        if(password !== confirmPassword){
            alert ("passwords do not match");
            return;
        }
const response = await axios.post('/api/auth/register',{
    name,
    username,
    email,
    password

})

console.log("response",response.data)
    setUsername("");
    setEmail("");
    setPassword("");

    alert("Registered successfully!");
    navigate('/');

    }catch (error){
        if(error.response){ alert (error.response.data.message)}
        else {alert ("something went wrong")}
    }
}

    return(
        <div className=" min-h-screen w-screen flex items-center justify-between mr-5 ">
<div className="h-screen flex items-center mr-2">
            <div className="flex flex-col justify-start items-center ml-5 bg-gray-100 float-left p-3 rounded-xl mt-3 gap-1 text-sm">
                <h1>
                    welcome to the Register Page
                </h1>
                <p className="text-lg mt-1">you can sign up a new account from the box on the right or you can get back the home page from the button below down</p>
                    <Link to="/" className="inline-block p-2 rounded-xl text-white bg-blue-500 mt-3 w-[20vw] hover:text-white hover:bg-blue-600" >Home page</Link>
            </div>
</div>
        <div >
            <div className=" font-bold bg-gray-100 p-5 mr-10 w-[60vw] max-w-96 " >

<h2 className="text-lg mb-4"> register  a new account</h2>
<form >
    <div className="mb-4">
    <input 
    value={name}
    onChange={handleNameChange}
    type="text"
    id="name"
    className="w-full px-3 py-2 border rounded-xl"
    placeholder="enter your name" />
    </div>
    <div className="mb-4">
    <input 
    value={username}
    onChange={handleUsernameChange}
    type="text"
    id="username"
    className="w-full px-3 py-2 border rounded-xl"
    placeholder="enter your username" />
    </div>
<div className="mb-4">
    <input 
    value={email}
    onChange={handleEmailChange}
    type="email"
    id="email"
    className="w-full px-3 py-2 border rounded-xl"
    placeholder="enter your email" />
</div>

<div className="mb-4">
    <input 
    value={password}
    onChange={handlePasswordChange}
    type="password"
    id="password"
    className="w-full px-3 py-2 border rounded-xl"
    placeholder="enter your password" />
</div>
<div className="mb-2">
        <input 
    value={confirmPassword}
    onChange={handleConfirmPasswordChange}   
    type="password"
    id="password"
    className="w-full px-3 py-2 border rounded-xl"
    placeholder="confirm your password" />

</div >
<div>
<input type="checkbox" 
checked={termsChecked}
onChange={handleCheckboxChange}
/>
<span className="ml-2 text-sm"> i agree to the terms and conditions</span>
</div>
<div className="mt-4">
    <button onClick={handleRegisterClick} type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600">
        register
    </button>
</div>

</form>

<div className="my-5 flex items-center m-1">
<hr className="w-full" />
<span className="bg-white rounded-xl px-1 select-none">or</span>
<hr className="w-full" />
</div>
 <div className="flex flex-col items-center justify-center mt-5 gap-5">
            <button
            onClick={()=>{alert('Google login coming soon')}}
            className="bg-white border border-gray-300 text-black py-2 px-4 rounded hover:bg-gray-300">
              <div>
          <img src="../../image/google.png" alt="Google" className="w-5 h-5 inline-block mr-2 " />
          <div className="inline-block text-sm">Continue with Google</div>
              </div>
            </button>
            <button 
            onClick={()=>{alert('Facebook login coming soon')}}
            className="ml-3 bg-blue-800 border border-gray-300 text-white py-2 px-4 rounded hover:bg-blue-600">
            <div>
          <img src="../../image/facebook.png" alt="Facebook" className="w-5 h-5 inline-block mr-2 " />
          <div className="inline-block text-sm">Continue with Facebook    
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
        </div>
    )
    
}