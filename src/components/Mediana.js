import React, {Component} from "react";

class Mediana extends Component {
  state = {
      run: false,
      singleValue: null,
  }
  findMediana = (data) => {
      
    const sorted = data
                .map(v => v.value)
                .sort((a, b) => a - b);

    const middle = Math.floor((sorted.length - 1) / 2);

    return sorted.length % 2 ? 
                sorted[middle] 
                : 
                (sorted[middle] + sorted[middle + 1]) / 2.0;
  }

  renderStatistic = () => {
    //   if (this.state.run) {
          this.setState({
            
            singleValue: this.findMediana(this.props.data)
          })
    //   }
    
  }

  render () {
console.log(this.state.singleValue, 'SINGLE VALUE')
      return (
        <div>
            Mediana
            {/* {
                findMediana(data) ? 
                    <div>{getSingleValue()}</div>
                    :
                    null
            } */}
            <button onClick={() => this.renderStatistic()}>Статистика</button>
            <div>{this.state.singleValue}</div>
        </div>
    );
  }
  
};

export default Mediana;
