import { SideBar } from "../../components/SideBar";
import { Header } from "../../components/Header";
import { useState } from "react";
import { General } from "./General";
import { Security } from "./Security";
import { Notifications } from "./Notifications";
import { Link } from "react-router-dom";
import './settings.css'
export function Settings({collapsed,collapsingButton}){
const [activeTab, setActiveTab] = useState('General');

    return(
        <>
        <Header collapsingButton={collapsingButton} />

        <div className="mt-15 flex">
        <SideBar collapsed={collapsed} />

 <main className=" main-title mt-10 w-full">
            <div className="bg-gray-100 mx-4 flex p-4 justify-between rounded-xl">
              <h2 className="font-bold select-none">Settings Page</h2>
              <div className="capitalize">
                <Link className="profile-links main-title" to="/home">
                  home
                </Link>
                <Link className="profile-links1 main-title" to="/Users">
                  {" "}
                  - Settings
                </Link>
              
              </div>
            </div>

        <div className="mx-4 mt-5 bg-gray-100 rounded-xl">
             <div className="flex gap-3 capitalize ">
                <Link to="#" className="navigating-button profile-edit" onClick={()=>setActiveTab('General')}>
                  General
                </Link>
                <Link to="#" className="navigating-button profile-edit" onClick={()=>setActiveTab('Security')}>
                  Security
                </Link>
                <Link to="#" className="navigating-button profile-edit" onClick={()=>setActiveTab('Notifications')}>
                  Notifications
                </Link>
              </div>
             {activeTab === 'General' && <General />}
             {activeTab === 'Security' && <Security />}
             {activeTab === 'Notifications' && <Notifications />}
        
        </div>

            </main>
        </div>
        
        </>
    )
}