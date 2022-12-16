import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

 // isEven = () => {
   // const {isEvenNum} = this.state
    //this.setState(() => ({
     // count % 2 === 0
  //}))
//}

  onIncrement = () => {
    this.setState(prevState => ({
      count: parseInt(prevState.count) + (Math.ceil(Math.random)* parseInt(100)),
    }))
  }

  render() {
    const {count} = this.state
    const isEvenNum = parseInt(count) % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="count-text">Count {count}</h1>
          <div className="showing-text">
             <p className="para">Count is {isEvenNum} </p>
            <button type="button" className="button" onClick={this.onIncrement}>
            Increment
            </button>
          </div>
          <p className="stared-para">
            *Increase by Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
