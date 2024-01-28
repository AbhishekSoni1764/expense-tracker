import React from "react"
import logo from "../images/et-logo.png"


export default function Header() {
    return (
        <div className="header">
            <img src={logo} alt="LOGO" />
            <h2>EXPENSE TRACKER</h2>
        </div>
    )
    
}