// Write your code here

import './index.css'

import {Component} from 'react'

class EvenOddApp extends Component {
  state = {counter: 0}

  btnIncrease = () => {
    const randomNum = () => Math.floor(Math.random() * 100)

    this.setState(oldState => ({counter: oldState.counter + randomNum()}))
  }

  render() {
    const {counter} = this.state
    const value = counter % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Count {counter}</h1>
          <p className="describe">Count is {value}</p>
          <button type="button" className="btn" onClick={this.btnIncrease}>
            Increment
          </button>
          <p className="term">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
