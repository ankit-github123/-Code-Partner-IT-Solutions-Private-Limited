import React from "react";
import Rating from "../rating/Rating"
import Button from "./Button"
import "./content.css"

const ContentHeader = () => {
    return <div>
        <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-0 col-0">

            </div>
            <div className="col-lg-10 col-md-10 col-sm-12 col-12">
                <h3 className="addidas-title title1">
                    Addidas<i class="fas fa-shopping-cart"></i>
                </h3>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-0 col-0"></div>
            <div className="col-lg-10 col-md-10 col-sm-12 col-12">
                <h2 className="addidas-title title2">
                    ADDIDAS NEW ARRIVAL CASUAL SHOES
                </h2>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-0 col-0"></div>
            <div className="col-lg-10 col-md-10 col-sm-12 col-12" style={{display:"inline-block",marginTop:"10px"}}>
                <Rating/>
                <br/>
                <div className="cost-div">
                    <h1 className="cost">INR 1999</h1>
                    <h6 className="strike-cost">INR 2400</h6>
                </div>
                
            </div>
        </div>
        <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-0 col-0s"></div>
            <div className="col-lg-10 col-md-10 col-sm-12 col-12" style={{display:"inline-block"}}>
                <span className="but"><Button/></span>
                
            </div>
        </div>
    </div>
}

export default ContentHeader;