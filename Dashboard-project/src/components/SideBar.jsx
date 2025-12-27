export function SideBar (){
    return(
        <div className="h-screen mt-3">
            <aside className="w-64 h-screen bg-gray-100 text-black-100 flex flex-col p-4">
          <h2 className="text-s font-bold-1 mb-6 select-none flex start opacity-80">
            Main page
          </h2>

          <nav className="flex flex-col gap-3 capitalize">
            <a
              href="/"
              className="flex items-center px-3 py-2 rounded hover:bg-gray-200 "
            >
              <span></span>
              <span className="ml-2">Dashboard</span>
            </a>
            <div className="flex items-center hover:bg-gray-200 hover:rounded-lg">
            <details className="flex cursor-pointer items-center px-3 py-2 rounded  inline-block select-none ">
              <summary className="ml-2 text-black">Authentication </summary>
              <div className="flex flex-col ml-4 mt-2 gap-2">
                <a href="Login" className="hover:underline hover:bg-gray-300">login</a>
                <a href="Register" className="hover:underline hover:bg-gray-300">register</a>
                <a href="ResetPassword" className="hover:underline hover:bg-gray-300">forgot password</a>
              </div>
            </details>
            </div>
            <a
              href="#"
              className="flex items-center px-3 py-2 rounded hover:bg-gray-200"
            >
              <span></span>
              <span className="ml-2">users</span>
            </a>
            <a
              href="ProductsDetails"
              className="flex items-center px-3 py-2 rounded hover:bg-gray-200"
            >
              <span></span>
              <span className="ml-2">products</span>
            </a>
            <a
              href="#"
              className="flex items-center px-3 py-2 rounded hover:bg-gray-200"
            >
              <span></span>
              <span className="ml-2">invoices</span>
            </a>
            <a
              href="OrdersList"
              className="flex items-center px-3 py-2 rounded hover:bg-gray-200"
            >
              <span></span>
              <span className="ml-2">orders</span>
            </a>
            <a
              href="#"
              className="flex items-center px-3 py-2 rounded hover:bg-gray-200"
            >
              <span></span>
              <span className="ml-2">messages</span>
            </a>
            
            <a
              href="Settings"
              className="flex items-center px-3 py-2 rounded hover:bg-gray-200"
            >
              <span></span>
              <span className="ml-2">settings</span>
            </a>
          </nav>
        </aside>
</div>
    )
}