import React from "react";

import "./card.css"
const Card = props =>{
    var total = 0
    Object.keys(props.student.marks).map(mark=>(
       total = total + props.student.marks[mark]
    ))
    return(
        <a className="card" href={"/"+props.student.rollNo}>
            <div >
                <h4>Name : {props.student.name}</h4>
                <h5>Roll no :{props.student.rollNo}</h5>
                <p>Total marks : {total}</p>
            </div>
        </a>
    )
}

export default Card;