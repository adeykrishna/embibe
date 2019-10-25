import React from 'react';
import { Switch, Route, BrowserRouter,Redirect } from "react-router-dom"
import './App.css';
import Dashbaord from "./components/dashbaord/dashboard";
import StudentDetail from "./components/studentDetail/studentdetail";
import Login from './components/login/login';
// import Login from "./components/login/login"
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      students: [],
      searchName: "",
     
    }
  }


  componentDidMount() {
    
    fetch("http://api.myjson.com/bins/1dlper")
      .then(response => response.json())
      .then(data => {
        var students = Object.keys(data).map(d => {
          return data[d]
        })
        this.setState({ students })
      })
  }


  handleOrder = (e, orderBy) => {

    const orderType = e.target.value
    const copystudents = [...this.state.students]
    if (orderBy === "name") {
      if (orderType === "increasing") {
        copystudents.sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1
          }
          else {
            return -1
          }
        })
      }
      else {
        copystudents.sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return -1
          }
          else {
            return 1
          }
        })

      }
      this.setState({ students: copystudents })
    }
    if (orderBy === "marks") {
      if (orderType === "increasing") {
        copystudents.sort((a, b) => {
          var aTotal = Object.values(a.marks).reduce((total, val) => {
            return total + val
          })
          var bTotal = Object.values(b.marks).reduce((total, val) => {
            return total + val
          })

          if (aTotal > bTotal) {
            return 1
          }
          else {
            return -1
          }
        })
      }
      else {
        copystudents.sort((a, b) => {
          var aTotal = Object.values(a.marks).reduce((total, val) => {
            return total + val
          })
          var bTotal = Object.values(b.marks).reduce((total, val) => {
            return total + val
          })

          if (aTotal > bTotal) {
            return -1
          }
          else {
            return 1
          }
        })
      }
      this.setState({ students: copystudents });
    }
  }
  handleChange = (e) => {
    this.setState({
      searchName: e.target.value
    })
  }
  render() {
    console.log(this.state.login)
  
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/login"  >
              <Login />
            </Route>
            <Route exact path="/"  >
              <Dashbaord students={this.state.students} searchName={this.state.searchName} handleOrder={this.handleOrder} handleChange={this.handleChange}></Dashbaord>
            </Route>
            <Route exact path="/:id"  >
              <StudentDetail students={this.state.students}></StudentDetail>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }

}
export default App;
