import { useState } from "react";
export function ResetPassword(){
const [email,setEmail]=useState("");
const getResetLink= async (e)=>{
    e.preventDefault();
    if(!email){
        alert ("please enter your email");
        return;
    }
    alert (`Email has been sent to  ${email} .`)
    setEmail('');
}

    return(
        <div className=" min-h-screen w-screen flex flex-col items-center justify-center mr-5 ">
            <div className=" font-bold bg-gray-100 p-5 mr-10 w-[60vw] max-w-96 " >      
<h2 className="text-lg mb-4"> Reset Password</h2>
<form > 
    <div className="mb-4">
    <input 
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    type="email"
    id="email"
    className="w-full px-3 py-2 border rounded-xl"
    placeholder="enter your email" />
    </div>
<div className="mt-4">
    <button onClick={getResetLink} type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600">
        Get Reset Link
    </button>
</div>
</form>
</div>

<div className="mt-5 mr-10">
    <p>do you remember your password? <a href="Login" className="text-blue-600">Login</a></p>
</div>
</div>

)}