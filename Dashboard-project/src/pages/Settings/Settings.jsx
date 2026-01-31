import { SideBar } from "../../components/SideBar";
import { Header } from "../../components/Header";
import { useState } from "react";
import { General } from "./General";
import { Security } from "./Security";
import { Notifications } from "./Notifications";
import { Appearance } from "./Appearance";
import { Link } from "react-router-dom";
export function Settings(){
const [activeTab, setActiveTab] = useState('General');

    return(
        <>
        <Header />

        <div className="mt-15 flex">
        <SideBar />

 <main className="mt-10 w-full">
            <div className="bg-gray-100 mx-4 flex p-4 justify-between rounded-xl">
              <h2 className="font-bold select-none">Settings Page</h2>
              <div className="capitalize">
                <Link className="profile-links" to="/">
                  home
                </Link>
                <Link className="profile-links1" to="/Users">
                  {" "}
                  - Settings
                </Link>
              
              </div>
            </div>

        <div className="mx-4 mt-5 bg-gray-100 rounded-xl">
             <div className="flex gap-3 capitalize ">
                <Link to="#" className="profile-edit" onClick={()=>setActiveTab('General')}>
                  General
                </Link>
                <Link to="#" className="profile-edit" onClick={()=>setActiveTab('Security')}>
                  Security
                </Link>
                <Link to="#" className="profile-edit" onClick={()=>setActiveTab('Notifications')}>
                  Notifications
                </Link>
                <Link to="#" className="profile-edit" onClick={()=>setActiveTab('Appearance')}>
                  Appearance
                </Link>
              </div>
             {activeTab === 'General' && <General />}
             {activeTab === 'Security' && <Security />}
             {activeTab === 'Notifications' && <Notifications />}
             {activeTab === 'Appearance' && <Appearance />}
        
        </div>

            </main>
        </div>
        
        </>
    )
}