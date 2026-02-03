import { Link } from "react-router-dom";
import './SideBar.css'
export function SideBar ({collapsed}){

    return(
        <div className="h-screen mt-8">
          

            <aside className={`main-sideBar  ${collapsed ? "-translate-x-full opacity-0 w-8" : "translate-x-0 opacity-100  w-64"} ease-in-out duration-500 transition-all overflow-hidden h-screen bg-gray-100 text-black-100 flex flex-col p-4`}>
          <h2 className={`sideBar-main-text text-s font-bold-1 mb-6 select-none flex start opacity-80`}>
            Main page
          </h2>

          <nav className=" sidebar-links-size flex flex-col gap-3 capitalize">
            <Link
              to="/home"
              className="flex items-center px-3 py-2 rounded hover:bg-gray-200 "
            >
              <span></span>
              <span className="ml-2">Dashboard</span>
            </Link>
            <div className="flex items-center hover:bg-gray-200 hover:rounded-lg">
            <details className="flex cursor-pointer items-center px-3 py-2 rounded  inline-block select-none ">
              <summary className="ml-2 text-black">Authentication </summary>
              <div className="flex flex-col ml-4 mt-2 gap-2">
                <Link to="/" className="hover:underline hover:bg-gray-300">login</Link>
                <Link to="/Register" className="hover:underline hover:bg-gray-300">register</Link>
                <Link to="/ResetPassword" className="hover:underline hover:bg-gray-300">forgot password</Link>
              </div>
            </details>
            </div>
            <Link
              to="/Users"
              className="flex items-center px-3 py-2 rounded hover:bg-gray-200"
            >
              <span></span>
              <span className="ml-2">users</span>
            </Link>
            <Link
              to="/ProductsDetails"
              className="flex items-center px-3 py-2 rounded hover:bg-gray-200"
            >
              <span></span>
              <span className="ml-2">products</span>
            </Link>
            
            <Link
              to="/OrdersList"
              className="flex items-center px-3 py-2 rounded hover:bg-gray-200"
            >
              <span></span>
              <span className="ml-2">orders</span>
            </Link>
           
            
            <Link
              to="/Settings"
              className="flex items-center px-3 py-2 rounded hover:bg-gray-200"
            >
              <span></span>
              <span className="ml-2">settings</span>
            </Link>
          </nav>
        </aside>
</div>
    )
}