
export function General(){
   const loggedInUser=JSON.parse(localStorage.getItem('user'))
    return(
         <div className="flex flex-col items-start">
                <div className="flex flex-col items-start justify-start my-5 mx-3">
                <img src={loggedInUser.image} alt="" className="rounded-full w-45 h-45 object-cover" />
                <button className="border mt-2 bg-gray-400 text-white ml-5 mb-3"> Change Photo</button>
             </div>
             <div className="flex mx-5 gap-4 text-xl">
                <label htmlFor="">Full name</label>
                <input type="text" value={loggedInUser.name} className="border mb-5 ml-6 rounded-lg px-2 "/>
             </div>
             <div className="flex mx-5 my-2 gap-2 text-xl">
                <label htmlFor="">User name</label>
                <input type="text" value={loggedInUser.userName} readOnly className="border mb-5 ml-6 select-none bg-gray-300 cursor-not-allowed rounded-lg px-2 "/>
             </div>
             <div className="flex mx-5 my-2 gap-2 text-xl">
                <label htmlFor="">Email address</label>
                <input type="text" value={loggedInUser.email} readOnly className="border mb-5 select-none bg-gray-300 cursor-not-allowed rounded-lg px-2 "/>
                <button className=" h-8 flex text-[5px] items-center email-button">Change Email</button>
             </div>
            <button className="flex mx-5 text-white bg-blue-500"> Save Changes</button>
              </div>
    )
}