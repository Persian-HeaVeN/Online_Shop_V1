import React, { useContext } from "react";
import { shops } from "../../components/Shops";
import { Shop } from "./Shop";
import OwlCarousel from 'react-owl-carousel';
import { Cart } from "../Shop/Cart";
import { Offcanvas } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart, hideCart } from "../../reducers/SliceReducers";
import cartEmpty from "../../assets/cart_empty.png"
import { ShopContext } from "../../contexts/shopContext";

const sideCartOptions = {
    scroll: false,
    backdrop: false,
}

export const crouselOptions = {
    margin: 10,
    responsiveClass: true,
    nav: false,
    dots: true,
    autoplay: false,
    loop: false,
    responsive: {
        0: {
            items: 1,
            dots: false,
            nav:true,
        },
        500: {
            items: 2,
            dots: false,
            nav:true,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 4,

        },
        1300: {
            items: 5,
        },
        1600: {
            items: 6,
        },
    },
};

export function Main() {

    const dispatch = useDispatch();

    const cartSelector = useSelector((state)=> state.cart);

    const {cartItems, addToCart, removeFromCart, shopName} = useContext(ShopContext);

    return (
        <React.Fragment>

                <Offcanvas className="cart-canvas" style={{width:"325px"}} show={cartSelector.cartShow} onHide={() => dispatch(hideCart())} {...sideCartOptions} >
                    { cartItems.length === 0 && <div>
                        <button onClick={()=>{dispatch(hideCart())}} style={{float:"right", paddingTop:"30px", paddingRight:"20px"}} type="button" class="btn-close" aria-label="Close"></button>
                        <img src={cartEmpty} style={{maxWidth:"300px", marginTop:"20px"}} />
                        <span style={{color:"#cccccc", textAlign:"center", display:"block", fontSize:"1.2rem"}}>Cart is empty</span>
                    </div> }
                    {cartItems.length > 0 && <Cart close={true} shop={shopName} datas={{items:cartItems, shopName: shopName}} /> }
                </Offcanvas>

            <div style={{marginTop:"6rem", marginLeft:"3rem", marginRight:"3rem"}}>
                <h1 className="mb-3">New to shapaz</h1>
                <OwlCarousel className="owl-theme" {...crouselOptions}>
                    {shops.map((data, index)=> {
                        if (data.New && index < 8 ) {
                            return (
                                <div key={index} className="item" style={{padding:"0"}}>
                                    <Shop key={index} data={data} />
                                </div>
                            )  
                        }
                    } )}
                </OwlCarousel>
            </div>
            <div style={{marginTop:"5rem", marginLeft:"3rem", marginRight:"3rem"}}>
                <h1>Popular in shapaz</h1>
                <OwlCarousel className="owl-theme" {...crouselOptions}>
                    {shops.map((data, index)=> {
                        if (data.Stars > 4 && index < 8 ) {
                            return (
                                <div key={index} className="item" style={{padding:"0"}}>
                                    <Shop key={index} data={data} />
                                </div>
                            )  
                        }
                    } )}
                </OwlCarousel>
            </div>
            <div style={{marginTop:"5rem", marginLeft:"3rem", marginRight:"3rem"}}>
                <h1>All in shapaz</h1>
                <OwlCarousel className="owl-theme" {...crouselOptions}>
                    {shops.map((data, index)=> {
                        if (index < 10 ) {
                            return (
                                <div key={index} className="item" style={{padding:"0"}}>
                                    <Shop key={index} data={data} />
                                </div>
                            )  
                        }
                    } )}
                </OwlCarousel>
            </div>
            <br/><br/><br/>
        </React.Fragment>
    )
}







