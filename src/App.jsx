import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    // this is the *only* time you should assign directly to state:
    this.state = {
      currentUser: {
        name: "Bob"
      },
      messages: [
        {
          id: "1",
          username: "Bob",
          content: "Has anyone seen my marbles?",
        },
        {
          id: "2",
          username: "Anonymous",
          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
        }
      ]
    }
    this.addMessage = this.addMessage.bind(this);
  }

  addMessage(newMessage) {
    console.log("we are in the App component");
    console.log(newMessage);
    //this.setState({ messages: messages })
  }

  componentDidMount() {
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      const newMessage = { id: 3, username: "Michelle", content: "Hello there!" };
      const messages = this.state.messages.concat(newMessage)
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({ messages: messages })
    }, 3000);
  }

  render() {
    return (
      <div>
        <div>
          <MessageList messages={this.state.messages} />
        </div>
        <div>
          <ChatBar username={this.state.currentUser.name} addMessage = {this.addMessage} />
        </div>
      </div>

    );
  }
}
// export default App;
