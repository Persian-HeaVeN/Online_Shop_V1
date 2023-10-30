import React, { useContext } from "react";
import { shops } from "../../components/Shops"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare as plusIcon, faMinusSquare as minusIcon } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../contexts/shopContext";
import { separateComma } from "../../components/SeparateComma";
import { hideCart } from "../../reducers/SliceReducers";
import { useDispatch } from "react-redux";

export function Cart(props) {
    const {items, shopName} = props.datas
    
    const {addToCart, removeFromCart, getTotalPrice} = useContext(ShopContext);

    const navigateTo = useNavigate();

    const dispatch = useDispatch();

    const theShop = shops.filter((data) => data.Name === shopName)[0]

    return (
        <React.Fragment>
            <div className="cart-holder">
                <div className="cart-info" style={{borderBottom:"1px solid #cccccc"}}>
                    {props.close && <button onClick={()=>{dispatch(hideCart())}} style={{float:"right", paddingTop:"30px", paddingRight:"20px"}} type="button" class="btn-close" aria-label="Close"></button>}
                    <figure>
                        <img src={theShop.Images.Icon} />
                    </figure>
                    <aside>
                        {shopName} Fast Food
                        <div>
                            <a onClick={()=>{navigateTo(`/shop/${shopName}`);}}>
                                See menu
                            </a>
                        </div>
                    </aside>
                </div>


                <div className="cart-holder-inner">
                    <div className="cart-list-holder scrollbar-dusty-grass">
                        {items.map((datas)=>{
                                return (
                                    <div className="cart-items">
                                        <aside>
                                            <h3 className="warp-hide-text">{datas.Name}</h3>
                                            <small>{separateComma(datas.Price)}$</small>
                                        </aside>
                                        <div className="cart-items-right-side">
                                            <FontAwesomeIcon onClick={()=>{removeFromCart(datas.Name)}} className="btn-animation" style={{color:"#7CFC00", fontSize:"1.5rem"}} icon={minusIcon} />
                                            <p>{datas.Count}</p>
                                            <FontAwesomeIcon onClick={()=>{addToCart(datas, shopName)}} className="btn-animation" style={{color:"#7CFC00", fontSize:"1.5rem"}} icon={plusIcon} />
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                </div>
                
                
                <div className="clearfix"></div>
                
                <div className="px-2">
                    <p style={{float:"left", paddingLeft:"10px", fontSize:"1.2rem", fontWeight:"bold"}}>Total Price:</p>
                    <p style={{float:"right", paddingRight:"10px", fontSize:"1.2rem", fontWeight:"bold"}}>{separateComma(getTotalPrice())}$</p>
                </div>

            </div>
        </React.Fragment>
    )
}