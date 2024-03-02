import { useEffect, useState } from "react"

export const useCart = () => {
    const [cartItems, setCartItems] = useState();

   
    useEffect(() => {
       
        if (cartItems !== undefined)
            localStorage.setItem("shopCart", JSON.stringify(cartItems))
    }, [cartItems])

    useEffect(() => {
        const data = localStorage.getItem("shopCart")
        console.log(data)
        setCartItems(!!JSON.parse(data)? JSON.parse(data): [])
         console.log(!!JSON.parse(data)? JSON.parse(data): [] )

    }, [])


    const addToCart = (itemId) => {
        if (!cartItems?.find((item) => item.id === itemId))
            setCartItems([...cartItems, { id: itemId, count: 1 }])
        else
            setCartItems(cartItems.map((item) => {
                if (item.id === itemId)
                    return { ...item, count: item.count + 1 }
                else return item
            }))

        console.log(cartItems)

    }

    const removeFromCart = (itemId) => {
        setCartItems(cartItems.map((i) => {
            if (i.id === itemId)
                return { ...i, count: i.count === 0 ? 0 : i.count - 1 }
            else return i
        }))

    }
    return { cartItems, addToCart, removeFromCart }
}