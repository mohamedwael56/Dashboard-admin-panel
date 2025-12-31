import { SideBar } from "../../components/SideBar";
import { Header } from "../../components/Header";



export function Settings(){
    return(
        <>
        <Header />

        <div className="mt-15 flex">
        <SideBar />

 <main className="mt-10 w-full">
            <div className="bg-gray-100 mx-4 flex p-4 justify-between rounded-xl">
              <h2 className="font-bold select-none">Settings Page</h2>
              <div className="capitalize">
                <a className="profile-links" href="/">
                  home
                </a>
                <a className="profile-links1" href="Users">
                  {" "}
                  - Settings
                </a>
              
              </div>
            </div>

        <div className="mx-4 mt-5 bg-gray-100 rounded-xl">
             <div className="flex gap-3 capitalize ">
                <a href="#" className="profile-edit">
                  General
                </a>
                <a href="#" className="profile-edit">
                  Security
                </a>
                <a href="#" className="profile-edit">
                  Notifications
                </a>
                <a href="#" className="profile-edit">
                  Appearance
                </a>
              </div>
              <div className="flex flex-col items-start">
                <div className="flex flex-col items-start justify-start my-5 mx-3">
                <img src="/image/eddy.png" alt="" className="rounded-full w-45 h-45 object-cover" />
                <button className="border mt-2 bg-gray-400 text-white ml-5 mb-3"> Change Photo</button>
             </div>
             <div className="flex mx-5 gap-4 text-xl">
                <label htmlFor="">Full name</label>
                <input type="text" value="mohamed wael" className="border mb-5 ml-6 rounded-lg px-2 "/>
             </div>
             <div className="flex mx-5 my-2 gap-2 text-xl">
                <label htmlFor="">User name</label>
                <input type="text" value="mohamedwael56" readOnly className="border mb-5 ml-6 select-none bg-gray-300 cursor-not-allowed rounded-lg px-2 "/>
             </div>
             <div className="flex mx-5 my-2 gap-2 text-xl">
                <label htmlFor="">Email address</label>
                <input type="text" value="ralye123@gmail.com" readOnly className="border mb-5 select-none bg-gray-300 cursor-not-allowed rounded-lg px-2 "/>
                <button className=" h-8 flex text-[5px] items-center email-button">Change Email</button>
             </div>
            <button className="flex mx-5 text-white bg-blue-500"> Save Changes</button>
              </div>
        </div>

            </main>
        </div>
        
        </>
    )
}