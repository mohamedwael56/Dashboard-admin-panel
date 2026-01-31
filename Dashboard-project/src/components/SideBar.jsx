import { Link } from "react-router-dom";

export function SideBar (){
    return(
        <div className="h-screen mt-3">
            <aside className="w-64 h-screen bg-gray-100 text-black-100 flex flex-col p-4">
          <h2 className="text-s font-bold-1 mb-6 select-none flex start opacity-80">
            Main page
          </h2>

          <nav className="flex flex-col gap-3 capitalize">
            <Link
              to="/"
              className="flex items-center px-3 py-2 rounded hover:bg-gray-200 "
            >
              <span></span>
              <span className="ml-2">Dashboard</span>
            </Link>
            <div className="flex items-center hover:bg-gray-200 hover:rounded-lg">
            <details className="flex cursor-pointer items-center px-3 py-2 rounded  inline-block select-none ">
              <summary className="ml-2 text-black">Authentication </summary>
              <div className="flex flex-col ml-4 mt-2 gap-2">
                <Link to="Login" className="hover:underline hover:bg-gray-300">login</Link>
                <Link to="Register" className="hover:underline hover:bg-gray-300">register</Link>
                <Link to="ResetPassword" className="hover:underline hover:bg-gray-300">forgot password</Link>
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