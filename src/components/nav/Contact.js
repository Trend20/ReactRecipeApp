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
    handleInput = (e) =>{
        const {name, value} = e.target;
        this.setState({
            [name]:value,
        });
    }
    render() { 
        return (
            <div className="contact">
                <h3 className="text-center text-secondary">Contact Us</h3>
                <input 
                className="form-control"
                type="text"
                placeholder="Enter Username"
                value={this.state.username}
                onChange={(e) =>this.handleInput('username', e.target.value)}
                />
                <input
                className="form-control"
                type="email"
                placeholder="Enter email"
                onChange={(e) =>this.handleInput('email', e.target.value)}
                value={this.state.email}
                />
                <input
                className="form-control"
                type="textbox"
                placeholder="Message"
                value={this.state.message}
                onChange={(e) =>this.state.handleInput('message', e.target.value)}
                />
                <button className="btn btn-primary" onClick={() =>this.addMessage()}>Submit</button>
            </div>
        );
    }
}
 
export default Contact;