import React, { Component } from 'react';
//import './App.css'
import { Link, } from 'react-router-dom';
class Login extends Component {
  constructor(props) {
    super(props);
    this.email = React.createRef();
    this.password = React.createRef();
    //this.array= this.props && this.props.location && this.props.location.state && this.props.location.state.items; 
  }

  errormsg = {};
  loginPage=()=> {
    if (this.validation('all')) {
      
          this.props.history.push({
            pathname: '/Home',
           
          }
          )
        }
        
      
      
  }
  
  validation=(type='all') =>{
    if (type === "all" || type === "email") {
      if (!this.email.current.value) {
        this.errormsg.username = "Please enter your mail id";
      } else if (!this.email.current.value.match(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/)
      ) {
        this.errormsg.email = "Please enter valid mail id";
      } else {
        delete this.errormsg.email;
      }
    }
    if (type === "all" || type === "password") {
      if (!this.password.current.value) {
        this.errormsg.password = "Please enter your password";
      } else if (!this.password.current.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/)) {

        this.errormsg.password = "Please enter valid password with atleast one special character,one number and one Uppercase letter";
      } else {
        delete this.errormsg.password;
      }
    }
    this.setState({})
    return Object.keys(this.errormsg).length === 0;
  }
  render() {
    return (
      <div className="form">
        <h1 className="sec1">LOGIN</h1>
        <div className="forlabels">
          <div>
            <label>Email</label><br></br>
            <input type='email' ref={this.email} placeholder='Email-id' onBlur={() => { this.validation("email") }}></input>
          </div>
          <div className="error" >
            {this.errormsg.email}
          </div><br></br>
          <div>
            <label>Password</label><br></br>
            <input type='password' ref={this.password} placeholder='Password' onBlur={() => { this.validation("password") }}></input>
          </div>
          <div className="error" >
            {this.errormsg.password}
          </div><br></br>
          <div>
            <button name="button" onClick={ this.loginPage }>LOGIN</button>
          </div>
         
        </div>
      </div>
    );
  }
}
export default Login;