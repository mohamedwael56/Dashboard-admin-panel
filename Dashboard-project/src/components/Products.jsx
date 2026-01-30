import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export function Product ({results}){

    return (
        <>
        
        <div className="w-full ">
  <div className="grid grid-cols-[1fr_6fr_3fr_2fr_2fr_2fr_2fr_2fr_2fr_2fr] 
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
      return(
        
<div className="grid grid-cols-[1fr_6fr_3fr_2fr_2fr_2fr_2fr_2fr_2fr_2fr] gap-4 p-2">
  <div className="flex start">
   {data.id}
  </div>

  <div className=" flex justify-start items-center ">

<img src={data.image} alt="" width='20px' />

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
<img src="../../public/image/star.png" alt=""  width="10px"/>
<span className="text-sm">{data.rating} </span>
<span>({data.reviewsCount})</span>
</div>
  </div>
  <div>
  {data.orders}
  </div>
  <div>
  {data.sales}
  </div>
  <div className="flex items-center gap-1" >
  <a href="EachProduct" className="bg-violet-400 text-white p-2 rounded-xl " ><FontAwesomeIcon icon={faEye} /></a>
  <a href="#" className="bg-red-500 text-white p-2 rounded-xl "><FontAwesomeIcon icon={faTrashCan} /></a>
  </div>
</div>
  ) })
  }

 

</div>
        </>)
}