import React from "react";

import "./card-list.css"
import Card from "../card/card"
 const CardList = props =>{
    return(
        <div className="card-list">
            {props.students.map(student=>(
                <Card student={student} key={student.rollNo}></Card>
            ))}
        </div>
    )
}

export default CardList;