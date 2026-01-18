import { SideBar } from "../../components/SideBar";
import { Header } from "../../components/Header";
import { UsersDetails } from "./UsersDetails";

export function Users(){
    return(<>
<Header />
<div className=" flex mt-18">
    <SideBar />
 <main className="w-full">
        
<div className="bg-gray-100 mx-4 flex p-4 justify-between rounded-xl mt-8">
              <h2 className="font-bold select-none">Profile Page</h2>
              <div className="capitalize">
                <a className="profile-links" href="/">
                  home
                </a>
                <a className="profile-links1" href="Users">
                  {" "}
                  - users
                </a>
                
              </div>
            </div>
            
         <div className="capitalize mt-8 bg-gray-100 rounded-2xl  ">
            <div className="flex flex-col items-start p-5">
                <h2 className="font-bold text-lg mb-5">order information</h2>
              <div className="w-full grid grid-cols-4 gap-4  ">
                <div>showed by</div>
                <div>status by</div>
                <div>issued by</div>
                <div>search by</div>

                <div>
                  <select className="bg-gray-200 p-2">
                      <option value="10">row 10</option>
                      <option value="20">row 20</option>
                      <option value="50">row 50</option>
                      <option value="100">row 100</option>
                  </select>
                </div>
                <div>
                  <select className="bg-gray-200 p-2">
                    <option value="men">men</option>
                    <option value="women">women</option>
                  </select>
                </div>
                <div>
                  <input className="bg-gray-200 p-2 border-none rounded-lg"
                    type="date"
                    name=""
                    id=""
                    placeholder="id/name/category/brand"
                  />
                </div>
                <div>
                  <input className="bg-gray-200 p-2 border-none rounded-lg"
                    type="text"
                    name=""
                    id=""
                    placeholder="id/name/category/brand"
                  />
                </div>
              </div>
            </div>
          </div>

   <UsersDetails />

    </main>
    </div>
    </>
    )
}