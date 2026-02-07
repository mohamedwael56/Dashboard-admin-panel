import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import './Products.css'
export function Product ({results}){

    return (
        <>
        
        <div className="w-full products-box">
  <div className="grid box-header grid-cols-[1fr_6fr_4fr_2fr_2fr_2fr_2fr_2fr_2fr_2fr] 
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
  {
    results?.map((data)=>{
      console.log(data.image)
      return(
        
<div className="grid product-details grid-cols-[1fr_6fr_4fr_2fr_2fr_2fr_2fr_2fr_2fr_2fr] gap-4 p-2">
  <div className="flex start">
   {data.id}
  </div>

  <div className=" flex justify-start items-center ">

<img src={`../${data.image}`} alt="" width='20px' className="products-pics" />

<div className=" ml-2 ">
<div > {data.name}</div>

</div>
  </div>
  <div>
{data.category}
  </div>
  <div>
  {data.brand}
  </div>
  <div>
  ${data.price}
  </div>
  <div>
  {data.stock}
  </div>
  <div >
    <div className="flex items-center gap-1">
<img src="../../public/image/star.png" alt=""  width="10px" className="rating-pic"/>
<span className="text-sm rating-column">{data.rating} </span>
<span>({data.reviewsCount})</span>
</div>
  </div>
  <div>
  {data.orders}
  </div>
  <div>
  {data.sales}
  </div>
  <div className="mt-1 " >
  <Link to={`/EachProduct/${data.id}`} className="bg-violet-400 action-button text-white p-3 rounded-xl " ><FontAwesomeIcon icon={faEye} /></Link>
  </div>
</div>
  ) })
  }

 

</div>
        </>)
}