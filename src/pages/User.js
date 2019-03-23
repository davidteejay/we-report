import React, { Component } from 'react';
import Axios from 'axios';
import {API_URL } from '../config/constants'
import M from 'materialize-css'

class User extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstName : "",
            lastName : "",
            email : "",
            phone : "",
            job : "",
            password : "",
            dateOfBirth: "",
         }
    }

    fNameChange = e => {
        this.setState({
            firstName : e.target.value
        })
    } 
    lNameChange = e => {
       this.setState({
           lastName : e.target.value
       })
   } 
   
   emailChange = e => {
       this.setState({
           email : e.target.value
       })
   } 

   phoneChange = e => {
       this.setState({
           phone : e.target.value
       })
   } 

   jobChange = e => {
       console.log(e.target.value)
       this.setState({
           job : e.target.value
       })
   } 

   passChange = e => {
       this.setState({
           password : e.target.value
       })
   } 
   dobChange = e => {
       this.setState({
           dateOfBirth : e.target.value
       })
   }
   
   submitForm = (e) =>{
    e.preventDefault();
    const { firstName, lastName, password, email, phone, job, dateOfBirth } = this.state
    Axios.post(`${API_URL}/auth/signup`, {
        firstName,
        lastName,
        email,
        password,
        phone,
        job,
        type : "user",
        dateOfBirth,

    })
    .then( res => {
        res = res.data
        console.log(res)
        if(res.error) M.toast({ html : `${res.message}`})
        else{

        }
    })
    .catch( err => console.error(err))
    .finally({
        
    })
}

    render() { 
        return ( 
            <div>
                 <div id="#user" className="">
                            <div className="form-all">
                                <div className="form-card">
                                    <form className="valign shadowed" onSubmit={this.submitForm} >
                                        <div className="row">
                                            <div className=" col s12 input-container">
                                                <label htmlFor="firstName">First Name</label>
                                                <input id="firstName" type="text" onChange={this.fNameChange} ></input>	
                                            </div>
                                        </div>

                                            <br />

                                        <div className="row">
                                            <div className=" col s12 input-container">
                                                <label htmlFor="lastName">Last Name</label>
                                                <input id="lastName" type="text" className="validate" onChange={this.lNameChange}></input>
                                                
                                            </div>
                                        </div>

                                        <br />

                                        <div className="row">
                                            <div className=" col s12 input-container">
                                                <label htmlFor="email">Email</label>
                                                <input id="email" type="email" onChange={this.emailChange} ></input>	
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className=" col s12 input-container">
                                                <label htmlFor="dateOfBirth">Date of Birth</label>
                                                <input id="dateOfBirth" type="date" onChange={this.dobChange} ></input>	
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className=" col s12 input-container">
                                                <label htmlFor="phone">Phone</label>
                                                <input id="phone" type="text" onChange={this.phoneChange} ></input>	
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className=" col s12 input-container">
                                                <label htmlFor="job">Job</label>
                                                <input id="job" type="text" onChange={this.jobChange} ></input>	
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className=" col s12 input-container">
                                                <label htmlFor="password">Password</label>
                                                <input id="password" type="password" onChange={this.passChange} ></input>	
                                            </div>
                                        </div>
                                        <button className="btn waves-effect waves-light" type="submit" name="action" >Submit</button>

                                    </form>
                                </div>
                            </div>
                        </div>
            </div>
         );
    }
}
 
export default User;