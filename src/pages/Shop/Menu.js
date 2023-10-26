import React, { useContext } from "react";
import { faPlusSquare as plusIcon, faMinusSquare as minusIcon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { separateComma } from "../../components/SeparateComma";
import { ShopContext } from "../../contexts/shopContext";


export function Menu(props) {
    const theShop = props.shop;

    const {cartItems, addToCart, removeFromCart} = useContext(ShopContext);

    return (
        <React.Fragment>

            <div className="row px-4 px-md-2 px-lg-3 px-xl-4 px-xxl-5" style={{backgroundColor:"#eee", paddingTop:"2rem"}}>

                {theShop.MenuTypes.map((types, index)=>{
                  return (
                    <div key={index}>
                      <h1 className="mb-4 mt-5">{types}</h1>
                      <div className="row">
                        {theShop.Menu.filter((items)=>items.Type === types).map((data, index2)=>{
                          return (
                            <div key={index2} className="col-12 col-md-6">
                              <div className="card col-12 mb-3">
                                <div className="menu-items">
                                  <figure className="menu-images rounded-3 mt-1 mt-md-2 ms-2 ms-md-3 me-3">
                                    <img src={data.Image} alt={`${data.Type} image`} />
                                  </figure>
                                  <div className="\">
                                    <h5 className="card-title warp-hide-text mt-1 mt-md-2" style={{fontSize:"1.2rem"}}>{data.Name}</h5>
                                    <p className="card-text warp-hide-text mb-1 mb-md-3" style={{color:"#888", fontSize:"0.95rem"}}>{data.Description}</p>
                                    <p className="" style={{color:"#7CFC00"}}>{separateComma(data.Price)} $</p>
                                    <FontAwesomeIcon onClick={()=>{addToCart(data.Name)}} className="add-to-cart-btn" icon={plusIcon} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )
                })}

            </div>
        </React.Fragment>
    )
}
