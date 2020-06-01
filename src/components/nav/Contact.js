import React, { Component } from 'react';
 
class Contact extends Component {
    render() { 
        return (
            <div className="contact">
                <h3>Contact Us</h3>
                <input 
                type="text"
                placeholder="Enter Username"
                value={this.state.username}
                onChange={(e) =>this.handleNameInput('username', e.target.value)}
                />
                <input
                type
            </div>
        );
    }
}
 
export default Contact;