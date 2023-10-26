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
            <div className="row" style={{backgroundColor:"#eee", paddingTop:"2rem", borderLeft:"1px solid #cccccc"}}>
              <div className="col-sm-5" style={{marginLeft:"5rem"}}>
                
                {theShop.MenuTypes.map((types, index)=>{
                  return (
                    <div key={index}>
                      <h1 style={{marginBottom:"1rem"}}>{types}</h1>
                      {theShop.Menu.filter((items)=>items.Type === types).map((data, index)=>{
                        if ( index < Math.ceil(theShop.Menu.filter((items)=>items.Type === types).length/2) )
                        return (
                          <div key={index} className="card" style={{marginBottom:"1rem", marginLeft:"2rem"}}>
                            <div className="card-body">
                              <img style={{borderRadius:"1rem", width:"25%", maxHeight:"120px", float:"left", marginTop:"0.5rem"}} src={data.Image} alt={`${data.Type} image`} />
                              <div style={{marginLeft:"10.5rem"}}>
                                <h5 className="card-title">{data.Name}</h5>
                                <p className="card-text" style={{color:"#888"}}>{data.Description}</p>
                                <p style={{margin:"0", padding:"0", position:"absolute", bottom:"1.25rem", color:"#7CFC00"}}>{separateComma(data.Price)} $</p>
                                <FontAwesomeIcon onClick={()=>{addToCart(data.Name)}} className="add-to-cart-btn" icon={plusIcon} style={{fontSize:"1.5rem", position:"absolute", bottom:"0.5rem", right:"1rem", color:"#7CFC00"}} />
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  )
                })}
              
              </div>
              <div className="col-sm-5" style={{marginTop:"4rem"}}>
                
              {theShop.MenuTypes.map((types, index)=>{
                  return (
                    <div key={index}>
                      {theShop.Menu.filter((items)=>items.Type === types).map((data, index)=>{

                        const shopMenuCount = theShop.Menu.filter((items)=>items.Type === types).length;

                        if ( index >= Math.ceil(shopMenuCount/2) )
                        return (
                          <div key={index} className="card" style={{marginBottom:`${ shopMenuCount === index+1 ? "5rem" : "1rem"}`, marginLeft:"2rem"}}>
                            <div className="card-body">
                              <img style={{borderRadius:"1rem", width:"25%", maxHeight:"120px", float:"left", marginTop:"0.5rem"}} src={data.Image} alt={`${data.Type} image`} />
                              <div style={{marginLeft:"10.5rem"}}>
                                <h5 className="card-title">{data.Name}</h5>
                                <p className="card-text" style={{color:"#888"}}>{data.Description}</p>
                                <p style={{margin:"0", padding:"0", position:"absolute", bottom:"1.25rem", color:"#7CFC00"}}>{separateComma(data.Price)} $</p>
                                <FontAwesomeIcon onClick={()=>{addToCart(data.Name)}} className="add-to-cart-btn" icon={plusIcon} style={{fontSize:"1.5rem", position:"absolute", bottom:"0.5rem", right:"1rem", color:"#7CFC00"}} />
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  )
                })}

              </div>
            </div>
        </React.Fragment>
    )
}
