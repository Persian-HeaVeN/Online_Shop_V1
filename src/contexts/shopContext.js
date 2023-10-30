import { createContext, useState } from "react";
import { showModal, hideModal, toggleCart } from "../reducers/SliceReducers";
import { useDispatch, useSelector } from "react-redux"

export const ShopContext = createContext(null)

export function ShopContextProvider(props) {

    const dispatch = useDispatch();

    const [cartItems, setCartItems] = useState([]);

    const [shopName, setShopName] = useState("");

    function getTotalItems(itemName) {
        let totalItems = 0;

        cartItems.map((item)=>{
            if (!itemName) {
                totalItems = totalItems + item.Count;
            } else {
                if ( item.Name === itemName ) {
                    totalItems = totalItems + item.Count;
                }
            }
            
        })

        return Number(totalItems)
    }

    function getTotalPrice() {
        let totalPrice = 0;

        cartItems.map((item)=>{
            totalPrice = totalPrice + (item.Count * item.Price);
        })

        return Number(totalPrice)
    }

    function addToCart(datas, itemShopName) {
        if ( shopName.length > 0 && itemShopName !== shopName ) {
            return dispatch(showModal({text: `You have item from "${shopName}" fast food`}));
        } else {
            setShopName(itemShopName);
        }
        if ( !cartItems?.find((item) => item.Name === datas.Name )) {
            setCartItems([...cartItems, {Name: datas.Name, Type: datas.Type, Price: datas.Price, Count: 1}])
        } else {
            setCartItems(cartItems.map((item)=>{
                if (item.Name === datas.Name) {
                    return {...item, Count: item.Count + 1}
                } else {
                    return item
                }
            }))
        }
    }

    function removeFromCart(name) {

        cartItems.map((item)=>{
            if (item.Name === name) {
                if (item.Count > 1) {
                    setCartItems(cartItems.map((item)=>{
                        if (item.Name === name) {
                            if (item.Count > 1) {
                                return {...item, Count: item.Count - 1}
                            }
                        } else {
                            return item
                        }
                    }))
                } else {
                    setCartItems(cartItems.filter((item)=> item.Name !== name ))
                }
            }
        })

        
    }

    const contextValue = {cartItems, addToCart, removeFromCart, shopName, setShopName, getTotalItems, getTotalPrice};

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>

}