import React from 'react';
import CardList from "../card-list/card-list";
import Navbar from "../navbar/navbar";


class Dashbaord extends React.Component{
    

  render(){
    
    const {students,searchName} = this.props;
    var studentSearch = students.filter(student=>{
      return student.name.toLowerCase().includes(searchName.toLowerCase())
    });
    return(
      <div className="App">
        <Navbar handleChange ={this.props.handleChange} handleOrder={this.props.handleOrder}/>
        <CardList students={studentSearch}/>
      </div>
    )
  }
}
export default Dashbaord;
