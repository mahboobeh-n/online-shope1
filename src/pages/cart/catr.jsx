import { useContext } from "react";
import { Product } from "../shop/product";
import { ShopContext } from "../../context/shopContext";
import { PRODUCTS } from "../../data/products";

const Cart = () => {
    const {cartItems} = useContext(ShopContext)
    return(
        <>
        <h1>your shops</h1>
        <div className="row">
            {PRODUCTS.map((p)=>{
                if(cartItems?.some((i)=>i.id===p.id && i.count>0))
                 return <Product key={p.id} data={p}></Product>


            })}
           
        </div>
        </>
        
    )
}
export default Cart;