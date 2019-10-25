import React from "react";
import DropDwon from "../dropdwon/dropdown"
import "./navbar.css"
const Navbar = props =>{
    return(
        <nav className="navbar fixed-top  navbar-light bg-light">
            <a className="navbar-brand" href="/" >Embibe</a>
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={props.handleChange} />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>


                <div className="orderby">
                <DropDwon sort ="sort by name"  handleOrder={(e)=>props.handleOrder(e,"name")} />
                <DropDwon sort ="sort by marks" handleOrder={(e)=>props.handleOrder(e,"marks")}/>
                </div>
            </form>
          
            
        </nav>
       
    )   
}

export default Navbar;