import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import { GeneralInfo } from "./GeneralInfo";
import "./Profile.css";
import { useState } from "react";
import { ChangePassword } from "./ChangePassword";
import { DeleteAccount } from "./DeleteAccount";
export function Profile() {

const [activeTab, setActiveTab] = useState("profile");


  return (
    <>
      <div>
        <Header />
        <div className="mt-15 flex">
          <SideBar />

          <main className="mt-8 w-full">
            <div className="bg-gray-100 mx-4 flex p-4 justify-between rounded-xl">
              <h2 className="font-bold select-none">Profile Page</h2>
              <div className="capitalize">
                <a className="profile-links" href="/">
                  home
                </a>
                <a className="profile-links" href="Users">
                  {" "}
                  - users
                </a>
                <a className="profile-links1" href="">
                  {" "}
                  - my account{" "}
                </a>
              </div>
            </div>

            <div className="mx-4 mt-5 bg-gray-100 rounded-xl">
              <div className="flex gap-3 capitalize ">
                <a href="#" className="profile-edit" onClick={() => setActiveTab('profile')}>
                  edit profile
                </a>
                <a href="#" className="profile-edit" onClick={(e) => { e.preventDefault(); setActiveTab('changePassword'); }}>
                  change Password
                </a>
                <a href="#" className="profile-edit" onClick={() => setActiveTab('deleteAccount')}>
                  delete account
                </a>
              </div>
             {activeTab === 'profile' && <GeneralInfo />} 
              {activeTab === 'changePassword' && <ChangePassword />}
              {activeTab === 'deleteAccount' && <DeleteAccount />}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
