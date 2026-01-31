import { useParams } from "react-router-dom"
export function GeneralInfo({users}) {
const {userId}=useParams()
 const userDetails= users.find((data)=>{
    return data.id===Number(userId)
  })
  if(!userDetails){
    return(<div>nothing found</div>)
  }
  console.log(userDetails)
  return (
  <div className="flex flex-col">
                <div className="flex items-center m-3 mt-5">
                  <h2 className="font-bold text-black opacity-85 whitespace-nowrap ">
                    public information
                  </h2>
                </div>
                
                <div className="flex justify-start gap-5">
                  <div className="flex flex-col items-start mt-5 mb-5  ml-2">
                    <img
                      src={userDetails.image}
                      className="rounded-full w-32 h-32 object-cover border"
                    />
                    <button className="mt-5 self-center">upload</button>
                  </div>

                  <div className="grid grid-cols-2 gap-3 m-3 h-30 self-center w-3/4">
                    <div className=" flex relative ">
                      <input
                      value={userDetails.name}
                      className="border px-2 rounded-xl h-10 w-full"
                      type="text "
                      />
                      <span className="absolute bottom-7  bg-gray-100">
                        Fullname
                      </span>
                    </div>
                    <div className=" flex relative ">
                      <input
                      readOnly
                      value={userDetails.userName}
                        type="text"
                        className="px-2 cursor-not-allowed  rounded-xl h-10 w-full border"
                      />
                      <span className="absolute bottom-7 select-none bg-gray-100">
                        Username
                      </span>
                    </div>
                    <div className=" flex relative  col-span-2 ">
                      <textarea
                      value="24years"
                        type="text"
                        className="h-30 rounded-xl border px-2 py-3 w-full"
                      />
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
                    value={userDetails.id}
                      type="text"
                      className="border px-5 py-2 rounded-xl w-full"
                    />
                    <span className="absolute bottom-7 bg-gray-100">
                      Unique id
                    </span>
                  </div>
                  <div className=" flex relative ">
                    <select
                      name=""
                      id=""
                      className="w-full px-5 py-2 border rounded-xl"
                    value={userDetails.role} disabled={userDetails.role.toLowerCase()!=="admin"&& userDetails.role.toLowerCase()!=='manager'}
                    >
                      <option value="Admin">Admin</option>
                      <option value="viewer">Viewer</option>
                      <option value="editor">Editor</option>
                      <option value="manager">manager</option>
                    </select>
                    <span className="absolute bottom-7 bg-gray-100">Role </span>
                  </div>
                  <div className="flex relative">
                    <select
                      name=""
                      id=""
                      className="w-full px-5 py-2 border rounded-xl"
                   value={userDetails.status} disabled={userDetails.role!=='Admin'&& userDetails.role!=='manager'}
                   >
                      <option value="Active">Active</option>
                      <option value="blocked">blocked</option>
                    </select>
                    <span className="absolute bottom-7 bg-gray-100">
                      status
                    </span>
                  </div>
                  <div className=" flex relative">
                    <input
                    value={userDetails.email}
                      type="text"
                      className="border px-5 py-2 rounded-xl w-full"
                    />
                    <span className="absolute bottom-7 bg-gray-100">
                      Email{" "}
                    </span>
                  </div>
                  <div className=" flex relative">
                    <input
                    value="123456789"
                      type="text"
                      className="border px-5 py-2 rounded-xl w-full"
                    />
                    <span className="absolute bottom-7 bg-gray-100">Phone</span>
                  </div>
                  <div className=" flex relative">
                    <input
                    value=".net"
                      type="text"
                      className="border px-5 py-2 rounded-xl w-full"
                    />
                    <span className="absolute bottom-7 bg-gray-100">
                      Website
                    </span>
                  </div>
                  <div className=" flex relative col-span-3">
                    <textarea
                    value="123street"
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
                    value="Coming soon"
                      type="text"
                      className="border px-5 py-2 rounded-xl w-full"
                    />
                    <span className="absolute bottom-7 bg-gray-100">
                      Facebook{" "}
                    </span>
                  </div>
                  <div className=" flex relative">
                    <input
                    value="Coming soon"
                      type="text"
                      className="border px-5 py-2 rounded-xl w-full"
                    />
                    <span className="absolute bottom-7 bg-gray-100">
                      Twitter{" "}
                    </span>
                  </div>
                  <div className=" flex relative">
                    <input
                    value="Coming soon"
                      type="text"
                      className="border px-5 py-2 rounded-xl w-full"
                    />
                    <span className="absolute bottom-7 bg-gray-100">
                      Linkedin{" "}
                    </span>
                  </div>
                  <div className=" flex relative">
                    <input
                    value="Coming soon"
                      type="text"
                      className="border px-5 py-2 rounded-xl w-full"
                    />
                    <span className="absolute bottom-7 bg-gray-100">
                      Instagram{" "}
                    </span>
                  </div>
                  <div className=" flex relative">
                    <input
                    value="Coming soon"
                      type="text"
                      className="border px-5 py-2 rounded-xl w-full"
                    />
                    <span className="absolute bottom-7 bg-gray-100">
                      Youtube{" "}
                    </span>
                  </div>
                  <div className=" flex relative">
                    <input
                    value="Coming soon"
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
  );
}