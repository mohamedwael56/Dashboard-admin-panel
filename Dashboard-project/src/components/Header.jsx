import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './header.css';
import { Link } from "react-router-dom";
export function Header ({collapsingButton}){

  const userData=JSON.parse(localStorage.getItem('user'));


  
 console.log(userData)
    return (
<div className="Header ">
        <nav className="Header-bar fixed bg-gray-100 w-full p-4 top-0 z-50 ">
          <ul className="flex items-center justify-between gap-3  ">
            <li>
              <Link to="/home" className=" header-text text-xs hover:inherit font-bold ">
                <h1>Ym style</h1>
              </Link>
            </li>
           <li>
             <button
  onClick={collapsingButton}
  className="ml-4 mb-2 px-2 py-1 bg-gray-200 rounded header-toggle"
>
  ☰
</button>
           </li>
            <li>
              <div className="relative w-80 header-search ">
                <button  className="header-search-button absolute border-0 top-1 right-3 p-0 text-xs  ">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
               
                <input
                  type="text"
                  placeholder="Search..."
                  className=" w-full p-3 pl-4 pr-12 border rounded-full focus:outline-none"
                />
              </div>
            </li>
            

            <li>
              <div className="flex   ">
                
                <details className=" relative inline-block ">
                  <summary className=" flex items-center  cursor-pointer px-4 py-2 text-black rounded-lg select-none ">
                   <img
                  src={`${userData.image}`}
                  className="rounded-full object-cover w-12 h-12 border border-blue-500 mr-2"
               
                />
                <div>
                    <span className="header-profile font-medium">{userData.name}</span>
                    <span className="header-profile block text-xs">@{userData.username}</span>
                 </div>
                  </summary>

                  <div className="absolute mt-2 w-40 bg-white shadow-lg rounded-lg">
                    <Link to="/Profile/0" className="block px-4 py-2 hover:bg-gray-100">
                      Profile
                    </Link>
                    <Link to="/settings" className="block px-4 py-2 hover:bg-gray-100">
                      Settings
                    </Link>
                    <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                      Logout
                    </Link>
                  </div>
                </details>
              </div>
            </li>
          </ul>
        </nav>
      </div>

    )
}