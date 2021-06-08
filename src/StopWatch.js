import React, { Component } from "react";

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 0,
      sec: 0,
      displaymin: "00",
      displaysec: "00",
      isrunning: true,
      buttonLabel: "Pause",
      resetbuttondisabled: false,
    };
    this.triggerTimer = this.triggerTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }
  componentDidMount() {
    setInterval(() => {
      if (this.state.isrunning === true) {
        if (this.state.sec < 60) {
          this.setState({ sec: this.state.sec + 1 });
          if (this.state.sec < 10) {
            this.setState({ displaysec: "0" + this.state.sec });
          } else {
            this.setState({ displaysec: this.state.sec });
          }
        } else {
          this.setState({
            min: this.state.min + 1,
            sec: 0,
          });

          if (this.state.min < 10) {
            this.setState({ displaymin: "0" + this.state.min });
          } else {
            this.setState({ displaymin: this.state.min });
          }
        }
      }
    }, 1000);
  }
  triggerTimer() {
    if (this.state.isrunning) {
      this.setState({
        isrunning: false,
        buttonLabel: "Start",
      });
    } else {
      this.setState({
        isrunning: true,
        buttonLabel: "Pause",
        resetbuttondisabled: false,
      });
    }
  }
  resetTimer() {
    this.setState({
      min: 0,
      sec: 0,
      displaymin: "00",
      displaysec: "00",
      isrunning: false,
      buttonLabel: "Start",
      resetbuttondisabled: "true",
    });
  }
  render() {
    return (
      <div>
        <p style={{ fontFamily: "Orbitron", fontWeight: "bold", fontSize: 50 }}>
          {this.state.displaymin}:{this.state.displaysec}
        </p>
        <button onClick={this.triggerTimer}> {this.state.buttonLabel} </button>
        <button
          onClick={this.resetTimer}
          disabled={this.state.resetbuttondisabled}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default StopWatch;
