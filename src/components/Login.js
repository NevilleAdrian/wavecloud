import React, { Component } from 'react'

const data = [
    {
      email: "Neville.chuks@gmail.com",
      password: "password",
    },
    {
        email: "Chisom@gmail.com",
        password: "password"
    }

  ];

  const checkUser = (email, password) => {
      return data.some(u => u.email === email && u.password === password)
  }

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          email:'',
          password: '',
          Authentication: false
        }
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    
      }
    
      
    
     handleEmailChange(e) {
          this.setState({...this.state, email: e.target.value})
      
    }  
    
    handlePasswordChange(e) {
        this.setState({...this.state, password: e.target.value})
    }

    submitForm(e) {
        e.preventDefault();
        if(checkUser(this.state.email, this.state.password)){
            this.props.auth(true);
        }
    }
  
    
    
    render() {
        console.log("email",this.state.email)
        console.log( "password",this.state.password)
        console.log("auth", this.state.Authentication)
        return (
            <>
            <div className="background-image">
            <div className="d-inline  pad-login">
               <h3 className="login">Login</h3>
               <div className="d-flex">
                            <img className="login-right" src="images/loginfacebook.svg"/>
                            <img className="login-right" src="images/logingoogle.svg"/>
                            <img className="login-right" src="images/logintwitter.svg"/>
                            <img className="login-right" src="images/logininstagram.svg"/>
                </div>
                <div className="resized">
                    <p className="resized-p">or use your account </p>
                </div>
                <form method="POST" onSubmit={this.submitForm}>  
                 <div className="pad-account">
                 <div className="input-group d-inline">
                     <h3 className="input-box">Email</h3>  
                    <input className="input--style-3" type="email" name="email address"  id="inputEmail"
                    value={this.state.email} onChange={this.handleEmailChange} required
                    />
                </div>

                <div className="input-group d-inline ">
                     <h3 className="input-box push-up">Password</h3>  
                    <input className="input--style-3" type="password" id="inputPassword" name="password" 
                    value={this.state.password} onChange={this.handlePasswordChange} required
                    />
                </div>
               <div className="d-flex">
               <div className="resized">
                    <p className="forgot">Forgot Password</p>
                </div>
                <div className="resized-right">
                    <p className="forgot">Register</p>
                </div>

               </div>

               <div >
                    <button className="login-button"  type="submit" > Login</button>
                </div>
              

                 </div>
             </form>
                 
                
            </div>
            </div>
           
            </>
        )
    }
}
