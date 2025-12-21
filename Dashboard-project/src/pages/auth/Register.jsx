export function Register(){
    return(
        <div className=" min-h-screen w-screen flex items-center justify-between mr-5 ">
<div className="h-screen flex items-center mr-2">
            <div className="flex flex-col justify-start items-center ml-5 bg-gray-100 float-left p-3 rounded-xl mt-3 gap-1 text-sm">
                <h1>
                    welcome to the Register Page
                </h1>
                <p className="text-lg mt-1">you can sign up a new account from the box on the right or you can get back the home page from the button below down</p>
                    <a href="/" className="inline-block p-2 rounded-xl text-white bg-blue-500 mt-3 w-[20vw] hover:text-white hover:bg-blue-600" >Home page</a>
            </div>
</div>
        <div >
            <div className=" font-bold bg-gray-100 p-5 mr-10 w-[60vw] max-w-96 " >

<h2 className="text-lg mb-4"> register  a new account</h2>
<form >
    <div className="mb-4">
    <input 
    type="text"
    id="username"
    className="w-full px-3 py-2 border rounded-xl"
    placeholder="enter your username" />
    </div>
<div className="mb-4">
    <input 
    type="email"
    id="email"
    className="w-full px-3 py-2 border rounded-xl"
    placeholder="enter your email" />
</div>

<div className="mb-4">
    <input 
    type="password"
    id="password"
    className="w-full px-3 py-2 border rounded-xl"
    placeholder="enter your password" />
</div>
<div className="mb-2">
        <input 
    type="password"
    id="password"
    className="w-full px-3 py-2 border rounded-xl"
    placeholder="confirm your password" />

</div >
<div>
<input type="checkbox" />
<span className="ml-2 text-sm"> i agree to the terms and conditions</span>
</div>
<div className="mt-4">
    <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600">
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
            <button className="bg-white border border-gray-300 text-black py-2 px-4 rounded hover:bg-gray-300">
              <div>
          <img src="../../image/google.png" alt="Google" className="w-5 h-5 inline-block mr-2 " />
          <div className="inline-block text-sm">Continue with Google</div>
              </div>
            </button>
            <button className="ml-3 bg-blue-800 border border-gray-300 text-white py-2 px-4 rounded hover:bg-blue-600">
            <div>
          <img src="../../image/facebook.png" alt="Facebook" className="w-5 h-5 inline-block mr-2 " />
          <div className="inline-block text-sm">Continue with Facebook    
              </div>
            </div>
  
              </button>
            <button className="ml-3 bg-black border border-gray-300 text-white py-2 px-4 rounded hover:bg-gray-900">
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