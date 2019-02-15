require("../styles/home.scss");
import React, { Component } from 'react';

export default class ChatBar extends Component {
  constructor(props) {
    super(props);

    this.createNewMessage = this.createNewMessage.bind(this);
  }

  // new message will be sent to the parent when we press enter
  // after pressing enter, the message box will clear the message
    createNewMessage(event){
    if(event.key==="Enter"){
      //console.log("we are pressed enter in the chatbar")
      this.props.addMessage(event.target.value)
      event.target.value = '';
    }
  }

  // create user but pressing enter
  // the new user will be passed on to the parent
  createUser = (event) => {
    if (event.key === "Enter") {
      //console.log("we are pressed enter in the chatbar")
      this.props.changeUser(event.target.value)

    }

    }

  //
  render() {
    return (
    <div>
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name (Optional)" onKeyPress={this.createUser} />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress = {this.createNewMessage} />
      </footer>
    </div>
    );
  }

}