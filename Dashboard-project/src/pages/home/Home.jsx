import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

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
                  <span className="absolute top-1 left-1 bg-red-500 text-white rounded-2xl w-4 text-xs ">
                    0
                  </span>
                </button>
                <button className="relative p-2">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span className="absolute top-1 left-1 bg-red-500 text-white rounded-2xl w-4 text-xs ">
                    0
                  </span>
                </button>
                <button className="relative p-2 ">
                  <FontAwesomeIcon icon={faBell} />
                  <span className="absolute top-1 left-1 bg-red-500 text-white rounded-2xl w-4 text-xs ">
                    0
                  </span>
                </button>
              </div>
            </li>

            <li>
              <div className="flex items-center ">
                <img
                  src="a"
                  alt=""
                  className="rounded-full bg-blue-500 m-1 px-3 "
                  width="30px"
                  height="30px"
                />
                <details className="relative inline-block">
                  <summary className="cursor-pointer px-4 py-2 text-black rounded-lg select-none ">
                    <span className=" font-medium">mohamed wael</span>
                    <span className="block text-xs">@mohamedwael56</span>
                  </summary>

                  <div className="absolute mt-2 w-40 bg-white shadow-lg rounded-lg">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Profile
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Settings
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Logout
                    </a>
                  </div>
                </details>
              </div>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex mt-15 ">
        <aside className="w-64 h-screen bg-gray-100 text-black-100 flex flex-col p-4">
          <h2 className="text-s font-bold-1 mb-6 select-none flex start opacity-80">
            Main page
          </h2>

          <nav className="flex flex-col gap-3 capitalize">
            <a
              href="#"
              className="flex items-center px-3 py-2 rounded hover:bg-gray-200 "
            >
              <span></span>
              <span className="ml-2">Dashboard</span>
            </a>
            <div className="flex items-center">
            <details className="flex items-center px-3 py-2 rounded  inline-block select-none ">
              <summary className="ml-2 hover:bg-gray-200  hover:rounded-lg text-black">Authentication </summary>
              <div className="flex flex-col ml-4 mt-2 gap-2">
                <a href="Login" className="hover:underline hover:bg-gray-200">login</a>
                <a href="Register" className="hover:underline hover:bg-gray-200">register</a>
                <a href="ResetPassword" className="hover:underline hover:bg-gray-200">forgot password</a>
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
              href="#"
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
              href="#"
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
              href="#"
              className="flex items-center px-3 py-2 rounded hover:bg-gray-200"
            >
              <span></span>
              <span className="ml-2">notifications</span>
            </a>
            <a
              href="#"
              className="flex items-center px-3 py-2 rounded hover:bg-gray-200"
            >
              <span></span>
              <span className="ml-2">settings</span>
            </a>
          </nav>
        </aside>

        <main className="flex-1 p-6 m-7  w-screen">
          <div className="grid grid-cols-3 grid-rows-2 gap-4">
            <button className="flex justify-between h-36 row-span-2 bg-gradient-to-r from-green-700 to-green-300 p-4 text-white border-none ">
              <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col items-start">
                  <div>Total Users</div>
                  <div>277</div>
                </div>
                <div>
                  <span>+95% </span>
                  <span>last month</span>
                </div>
              </div>
              <div className="flex items-start">
                <a className="cursor-pointer text-2xl select-none">
                  <FontAwesomeIcon icon={faUser} />
                </a>
              </div>
            </button>
            <button class="flex justify-between h-36 row-span-2 bg-gradient-to-r from-pink-500 to-pink-300 p-4 text-white">
              <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col items-start">
                  <div>Total orders</div>
                  <div>338</div>
                </div>
                <div>
                  <span>+30% </span>
                  <span>last month</span>
                </div>
              </div>
              <div>
                <a href="#" className="cursor-pointer text-2xl select-none">
                  <FontAwesomeIcon icon={faCartShopping} />
                </a>
              </div>
            </button>
            <button class=" capitalize row-span-4 bg-gradient-to-r from-blue-500 to-blue-200 p-6 text-white flex flex-col gap-2 items-start">
              <div>
                <div className="mb-1 capitalize">total sales</div>
                <div>$25,300</div>
              </div>
              <div>
                <span>+55% </span>
                <span>last month</span>
              </div>
            </button>
            <button class="flex justify-between row-span-2 bg-gradient-to-r from-blue-700 to-blue-300 p-4 text-white">
              <div className="flex flex-col justify-between items-start">
                <div className="flex flex-col items-start">
                  <div>Total products</div>
                  <div>557</div>
                </div>
                <div>
                  <span>+25% </span>
                  <span>last month</span>
                </div>
              </div>
              <div>
                <a href="#" className="cursor-pointer text-2xl select-none">
                  <FontAwesomeIcon icon={faBagShopping} />
                </a>
              </div>
            </button>
            <button class=" flex justify-between h-36 row-span-2 bg-gradient-to-r from-amber-500 to-amber-200 p-4 text-white">
              <div className="flex flex-col justify-between items-start">
                <div className="flex flex-col items-start">
                  <div>Total reviews</div>
                  <div>165</div>
                </div>
                <div>
                  <span>+45% </span>
                  <span>last month</span>
                </div>
              </div>
              <div>
                <a href="#" className="cursor-pointer text-2xl select-none">
                  <FontAwesomeIcon icon={faBagShopping} />
                </a>
              </div>
            </button>
          </div>

          <div className="capitalize mt-8 bg-gray-100 rounded-2xl  ">
            <div className="flex flex-col items-start p-5">
              <div className="text-xl mb-5">Best Selling Products</div>
              <div className="w-full grid grid-cols-4 gap-4  ">
                <div>showed by</div>
                <div>category by</div>
                <div>brand by</div>
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
                  <select className="bg-gray-200 p-2">
                    <option value="ecstasy">ecstasy</option>
                    <option value="H&M">H&M</option>
                  </select>
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

          <div className="w-full ">
  <div className="grid grid-cols-[1fr_10fr_2fr_2fr_2fr_2fr_2fr_2fr_2fr_2fr] 
   gap-4 font-semibold border-b p-1 border bg-blue-500 rounded-lg text-white  ">
    <div className="flex start">UID</div>
    <div className=" flex justify-start ">Product</div>
    <div>Category </div>
    <div>brand</div>
    <div>price</div>
    <div>stock</div>
    <div>rating</div>
    <div>order</div>
    <div className="mr-4">sales</div>
    <div className="mr-4">action</div>
  </div>
<div className="grid grid-cols-[1fr_10fr_2fr_2fr_2fr_2fr_2fr_2fr_2fr_2fr] gap-4 p-2">
  <div className="flex start">
   1
  </div>

  <div className=" flex justify-start items-center ">

<img src="../../image/jacket.jpg" alt="" width='35px' />

<div className="text-sm ml-2 ">
<div > Waterproof jacket with zipper and hood</div>
<div className="flex justify-start opacity-80 ">winter clothes </div>

</div>
  </div>
  <div>
women
  </div>
  <div>
  richman
  </div>
  <div>
  $30.10
  </div>
  <div>
  44
  </div>
  <div >
    <div className="flex items-center gap-1">
<img src="../../public/image/star.png" alt=""  width="10px"/>
<span className="text-sm">4.9 </span>
<span>(16)</span>
</div>
  </div>
  <div>
  180
  </div>
  <div>
  $38k
  </div>
  <div className="flex items-center gap-1" >
  <a href="#" className="bg-violet-400 text-white p-1 rounded-xl " ><FontAwesomeIcon icon={faEye} /></a>
  <a href="#" className="bg-green-300 text-white p-1 rounded-xl "><FontAwesomeIcon icon={faPen} /></a>
  <a href="#" className="bg-red-500 text-white p-1 rounded-xl "><FontAwesomeIcon icon={faTrashCan} /></a>
  </div>
</div>
 
<div className="grid grid-cols-[1fr_10fr_2fr_2fr_2fr_2fr_2fr_2fr_2fr_2fr] gap-4 p-2">
  <div className="flex start">
 2
  </div>
   <div className=" flex justify-start items-center ">

<img src="../../image/jacket.jpg" alt="" width='35px' />

<div className="text-sm ml-2 ">
<div > Waterproof jacket with zipper and hood</div>
<div className="flex justify-start opacity-80 ">winter clothes </div>

</div>
  </div>
  <div>
men
  </div>
  <div>
  ecstasy
  </div>

  <div>
  $15.12
  </div>
  <div>
  34
  </div>
  <div >
    <div className="flex items-center gap-1">
<img src="../../public/image/star.png" alt=""  width="10px"/>
<span className="text-sm">4.9 </span>
<span>(16)</span>
</div>
  </div>
  <div>
  350
  </div>
  <div>
  $27k
  </div>
  <div className="flex items-center gap-1" >
  <a href="#" className="bg-violet-400 text-white p-1 rounded-xl " ><FontAwesomeIcon icon={faEye} /></a>
  <a href="#" className="bg-green-300 text-white p-1 rounded-xl "><FontAwesomeIcon icon={faPen} /></a>
  <a href="#" className="bg-red-500 text-white p-1 rounded-xl "><FontAwesomeIcon icon={faTrashCan} /></a>
  </div>
</div>

<div className="grid grid-cols-[1fr_10fr_2fr_2fr_2fr_2fr_2fr_2fr_2fr_2fr] gap-4 p-2">
  <div className="flex start"> 
 3
  </div>
   <div className=" flex justify-start items-center ">

<img src="../../image/jacket.jpg" alt="" width='35px' />

<div className="text-sm ml-2 ">
<div > Waterproof jacket with zipper and hood</div>
<div className="flex justify-start opacity-80 ">winter clothes </div>

</div>
  </div>
  <div>
kids
  </div>
  <div>
ecstasy
  </div>

  <div>
  $60.25
  </div>
  <div>
  50
  </div>
   <div >
    <div className="flex items-center gap-1">
<img src="../../public/image/star.png" alt=""  width="10px"/>
<span className="text-sm">4.9 </span>
<span>(16)</span>
</div>
  </div>
  <div>
  145
  </div>
  <div>
  $23k
  </div>
  <div className="flex items-center gap-1" >
  <a href="#" className="bg-violet-400 text-white p-1 rounded-xl " ><FontAwesomeIcon icon={faEye} /></a>
  <a href="#" className="bg-green-300 text-white p-1 rounded-xl "><FontAwesomeIcon icon={faPen} /></a>
  <a href="#" className="bg-red-500 text-white p-1 rounded-xl "><FontAwesomeIcon icon={faTrashCan} /></a>
  </div>
</div>
<div className="grid grid-cols-[1fr_10fr_2fr_2fr_2fr_2fr_2fr_2fr_2fr_2fr] gap-4 p-2">
  <div className="flex start">
 4
  </div>
  <div className=" flex justify-start items-center ">

<img src="../../image/jacket.jpg" alt="" width='35px' />

<div className="text-sm ml-2 ">
<div > Waterproof jacket with zipper and hood</div>
<div className="flex justify-start opacity-80 ">winter clothes </div>

</div>
  </div>
  <div>
men  </div>
  <div>
  lubana
  </div>

  <div>
  $17.80
  </div>
  <div>
  43
  </div>
  <div >
    <div className="flex items-center gap-1">
<img src="../../public/image/star.png" alt=""  width="10px"/>
<span className="text-sm">4.9 </span>
<span>(16)</span>
</div>
  </div>
  <div>
 196
  </div>
  <div>
  $18k
  </div>
  <div className="flex items-center gap-1" >
  <a href="#" className="bg-violet-400 text-white p-1 rounded-xl " ><FontAwesomeIcon icon={faEye} /></a>
  <a href="#" className="bg-green-300 text-white p-1 rounded-xl "><FontAwesomeIcon icon={faPen} /></a>
  <a href="#" className="bg-red-500 text-white p-1 rounded-xl "><FontAwesomeIcon icon={faTrashCan} /></a>
  </div>
</div>
<div className="grid grid-cols-[1fr_10fr_2fr_2fr_2fr_2fr_2fr_2fr_2fr_2fr] gap-4 p-2">
  <div className="flex start">
   5
  </div>
   <div className=" flex justify-start items-center ">

<img src="../../image/jacket.jpg" alt="" width='35px' />

<div className="text-sm ml-2 ">
<div > Waterproof jacket with zipper and hood</div>
<div className="flex justify-start opacity-80 ">winter clothes </div>

</div>
  </div>
  <div>
women
  </div>
  <div>
ecstasy
  </div>

  <div>
  $12.15
  </div>
  <div>
  23
  </div>
  <div >
    <div className="flex items-center gap-1">
<img src="../../public/image/star.png" alt=""  width="10px"/>
<span className="text-sm">4.9 </span>
<span>(16)</span>
</div>
  </div>
  <div>
  165
  </div>
  <div>
  $15k
  </div>
  <div className="flex items-center gap-1" >
  <a href="#" className="bg-violet-400 text-white p-1 rounded-xl " ><FontAwesomeIcon icon={faEye} /></a>
  <a href="#" className="bg-green-300 text-white p-1 rounded-xl "><FontAwesomeIcon icon={faPen} /></a>
  <a href="#" className="bg-red-500 text-white p-1 rounded-xl "><FontAwesomeIcon icon={faTrashCan} /></a>
  </div>
</div>


</div>

        </main>
      </div>
    </>
  );
}
