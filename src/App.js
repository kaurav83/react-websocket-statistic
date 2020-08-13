import React from "react";
import Mediana from "./components/Mediana";

export default class Echo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
  }

  componentDidMount() {}

  handleGetData = () => {
    this.connection = new WebSocket(
      "wss://trade.trademux.net:8800/?password=1234"
    );
    this.connection.onmessage = (evt) => {
      this.setState({
        // messages: this.state.messages.concat([evt.data])
        messages: [...this.state.messages, evt.data]
      });
      console.log(evt.data);
    };
    this.webSocketSendInterval = setInterval(() => {
      this.connection.send(Math.random());
    }, 5000);
  };

  handleStopGetData = () => {
    this.connection.close();
  };

  componentWillUnmount() {
    clearInterval(this.webSocketSendInterval);
  }
  render() {
    let parsedData = this.state.messages.map(item => JSON.parse(item));
    
    return (
      // slice(-5) gives us the five most recent messages
      <ul>
        {/* {this.state.messages.slice(-5).map((msg, idx) => (
          <li key={"msg-" + idx}>{msg}</li>
        ))} */}
        <li>
          <button onClick={this.handleGetData}>submit</button>
          <button onClick={this.handleStopGetData}>Stop</button>
        </li>
        <li>
          <Mediana data={parsedData} />
        </li>
      </ul>
    );
  }
}
