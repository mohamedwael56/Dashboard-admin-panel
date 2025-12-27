import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import "./Profile.css";
export function Profile() {
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
                <a className="profile-links" href="">
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
                <a href="#" className="profile-edit">
                  edit profile
                </a>
                <a href="#" className="profile-edit">
                  change Password
                </a>
                <a href="#" className="profile-edit">
                  delete account
                </a>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center m-3 mt-5">
                  <h2 className="font-bold text-black opacity-85 whitespace-nowrap ">
                    public information
                  </h2>
                </div>
                <div className="flex justify-start gap-5">
                  <div className="flex flex-col items-start mt-5 mb-5  ml-2">
                    <img
                      src="../../image/eddy.png"
                      className="rounded-full w-32 h-32 object-cover border"
                    />
                    <button className="mt-5 self-center">upload</button>
                  </div>

                  <div className="grid grid-cols-2 gap-3 m-3 h-30 self-center w-3/4">
                    <div className=" flex relative ">
                      <input className="border px-2 rounded-xl h-10 w-full" type="text " />
                      <span className="absolute bottom-7  bg-gray-100">
                        Fullname
                      </span>
                    </div>
                    <div className=" flex relative ">
                      <input type="text" className="px-2 rounded-xl h-10 w-full border"/>
                      <span className="absolute bottom-7 bg-gray-100">
                        Username
                      </span>
                    </div>
                    <div className=" flex relative  col-span-2 ">
                      <textarea type="text" className="h-30 rounded-xl border px-2 py-3 w-full"/>
                      <span className="absolute bottom-26 bg-gray-100 ">
                        Biography
                      </span>
                    </div>
                  </div>
                </div>
                <h2 className="flex items-start font-bold text-black opacity-85 m-3">
                  private information
                </h2>
                <div className="grid grid-cols-3 gap-3 mb-3 mx-3">
                  <div className=" flex relative">
                    <input
                      type="text"
                      className="border px-5 py-2 rounded-xl w-full"
                    />
                    <span className="absolute bottom-7 bg-gray-100">
                      Unique id
                    </span>
                  </div>
                  <div className=" flex relative ">
                    <input
                      type="text"
                      className="border px-5 py-2 rounded-xl w-full"
                    />
                    <span className="absolute bottom-7 bg-gray-100">Role </span>
                  </div>
                  <div className="flex relative">
                    <select
                      name=""
                      id=""
                      className="w-full px-5 py-2 border rounded-xl"
                    >
                      <option value="">1</option>
                    </select>
                    <span className="absolute bottom-7 bg-gray-100">
                      status
                    </span>
                  </div>
                  <div className=" flex relative">
                    <input
                      type="text"
                      className="border px-5 py-2 rounded-xl w-full"
                    />
                    <span className="absolute bottom-7 bg-gray-100">
                      Email{" "}
                    </span>
                  </div>
                  <div className=" flex relative">
                    <input
                      type="text"
                      className="border px-5 py-2 rounded-xl w-full"
                    />
                    <span className="absolute bottom-7 bg-gray-100">Phone</span>
                  </div>
                  <div className=" flex relative">
                    <input
                      type="text"
                      className="border px-5 py-2 rounded-xl w-full"
                    />
                    <span className="absolute bottom-7 bg-gray-100">
                      Website
                    </span>
                  </div>
                  <div className=" flex relative col-span-3">
                    <textarea
                      type="text"
                      className="border px-5 py-2 h-64  rounded-xl w-full"
                    />
                    <span className="absolute bottom-60 bg-gray-100">
                      address
                    </span>
                  </div>{" "}
                </div>
                <h2 className="flex items-start mx-6 font-bold text-black opacity-85 m-3">
                  {" "}
                  social information{" "}
                </h2>
                <div className="grid grid-cols-2 mx-5 gap-3  justify-content w-[50vw] mb-5">
                  <div className=" flex relative">
                    <input
                      type="text"
                      className="border px-5 py-2 rounded-xl w-full"
                    />
                    <span className="absolute bottom-7 bg-gray-100">
                      Facebook{" "}
                    </span>
                  </div>
                  <div className=" flex relative">
                    <input
                      type="text"
                      className="border px-5 py-2 rounded-xl w-full"
                    />
                    <span className="absolute bottom-7 bg-gray-100">
                      Twitter{" "}
                    </span>
                  </div>
                  <div className=" flex relative">
                    <input
                      type="text"
                      className="border px-5 py-2 rounded-xl w-full"
                    />
                    <span className="absolute bottom-7 bg-gray-100">
                      Linkedin{" "}
                    </span>
                  </div>
                  <div className=" flex relative">
                    <input
                      type="text"
                      className="border px-5 py-2 rounded-xl w-full"
                    />
                    <span className="absolute bottom-7 bg-gray-100">
                      Instagram{" "}
                    </span>
                  </div>
                  <div className=" flex relative">
                    <input
                      type="text"
                      className="border px-5 py-2 rounded-xl w-full"
                    />
                    <span className="absolute bottom-7 bg-gray-100">
                      Youtube{" "}
                    </span>
                  </div>
                  <div className=" flex relative">
                    <input
                      type="text"
                      className="border px-5 py-2 rounded-xl w-full"
                    />
                    <span className="absolute bottom-7 bg-gray-100">
                      Pinterest{" "}
                    </span>
                  </div>{" "}
                </div>
                <div className="flex items start mx-6">
                  <button className="bg-blue-700 text-white px-4 py-2 rounded-2xl self-center">
                    save changes
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
