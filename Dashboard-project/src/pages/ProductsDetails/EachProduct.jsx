import {useParams} from 'react-router-dom';
import { Link } from "react-router-dom";
import './ProductsDetails'
export function EachProduct({products}) {

const {orderId} = useParams();
const product = products.find((data)=>{
    return data.id === Number(orderId);
})
console.log(orderId);
if(!product){
    return <div>Product not found</div>
}
  return (

    
    <div className="product-main max-w-6xl mx-auto p-6">
      <div className=" main-page flex justify-between w-full bg-white p-4 rounded-xl items-center my-2">
                <h2 className=" product-title text-xl font-bold select-none">product details</h2>
                <div className="flex text-xl ">
                <Link to="/" className="product-link first-link">Home</Link>
                <Link to="/ProductsDetails" className="product-link first-link">~ProductsDetails</Link>
                <Link to="#" className="product-link current-page">~product name</Link>
                </div>
            </div>

      <div className="flex flex-col md:flex-row gap-8 bg-white p-6 rounded-xl shadow-md">
        <div className="flex-1">
          <img 
            src={`../${product.image}`} 
            alt="Product Name" 
            className="product-image w-auto h-auto rounded-lg border"
          />
        </div>

        <div className=" product-information flex-1 flex flex-col text-lg gap-9">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-gray-500">Category: <span className="font-semibold">{product.category}</span></p>
          <p className="text-gray-500">Brand: <span className="font-semibold">{product.brand}</span></p>
          <p className="text-xl font-bold text-green-600">${product.price}</p>

          <div className="flex items-center justify-center gap-2">
            <img src="/image/star.png" alt="rating" className="w-4"/>
            <span className="text-sm">{product.rating}</span>
            <span className="text-gray-400">({product.reviewsCount} reviews)</span>
          </div>

         
        </div>
      </div>

      
    </div>
  )
}

