import React from "react";
import "./login.css"
import {Redirect} from "react-router-dom"

class Login extends React.Component{
    constructor(props){
        super()
        this.state = {
            username:"",
            password:"",
            redirect:false
          }
    }
    handledSubmit =(e)=>{
        e.preventDefault()
        localStorage.setItem('login',"true" );

        this.setState({
            redirect:true
        })
    }
    handleInputChange =(e)=>{
        if(e.target.name==="username"){
            this.setState({
                username:e.target.value
            })
        }
        else if(e.target.name==="password"){
            this.setState({
                password:e.target.value
            })
        }
    }
    render(){
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to='/'/>;
          }
        return(
            <div className="login">
                <form onSubmit={this.handledSubmit}>
                <input type="text" placeholder="Username" name="username" onChange={this.handleInputChange}/> 
                <input type="password" placeholder="Password" name="password" onChange={this.handleInputChange} /> 
             <input type="submit" value="Sign In" />
                </form>
            </div>
        )
    }
}

export default Login;