import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {input: ''}

  changeInput = event => {
    this.setState({input: event.target.value})
  }

  render() {
    const {input} = this.state

    return (
      <div className="main-container">
        <div className="sub-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="input1" className="para">
            Enter the phrase
          </label>
          <input
            id="input1"
            type="text"
            value={input}
            onChange={this.changeInput}
            className="input"
          />
          <p className="para para1">No.of letters: {input.length}</p>
        </div>
        <img
          className="image"
          alt="letters calculator"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
        />
      </div>
    )
  }
}

export default LettersCalculator
