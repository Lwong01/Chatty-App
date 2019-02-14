import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';
const uuidv1 = require('uuid/v1');

export default class App extends Component {
  constructor(props) {
    super(props);
    // this is the *only* time you should assign directly to state:
    this.state = {
      currentUser: {
       name: "Bob"},
       messages: []
  }

    this.addMessage = this.addMessage.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  addMessage(newMessage) {
    //Creating a variable that has an objext
    const msg = {
      username: this.state.currentUser.name,
      content: newMessage
    };
    this.webSocket.send(JSON.stringify(msg)); //you need to send it as a string because you can only send strings and NOTHING else. Then you parse it back into an object when the server gets it.
  }

  changeUser(newUser){
    this.setState({
      currentUser: {name: newUser}
    })
  }

  componentDidMount() {
    this.webSocket = new WebSocket("ws://localhost:3001");
    this.webSocket.onopen = (event) =>{
      console.log("Connected to server");
      this.webSocket.onmessage = (event) => {

        //receive the messages from the websocket and add it to the current messages
        //and then set theState to refresh the component.

        const parsed = JSON.parse(event.data);
        const messages = this.state.messages.concat(parsed);
        this.setState({ messages: messages })
      }
    }
    console.log("componentDidMount <App />");
    // setTimeout(() => {
    //   console.log("Simulating incoming message");
    //   // Add a new message to the list of messages in the data store
    //   const newMessage = { id: 3, username: "Michelle", content: "Hello there!" };
    //   const messages = this.state.messages.concat(newMessage)
    //   // Update the state of the app component.
    //   // Calling setState will trigger a call to render() in App and all child components.
    //   this.setState({ messages: messages })
    // }, 3000);


  }

  render() {
    return (
      <div>
        <div>
          <MessageList messages={this.state.messages} />
        </div>
        <div>
          <ChatBar username={this.state.currentUser.name} addMessage={this.addMessage} changeUser={this.changeUser} />
        </div>
      </div>

    );
  }
}
// export default App;
