import "./Home.css";
import { Product } from "../../components/Products";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import { Cards } from "./Cards";
export function Home() {
  

  return (
    <>
      <Header />
      <div className="flex min-h-screen mt-15">
        <SideBar />
        <main className="flex-1 p-6 m-7  w-screen">
    
        <Cards />
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
                  <input
                    className="bg-gray-200 p-2 border-none rounded-lg"
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
