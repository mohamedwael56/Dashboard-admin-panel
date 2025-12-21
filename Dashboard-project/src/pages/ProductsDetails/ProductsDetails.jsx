import { Header } from "../../components/Header.jsx";
import { SideBar } from "../../components/SideBar.jsx";
import { Product } from "../../components/Products.jsx";
import "./ProductsDetails.css"
export function ProductsDetails (){
    return (
        <>

        <Header />
                <div className="flex">

        <SideBar />
          <main className="mt-23 mx-5 ">
            <div className=" main-page flex justify-between w-full bg-gray-100 p-4 rounded-xl items-center my-2">
                <h2 className="text-xl font-bold select-none">products details</h2>
                <div className="flex text-xl ">
                <a href="/" className="first-link">Home</a>
                <a href="#" className="current-page">~ProductsDetails</a>
                </div>
            </div>

<div className="grid grid-cols-3 my-4 gap-4">
                <button class=" flex justify-between capitalize row-span-1 bg-gradient-to-r from-blue-500 to-blue-200 p-6 text-white flex flex-col gap-2 items-start">
                <div>547</div>
                <div>Total products</div>
            
            </button>

               <button className="flex justify-between h-24 bg-gradient-to-r from-green-700 to-green-300 p-4 text-white border-none">
              <div className="flex flex-col justify-between items-start"> 
                  <div>605</div>
                  <div>Total categories</div>
              </div>
            </button>
            <button class="flex justify-between  row-span-1 bg-gradient-to-r from-pink-500 to-pink-300 p-4 text-white">
              <div className="flex flex-col justify-between h-full items-start">
                  <div>249</div>
                  <div>Total brands</div>
              </div>
            </button>
</div>
        <div className="capitalize mt-8 bg-gray-100 rounded-2xl  ">
            <div className="flex flex-col items-start p-5">
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
    )
}