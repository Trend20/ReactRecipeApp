import React, { Component } from 'react';
import './Contact.css';
 
class Contact extends Component {
    constructor(props){
        super(props);
        this.state={
            username: '',
            email:'',
            message:[],
        }
    }
    render() { 
        return (
            <div className="contact">
                <h3 className="text-center text-secondary">Contact Us</h3>
                <input 
                type="text"
                placeholder="Enter Username"
                value={this.state.username}
                onChange={this.handleUsernameInput.bind(this)}
                />
                <input
                type="email"
                placeholder="Enter email"
                onChange={this.handleEmailInput.bind(this)}
                value={this.state.email}
                />
                <textarea
                placeholder="Message"
                value={this.state.message}
                onChange={this.handleMessageText.bind(this)}
                />
                <button className="btn btn-primary" onClick={() =>this.addMessage()}>Submit</button>
            </div>
        );
    }
}
 
export default Contact;