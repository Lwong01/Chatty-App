require("../styles/home.scss");
import React, { Component } from 'react';

export default class ChatBar extends Component {
  constructor(props) {
    super(props);

    this.createNewMessage = this.createNewMessage.bind(this);
  }
  createNewMessage(event){
    if(event.key==="Enter"){
      //console.log("we are pressed enter in the chatbar")
      this.props.addMessage(event.target.value)
      event.target.value = '';
    }
  }

  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name (Optional)" value={this.props.username} />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress = {this.createNewMessage} />
      </footer>
    )
  }

}