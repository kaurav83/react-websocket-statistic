import React, {Component} from "react";
import Mediana from "./components/Mediana";
import StandardDeviation from './components/StandardDeviation';
import Middle from './components/Middle';
import Mode from './components/Mode';
import {findMediana} from './helpers/findMediana';
import {findMiddle} from './helpers/findMiddle';
import {findStandardDeviation} from './helpers/findStandardDeviation';
import {findMode} from './helpers/findMode';
import {currentTime} from './helpers/currentTime';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      messages: [],
      singleValueMediana: null,
      valueMiddle: null,
      valueStandardDeviation: null,
      valueMode: null,
      calculateTime: null,
    };
  }

  // установка соединения с данными через вебсокет при клике
  // на кнопку Старт
  handleGetData = () => {
    this.connection = new WebSocket(
      "wss://trade.trademux.net:8800/?password=1234"
    );
    this.connection.onmessage = (evt) => {
      this.setState({
        messages: [...this.state.messages, evt.data]
      });
    };
    this.webSocketSendInterval = setInterval(() => {
      this.connection.send(Math.random());
    }, 5000);
  };

  // закрытие соединения через вебсокет
  // при размонтировании компонента
  componentWillUnmount() {
    this.connection.close();
    clearInterval(this.webSocketSendInterval);
  }

  // рассчёт статистических данных при клике 
  // кнопки Статистика
  handleStatistic = (e, parsedData) => {
    this.setState({
      singleValueMediana: findMediana(parsedData),
      valueMiddle: findMiddle(parsedData),
      valueStandardDeviation: findStandardDeviation(parsedData),
      valueMode: findMode(parsedData),
      calculateTime: currentTime()
    })
  }

  render() {
    const {
      singleValueMediana, 
      valueMiddle, 
      valueStandardDeviation,
      valueMode,
      calculateTime,
      messages
    } = this.state;
    
    // преобразование JSON формата в коллекцию
    let parsedData = messages.map(item => JSON.parse(item));
    
    return (
      <main className="main">
          <button onClick={this.handleGetData}>Старт</button>
          <button 
              onClick={(e) => this.handleStatistic(e, parsedData)}
              disabled={messages.length === 0 ? true : false}
              className="statistic-btn"
          >Статистика</button>

          <div className="time-calculation param-block__text">
            Время расчётов: <span className="default-text">{calculateTime}</span>
          </div>
          <Mediana data={singleValueMediana} />
          <Middle data={valueMiddle} />
          <StandardDeviation data={valueStandardDeviation} />
          <Mode data={valueMode} />
      </main>
    );
  }
}
