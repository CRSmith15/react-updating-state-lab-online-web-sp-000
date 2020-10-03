// Code DigitalClicker Component Here
import React, { Component } from 'react';

export default class DigitalClicker extends Component {
  constructor() {
    super();
    this.state = {timesClicked: 0}
  }

  handleClick = () => {
    this.setState(previousState => {
      return {
        timesClicked: previousState.count + 1
      }
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click here!</button>
      </div>
    )
  }
}
