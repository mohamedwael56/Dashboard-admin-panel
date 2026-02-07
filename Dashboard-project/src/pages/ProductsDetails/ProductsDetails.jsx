import { Header } from "../../components/Header.jsx";
import { SideBar } from "../../components/SideBar.jsx";
import { Product } from "../../components/Products.jsx";
import "./ProductsDetails.css"
import { Link } from "react-router-dom";
import { useState } from "react";
export function ProductsDetails ({products,collapsed,collapsingButton}) {

  const [rows, setRows]= useState('All');
const [categories, setCategories]= useState ('All');
const [brand, setBrand]= useState ('All');
const [search,setSearch]=useState('')



let results = products;
if (brand !== 'All'){
results = results.filter(result=>result.brand === brand);
}

if (categories !== 'All'){
  results = results.filter(result=>result.category === categories);
}
if (rows !== 'All'){
results  = results.slice(0,rows);
}
if(search.trim()!==''){
results=results.filter((result)=> 
result.name.toLowerCase().includes(search.toLowerCase()) ||
result.id.toString().includes(search) ||
result.price.toString().includes(search)||
result.category.toLowerCase().includes(search.toLowerCase()) ||
result.brand.toLowerCase().includes(search.toLowerCase())
)
}
console.log(results)



    return (
        <>

        <Header collapsingButton={collapsingButton} />
                <div className="flex mt-15">

        <SideBar collapsed={collapsed} />
          <main className=" products-page mt-2 mx-5 ">
            <div className="  main-page flex justify-between w-full bg-gray-100 p-4 rounded-xl items-center my-2">
                <h2 className="text-xl header-title font-bold select-none">products details</h2>
                <div className="flex text-xl  ">
                <Link to="/home" className="header-info first-link">Home</Link>
                <Link to="#" className=" header-info current-page">~ProductsDetails</Link>
                </div>
            </div>

<div className="cards-details grid grid-cols-3 my-4 gap-4">
                <button className=" flex justify-between capitalize row-span-1 bg-gradient-to-r from-blue-500 to-blue-200 p-6 text-white flex flex-col gap-2 items-start">
                <div>547</div>
                <div>Total products</div>
            
            </button>

               <button className="flex justify-between h-24 bg-gradient-to-r from-green-700 to-green-300 p-4 text-white border-none">
              <div className="flex flex-col justify-between items-start"> 
                  <div>605</div>
                  <div>Total categories</div>
              </div>
            </button>
            <button className="flex justify-between  row-span-1 bg-gradient-to-r from-pink-500 to-pink-300 p-4 text-white">
              <div className="flex flex-col justify-between h-full items-start">
                  <div>249</div>
                  <div>Total brands</div>
              </div>
            </button>
</div>
        <div className=" capitalize mt-8 bg-gray-100 rounded-2xl  ">
            <div className="filtration-box flex flex-col items-start p-5">
              <div className="w-full grid grid-cols-4 gap-4  ">
                <div>showed by</div>
                <div>Category</div>
                <div>brand by</div>
                <div>search by</div>

                <div>
                  <select className="select-options1 bg-gray-200 p-2" onChange={(e)=>{
                    setRows(e.target.value)
                  }} 
                  value={rows}>
                      <option value="All">All  </option>
                      <option value="3">3 row  </option>
                      <option value="5">5 rows </option>
                      <option value="8">8 rows </option>
                  </select>
                </div>
                <div>
                  <select className="select-options1 bg-gray-200 p-2" onChange={(e)=>{
                    setCategories (e.target.value)
                  }} value={categories}>
                    <option value="All">All</option>
                    {products.map((product) => {
                      return <option value={product.category}>{product.category}</option>;
                    })}
                  </select>
                </div>
                <div>
                  <select className="select-options1 bg-gray-200 p-2" onChange={(e)=>{
                    setBrand(e.target.value)
                  }} value={brand}>
                  <option value="All">All</option>

                    {products.map((product)=>{
                      return(
                        <option key={product.id} value={product.brand}>{product.brand}</option>
                      )
                    })}
                    
                  </select>
                </div>
                <div>
                  <input
                  onChange={(e)=>{setSearch(e.target.value)}}
                  className="select-options1 bg-gray-200 p-2 border-none rounded-lg"
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
    )
}