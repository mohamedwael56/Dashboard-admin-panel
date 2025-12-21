import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { Product } from "../../components/Products";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
export function Home() {
  return (
    <>
      <Header />
      <div className="flex min-h-screen mt-15">
    <SideBar />
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

          <Product />

        </main>
      </div>
    </>
  );
}
