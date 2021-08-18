import React,{Component} from "react";
import Home from "./Home";
import Login from "./Login";
//import Signup from "./SignUp";
import{BrowserRouter,Switch,Route,}from "react-router-dom";
function pagenotfound(){
  return(
    <div><h1 style={{color:"black"}}>Page Not Found</h1></div>
  )
}
function App(){
  return(
      <div>
        <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login}></Route>
          
          <Route path="/Home" exact component={Home}></Route>
          
          <Route path="*" exact component={pagenotfound}></Route>
          </Switch>
          </BrowserRouter>
      </div>
    )
}
export default App;