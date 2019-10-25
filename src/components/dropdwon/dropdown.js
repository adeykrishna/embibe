import React from "react";

import "./dropdown.css"
const DropDwon = props =>{
    return(
        <div className="dropdwon box">
          <select onChange={props.handleOrder}>
            <option value="">{props.sort}</option>
            <option value="increasing">increasing</option>
            <option value="decreasing">decreasing</option>
          </select>
        </div>
    )
}


export default DropDwon;