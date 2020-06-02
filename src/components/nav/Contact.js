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
    }
    render() { 
        return (
            <div className="contact">
                <form id="contact-form" method="POST">
                   <h3 className="text-center text-secondary">Contact Us</h3>
                  <div className="form-group">
                  <input 
                    type="text"
                    placeholder="Enter Username"
                    value={this.state.username}
                    onChange={this.handleUsernameInput.bind(this)}
                  />
                  </div>
                <div className="form-group">
                <input
                  type="email"
                  placeholder="Enter email"
                  onChange={this.handleEmailInput.bind(this)}
                  value={this.state.email}
                />
                </div>
                <div className="form-group">
                  <textarea
                  placeholder="Message"
                  value={this.state.message}
                  onChange={this.handleMessageText.bind(this)}
                />
                </div>
                <button onClick={this.handleSubmit.bind(this)}>Submit</button>
                </form>
            </div>
        );
    }
}
 
export default Contact;