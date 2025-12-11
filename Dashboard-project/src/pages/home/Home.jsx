import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
export function Home() {
  return (
    <>
      <div className="Header ">
        <nav className="fixed bg-gray-100 w-full p-4 top-0 z-50 ">
          <ul className="flex items-center justify-between gap-3  ">
            <li>
              <a href="#" className="text-xs">
                <h1>Ym style</h1>
              </a>
            </li>
            <li>
              {" "}
              <FontAwesomeIcon icon={faList} />
            </li>
            <li>
              <div className="relative w-80 ">
                <button className="absolute border-0 top-1 right-3 p-0 text-xs  ">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full p-3 pl-4 pr-12 border rounded-full focus:outline-none"
                />
              </div>
            </li>
            <li>
                <div className="flex gap-4">
                    <button className="relative p-2 text-2xl">
                        <FontAwesomeIcon icon={faCartShopping} />
                        <span className="absolute top-1 left-1 bg-red-500 text-white rounded-2xl w-4 text-xs ">0</span>

                    </button>
                    <button className="relative p-2">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span className="absolute top-1 left-1 bg-red-500 text-white rounded-2xl w-4 text-xs ">0</span>
                    </button>
                    <button className="relative p-2 ">
                        <FontAwesomeIcon icon={faBell} />
                        <span className="absolute top-1 left-1 bg-red-500 text-white rounded-2xl w-4 text-xs ">0</span>
                    </button>
                </div>
            </li>

            <li>
            <div className="flex items-center ">
              <img src="a" alt=""  className="rounded-full bg-blue-500 m-1 px-3 " width="30px" height="30px"/>
<details className="relative inline-block">
      <summary className="cursor-pointer px-4 py-2 text-black rounded-lg select-none ">
          <span className=" font-medium">mohamed wael</span>
          <span className="block text-xs">@mohamedwael56</span>
      </summary>

  <div className="absolute mt-2 w-40 bg-white shadow-lg rounded-lg">
    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Profile</a>
    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Settings</a>
    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Logout</a>
  </div>
</details>
</div>

            </li>
          </ul>
        </nav>
      </div>

<div className="flex mt-15">
  <aside className="w-64 h-screen bg-gray-100 text-black-100 flex flex-col p-4">
    <h2 className="text-s font-bold-1 mb-6 select-none flex start opacity-80">Main page</h2>

    <nav className="flex flex-col gap-3 capitalize">
      <a href="#" className="flex items-center px-3 py-2 rounded hover:bg-gray-200 ">
        <span></span>
        <span className="ml-2">Dashboard</span>
      </a>
      <a href="#" className="flex items-center px-3 py-2 rounded hover:bg-gray-200">
        <span></span>
        <span className="ml-2">Authentication </span>
      </a>
      <a href="#" className="flex items-center px-3 py-2 rounded hover:bg-gray-200">
        <span></span>
        <span className="ml-2">users</span>
      </a>
      <a href="#" className="flex items-center px-3 py-2 rounded hover:bg-gray-200">
        <span></span>
        <span className="ml-2">products</span>
      </a>
      <a href="#" className="flex items-center px-3 py-2 rounded hover:bg-gray-200">
        <span></span>
        <span className="ml-2">invoices</span>
      </a>
      <a href="#" className="flex items-center px-3 py-2 rounded hover:bg-gray-200">
        <span></span>
        <span className="ml-2">orders</span>
      </a>
      <a href="#" className="flex items-center px-3 py-2 rounded hover:bg-gray-200">
        <span></span>
        <span className="ml-2">messages</span>
      </a>
      <a href="#" className="flex items-center px-3 py-2 rounded hover:bg-gray-200">
        <span></span>
        <span className="ml-2">notifications</span>
      </a>
      <a href="#" className="flex items-center px-3 py-2 rounded hover:bg-gray-200">
        <span></span>
        <span className="ml-2">settings</span>
      </a>
    </nav>
  </aside>

  <main className="flex-1 p-6 m-7 bg-gray-100 w-screen">
<div class="grid grid-flow-col grid-rows-2 gap-4">
  <div class="row-span-3 bg-gradient-to-r from-green-700 to-green-300 p-10 ">01</div>
  <div class="row-span-3 bg-gradient-to-r from-pink-500 to-pink-300 p-10">02</div>
  <div class="row-span-3 bg-gradient-to-r from-blue-500 to-blue-300 p-10">03</div>
  <div class="row-span-3 bg-gradient-to-r from-amber-500 to-amber-200 p-10">03</div>
  <div class="row-span-3 bg-blue-700 p-10">03</div>
  
</div>
  </main>
</div>


    </>
  );
}
