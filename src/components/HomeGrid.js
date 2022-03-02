import React from "react"
import nature from "../images/nature.png"
import coffee from "../images/coffee.png"
import delivery from "../images/delivery.png"

export default function HomeGrid(){
    return (
        <div className="row">
            <img className="HomeGrid" src={nature} alt="illistration of woman walking in nature"></img>
            <img className="HomeGrid" src={coffee} alt="illistration of two people drinking coffee"></img>
            <img className="HomeGrid" src={delivery} alt="illistration of person delivering a parcel"></img>
        </div>
    )
}