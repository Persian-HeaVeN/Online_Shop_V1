import React from "react";
import { shops } from "../../components/Shops";
import { Shop } from "./Shop";
import OwlCarousel from 'react-owl-carousel';

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

    return (
        <React.Fragment>
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







