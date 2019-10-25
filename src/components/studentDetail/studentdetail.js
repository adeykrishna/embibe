import React from "react";
import { useParams } from "react-router-dom";
import "./studentDetail.css";
import Chart from "../chart/chart"

const StudentDetail = props => {
    let { id } = useParams();

    let studentinfo = props.students.filter(student => {
        return id == student.rollNo
    })
    let data = [];
    studentinfo.map(student => {
        Object.keys(student.marks).map(mark => {
            data.push({ x: mark, y: student.marks[mark] })
        })
    });
    return (
        <div>
            <nav className="navbar fixed-top  navbar-light bg-light">
                <a className="navbar-brand" href="/" >Embibe</a>

            </nav>
            <div className="detalis">
                {studentinfo.map(student => {
                    return (
                        <div key={student.rollNo}>
                            <h1 >{student.name}</h1>
                            <h4>{student.rollNo}</h4>

                        </div>

                    )
                })}

            </div>

            <div className="details chart">
                <Chart data={data} />
            </div>

        </div>
    )
}


export default StudentDetail;