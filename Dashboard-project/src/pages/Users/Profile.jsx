import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import { GeneralInfo } from "./GeneralInfo";
import "./Profile.css";
import { useState } from "react";
import { ChangePassword } from "./ChangePassword";
import { DeleteAccount } from "./DeleteAccount";
import { Link } from "react-router-dom";
export function Profile({users}) {

const [activeTab, setActiveTab] = useState("profile");


  return (
    <>
      <div>
        <Header />
        <div className="mt-15 flex">
          <SideBar />

          <main className="main-profile mt-8 w-full">
            <div className="bg-gray-100 mx-4 flex p-4 justify-between rounded-xl">
              <h2 className="font-bold select-none">Profile Page</h2>
              <div className="capitalize">
                <Link className="main-profile profile-links" to="/home">
                  home
                </Link>
                <Link className="main-profile profile-links" to="Users">
                  {" "}
                  - users
                </Link>
                <Link className="main-profile profile-links1" to="">
                  {" "}
                  - my account{" "}
                </Link>
              </div>
            </div>

            <div className="mx-4 mt-5 bg-gray-100 rounded-xl">
              <div className="flex gap-3 capitalize ">
                <a href="#" className="main-profile profile-edit" onClick={() => setActiveTab('profile')}>
                  edit profile
                </a>
                <a href="#" className="main-profile profile-edit" onClick={(e) => { e.preventDefault(); setActiveTab('changePassword'); }}>
                  change Password
                </a>
                <a href="#" className="main-profile profile-edit" onClick={() => setActiveTab('deleteAccount')}>
                  delete account
                </a>
              </div>
             {activeTab === 'profile' && <GeneralInfo users={users} />} 
              {activeTab === 'changePassword' && <ChangePassword />}
              {activeTab === 'deleteAccount' && <DeleteAccount />}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
