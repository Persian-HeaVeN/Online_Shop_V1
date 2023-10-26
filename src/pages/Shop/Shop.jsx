import { useNavigate, useParams } from "react-router-dom";
import { shops } from "../../components/Shops";
import cartEmpty from "../../assets/cart_empty.png"
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock as clockIcon, faStar as starIcon } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot as locationIcon, faMotorcycle as motorcycleIcon, faCar as carIcon } from "@fortawesome/free-solid-svg-icons";
import {Container, Row, Tab, Tabs} from "react-bootstrap"
import { Menu } from "./Menu";


export function Shop() {
    const {name} = useParams();

    const nowShop = shops.filter((data) => data.Name === name)[0]

    let navigateTo = useNavigate();

    return (
        <React.Fragment>
            <div className="menu-sidenav d-none d-xl-block" style={{borderRight:"1px solid #cccccc"}}>
                <img src={cartEmpty} style={{maxWidth:"300px", marginTop:"60px"}} />
                <span style={{color:"#cccccc", textAlign:"center", display:"block", fontSize:"1.2rem"}}>Cart is empty</span>
            </div>
            <div className="shop-content d-md-none">
                content will show in medium or smaller size monitor
            </div>
            <div className="shop-content d-none d-md-block">
                <div style={{marginBottom:"1rem", backgroundImage:`url(${nowShop.Images.Main})`, backgroundSize:"cover", backgroundPosition:"center center", backgroundRepeat:"no-repeat", position:"relative", width:"100%", float:"right", height:"300px"}}>
                    <div className="cover-color"></div>
                    <div className="bottom-left" style={{backgroundColor:"white", borderRadius:"1.5rem", bottom:"20px", left:"6rem"}}>
                        <img src={nowShop.Images.Icon} alt="shop icon" style={{borderRadius:"1.5rem", width:"8rem", padding:"0.1rem"}} />
                    </div>
                    <div className="top-right">
                        <button onClick={()=>{navigateTo("/")}} className="btn btn-outline-light" style={{width:"10rem", fontSize:"1.2rem"}}>Back to main</button>
                    </div>
                </div>
                    <div className="under-main-image">
                        <h1 style={{marginLeft:"6.5rem"}}>{nowShop.Name} fast food</h1>
                        <FontAwesomeIcon style={{fontSize:"1.6rem", marginLeft:"9.3rem", marginTop:"0.8rem", color:"#7CFC00"}} icon={locationIcon} />
                        <p style={{display:"inline", marginLeft:"1rem", fontSize:"1.5rem"}}>{nowShop.Location}</p>
                        <br/>
                        <FontAwesomeIcon style={{fontSize:"1.6rem", marginLeft:"9rem", marginTop:"0.8rem", color:"#7CFC00"}} icon={starIcon} />
                        <p style={{display:"inline", marginLeft:"0.8rem", fontSize:"1.5rem"}}>{nowShop.Stars}</p>
                        <button style={{marginLeft:"0.8rem", borderColor:"#7CFC00", height:"2rem", marginBottom:"0.5rem", paddingBottom:"1.9rem", color:"black"}} className="btn btn-outline-success">See comments</button>
                </div>
                <div className="under-main-image-right-side">
                    <div style={{display:"flex"}}>
                        <p style={{marginLeft:"12rem", fontSize:"1.2rem", display:"inline-flex", marginTop:"1rem"}}>{nowShop.Ready ? "Ready to order" : "Not ready to order"}</p>
                        <div style={{color:`${nowShop.Ready ? "#7CFC00" : "red"}`, marginLeft:"0.8rem", width:"1.5rem", height:"1.5rem", display:"inline-flex", marginTop:"1.25rem"}} className="spinner-grow spinner-grow-sm" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    <div style={{marginLeft:"12rem", display:"inline-flex"}}>
                        <FontAwesomeIcon style={{color:"#7CFC00", fontSize:"2rem"}} icon={clockIcon} />
                        <div style={{display:"grid", position:"absolute", marginLeft:"2rem"}}>
                            <h4 style={{textAlign:"center", marginLeft:"1rem"}}>{nowShop.Time[0]} - {nowShop.Time[1]} min</h4>
                            <p style={{position:"absolute", marginLeft:"0.4rem", marginTop:"2rem", width:"160px"}}>Average delivery time</p>
                        </div>
                    </div>
                    <div style={{marginLeft:"12rem", display:"inline-flex"}}>
                        <FontAwesomeIcon style={{color:"#7CFC00", fontSize:"2rem"}} icon={nowShop.Shipby === "Car" ? carIcon : motorcycleIcon} />
                        <div style={{display:"grid", position:"absolute", marginLeft:"2rem"}}>
                            <h4 style={{textAlign:"center", marginLeft:"1rem"}}>{nowShop.Shipby}</h4>
                            <p style={{position:"absolute", marginLeft:"0.4rem", marginTop:"2rem", width:"160px"}}>Shipping method</p>
                        </div>
                    </div>
                </div>
                
                <Container className="py-4" style={{margin:"0", maxWidth:"100%"}}>
                    <Row className="justify-content-center">
                        <Tabs variant="custom" defaultActiveKey="tab-1" className="mb-0" style={{paddingLeft:"7rem"}}>
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