import { useNavigate, useParams } from "react-router-dom";
import { shops } from "../../components/Shops";
import cartEmpty from "../../assets/cart_empty.png"
import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock as clockIcon, faStar as starIcon } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot as locationIcon, faMotorcycle as motorcycleIcon, faCar as carIcon } from "@fortawesome/free-solid-svg-icons";
import {Container, Row, Tab, Tabs, Offcanvas} from "react-bootstrap"
import { Menu } from "./Menu";
import { ShopContext } from "../../contexts/shopContext";
import { Cart } from "../Shop/Cart";
import { CenteredModal } from "../../components/CenterModal";
import { hideModal } from "../../reducers/SliceReducers";
import { toggleCart, hideCart } from "../../reducers/SliceReducers";
import { useDispatch, useSelector } from "react-redux"

const sideCartOptions = {
    scroll: false,
    backdrop: false,
}

export function Shop() {

    const dispatch = useDispatch();

    const modalSelector = useSelector((state)=> state.modal);

    const cartSelector = useSelector((state)=> state.cart);

    const {name} = useParams();

    const nowShop = shops.filter((data) => data.Name === name)[0]

    const {cartItems, addToCart, removeFromCart, shopName} = useContext(ShopContext);

    let navigateTo = useNavigate();

    window.onresize = function onWindowResize() {
        if (window.innerWidth < 1200){
            dispatch(hideCart())
        }
    }

    return (
        <React.Fragment>

        <CenteredModal
            show={modalSelector.show}
            onHide={() => dispatch(hideModal())}
        />

                <Offcanvas className="cart-canvas" style={{width:"325px"}} show={cartSelector.cartShow} onHide={() => dispatch(hideCart())} {...sideCartOptions} >
                    { cartItems.length === 0 && <div>
                        <button onClick={()=>{dispatch(hideCart())}} style={{float:"right", paddingTop:"30px", paddingRight:"20px"}} type="button" class="btn-close" aria-label="Close"></button>
                        <img src={cartEmpty} style={{maxWidth:"300px", marginTop:"20px"}} />
                        <span style={{color:"#cccccc", textAlign:"center", display:"block", fontSize:"1.2rem"}}>Cart is empty</span>
                    </div> }
                    {cartItems.length > 0 && <Cart close={true} shop={shopName} datas={{items:cartItems, shopName: shopName}} /> }
                </Offcanvas>

            <div className="menu-sidenav d-none d-xl-block" style={{borderRight:"1px solid #cccccc"}}>
                { cartItems.length === 0 && <div>
                    <img src={cartEmpty} style={{maxWidth:"300px", marginTop:"60px"}} />
                    <span style={{color:"#cccccc", textAlign:"center", display:"block", fontSize:"1.2rem"}}>Cart is empty</span>
                </div> }
                {cartItems.length > 0 && <Cart shop={shopName} datas={{items:cartItems, shopName: shopName}} /> }
            </div>

            <div className="shop-content d-md-none">

                <div className="row" style={{borderBottom:"1px #ccc solid"}}>
                    <div className="shop-menu-top-image col-12 mb-2" style={{backgroundImage:`url(${nowShop.Images.Main})`}}>
                        <div className="cover-color"></div>
                        <figure className="bottom-left rounded-5 bg-white">
                            <img className="rounded-5" src={nowShop.Images.Icon} alt="shop icon" style={{width:"6rem", padding:"0.1rem"}} />
                        </figure>
                        <div className="top-right">
                            <button onClick={()=>{navigateTo("/Online_Shop_V1")}} className="btn btn-outline-light" style={{width:"10rem", fontSize:"1.2rem"}}>Back to main</button>
                        </div>
                    </div>

                    <div className="col-12 d-flex pb-2" style={{paddingLeft:"2rem", borderBottom:"1px #ccc solid"}}>
                        
                        <div className="col-6">
                            <h2 className="mb-3">{nowShop.Name} fast food</h2>
                            <div className="">
                                <FontAwesomeIcon style={{fontSize:"1.4rem", color:"#7CFC00"}} icon={locationIcon} />
                                <p className="d-inline ps-2" style={{fontSize:"1.2rem"}}>{nowShop.Location}</p>
                            </div>
                        </div>

                        <div className="col-6 d-flex justify-content-end pe-4">
                            <div>
                                <div className="mx-auto" style={{width:"fit-content"}}>
                                    <FontAwesomeIcon style={{fontSize:"1.6rem", color:"#7CFC00"}} icon={starIcon} />
                                    <p className="d-inline ps-2" style={{fontSize:"1.5rem"}}>{nowShop.Stars}</p>
                                </div>
                                
                                <button className="btn btn-outline-success ms-3 d-block mt-2" style={{borderColor:"#7CFC00", marginBottom:"0.5rem", color:"black"}}>See comments</button>
                            </div>
                        </div>
                        
                    </div>

                    <div className="col-12 d-flex justify-content-start ps-5 pt-2 mb-2" style={{borderBottom:"1px #ccc solid"}}>
                            <div className="d-flex" style={{width:"fit-content"}}>
                            <p style={{fontSize:"1.2rem"}}>{nowShop.Ready ? "Ready to order" : "Not ready to order"}</p>
                            <span className="spinner-grow spinner-grow-sm mt-1 ms-2" style={{color:`${nowShop.Ready ? "#7CFC00" : "red"}`, width:"1.5rem", height:"1.5rem"}} role="status"></span>
                            </div>
                    </div>

                    <div className="row">

                        <div className="col-6 d-inline-flex justify-content-end pe-4 ps-4">
                            <FontAwesomeIcon style={{color:"#7CFC00", fontSize:"2rem"}} icon={clockIcon} />
                            <div className="ps-3">
                                <h4 style={{fontSize:"4.7vw"}}>{nowShop.Time[0]} - {nowShop.Time[1]} min</h4>
                                <p className="text-center" >Average delivery time</p>
                            </div>
                        </div>

                        <div className="col-6 d-inline-flex justify-content-start ps-4 mb-2" style={{borderLeft:"1px #ccc solid"}}>
                            <FontAwesomeIcon style={{color:"#7CFC00", fontSize:"2rem"}} icon={nowShop.Shipby === "Car" ? carIcon : motorcycleIcon} />
                            <div className="ps-3">
                                <h4 style={{fontSize:"4.7vw"}}>{nowShop.Shipby}</h4>
                                <p className="text-center">Shipping method</p>
                            </div>
                        </div>

                    </div>

                    <Container className="m-0" style={{maxWidth:"100%"}}>
                        <Row className="justify-content-center">
                            <Tabs fill variant="shop-tab" defaultActiveKey="tab-1" className="mb-0">
                                <Tab eventKey="tab-1" title="Menu">
                                    <Menu shop={nowShop} />
                                </Tab>
                                <Tab eventKey="tab-2" title="Comments">
                                    Doodoo
                                </Tab>
                                
                            </Tabs>
                        </Row>
                    </Container>

                </div>
                
            </div>


            
            <div className="shop-content d-none d-md-block">
                
                <div className="row" style={{borderBottom:"1px #ccc solid"}}>

                    <div className="shop-menu-top-image col-12 mb-2" style={{backgroundImage:`url(${nowShop.Images.Main})`}}>
                        <div className="cover-color"></div>
                        <figure className="bottom-left rounded-5 bg-white">
                            <img className="rounded-5" src={nowShop.Images.Icon} alt="shop icon" style={{width:"8rem", padding:"0.1rem"}} />
                        </figure>
                        <div className="top-right">
                            <button onClick={()=>{navigateTo("/Online_Shop_V1")}} className="btn btn-outline-light" style={{width:"10rem", fontSize:"1.2rem"}}>Back to main</button>
                        </div>
                    </div>

                    <div className="col-6" style={{paddingLeft:"6rem"}}>

                        <h1 className="mb-3">{nowShop.Name} fast food</h1>
                        <div className="ps-4">
                            <FontAwesomeIcon style={{fontSize:"1.6rem", color:"#7CFC00"}} icon={locationIcon} />
                            <p className="d-inline ps-3" style={{fontSize:"1.5rem"}}>{nowShop.Location}</p>
                        </div>
                        <div className="mt-2 ps-4">
                            <FontAwesomeIcon style={{fontSize:"1.6rem", color:"#7CFC00"}} icon={starIcon} />
                            <p className="d-inline ps-3" style={{fontSize:"1.5rem"}}>{nowShop.Stars}</p>
                            <button className="btn btn-outline-success ms-3" style={{borderColor:"#7CFC00", marginBottom:"0.5rem", color:"black"}}>See comments</button>
                        </div>
                    </div>

                    <div className="col-6">

                        <div className="col-12 d-flex justify-content-center">
                            <div className="d-flex" style={{width:"fit-content"}}>
                            <p style={{fontSize:"1.2rem"}}>{nowShop.Ready ? "Ready to order" : "Not ready to order"}</p>
                            <span className="spinner-grow spinner-grow-sm mt-1 ms-2" style={{color:`${nowShop.Ready ? "#7CFC00" : "red"}`, width:"1.5rem", height:"1.5rem"}} role="status"></span>
                            </div>
                        </div>

                        <div className="row">

                            <div className="col-6 d-inline-flex justify-content-end">
                                <FontAwesomeIcon style={{color:"#7CFC00", fontSize:"2rem"}} icon={clockIcon} />
                                <div className="ps-3">
                                    <h4>{nowShop.Time[0]} - {nowShop.Time[1]} min</h4>
                                    <p className="text-center">Average delivery time</p>
                                </div>
                            </div>

                            <div className="col-6 d-inline-flex justify-content-start">
                                <FontAwesomeIcon style={{color:"#7CFC00", fontSize:"2rem"}} icon={nowShop.Shipby === "Car" ? carIcon : motorcycleIcon} />
                                <div className="ps-3">
                                    <h4>{nowShop.Shipby}</h4>
                                    <p className="text-center">Shipping method</p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
                
                <Container className="m-0" style={{maxWidth:"100%"}}>
                    <Row className="justify-content-center">
                        <Tabs variant="shop-tab" defaultActiveKey="tab-1" className="mb-0" style={{paddingLeft:"7rem"}}>
                            <Tab eventKey="tab-1" title="Menu">
                                <Menu shop={nowShop} />
                            </Tab>
                            <Tab eventKey="tab-2" title="Comments">
                                Doodoo
                            </Tab>
                            
                        </Tabs>
                    </Row>
                </Container>

            </div>
        </React.Fragment>
    )
}