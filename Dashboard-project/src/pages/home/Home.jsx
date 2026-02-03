import "./Home.css";
import { Product } from "../../components/Products";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import { Cards } from "./Cards";
import {useState} from "react";
export function Home({products,users,collapsingButton,collapsed}) {
    
const [search,setSearch]= useState('');
  const [rows,setRows]=useState('All')
  const [categories,setCategories]= useState('All')
  const [brand,setBrand]= useState('All')
  let results = products;
  
  if(rows!=='All'){
    results= results.slice (0,rows);
  }
  if (brand !== "All") {
    results = results.filter((result) => result.brand === brand);
  }
  if (categories !== "All") {
    results = results.filter((result) => result.category ===categories);
  }
  if(search.trim()!== ''){
    results = results.filter((result)=>
    result.name.toLowerCase().includes(search.toLowerCase()) ||
    result.id.toString().includes(search) ||
    result.category.toLowerCase().includes(search.toLowerCase()) ||
    result.brand.toLowerCase().includes(search.toLowerCase())
  )};  

  return (
    <>
      <Header collapsingButton={collapsingButton}  user={users} />
      <div className="flex min-h-screen mt-15">
        <SideBar collapsed={collapsed}   />
        <main className="flex-1 p-6 m-7  w-screen">
          <Cards />
          <div className="filtration-box capitalize mt-8 bg-gray-100 rounded-2xl  ">
            <div className="flex flex-col items-start p-5">
              <div className="text-xl mb-5 filtration-title">Best Selling Products</div>
              <div className="w-full grid grid-cols-4 gap-4  ">
                <div>showed by</div>
                <div>category by</div>
                <div>brand by</div>
                <div>search by</div>

                <div>
                  <select className="bg-gray-200 p-2" onChange={(e)=>{
                    setRows(e.target.value)
                  }} value={rows}>
                    <option value="All">All</option>
                    <option value="3">row 3</option>
                    <option value="5">row 5</option>
                    <option value="8">row 8</option>
                  </select>
                </div>
                <div>
                  <select className="select-options bg-gray-200 p-2" onChange={(e)=>{
                  setCategories(e.target.value)
                  }} value={categories}>
                  <option value="All">All</option>

                    {products.map((product) => {
                      return <option value={product.category}>{product.category}</option>;
                    })}                    
                  </select>
                </div>
                <div>
                  <select className=" select-options bg-gray-200 p-2" onChange={(e)=>{
                    setBrand(e.target.value)
                  }} value={brand}>
                    <option value="All">All</option>

                    {products.map((product) => {
                      return <option value={product.brand}>{product.brand}</option>;
                    })}
                  </select>
                </div>
                <div>
                  <input
                  onChange={(e)=>{setSearch(e.target.value)}}
                    className=" select-options bg-gray-200 p-2 border-none rounded-lg"
                    type="text"
                    name=""
                    id=""
                    placeholder="id/name/category/brand"
                  />
                </div>
              </div>
            </div>
          </div>

          <Product results={results} />
        </main>
      </div>
    </>
  );
}
