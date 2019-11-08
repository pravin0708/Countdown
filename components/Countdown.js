import React, { Component } from "react";
import "../App.css";

class Countdown extends Component {
  state = {
    timer: false,
    onoff:true,
    i:10,
    j:1000,
    Start: 0,
    Time: 51*1000,
    style:{ color: 'green'}

  };

  startTimer = () => 
  {
    

   

    this.setState({
      timer: true,
      onoff:false,
      Time: this.state.Time,
      Start:   this.state.Time - this.state.i


    });

    this.timer = setInterval(() => {

      this.setState({
        Time: this.state.Start-this.state.i,Start:   this.state.Time - this.state.i

      });
    }, 10);
    
  };

  stopTimer = () => {
    this.setState({ timer: false });
    clearInterval(this.timer);
  };

  resetTimer = () => {
    this.setState({
      Start: 0,
      Time: 51*1000 
    });
  };










  render() {
   
    const { Time } = this.state;
    let miliseconds = ("0" + (Math.floor(Time / 10) % 100)).slice(-2);
     if(this.state.Time<=10000)
{
  this.state.style = { color: 'red'};

}
if(this.state.Time<=50000 && this.state.Time>=10000)
{
  this.state.style = { color: 'yellow'};

}
if(this.state.Time>50000)
{
  this.state.style = { color: 'green'};

}

if(this.state.Time===0)
{
  alert("Time's Up");
  window.location.reload(true);
}

    let seconds = ("0" + (Math.floor(Time / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(Time / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(Time / 3600000)).slice(-2);

    return (
      <div className="Countdown">
        <div className="Countdown-header"></div>
                <label>
           <input 
        type="text" className="text"
        value={this.state.value}
        onChange={this.handleChange}
      />
    

           

        </label>

        <div className="Countdown-display" style={ this.state.style }>
          {hours} : {minutes} : {seconds} : {miliseconds}
        </div>
        
        {this.state.timer === false && this.state.Time >= 0 && this.state.onoff === true &&(
          <button onClick={this.startTimer}>Start</button>
        )}
        {this.state.timer === true && (
          <button onClick={this.stopTimer}>Stop</button>
        )}
        {this.state.timer === false && this.state.Time > 0 && this.state.onoff === false &&(
          <button onClick={this.startTimer}>Resume</button>
        )}
        {this.state.timer === false && this.state.Time > 0 && this.state.onoff === false &&(
          <button onClick={this.resetTimer}>Reset</button>
        )}
      </div>
    );
  }
}

export default Countdown;
