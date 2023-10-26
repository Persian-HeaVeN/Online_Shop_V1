import { useParams } from "react-router-dom";
import React from "react";
import { shops } from "../../components/Shops";
import { Shop } from "../Main/Shop";
import { stringSimilarity } from "string-similarity-js";

export function Search() {
    const {resultof} = useParams();
    return (
        <React.Fragment>
            <div style={{marginLeft:"5rem", marginTop:"5rem"}}>
                <h1>Search result</h1>
                <div className="row" style={{marginTop:"2rem", marginLeft:"2rem", marginRight:"2rem"}}>
                    {shops.map((data, index)=> {
                        if (stringSimilarity(data.Name, resultof, 1) >= 0.5){
                            return <Shop key={index} data={data} />
                        }
                    } )}
                </div>
            </div>
        </React.Fragment>
    )
}