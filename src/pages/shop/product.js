import { useContext } from "react"
import { ShopContext } from "../../context/shopContext"


export const Product = (props) => {
    const {id , productImage ,productName , price} = props.data
    const {cartItems , addToCart , removeFromCart} = useContext(ShopContext)

    const IsInCart=cartItems?.some((i)=> i.id===id )
    return (
        <div className="col-3">
            <img src={productImage} className="w-100"/>
            <h5>{productName}</h5>
           <p>price :  {price}$</p>
           <button className="btn btn-info btn-sm" onClick = {() => addToCart(id)}>+</button>
           
           <span className="mx-1">{cartItems?.filter((row)=>row.id===id)[0]?.count}</span>
           {IsInCart && <button className="btn btn-info btn-sm" onClick={()=> removeFromCart(id)}>-</button>} 


        </div>
    )
}