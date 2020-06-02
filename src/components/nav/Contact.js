import React, { Component } from 'react';
import axios from 'axios';
import './Contact.css';
import { response } from 'express';
 
class Contact extends Component {
    constructor(props){
        super(props);
        this.state={
            username: '',
            email:'',
            message:[],
        }
    }

    handleUsernameInput(event){
        this.setState({
            username: event.target.value,
        });
    }

    handleEmailInput(event){
        this.setState({
            email: event.target.value,
        });
    }

    handleMessageText(event){
        this.setState({
            message: event.target.value,
        });
    }

    handleSubmit(event){
        event.preventDefault();

        axios({
            method: 'POST',
            url: 'http://localhost:3002/send',
            data: this.state
        }).then((response) =>{
            if(response.data.status === 'success'){
                alert('Message Sent');
                this.resetForm();
            }else if(response.data.status === 'fail'){
                alert('Message Filed to send');
            }
        })

    }
    render() { 
        return (
            <div className="contact">
            <div className="greetings">
                <h3>Welcome to Steve's Recipe</h3>
                <p>You can always connect with us at a 24/7 basis.</p>
            </div>
                <form id="contact-form" method="POST">
                   <h3 className="text-center text-secondary">Contact Us</h3>
                  <div className="form-group">
                  <input 
                    className="form-control"
                    type="text"
                    id="username"
                    placeholder="Enter Username"
                    value={this.state.username}
                    onChange={this.handleUsernameInput.bind(this)}
                  />
                  </div>
                <div className="form-group">
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  placeholder="Enter email"
                  onChange={this.handleEmailInput.bind(this)}
                  value={this.state.email}
                />
                </div>
                <div className="form-group">
                  <textarea
                  placeholder="Message"
                  id="message"
                  value={this.state.message}
                  onChange={this.handleMessageText.bind(this)}
                />
                </div>
                <button onClick={this.handleSubmit.bind(this)} id="button">Submit</button>
                </form>
            </div>
        );
    }
}
 
export default Contact;