import { createContext, useState } from "react";


export const ShopContext = createContext(null)

export function ShopContextProvider(props) {

    const [cartItems, setCartItems] = useState([]);

    function addToCart(name) {
        if ( !cartItems?.find((item) => item.Name === name )) {
            setCartItems([...cartItems, {Name: name, Count: 1}])
            console.log("Created");
        } else {
            setCartItems(cartItems.map((item)=>{
                if (item.Name === name) {
                    return {...item, Count: item.Count + 1}
                } else {
                    return item
                }
            }))
            console.log("Increased");
        }
        console.log(cartItems);
    }

    function removeFromCart(name) {
        setCartItems(cartItems.map((item)=>{
            if (item.Name === name) {
                if (item.Count > 1) {
                    return {...item, Count: item.Count - 1}
                }
            } else {
                return item
            }
        }))
    }

    const contextValue = {cartItems, addToCart, removeFromCart};

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>

}